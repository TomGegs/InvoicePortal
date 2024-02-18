import { z } from 'zod';

export const dataSchema = z.object({
    id: z.string(),
    StartDate: z.string(),
    EndDate: z.string(),
    Due: z.string(),
    Amount: z.number(),
    File: z.string(),
});

export type InvoiceData = z.infer<typeof dataSchema>;
