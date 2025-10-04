import 'dotenv/config'
import { z } from 'zod'

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3333),
  JWT_ACCESS_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),
  ACCESS_TOKEN_TTL: z.string().default('15m'),
  REFRESH_TOKEN_TTL: z.string().default('7d'),
  JWT_ISSUER: z.string().default('planora-api'),
  JWT_AUDIENCE: z.string().default('planora-web'),
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.coerce.number().default(5432),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string(),
  DATABASE_URL: z.string().optional()
})

const parsed = EnvSchema.safeParse(process.env)
if (!parsed.success) {
  console.error(parsed.error.flatten().fieldErrors)
  process.exit(1)
}

export const env = (() => {
  const e = parsed.data as {
    NODE_ENV: 'development' | 'test' | 'production'
    PORT: number
    JWT_ACCESS_SECRET: string
    JWT_REFRESH_SECRET: string
    ACCESS_TOKEN_TTL: string
    REFRESH_TOKEN_TTL: string
    JWT_ISSUER: string
    JWT_AUDIENCE: string
    DB_HOST: string
    DB_PORT: number
    DB_USER: string
    DB_PASS: string
    DB_NAME: string
    DATABASE_URL?: string
  }
  if (!e.DATABASE_URL) {
    const pass = encodeURIComponent(e.DB_PASS)
    e.DATABASE_URL = `postgresql://${e.DB_USER}:${pass}@${e.DB_HOST}:${e.DB_PORT}/${e.DB_NAME}?schema=public`
  }
  return e
})()
