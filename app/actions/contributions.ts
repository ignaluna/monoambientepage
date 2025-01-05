'use server'

import { z } from 'zod'

const contributionSchema = z.object({
  projectId: z.string(),
  amount: z.number().positive(),
  name: z.string().min(2),
  message: z.string().optional(),
  contact: z.string().min(5),
  currency: z.enum(['ARS', 'UYU', 'BINANCE'])
})

type Contribution = z.infer<typeof contributionSchema>

export async function submitContribution(data: Contribution) {
  try {
    // Aquí podrías guardar la contribución en una base de datos
    // Por ahora, solo validamos y retornamos
    const validated = contributionSchema.parse(data)
    return { success: true, data: validated }
  } catch (error) {
    return { success: false, error: 'Error al procesar la contribución' }
  }
}

