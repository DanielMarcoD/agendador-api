import fp from 'fastify-plugin'
import type { FastifyInstance } from 'fastify'

export default fp(async function (fastify: FastifyInstance) {
  // Registrar Swagger
  await fastify.register(import('@fastify/swagger'), {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'Agendador API',
        description: 'API para Sistema de Agendamento de Tarefas - Atomize',
        version: '1.0.0',
        contact: {
          name: 'Atomize Team',
          email: 'ppedrocteles@gmail.com'
        }
      },
      servers: [
        {
          url: 'http://localhost:3333',
          description: 'Servidor de desenvolvimento'
        }
      ],
      tags: [
        { name: 'auth', description: 'Autenticação de usuários' },
        { name: 'events', description: 'Gestão de eventos' },
        { name: 'users', description: 'Gestão de usuários' },
        { name: 'health', description: 'Health check' }
      ],
      components: {
        securitySchemes: {
          Bearer: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            description: 'Token JWT para autenticação'
          }
        },
        schemas: {
          User: {
            type: 'object',
            properties: {
              id: { type: 'string', description: 'ID único do usuário' },
              name: { type: 'string', description: 'Nome completo' },
              email: { type: 'string', format: 'email', description: 'Email do usuário' },
              createdAt: { type: 'string', format: 'date-time' }
            }
          },
          Event: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              description: { type: 'string' },
              category: { 
                type: 'string', 
                enum: ['alerta', 'estudo', 'lembrete', 'reuniao', 'tarefa'] 
              },
              startsAt: { type: 'string', format: 'date-time' },
              endsAt: { type: 'string', format: 'date-time' },
              recurrence: { 
                type: 'string', 
                enum: ['NONE', 'DAILY', 'WEEKLY', 'MONTHLY'] 
              },
              ownerId: { type: 'string' },
              parentEventId: { type: 'string' },
              isVirtual: { type: 'boolean' },
              createdAt: { type: 'string', format: 'date-time' }
            }
          },
          CreateEventInput: {
            type: 'object',
            required: ['title', 'category', 'startsAt', 'endsAt'],
            properties: {
              title: { type: 'string', description: 'Título do evento' },
              description: { type: 'string', description: 'Descrição opcional' },
              category: { 
                type: 'string', 
                enum: ['alerta', 'estudo', 'lembrete', 'reuniao', 'tarefa'],
                description: 'Categoria do evento'
              },
              startsAt: { type: 'string', format: 'date-time' },
              endsAt: { type: 'string', format: 'date-time' },
              recurrence: { 
                type: 'string', 
                enum: ['NONE', 'DAILY', 'WEEKLY', 'MONTHLY'],
                default: 'NONE'
              },
              participants: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    userId: { type: 'string' },
                    role: { type: 'string', enum: ['VIEWER', 'EDITOR'], default: 'VIEWER' }
                  }
                }
              }
            }
          },
          LoginInput: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
              email: { type: 'string', format: 'email' },
              password: { type: 'string', minLength: 6 }
            }
          },
          RegisterInput: {
            type: 'object',
            required: ['name', 'email', 'password'],
            properties: {
              name: { type: 'string', minLength: 2 },
              email: { type: 'string', format: 'email' },
              password: { type: 'string', minLength: 6 }
            }
          },
          AuthResponse: {
            type: 'object',
            properties: {
              accessToken: { type: 'string' },
              refreshToken: { type: 'string' },
              user: { $ref: '#/components/schemas/User' }
            }
          },
          ErrorResponse: {
            type: 'object',
            properties: {
              message: { type: 'string' },
              code: { type: 'string' }
            }
          }
        }
      }
    }
  })

  // Registrar UI do Swagger
  await fastify.register(import('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
      defaultModelsExpandDepth: 1
    },
    staticCSP: true
  })
})
