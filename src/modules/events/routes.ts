import type { FastifyInstance } from 'fastify'
import { prisma } from '../../plugins/prisma'
import { createEventSchema, listQuerySchema, updateEventSchema, idParamSchema } from './schemas'

export async function eventsRoutes(app: FastifyInstance) {
  const auth = (req: any, _res: any, next: any) => { try { req.jwtVerify(); next() } catch (e) { next(e) } }

  // Rota para buscar categorias disponíveis
  app.get('/events/categories', async () => {
    const categories = ['alerta', 'estudo', 'lembrete', 'reuniao', 'tarefa']
    return { categories }
  })

  app.post('/events', { preHandler: auth }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const data = createEventSchema.parse(req.body)
    const event = await prisma.event.create({
      data: {
        ownerId: userId,
        title: data.title,
        description: data.description ?? null,
        category: data.category,
        startsAt: new Date(data.startsAt),
        endsAt: new Date(data.endsAt),
        recurrence: null
      }
    })
    return reply.code(201).send({ event })
  })

  app.get('/events', { preHandler: auth }, async (req, _reply) => {
    const userId = (req.user as any).sub as string
    const q = listQuerySchema.parse(req.query as any)
    const now = new Date()
    const defaultFrom = new Date(now); defaultFrom.setDate(now.getDate() - 7)
    const defaultTo = new Date(now); defaultTo.setDate(now.getDate() + 30)

    const from = q.from ? new Date(q.from) : defaultFrom
    const to = q.to ? new Date(q.to) : defaultTo

    const events = await prisma.event.findMany({
      where: {
        ownerId: userId,
        startsAt: { gte: from },
        endsAt: { lte: to },
        ...(q.category ? { category: q.category } : {})
      },
      orderBy: { startsAt: 'asc' }
    })
    return { events }
  })

  app.get('/events/:id', { preHandler: auth }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    const event = await prisma.event.findUnique({ where: { id } })
    if (!event) return reply.code(404).send({ message: 'Not found' })
    if (event.ownerId !== userId) return reply.code(403).send({ message: 'Forbidden' })
    return event
  })

  app.patch('/events/:id', { preHandler: auth }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    const patch = updateEventSchema.parse(req.body)
    const current = await prisma.event.findUnique({ where: { id } })
    if (!current) return reply.code(404).send({ message: 'Not found' })
    if (current.ownerId !== userId) return reply.code(403).send({ message: 'Forbidden' })

    const startsAt = patch.startsAt ? new Date(patch.startsAt) : current.startsAt
    const endsAt = patch.endsAt ? new Date(patch.endsAt) : current.endsAt
    if (endsAt.getTime() <= startsAt.getTime()) return reply.code(400).send({ message: 'endsAt must be greater than startsAt' })

    const event = await prisma.event.update({
      where: { id },
      data: {
        title: patch.title ?? current.title,
        description: patch.description ?? current.description,
        category: patch.category ?? current.category,
        startsAt,
        endsAt
      }
    })
    return { event }
  })

  app.put('/events/:id', { preHandler: auth }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    const data = createEventSchema.parse(req.body)
    const current = await prisma.event.findUnique({ where: { id } })
    if (!current) return reply.code(404).send({ message: 'Not found' })
    if (current.ownerId !== userId) return reply.code(403).send({ message: 'Forbidden' })

    const event = await prisma.event.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description ?? null,
        category: data.category,
        startsAt: new Date(data.startsAt),
        endsAt: new Date(data.endsAt)
      }
    })
    return { event }
  })

  app.delete('/events/:id', { preHandler: auth }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    const current = await prisma.event.findUnique({ where: { id } })
    if (!current) return reply.code(404).send({ message: 'Not found' })
    if (current.ownerId !== userId) return reply.code(403).send({ message: 'Forbidden' })
    await prisma.event.delete({ where: { id } })
    return reply.code(204).send()
  })
}
