import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { env } from './config/env'
import { authRoutes } from './modules/auth/routes'
import { eventsRoutes } from './modules/events/routes'

const app = Fastify({ logger: true })

try {
  await app.register(cors, { 
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })


  await app.register(jwt, {
    secret: env.JWT_ACCESS_SECRET,
    sign: { 
      expiresIn: env.ACCESS_TOKEN_TTL,
      iss: env.JWT_ISSUER, 
      aud: env.JWT_AUDIENCE 
    },
    verify: { 
      allowedIss: env.JWT_ISSUER, 
      allowedAud: env.JWT_AUDIENCE 
    }
  })


  await app.register(jwt, {
    secret: env.JWT_REFRESH_SECRET,
    namespace: 'refresh',
    sign: { 
      expiresIn: env.REFRESH_TOKEN_TTL,
      iss: env.JWT_ISSUER, 
      aud: env.JWT_AUDIENCE 
    },
    verify: { 
      allowedIss: env.JWT_ISSUER, 
      allowedAud: env.JWT_AUDIENCE 
    }
  })

  console.log('Plugins JWT registrados com sucesso')
} catch (error) {
  console.error('Erro ao registrar plugins JWT:', error)
  process.exit(1)
}

app.get('/health', async () => ({ ok: true, env: env.NODE_ENV }))

await app.register(authRoutes)
await app.register(eventsRoutes)

app.listen({ port: env.PORT, host: '0.0.0.0' })
  .then(() => app.log.info(`API up on :${env.PORT}`))
  .catch((err) => { app.log.error(err); process.exit(1) })
