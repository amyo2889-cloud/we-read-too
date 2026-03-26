import { z } from 'zod'

export const EmailSubmitSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
})

export type EmailSubmit = z.infer<typeof EmailSubmitSchema>
