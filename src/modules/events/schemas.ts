import { z } from 'zod'

export const categoryEnum = z.enum(['alerta','estudo','lembrete','reuniao','tarefa'])
export const recurrenceEnum = z.enum(['NONE', 'DAILY', 'WEEKLY', 'MONTHLY'])
export const participantRoleEnum = z.enum(['VIEWER', 'EDITOR'])

const iso = z.string().refine((v) => !Number.isNaN(Date.parse(v)), { message: 'Invalid ISO date' })

export const createEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  category: categoryEnum,
  startsAt: iso,
  endsAt: iso,
  recurrence: recurrenceEnum.optional().default('NONE'),
  participants: z.array(z.object({
    userId: z.string(),
    role: participantRoleEnum.optional().default('VIEWER')
  })).optional().default([])
}).refine((d) => new Date(d.endsAt).getTime() > new Date(d.startsAt).getTime(), {
  message: 'endsAt must be greater than startsAt',
  path: ['endsAt']
})

export const updateEventSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  category: categoryEnum.optional(),
  startsAt: iso.optional(),
  endsAt: iso.optional(),
  recurrence: recurrenceEnum.optional()
}).refine((d) => {
  if (!d.startsAt || !d.endsAt) return true
  return new Date(d.endsAt).getTime() > new Date(d.startsAt).getTime()
}, { message: 'endsAt must be greater than startsAt', path: ['endsAt'] })

export const shareEventSchema = z.object({
  userIds: z.array(z.string().min(1)),
  role: participantRoleEnum.optional().default('VIEWER')
})

export const updateParticipantSchema = z.object({
  role: participantRoleEnum
})

export const listQuerySchema = z.object({
  from: iso.optional(),
  to: iso.optional(),
  category: categoryEnum.optional()
})

export const idParamSchema = z.object({ id: z.string().min(1) })
