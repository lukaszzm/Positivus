import styles from './ContactForm.module.css';
import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form';
import { type Contact, contactSchema } from '../../../schemas/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { VariantSelect } from './VariantSelect';
import { FormField } from './FormField';

export const ContactForm = () => {
	const form = useForm<Contact>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			variant: 'sayHi',
			name: '',
			email: '',
			message: '',
		},
	});
	const onSubmit: SubmitHandler<Contact> = (data) => console.log(data);

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
				<VariantSelect />

				<FormField label="Name" name="name" />

				<FormField label="Email" name="email" />

				<FormField label="Message" name="message" as="textarea" />

				<button className="button button-primary" type="submit">
					Send Message
				</button>
			</form>
		</FormProvider>
	);
};
