import z from 'zod';

export const newsletterSchema = z.object({
	email: z.string().min(1, 'Required').email('Invalid email address'),
});

export type Newsletter = z.infer<typeof newsletterSchema>;
