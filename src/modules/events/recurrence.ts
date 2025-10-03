// Gera eventos recorrentes dinamicamente baseado no período solicitado
export function generateRecurringEventsForPeriod(
  baseEvent: {
    id: string
    title: string
    description?: string | null
    category: string
    startsAt: Date
    endsAt: Date
    recurrence: 'NONE' | 'DAILY' | 'WEEKLY' | 'MONTHLY'
    ownerId: string
  },
  fromDate: Date,
  toDate: Date
): Array<{
  id: string
  title: string
  description?: string | null
  category: string
  startsAt: Date
  endsAt: Date
  recurrence: 'NONE' | 'DAILY' | 'WEEKLY' | 'MONTHLY'
  ownerId: string
  parentEventId: string
  isVirtual: boolean // Indica que é um evento gerado dinamicamente
}> {
  if (baseEvent.recurrence === 'NONE') {
    return []
  }

  const events = []
  const duration = baseEvent.endsAt.getTime() - baseEvent.startsAt.getTime()
  let currentStart = new Date(baseEvent.startsAt)
  let occurrenceNumber = 0

  // Avançar até o início do período solicitado ou um pouco antes
  while (currentStart < fromDate) {
    switch (baseEvent.recurrence) {
      case 'DAILY':
        currentStart.setDate(currentStart.getDate() + 1)
        break
      case 'WEEKLY':
        currentStart.setDate(currentStart.getDate() + 7)
        break
      case 'MONTHLY':
        currentStart.setMonth(currentStart.getMonth() + 1)
        break
    }
    occurrenceNumber++
  }

  // Gerar eventos dentro do período
  while (currentStart <= toDate) {
    const currentEnd = new Date(currentStart.getTime() + duration)
    
    events.push({
      id: `${baseEvent.id}-${occurrenceNumber}`, // ID único para cada ocorrência
      title: baseEvent.title,
      description: baseEvent.description || null,
      category: baseEvent.category,
      startsAt: new Date(currentStart),
      endsAt: currentEnd,
      recurrence: 'NONE' as const, // Eventos filhos não são recorrentes
      ownerId: baseEvent.ownerId,
      parentEventId: baseEvent.id,
      isVirtual: true
    })

    // Calcular próxima ocorrência
    switch (baseEvent.recurrence) {
      case 'DAILY':
        currentStart.setDate(currentStart.getDate() + 1)
        break
      case 'WEEKLY':
        currentStart.setDate(currentStart.getDate() + 7)
        break
      case 'MONTHLY':
        currentStart.setMonth(currentStart.getMonth() + 1)
        break
    }
    occurrenceNumber++

    // Limite de segurança para não gerar infinitos eventos
    if (occurrenceNumber > 1000) break
  }

  return events
}

export function generateRecurringDates(
  startDate: Date,
  endDate: Date,
  recurrence: 'NONE' | 'DAILY' | 'WEEKLY' | 'MONTHLY',
  maxOccurrences: number = 30 // Reduzido para apenas criar alguns eventos iniciais
): Array<{ startsAt: Date; endsAt: Date }> {
  if (recurrence === 'NONE') {
    return []
  }

  const dates: Array<{ startsAt: Date; endsAt: Date }> = []
  const duration = endDate.getTime() - startDate.getTime()
  
  let currentStart = new Date(startDate)
  let count = 0

  // Criar apenas algumas ocorrências iniciais
  const limit = Math.min(maxOccurrences, 30)

  while (count < limit) {
    // Calcular próxima data baseada na recorrência
    switch (recurrence) {
      case 'DAILY':
        currentStart.setDate(currentStart.getDate() + 1)
        break
      case 'WEEKLY':
        currentStart.setDate(currentStart.getDate() + 7)
        break
      case 'MONTHLY':
        currentStart.setMonth(currentStart.getMonth() + 1)
        break
    }

    const currentEnd = new Date(currentStart.getTime() + duration)
    
    dates.push({
      startsAt: new Date(currentStart),
      endsAt: currentEnd
    })

    count++
  }

  return dates
}

export function getRecurrenceLabel(recurrence: string): string {
  const labels = {
    NONE: 'Sem repetição',
    DAILY: 'Diariamente',
    WEEKLY: 'Semanalmente', 
    MONTHLY: 'Mensalmente'
  }
  return labels[recurrence as keyof typeof labels] || recurrence
}
