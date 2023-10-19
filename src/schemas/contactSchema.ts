import z from 'zod';

export const contactSchema = z.object({
	variant: z.string(),
	name: z.string().min(1, 'Required'),
	email: z.string().min(1, 'Required').email('Invalid email'),
	message: z.string().min(1, 'Required'),
});

export type Contact = z.infer<typeof contactSchema>;
