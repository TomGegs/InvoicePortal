import { z } from 'zod';

export const dataSchema = z.object({
    id: z.string(),
    StartDate: z.string(),
    EndDate: z.string().optional(),
    IssueDate: z.string(),
    Due: z.string(),
    HoursWorked: z.number(),
    RatePerHour: z.number(),
    GST: z.number(),
    Amount: z.number(),
    Description: z.string(),
    Paid: z.boolean(),
    File: z.string(),
});

export type InvoiceData = z.infer<typeof dataSchema>;
