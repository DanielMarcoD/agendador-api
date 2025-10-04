# Agendador API

API REST para sistema de agendamento com suporte a eventos recorrentes, autenticação JWT/RSA e compartilhamento de eventos.

## Início Rápido

### Pré-requisitos
- Node.js >= 20.0.0
- Docker e Docker Compose
- Git

### Instalação e Execução (Método Rápido)

```bash
# Clone o repositório
git clone https://github.com/DanielMarcoD/agendador-api.git
cd agendador-api

# Instale dependências
npm install

# Configure variáveis de ambiente (opcional - já tem defaults)
cp .env.example .env

# Inicie tudo com um comando (banco + migrações + servidor)
npm run dev:up
```

O script `dev:up` fará automaticamente:
1. Subir o PostgreSQL via Docker
2. Aguardar o banco ficar pronto
3. Executar migrações do Prisma
4. Iniciar o servidor de desenvolvimento

**API estará disponível em:** `http://localhost:3333`

### Comandos Alternativos

Se preferir executar manualmente:

```bash
# Subir apenas o banco
npm run db:up

# Executar migrações
npm run prisma:deploy

# Iniciar servidor
npm run dev
```

## Scripts Disponíveis

### Desenvolvimento
- `npm run dev` - Servidor de desenvolvimento (watch mode)
- `npm run dev:up` - **Comando completo**: banco + migrações + servidor
- `npm run dev:down` - Para todos os serviços

### Banco de Dados
- `npm run db:up` - Sobe PostgreSQL via Docker
- `npm run db:down` - Para e remove containers
- `npm run db:restart` - Reinicia o banco
- `npm run db:reset` - **CUIDADO**: Reseta banco + dados
- `npm run db:logs` - Logs do PostgreSQL

### Prisma
- `npm run prisma:generate` - Gera Prisma Client
- `npm run prisma:deploy` - Executa migrações
- `npm run prisma:dev` - Migrações em desenvolvimento
- `npm run prisma:reset` - **CUIDADO**: Reseta schema + dados

### Produção
- `npm run build` - Build TypeScript
- `npm run start` - Servidor de produção
- `npm run lint` - ESLint

## Arquitetura da API

### Estrutura de Diretórios
```
src/
├── config/          # Configurações (env, etc.)
├── docs/            # Schemas para documentação
├── modules/         # Módulos da aplicação
│   ├── auth/        # Autenticação (JWT/RSA)
│   └── events/      # Eventos e recorrência
├── plugins/         # Plugins Fastify (Prisma, etc.)
├── security/        # Chaves RSA e criptografia
├── tests/           # Testes automatizados
└── server.ts        # Ponto de entrada
```

### Tecnologias
- **Framework**: Fastify (alta performance)
- **Banco**: PostgreSQL + Prisma ORM
- **Auth**: JWT + RSA (chaves assimétricas)
- **Validação**: Zod schemas
- **Containerização**: Docker Compose

## Autenticação

### Sistema JWT + RSA
- **Access Token**: JWT assinado com RSA (15min)
- **Refresh Token**: JWT de longa duração (7 dias)
- **Chaves**: Geradas automaticamente na primeira execução
- **Criptografia**: Dados sensíveis criptografados com AES

### Endpoints de Auth
```http
POST /auth/register          # Criar conta
POST /auth/login             # Login
POST /auth/refresh           # Renovar tokens
GET /auth/public-key         # Chave pública RSA
POST /auth/test-login        # Login de teste (dev)
GET /me                      # Perfil do usuário
```

## Sistema de Eventos

### Características
- **Eventos Únicos**: Data/hora específica
- **Eventos Recorrentes**: Diários, semanais, mensais
- **Eventos Virtuais**: Gerados dinamicamente para recorrências
- **Exclusão Individual**: Ocorrências específicas podem ser excluídas
- **Rastreamento de Exclusões**: Sistema avançado via tabela dedicada
- **Compartilhamento**: Múltiplos participantes com roles
- **Categorias**: alerta, estudo, lembrete, reunião, tarefa

### Endpoints de Eventos
```http
GET /events                    # Listar eventos (filtros: data, categoria)
POST /events                   # Criar evento
GET /events/:id               # Obter evento específico
PATCH /events/:id             # Atualização parcial
PUT /events/:id               # Atualização completa
DELETE /events/:id            # Deletar evento (?deleteSeries=true)

GET /events/:id/recurrence-info     # Info de recorrência
POST /events/:id/share             # Compartilhar evento
GET /events/virtual/:parentId/:occ  # Evento virtual específico

GET /events/categories        # Categorias disponíveis
GET /users/search            # Buscar usuários (compartilhamento)
```

### Eventos Recorrentes
```http
# Criar evento recorrente
POST /events
{
  "title": "Reunião Semanal",
  "category": "reuniao",
  "startsAt": "2024-01-15T10:00:00Z",
  "endsAt": "2024-01-15T11:00:00Z",
  "recurrence": "WEEKLY"
}

# Eventos virtuais são gerados automaticamente:
# - Evento pai: "abc123"
# - Ocorrência 1: "abc123-1" 
# - Ocorrência 2: "abc123-2"

# Deletar ocorrência específica (evento virtual)
DELETE /events/abc123-2
# Cria registro em DeletedEventOccurrence para filtrar futuramente

# Deletar série completa
DELETE /events/abc123?deleteSeries=true
```

### Compartilhamento
```http
POST /events/:id/share
{
  "userIds": ["user1", "user2"],
  "role": "VIEWER" | "EDITOR"
}
```

**Permissões:**
- **OWNER**: Pode editar, deletar, compartilhar
- **EDITOR**: Pode editar conteúdo
- **VIEWER**: Apenas visualizar

### Sistema de Exclusão Avançado

O sistema suporta exclusão granular de eventos recorrentes:

**Exclusão de Evento Único:**
```http
DELETE /events/unique-event-id
# Remove completamente o evento
```

**Exclusão de Evento Recorrente - Série Completa:**
```http
DELETE /events/parent-event-id?deleteSeries=true
# Remove o evento pai e todas ocorrências futuras
```

**Exclusão de Evento Recorrente - Ocorrência Específica:**
```http
DELETE /events/parent-event-id-occurrence-number
# Exemplo: DELETE /events/abc123-3
# Cria registro em DeletedEventOccurrence
# Ocorrência específica não aparecerá mais nas listagens
```

**Funcionamento Interno:**
1. **Eventos Virtuais**: Identificados pelo padrão `parentId-occurrenceNumber`
2. **Registro de Exclusão**: Salvo na tabela `DeletedEventOccurrence`
3. **Filtragem Automática**: Sistema filtra ocorrências excluídas ao gerar eventos virtuais
4. **Tolerância de Tempo**: Comparação com margem de 1 minuto para lidar com precisão de horários

## Banco de Dados

### Schema Principal
```sql
-- Usuários
User {
  id          String   @id @default(cuid())
  name        String
  email       String   @unique
  password    String
  createdAt   DateTime @default(now())
}

-- Eventos
Event {
  id            String      @id @default(cuid())
  title         String
  description   String?
  category      Category
  startsAt      DateTime
  endsAt        DateTime
  recurrence    Recurrence  @default(NONE)
  ownerId       String
  parentEventId String?     -- Para eventos filhos
  createdAt     DateTime    @default(now())
  
  -- Relacionamentos
  owner         User                @relation(fields: [ownerId])
  participants  EventParticipant[]
}

-- Participantes (compartilhamento)
EventParticipant {
  eventId   String
  userId    String
  role      ParticipantRole
  
  @@id([eventId, userId])
}

-- Ocorrências excluídas (para eventos recorrentes)
DeletedEventOccurrence {
  id              String   @id @default(cuid())
  parentEventId   String   -- ID do evento pai (recorrente)
  occurrenceDate  DateTime -- Data específica da ocorrência excluída
  createdAt       DateTime @default(now())
  
  -- Relacionamento
  parentEvent Event @relation(fields: [parentEventId])
  
  @@unique([parentEventId, occurrenceDate])
}
```

### Enums
```sql
enum Category {
  alerta, estudo, lembrete, reuniao, tarefa
}

enum Recurrence {
  NONE, DAILY, WEEKLY, MONTHLY
}

enum ParticipantRole {
  VIEWER, EDITOR
}
```

## Configuração Avançada

### Variáveis de Ambiente
```bash
# .env
DATABASE_URL="postgresql://user:pass@localhost:5432/agendador"
JWT_SECRET_KEY="sua-chave-secreta"
NODE_ENV="development"
PORT=3333

# RSA (geradas automaticamente)
RSA_PRIVATE_KEY_PATH="./keys/private.pem"
RSA_PUBLIC_KEY_PATH="./keys/public.pem"
```

### Docker Compose
```yaml
# docker-compose.yml
services:
  db:
    image: postgres:16-alpine
    container_name: agendador-db
    environment:
      POSTGRES_USER: agendador
      POSTGRES_PASSWORD: dev123
      POSTGRES_DB: agendador
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
```

## Testes e Desenvolvimento

### Executar Testes
```bash
npm run test          # Testes unitários
npm run test:watch    # Modo watch
```

### Exemplo de Uso
```javascript
// Criar evento recorrente
const response = await fetch('http://localhost:3333/events', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + accessToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Daily Standup',
    category: 'reuniao',
    startsAt: '2024-01-15T09:00:00Z',
    endsAt: '2024-01-15T09:30:00Z',
    recurrence: 'DAILY'
  })
})

// Listar eventos de uma semana
const events = await fetch(
  'http://localhost:3333/events?from=2024-01-15&to=2024-01-22',
  { headers: { 'Authorization': 'Bearer ' + accessToken } }
)
```

## Solução de Problemas

### Problemas Comuns

**1. Erro de conexão com banco:**
```bash
npm run db:up
npm run db:logs  # Verificar logs
```

**2. Erro nas migrações:**
```bash
npm run db:reset  # CUIDADO: Apaga dados!
```

**3. Chaves RSA não geradas:**
```bash
# As chaves são geradas automaticamente no primeiro start
# Se houver problemas, delete a pasta keys/ e reinicie
rm -rf keys/
npm run dev
```

**4. Port 3333 ocupado:**
```bash
# Mudar porta no .env
PORT=3334
```

### Logs e Debug
```bash
# Logs do banco
npm run db:logs

# Debug do servidor (modo verbose)
DEBUG=* npm run dev

# Verificar containers
docker ps
docker logs agendador-db
```
