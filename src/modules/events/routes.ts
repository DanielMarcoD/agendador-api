import type { FastifyInstance } from 'fastify'
import { prisma } from '../../plugins/prisma'
import { createEventSchema, listQuerySchema, updateEventSchema, idParamSchema, shareEventSchema, updateParticipantSchema } from './schemas'
import { generateRecurringEventsForPeriod } from './recurrence'

export async function eventsRoutes(app: FastifyInstance) {
  const auth = (req: any, _res: any, next: any) => { try { req.jwtVerify(); next() } catch (e) { next(e) } }

  // Rota para buscar categorias disponíveis
  app.get('/events/categories', {
    schema: {
      tags: ['Events']
    }
  }, async () => {
    const categories = ['alerta', 'estudo', 'lembrete', 'reuniao', 'tarefa']
    return { categories }
  })

  app.post('/events', { 
    preHandler: auth,
    schema: {
      tags: ['Events']
    }
  }, async (req, reply) => {
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
        recurrence: data.recurrence
      }
    })

    // Adicionar participantes se fornecidos
    if (data.participants && data.participants.length > 0) {
      await prisma.eventParticipant.createMany({
        data: data.participants.map(p => ({
          eventId: event.id,
          userId: p.userId,
          role: p.role
        }))
      })
    }

    // Retornar evento com participantes
    const eventWithParticipants = await prisma.event.findUnique({
      where: { id: event.id },
      include: {
        EventParticipant: {
          include: {
            User: { select: { id: true, name: true, email: true } }
          }
        }
      }
    })

    return reply.code(201).send({ event: eventWithParticipants })
  })

  app.get('/events', { 
    preHandler: auth,
    schema: {
      tags: ['Events']
    }
  }, async (req, _reply) => {
    const userId = (req.user as any).sub as string
    const q = listQuerySchema.parse(req.query as any)
    const now = new Date()
    const defaultFrom = new Date(now); defaultFrom.setDate(now.getDate() - 7)
    const defaultTo = new Date(now); defaultTo.setDate(now.getDate() + 30)

    const from = q.from ? new Date(q.from) : defaultFrom
    const to = q.to ? new Date(q.to) : defaultTo

    // Buscar eventos onde o usuário é dono ou participante
    const allEvents = await prisma.event.findMany({
      where: {
        OR: [
          { ownerId: userId },
          { EventParticipant: { some: { userId } } }
        ],
        ...(q.category ? { category: q.category } : {})
      },
      include: {
        owner: { select: { id: true, name: true, email: true } },
        EventParticipant: {
          include: {
            User: { select: { id: true, name: true, email: true } }
          }
        }
      },
      orderBy: { startsAt: 'asc' }
    })

    const result = []

    for (const event of allEvents) {
      // Se o evento é recorrente e é evento pai, gerar apenas ocorrências virtuais
      if (event.recurrence !== 'NONE' && !event.parentEventId) {
        const virtualEvents = generateRecurringEventsForPeriod(
          {
            id: event.id,
            title: event.title,
            description: event.description,
            category: event.category,
            startsAt: event.startsAt,
            endsAt: event.endsAt,
            recurrence: event.recurrence,
            ownerId: event.ownerId
          },
          from,
          to
        )

        // Adicionar eventos virtuais com informações completas
        for (const virtualEvent of virtualEvents) {
          result.push({
            ...virtualEvent,
            owner: event.owner,
            EventParticipant: event.EventParticipant,
            createdAt: event.createdAt
          })
        }
      }
      // Se é evento único (não recorrente) ou evento filho, incluir normalmente
      else if (event.recurrence === 'NONE') {
        // Verificar se está no período solicitado
        if (event.startsAt >= from && event.startsAt <= to) {
          result.push(event)
        }
      }
    }

    // Filtrar e ordenar resultado final
    const events = result
      .filter(event => event.startsAt >= from && event.startsAt <= to)
      .sort((a, b) => a.startsAt.getTime() - b.startsAt.getTime())

    return { events }
  })

  app.get('/events/:id', { 
    preHandler: auth,
    schema: {
      tags: ['Events']
    }
  }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    
    // Verificar se é um evento virtual (contém hífen)
    const isVirtual = id.includes('-')
    let actualEventId = id
    
    if (isVirtual) {
      // Extrair o ID do evento pai
      const parts = id.split('-')
      actualEventId = parts.slice(0, -1).join('-')
    }
    
    const event = await prisma.event.findUnique({ 
      where: { id: actualEventId },
      include: {
        owner: { select: { id: true, name: true, email: true } },
        EventParticipant: {
          include: {
            User: { select: { id: true, name: true, email: true } }
          }
        }
      }
    })
    
    if (!event) return reply.code(404).send({ message: 'Not found' })
    
    // Verificar acesso (dono ou participante)
    const hasAccess = event.ownerId === userId || 
                     event.EventParticipant.some(p => p.userId === userId)
    
    if (!hasAccess) return reply.code(403).send({ message: 'Forbidden' })
    
    // Se for evento virtual, gerar a versão virtual
    if (isVirtual) {
      const parts = id.split('-')
      const lastPart = parts[parts.length - 1]
      const occurrenceNum = lastPart ? parseInt(lastPart) : 0
      const duration = event.endsAt.getTime() - event.startsAt.getTime()
      let eventDate = new Date(event.startsAt)
      
      // Calcular a data da ocorrência
      for (let i = 0; i < occurrenceNum; i++) {
        switch (event.recurrence) {
          case 'DAILY':
            eventDate.setDate(eventDate.getDate() + 1)
            break
          case 'WEEKLY':
            eventDate.setDate(eventDate.getDate() + 7)
            break
          case 'MONTHLY':
            eventDate.setMonth(eventDate.getMonth() + 1)
            break
        }
      }
      
      return {
        ...event,
        id: id, // Manter o ID virtual
        startsAt: eventDate,
        endsAt: new Date(eventDate.getTime() + duration),
        parentEventId: actualEventId,
        isVirtual: true
      }
    }
    
    return event
  })

  app.patch('/events/:id', { preHandler: auth }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    const patch = updateEventSchema.parse(req.body)
    
    // Verificar se é um evento virtual (contém hífen)
    const isVirtual = id.includes('-')
    const actualEventId = isVirtual ? id.split('-').slice(0, -1).join('-') : id
    
    const current = await prisma.event.findUnique({ 
      where: { id: actualEventId },
      include: {
        EventParticipant: true
      }
    })
    
    if (!current) return reply.code(404).send({ message: 'Not found' })
    
    // Verificar permissões: dono ou participante com role EDITOR
    const hasEditPermission = current.ownerId === userId || 
      current.EventParticipant.some(p => p.userId === userId && p.role === 'EDITOR')
    
    if (!hasEditPermission) return reply.code(403).send({ message: 'Forbidden' })

    const startsAt = patch.startsAt ? new Date(patch.startsAt) : current.startsAt
    const endsAt = patch.endsAt ? new Date(patch.endsAt) : current.endsAt
    if (endsAt.getTime() <= startsAt.getTime()) return reply.code(400).send({ message: 'endsAt must be greater than startsAt' })

    const event = await prisma.event.update({
      where: { id: actualEventId },
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

  app.put('/events/:id', { 
    preHandler: auth,
    schema: {
      tags: ['Events']
    }
  }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    const data = createEventSchema.parse(req.body)
    
    // Verificar se é um evento virtual (contém hífen)
    const isVirtual = id.includes('-')
    const actualEventId = isVirtual ? id.split('-').slice(0, -1).join('-') : id
    
    const current = await prisma.event.findUnique({ 
      where: { id: actualEventId },
      include: {
        EventParticipant: true
      }
    })
    
    if (!current) return reply.code(404).send({ message: 'Not found' })
    
    // Verificar permissões: dono ou participante com role EDITOR
    const hasEditPermission = current.ownerId === userId || 
      current.EventParticipant.some(p => p.userId === userId && p.role === 'EDITOR')
    
    if (!hasEditPermission) return reply.code(403).send({ message: 'Forbidden' })

    const event = await prisma.event.update({
      where: { id: actualEventId },
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

  app.delete('/events/:id', { 
    preHandler: auth,
    schema: {
      tags: ['Events'],
      summary: 'Delete event',
      description: 'Delete an existing event',
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' }
        },
        required: ['id']
      },
      response: {
        200: {
          description: 'Event deleted successfully',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        204: {
          description: 'Event deleted successfully (no content)'
        },
        400: {
          description: 'Bad request',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        401: {
          description: 'Unauthorized',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        403: {
          description: 'Forbidden',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        },
        404: {
          description: 'Event not found',
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    }
  }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    const q = req.query as { deleteSeries?: string }
    
    // Verificar se é um evento virtual (contém hífen)
    const isVirtual = id.includes('-')
    let actualEventId = id
    
    if (isVirtual) {
      // Extrair o ID do evento pai
      const parts = id.split('-')
      actualEventId = parts.slice(0, -1).join('-')
    }
    
    const current = await prisma.event.findUnique({ 
      where: { id: actualEventId },
      include: {
        EventParticipant: true
      }
    })
    
    if (!current) return reply.code(404).send({ message: 'Not found' })
    
    // Para deletar, apenas o dono pode (não participantes)
    if (current.ownerId !== userId) return reply.code(403).send({ message: 'Forbidden' })

    // Para eventos virtuais, sempre verificar o parâmetro deleteSeries
    if (isVirtual) {
      if (q.deleteSeries === 'true') {
        // Deletar toda a série (evento pai)
        await prisma.event.delete({ where: { id: actualEventId } })
      } else {
        // Para eventos virtuais, não podemos deletar apenas uma ocorrência
        // Retornar erro pedindo para especificar se quer deletar toda a série
        return reply.code(400).send({ 
          message: 'Cannot delete single virtual event occurrence. Use deleteSeries=true to delete entire series.' 
        })
      }
    } else {
      // Para eventos físicos normais
      if (q.deleteSeries === 'true' && current.recurrence !== 'NONE') {
        // Deletar toda a série recorrente
        await prisma.event.delete({ where: { id: actualEventId } })
      } else {
        // Deletar apenas este evento
        await prisma.event.delete({ where: { id: actualEventId } })
      }
    }
    
    return reply.code(204).send()
  })

  // Rota para obter informações de recorrência de um evento
  app.get('/events/:id/recurrence-info', { preHandler: auth }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    
    // Verificar se é um evento virtual (contém hífen)
    const isVirtual = id.includes('-')
    let actualEventId = id
    
    if (isVirtual) {
      // Extrair o ID do evento pai
      const parts = id.split('-')
      actualEventId = parts.slice(0, -1).join('-')
    }
    
    const event = await prisma.event.findUnique({ 
      where: { id: actualEventId },
      include: {
        EventParticipant: {
          include: {
            User: { select: { id: true, name: true, email: true } }
          }
        }
      }
    })
    
    if (!event) return reply.code(404).send({ message: 'Not found' })
    
    // Verificar acesso
    const hasAccess = event.ownerId === userId || 
                     event.EventParticipant.some(p => p.userId === userId)
    
    if (!hasAccess) return reply.code(403).send({ message: 'Forbidden' })

    return {
      isRecurring: event.recurrence !== 'NONE',
      isParent: event.recurrence !== 'NONE',
      seriesCount: 0, // Para eventos virtuais, não contamos filhos físicos
      recurrence: event.recurrence,
      parentEventId: event.parentEventId,
      isVirtual,
      actualEventId
    }
  })

  // Rotas para compartilhamento de eventos
  app.post('/events/:id/share', { 
    preHandler: auth,
    schema: {
      tags: ['Events']
    }
  }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { id } = idParamSchema.parse((req.params as any))
    const data = shareEventSchema.parse(req.body)
    
    // Verificar se é evento virtual e extrair ID real
    const isVirtual = id.includes('-')
    const actualEventId = isVirtual ? id.split('-').slice(0, -1).join('-') : id
    
    const event = await prisma.event.findUnique({ where: { id: actualEventId } })
    if (!event) return reply.code(404).send({ message: 'Event not found' })
    if (event.ownerId !== userId) return reply.code(403).send({ message: 'Only event owner can share' })

    // Verificar se os usuários existem
    const users = await prisma.user.findMany({
      where: { id: { in: data.userIds } }
    })

    if (users.length !== data.userIds.length) {
      return reply.code(400).send({ message: 'One or more users not found' })
    }

    // Adicionar participantes (ignorar duplicados)
    await prisma.eventParticipant.createMany({
      data: data.userIds.map(userId => ({
        eventId: actualEventId,
        userId,
        role: data.role
      })),
      skipDuplicates: true
    })

    return reply.code(200).send({ message: 'Event shared successfully' })
  })

  // Rota para buscar usuários (para compartilhamento)
  app.get('/users/search', { 
    preHandler: auth,
    schema: {
      tags: ['Users']
    }
  }, async (req, reply) => {
    const q = req.query as { search?: string }
    const search = q.search || ''

    const users = await prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } }
        ]
      },
      select: {
        id: true,
        name: true,
        email: true
      },
      take: 10 // Limitar resultados
    })

    return { users }
  })

  // Rota para obter um evento virtual específico
  app.get('/events/virtual/:parentId/:occurrence', { preHandler: auth }, async (req, reply) => {
    const userId = (req.user as any).sub as string
    const { parentId, occurrence } = req.params as { parentId: string; occurrence: string }
    
    // Buscar o evento pai
    const parentEvent = await prisma.event.findUnique({
      where: { id: parentId },
      include: {
        owner: { select: { id: true, name: true, email: true } },
        EventParticipant: {
          include: {
            User: { select: { id: true, name: true, email: true } }
          }
        }
      }
    })
    
    if (!parentEvent) {
      return reply.code(404).send({ message: 'Parent event not found' })
    }
    
    // Verificar acesso
    const hasAccess = parentEvent.ownerId === userId || 
                     parentEvent.EventParticipant.some(p => p.userId === userId)
    
    if (!hasAccess) {
      return reply.code(403).send({ message: 'Access denied' })
    }
    
    if (parentEvent.recurrence === 'NONE') {
      return reply.code(400).send({ message: 'Event is not recurring' })
    }
    
    // Gerar o evento virtual específico
    const occurrenceNum = parseInt(occurrence)
    const duration = parentEvent.endsAt.getTime() - parentEvent.startsAt.getTime()
    let eventDate = new Date(parentEvent.startsAt)
    
    // Calcular a data da ocorrência
    for (let i = 0; i < occurrenceNum; i++) {
      switch (parentEvent.recurrence) {
        case 'DAILY':
          eventDate.setDate(eventDate.getDate() + 1)
          break
        case 'WEEKLY':
          eventDate.setDate(eventDate.getDate() + 7)
          break
        case 'MONTHLY':
          eventDate.setMonth(eventDate.getMonth() + 1)
          break
      }
    }
    
    const virtualEvent = {
      id: `${parentId}-${occurrence}`,
      title: parentEvent.title,
      description: parentEvent.description,
      category: parentEvent.category,
      startsAt: eventDate,
      endsAt: new Date(eventDate.getTime() + duration),
      recurrence: 'NONE' as const,
      ownerId: parentEvent.ownerId,
      owner: parentEvent.owner,
      parentEventId: parentId,
      isVirtual: true,
      createdAt: parentEvent.createdAt,
      EventParticipant: parentEvent.EventParticipant
    }
    
    return virtualEvent
  })
}
