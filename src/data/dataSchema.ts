import { z } from 'zod';

export const dataSchema = z.object({
    id: z.string(),
    StartDate: z.string(),
    EndDate: z.string().optional(),
    Due: z.string(),
    Amount: z.number(),
    File: z.string(),
});

export type InvoiceData = z.infer<typeof dataSchema>;
