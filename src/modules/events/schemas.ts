import { z } from 'zod'

export const categoryEnum = z.enum(['alerta','estudo','lembrete','reuniao','tarefa'])

const iso = z.string().refine((v) => !Number.isNaN(Date.parse(v)), { message: 'Invalid ISO date' })

export const createEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  category: categoryEnum,
  startsAt: iso,
  endsAt: iso
}).refine((d) => new Date(d.endsAt).getTime() > new Date(d.startsAt).getTime(), {
  message: 'endsAt must be greater than startsAt',
  path: ['endsAt']
})

export const updateEventSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  category: categoryEnum.optional(),
  startsAt: iso.optional(),
  endsAt: iso.optional()
}).refine((d) => {
  if (!d.startsAt || !d.endsAt) return true
  return new Date(d.endsAt).getTime() > new Date(d.startsAt).getTime()
}, { message: 'endsAt must be greater than startsAt', path: ['endsAt'] })

export const listQuerySchema = z.object({
  from: iso.optional(),
  to: iso.optional(),
  category: categoryEnum.optional()
})

export const idParamSchema = z.object({ id: z.string().min(1) })
