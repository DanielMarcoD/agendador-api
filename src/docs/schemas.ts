// Todos os schemas com $id para o AJV.
// Enum de categoria alinhado ao que você usa nas rotas (pt-BR).
const CategoryEnum = ['alerta', 'estudo', 'lembrete', 'reuniao', 'tarefa'] as const
const RecurrenceEnum = ['NONE', 'DAILY', 'WEEKLY', 'MONTHLY'] as const // combine com Prisma

export const schemas = [
  {
    $id: 'User',
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string', nullable: true },
      email: { type: 'string', format: 'email' }
    },
    required: ['id','email']
  },
  {
    $id: 'Participant',
    type: 'object',
    properties: {
      user: { $ref: 'User#' },
      role: { type: 'string', enum: ['VIEWER','EDITOR'] }
    },
    required: ['user','role']
  },
  {
    $id: 'Event',
    type: 'object',
    properties: {
      id: { type: 'string' },
      seriesId: { type: 'string', nullable: true },
      title: { type: 'string' },
      description: { type: 'string', nullable: true },
      category: { type: 'string', enum: CategoryEnum as any },
      startsAt: { type: 'string', format: 'date-time' },
      endsAt: { type: 'string', format: 'date-time' },
      recurrence: { type: 'string', enum: RecurrenceEnum as any },
      isOccurrence: { type: 'boolean', nullable: true },
      ownerId: { type: 'string' },
      participants: { type: 'array', items: { $ref: 'Participant#' } }
    },
    required: ['id','title','category','startsAt','endsAt','recurrence','ownerId']
  },
  {
    $id: 'CreateEventInput',
    type: 'object',
    required: ['title','category','startsAt','endsAt'],
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      category: { type: 'string', enum: CategoryEnum as any },
      startsAt: { type: 'string', format: 'date-time' },
      endsAt: { type: 'string', format: 'date-time' },
      recurrence: { type: 'string', enum: RecurrenceEnum as any, default: 'NONE' },
      participants: {
        type: 'array',
        items: {
          type: 'object',
          required: ['userId'],
          properties: {
            userId: { type: 'string' },
            role: { type: 'string', enum: ['VIEWER','EDITOR'], default: 'VIEWER' }
          }
        }
      }
    }
  },
  {
    $id: 'UpdateEventInput',
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      category: { type: 'string', enum: CategoryEnum as any },
      startsAt: { type: 'string', format: 'date-time' },
      endsAt: { type: 'string', format: 'date-time' },
      recurrence: { type: 'string', enum: RecurrenceEnum as any }
    },
    additionalProperties: false
  },
  {
    $id: 'ShareEventInput',
    type: 'object',
    required: ['userIds'],
    properties: {
      userIds: { type: 'array', items: { type: 'string' } },
      role: { type: 'string', enum: ['VIEWER','EDITOR'], default: 'VIEWER' }
    }
  },
  {
    $id: 'EventDetailResponse',
    type: 'object',
    properties: { event: { $ref: 'Event#' } },
    required: ['event']
  },
  {
    $id: 'EventListResponse',
    type: 'object',
    properties: { events: { type: 'array', items: { $ref: 'Event#' } } },
    required: ['events']
  },
  {
    $id: 'ParticipantsResponse',
    type: 'object',
    properties: {
      participants: { type: 'array', items: { $ref: 'Participant#' } }
    },
    required: ['participants']
  },
  {
    $id: 'ErrorResponse',
    type: 'object',
    properties: { message: { type: 'string' } },
    required: ['message']
  },
  {
    $id: 'HealthResponse',
    type: 'object',
    properties: { 
      ok: { type: 'boolean' }, 
      env: { type: 'string' } 
    },
    required: ['ok','env']
  },
  {
    $id: 'AuthResponse',
    type: 'object',
    properties: {
      accessToken: { type: 'string' },
      refreshToken: { type: 'string' },
      user: { $ref: 'User#' }
    },
    required: ['accessToken','refreshToken','user']
  },
  {
    $id: 'PublicKeyResponse',
    type: 'object',
    properties: {
      kid: { type: 'string' },
      alg: { type: 'string' },
      pem: { type: 'string' }
    },
    required: ['kid','alg','pem']
  }
] as const
