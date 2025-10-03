import type { FastifyInstance } from 'fastify'
import { prisma } from '../../plugins/prisma'
import { registerSchema, loginSchema } from './schemas'
import bcrypt from 'bcryptjs'
import { env } from '../../config/env'
import { decryptPassword } from './crypto'
import { kid as serverKid, publicKey } from '../../security/keys'

export async function authRoutes(app: FastifyInstance) {
  app.get('/auth/pubkey', async () => ({ kid: serverKid, alg: 'RSA-OAEP-256', pem: publicKey }))

  app.post('/auth/register', async (req, reply) => {
    try {
      const data = registerSchema.parse(req.body)
      if (data.kid !== serverKid) return reply.code(400).send({ message: 'Chave inválida' })
      
      let name: string
      try {
        name = data.nameEnc ? decryptPassword(data.nameEnc) : data.name!
      } catch (error) {
        return reply.code(400).send({ message: 'Erro ao processar dados do usuário' })
      }
      
      let email: string
      try {
        email = data.emailEnc ? decryptPassword(data.emailEnc) : data.email!
      } catch (error) {
        return reply.code(400).send({ message: 'Erro ao processar dados do usuário' })
      }
      
      const exists = await prisma.user.findUnique({ where: { email } })
      if (exists) return reply.code(409).send({ message: 'E-mail já em uso' })
      
      let password: string
      try {
        password = decryptPassword(data.passwordEnc)
      } catch (error) {
        return reply.code(400).send({ message: 'Erro ao processar dados do usuário' })
      }
      
      const passwordHash = await bcrypt.hash(password, 10)
      const user = await prisma.user.create({ data: { name, email, passwordHash } })
      return reply.code(201).send({ user: { id: user.id, name: user.name, email: user.email } })
    } catch (error) {
      console.error('Erro no registro:', error)
      return reply.code(500).send({ message: 'Erro interno do servidor' })
    }
  })

  app.post('/auth/login', async (req, reply) => {
    try {
      const data = loginSchema.parse(req.body)
      if (data.kid !== serverKid) return reply.code(400).send({ message: 'Chave inválida' })
      
      let email: string
      try {
        email = data.emailEnc ? decryptPassword(data.emailEnc) : data.email!
      } catch (error) {
        return reply.code(400).send({ message: 'Erro ao processar dados de login' })
      }
      
      const user = await prisma.user.findUnique({ where: { email } })
      if (!user) return reply.code(401).send({ message: 'Credenciais inválidas' })
      
      let password: string
      try {
        password = decryptPassword(data.passwordEnc)
      } catch (error) {
        return reply.code(400).send({ message: 'Erro ao processar dados de login' })
      }
      
      const ok = await bcrypt.compare(password, user.passwordHash)
      if (!ok) return reply.code(401).send({ message: 'Credenciais inválidas' })

      try {
        if (!app.jwt || typeof app.jwt.sign !== 'function') {
          console.error('Plugin JWT principal não está disponível')
          return reply.code(500).send({ message: 'Configuração de autenticação inválida' })
        }

        const accessToken = app.jwt.sign({ sub: user.id })
        
        let refreshToken = null
        try {
          if ((app as any).refresh && typeof (app as any).refresh.sign === 'function') {
            refreshToken = (app as any).refresh.sign({ sub: user.id })
          }
        } catch (refreshError: any) {
          console.warn('Erro ao gerar refresh token:', refreshError?.message || refreshError)
        }

        console.log('Tokens gerados com sucesso para usuário:', user.email)
        
        return reply.send({ 
          user: { id: user.id, name: user.name, email: user.email }, 
          accessToken,
          ...(refreshToken && { refreshToken })
        })
      } catch (tokenError) {
        console.error('Erro ao gerar tokens:', tokenError)
        return reply.code(500).send({ message: 'Erro ao gerar tokens de autenticação' })
      }
    } catch (error) {
      console.error('Erro no login:', error)
      return reply.code(500).send({ message: 'Erro interno do servidor' })
    }
  })

  app.post('/auth/refresh', async (req, reply) => {
    try {
      const { refreshToken } = req.body as { refreshToken: string }
      
      if (!refreshToken) {
        return reply.code(400).send({ message: 'Refresh token é obrigatório' })
      }

      // Verificar refresh token
      try {
        const decoded = (app as any).refresh.verify(refreshToken)
        const userId = decoded.sub as string
        
        // Verificar se usuário ainda existe
        const user = await prisma.user.findUnique({ 
          where: { id: userId },
          select: { id: true, name: true, email: true }
        })
        
        if (!user) {
          return reply.code(401).send({ message: 'Usuário não encontrado' })
        }

        // Gerar novos tokens
        const newAccessToken = app.jwt.sign({ sub: user.id })
        const newRefreshToken = (app as any).refresh.sign({ sub: user.id })

        return reply.send({
          user,
          accessToken: newAccessToken,
          refreshToken: newRefreshToken
        })
      } catch (error) {
        return reply.code(401).send({ message: 'Refresh token inválido ou expirado' })
      }
    } catch (error) {
      console.error('Erro no refresh token:', error)
      return reply.code(500).send({ message: 'Erro interno do servidor' })
    }
  })

  app.get('/me', {
    preHandler: (req, _res, next) => { try { req.jwtVerify(); next() } catch (e) { next(e as Error) } }
  }, async (req) => {
    const userId = (req.user as any).sub as string
    const user = await prisma.user.findUnique({ where: { id: userId }, select: { id: true, name: true, email: true } })
    return { user }
  })

  // Endpoint de teste simples para debug
  app.post('/auth/test-login', async (req, reply) => {
    try {
      const { email, password } = req.body as { email: string, password: string }
      
      const user = await prisma.user.findUnique({ where: { email } })
      if (!user) return reply.code(401).send({ message: 'Credenciais inválidas' })
      
      const ok = await bcrypt.compare(password, user.passwordHash)
      if (!ok) return reply.code(401).send({ message: 'Credenciais inválidas' })

      const accessToken = app.jwt.sign({ sub: user.id })
      
      let refreshToken = null
      try {
        if ((app as any).refresh && typeof (app as any).refresh.sign === 'function') {
          refreshToken = (app as any).refresh.sign({ sub: user.id })
        }
      } catch (refreshError: any) {
        console.warn('Erro ao gerar refresh token:', refreshError?.message || refreshError)
      }

      return { accessToken, refreshToken, user: { id: user.id, name: user.name, email: user.email } }
    } catch (error) {
      console.error('Erro no login de teste:', error)
      return reply.code(500).send({ message: 'Erro interno do servidor' })
    }
  })
}
