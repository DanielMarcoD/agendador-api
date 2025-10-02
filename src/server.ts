import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { env } from './config/env'

const app = Fastify({ logger: true })

await app.register(cors, { origin: true })

await app.register(jwt, {
  secret: env.JWT_ACCESS_SECRET,
  sign: { expiresIn: env.ACCESS_TOKEN_TTL },
  verify: {
    allowedIss: env.JWT_ISSUER,
    allowedAud: env.JWT_AUDIENCE
  }
})

await app.register(jwt, {
  secret: env.JWT_REFRESH_SECRET,
  namespace: 'refresh',
  sign: { expiresIn: env.REFRESH_TOKEN_TTL },
  verify: {
    allowedIss: env.JWT_ISSUER,
    allowedAud: env.JWT_AUDIENCE
  }
})

app.get('/health', async () => ({ ok: true, env: env.NODE_ENV }))

app.listen({ port: env.PORT, host: '0.0.0.0' })
  .then(() => app.log.info(`API up on :${env.PORT}`))
  .catch((err) => { app.log.error(err); process.exit(1) })
