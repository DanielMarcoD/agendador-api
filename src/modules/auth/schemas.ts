import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(1).optional(),
  nameEnc: z.string().min(1).optional(),
  email: z.string().email().optional(),
  emailEnc: z.string().min(1).optional(),
  passwordEnc: z.string().min(1),
  kid: z.string().min(1)
}).refine(data => (data.name || data.nameEnc) && (data.email || data.emailEnc), {
  message: "Nome e email (normais ou criptografados) devem ser fornecidos"
})

export const loginSchema = z.object({
  email: z.string().email().optional(),
  emailEnc: z.string().min(1).optional(),
  passwordEnc: z.string().min(1),
  kid: z.string().min(1)
}).refine(data => data.email || data.emailEnc, {
  message: "Email ou emailEnc deve ser fornecido"
})
