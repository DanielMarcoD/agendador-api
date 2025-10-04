import type { FastifyInstance } from 'fastify'

// Arquivo com documentação adicional dos schemas OpenAPI para endpoints específicos
export const swaggerRouteSchemas = {
  
  // Health Check
  healthCheck: {
    tags: ['health'],
    summary: 'Verificar saúde da aplicação',
    description: 'Endpoint para verificar se a API está funcionando corretamente',
    response: {
      200: {
        description: 'Aplicação funcionando normalmente',
        content: {
          'application/json': {
            schema: { $ref: 'HealthResponse#' },
            example: {
              ok: true,
              env: 'development'
            }
          }
        }
      }
    }
  },

  // Auth - Public Key
  getPublicKey: {
    tags: ['auth'],
    summary: 'Obter chave pública',
    description: 'Obtém a chave pública RSA para criptografia de dados sensíveis',
    response: {
      200: {
        description: 'Chave pública obtida com sucesso',
        content: {
          'application/json': {
            schema: { $ref: 'PublicKeyResponse#' },
            example: {
              kid: 'server-key-2025',
              alg: 'RSA-OAEP-256',
              pem: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...\n-----END PUBLIC KEY-----'
            }
          }
        }
      }
    }
  },

  // Auth - Register
  register: {
    tags: ['auth'],
    summary: 'Registrar novo usuário',
    description: `
Registra um novo usuário no sistema usando criptografia RSA.

**Importante**: Os dados sensíveis devem ser criptografados com a chave pública obtida em /auth/pubkey

**Exemplo de uso:**
1. GET /auth/pubkey para obter a chave pública
2. Criptografar name, email e password com a chave pública
3. Enviar dados criptografados com o kid correspondente
    `,
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: { $ref: 'RegisterInput#' },
          examples: {
            'dados-criptografados': {
              summary: 'Registro com dados criptografados',
              value: {
                nameEnc: 'encrypted_name_data...',
                emailEnc: 'encrypted_email_data...',
                passwordEnc: 'encrypted_password_data...',
                kid: 'server-key-2025'
              }
            },
            'dados-simples': {
              summary: 'Registro com dados simples (não recomendado em produção)',
              value: {
                name: 'João da Silva',
                email: 'joao@exemplo.com',
                passwordEnc: 'encrypted_password_data...',
                kid: 'server-key-2025'
              }
            }
          }
        }
      }
    },
    response: {
      201: {
        description: 'Usuário registrado com sucesso',
        content: {
          'application/json': {
            schema: { $ref: 'AuthResponse#' }
          }
        }
      },
      400: {
        description: 'Dados inválidos ou usuário já existe',
        content: {
          'application/json': {
            schema: { $ref: 'ErrorResponse#' },
            example: {
              message: 'Email já está em uso'
            }
          }
        }
      }
    }
  },

  // Auth - Login
  login: {
    tags: ['auth'],
    summary: 'Fazer login',
    description: `
Autentica um usuário existente usando criptografia RSA.

**Processo:**
1. Obter chave pública em /auth/pubkey
2. Criptografar email e senha
3. Enviar dados criptografados
4. Receber tokens JWT (access e refresh)
    `,
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: { $ref: 'LoginInput#' },
          examples: {
            'login-criptografado': {
              summary: 'Login com dados criptografados',
              value: {
                emailEnc: 'encrypted_email_data...',
                passwordEnc: 'encrypted_password_data...',
                kid: 'server-key-2025'
              }
            },
            'email-simples': {
              summary: 'Email simples + senha criptografada',
              value: {
                email: 'usuario@exemplo.com',
                passwordEnc: 'encrypted_password_data...',
                kid: 'server-key-2025'
              }
            }
          }
        }
      }
    },
    response: {
      200: {
        description: 'Login realizado com sucesso',
        content: {
          'application/json': {
            schema: { $ref: 'AuthResponse#' },
            example: {
              accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
              refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
              user: {
                id: 'user123',
                name: 'João da Silva',
                email: 'joao@exemplo.com',
                createdAt: '2025-10-03T12:00:00.000Z'
              }
            }
          }
        }
      },
      400: {
        description: 'Dados inválidos',
        content: {
          'application/json': {
            schema: { $ref: 'ErrorResponse#' }
          }
        }
      },
      401: {
        description: 'Credenciais inválidas',
        content: {
          'application/json': {
            schema: { $ref: 'ErrorResponse#' }
          }
        }
      }
    }
  },

  // Auth - Test Login (for development)
  testLogin: {
    tags: ['auth'],
    summary: 'Login de teste (desenvolvimento)',
    description: `
**APENAS PARA DESENVOLVIMENTO**

Permite login com credenciais em texto simples, sem criptografia.
Não deve ser usado em produção.
    `,
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: { $ref: 'TestLoginInput#' },
          example: {
            email: 'teste@exemplo.com',
            password: 'minhasenha123'
          }
        }
      }
    },
    response: {
      200: {
        description: 'Login de teste realizado com sucesso',
        content: {
          'application/json': {
            schema: { $ref: 'AuthResponse#' }
          }
        }
      }
    }
  },

  // Auth - Refresh Token
  refreshToken: {
    tags: ['auth'],
    summary: 'Renovar token de acesso',
    description: 'Gera um novo token de acesso usando um refresh token válido',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: { $ref: 'RefreshTokenInput#' },
          example: {
            refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
          }
        }
      }
    },
    response: {
      200: {
        description: 'Token renovado com sucesso',
        content: {
          'application/json': {
            schema: { $ref: 'AuthResponse#' }
          }
        }
      }
    }
  },

  // User Profile
  getUserProfile: {
    tags: ['auth'],
    summary: 'Obter perfil do usuário',
    description: 'Obtém os dados do usuário autenticado',
    security: [{ Bearer: [] }],
    response: {
      200: {
        description: 'Perfil do usuário',
        content: {
          'application/json': {
            schema: { $ref: 'User#' }
          }
        }
      },
      401: {
        description: 'Token inválido ou expirado',
        content: {
          'application/json': {
            schema: { $ref: 'ErrorResponse#' }
          }
        }
      }
    }
  },

  // Events - Categories
  getCategories: {
    tags: ['events'],
    summary: 'Listar categorias de eventos',
    description: 'Obtém todas as categorias disponíveis para eventos',
    response: {
      200: {
        description: 'Lista de categorias',
        content: {
          'application/json': {
            schema: { $ref: 'CategoriesResponse#' },
            example: {
              categories: ['alerta', 'estudo', 'lembrete', 'reuniao', 'tarefa']
            }
          }
        }
      }
    }
  },

  // Events - Create
  createEvent: {
    tags: ['events'],
    summary: 'Criar novo evento',
    description: `
Cria um novo evento no sistema.

**Funcionalidades:**
- Suporte a recorrência (DAILY, WEEKLY, MONTHLY)
- Adicionar participantes no momento da criação
- Validação automática de datas (fim deve ser após início)
    `,
    security: [{ Bearer: [] }],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: { $ref: 'CreateEventInput#' },
          examples: {
            'evento-simples': {
              summary: 'Evento simples sem recorrência',
              value: {
                title: 'Reunião de Equipe',
                description: 'Discussão dos objetivos do trimestre',
                category: 'reuniao',
                startsAt: '2025-10-04T14:00:00.000Z',
                endsAt: '2025-10-04T15:30:00.000Z',
                recurrence: 'NONE'
              }
            },
            'evento-recorrente': {
              summary: 'Evento semanal com participantes',
              value: {
                title: 'Daily Standup',
                category: 'reuniao',
                startsAt: '2025-10-04T09:00:00.000Z',
                endsAt: '2025-10-04T09:30:00.000Z',
                recurrence: 'DAILY',
                participants: [
                  {
                    userId: 'user456',
                    role: 'VIEWER'
                  }
                ]
              }
            }
          }
        }
      }
    },
    response: {
      201: {
        description: 'Evento criado com sucesso',
        content: {
          'application/json': {
            schema: { $ref: 'EventResponse#' }
          }
        }
      }
    }
  },

  // Events - List
  listEvents: {
    tags: ['events'],
    summary: 'Listar eventos',
    description: `
Lista eventos do usuário autenticado (próprios e compartilhados).

**Filtros disponíveis:**
- Data inicial e final
- Categoria específica

**Comportamento padrão:**
- Sem filtros: eventos de 7 dias atrás até 30 dias à frente
- Inclui eventos recorrentes expandidos no período
    `,
    security: [{ Bearer: [] }],
    parameters: [
      {
        name: 'from',
        in: 'query',
        schema: { type: 'string', format: 'date-time' },
        description: 'Data inicial (ISO 8601)',
        example: '2025-10-01T00:00:00.000Z'
      },
      {
        name: 'to',
        in: 'query',
        schema: { type: 'string', format: 'date-time' },
        description: 'Data final (ISO 8601)',
        example: '2025-10-31T23:59:59.000Z'
      },
      {
        name: 'category',
        in: 'query',
        schema: { 
          type: 'string',
          enum: ['alerta', 'estudo', 'lembrete', 'reuniao', 'tarefa']
        },
        description: 'Filtrar por categoria'
      }
    ],
    response: {
      200: {
        description: 'Lista de eventos',
        content: {
          'application/json': {
            schema: { $ref: 'EventsListResponse#' }
          }
        }
      }
    }
  },

  // Events - Get by ID
  getEvent: {
    tags: ['events'],
    summary: 'Obter evento específico',
    description: 'Obtém detalhes completos de um evento específico',
    security: [{ Bearer: [] }],
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'string' },
        description: 'ID do evento',
        example: 'cloGhBmd60000cojc1vv7lgmf'
      }
    ],
    response: {
      200: {
        description: 'Detalhes do evento',
        content: {
          'application/json': {
            schema: { $ref: 'Event#' }
          }
        }
      },
      403: {
        description: 'Sem permissão para acessar este evento',
        content: {
          'application/json': {
            schema: { $ref: 'ErrorResponse#' }
          }
        }
      },
      404: {
        description: 'Evento não encontrado',
        content: {
          'application/json': {
            schema: { $ref: 'ErrorResponse#' }
          }
        }
      }
    }
  },

  // Events - Update (PATCH)
  updateEventPartial: {
    tags: ['events'],
    summary: 'Atualizar evento (parcial)',
    description: `
Atualiza campos específicos de um evento.

**Parâmetros de query:**
- \`updateSeries=true\`: Atualiza toda a série recorrente
- \`updateSeries=false\`: Atualiza apenas este evento (padrão)
    `,
    security: [{ Bearer: [] }],
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'string' },
        description: 'ID do evento'
      },
      {
        name: 'updateSeries',
        in: 'query',
        schema: { type: 'boolean', default: false },
        description: 'Atualizar toda a série recorrente'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: { $ref: 'UpdateEventInput#' }
        }
      }
    },
    response: {
      200: {
        description: 'Evento atualizado com sucesso',
        content: {
          'application/json': {
            schema: { $ref: 'EventResponse#' }
          }
        }
      }
    }
  },

  // Events - Delete
  deleteEvent: {
    tags: ['events'],
    summary: 'Deletar evento',
    description: `
Deleta um evento do sistema.

**Parâmetros de query:**
- \`deleteSeries=true\`: Deleta toda a série recorrente
- \`deleteSeries=false\`: Deleta apenas este evento (padrão)
    `,
    security: [{ Bearer: [] }],
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'string' },
        description: 'ID do evento'
      },
      {
        name: 'deleteSeries',
        in: 'query',
        schema: { type: 'boolean', default: false },
        description: 'Deletar toda a série recorrente'
      }
    ],
    response: {
      200: {
        description: 'Evento deletado com sucesso',
        content: {
          'application/json': {
            schema: { $ref: 'SuccessResponse#' }
          }
        }
      }
    }
  },

  // Events - Share
  shareEvent: {
    tags: ['events'],
    summary: 'Compartilhar evento',
    description: 'Compartilha um evento com outros usuários',
    security: [{ Bearer: [] }],
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        schema: { type: 'string' },
        description: 'ID do evento'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: { $ref: 'ShareEventInput#' },
          example: {
            userIds: ['user123', 'user456'],
            role: 'VIEWER'
          }
        }
      }
    },
    response: {
      200: {
        description: 'Evento compartilhado com sucesso',
        content: {
          'application/json': {
            schema: { $ref: 'SuccessResponse#' }
          }
        }
      }
    }
  },

  // Users - Search
  searchUsers: {
    tags: ['users'],
    summary: 'Buscar usuários',
    description: 'Busca usuários por nome ou email para compartilhamento',
    security: [{ Bearer: [] }],
    parameters: [
      {
        name: 'q',
        in: 'query',
        required: true,
        schema: { type: 'string' },
        description: 'Termo de busca (nome ou email)',
        example: 'joão'
      }
    ],
    response: {
      200: {
        description: 'Usuários encontrados',
        content: {
          'application/json': {
            schema: { $ref: 'UsersSearchResponse#' }
          }
        }
      }
    }
  }
}
