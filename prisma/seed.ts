import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Criar usuário de exemplo
  const hashedPassword = await bcrypt.hash('123456', 10)
  
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      name: 'Usuário Exemplo',
      email: 'user@example.com',
      passwordHash: hashedPassword,
    },
  })

  // Criar segundo usuário para testar compartilhamento
  const user2 = await prisma.user.upsert({
    where: { email: 'user2@example.com' },
    update: {},
    create: {
      name: 'Segundo Usuário',
      email: 'user2@example.com',
      passwordHash: hashedPassword,
    },
  })

  console.log('✓ Usuários criados:', { user, user2 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })
