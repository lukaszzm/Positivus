import styles from './ContactForm.module.css';
import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VariantSelect } from './VariantSelect';
import { useState } from 'react';
import { contactSchema, type Contact } from '../../../../schemas/contactSchema';
import { FormField } from '../FormField';
import { SuccessAlert } from '../SuccessAlert';

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
	const [isSuccess, setIsSuccess] = useState(false);
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = form;

	const onSubmit: SubmitHandler<Contact> = async (data) => {
		setIsSuccess(false);

		// MOCK REQUEST
		await new Promise((r) => setTimeout(r, 1000));

		setIsSuccess(true);
	};

	return (
		<FormProvider {...form}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<VariantSelect />
				<FormField label="Name" name="name" placeholder="name" />
				<FormField label="Email" name="email" placeholder="example@example.com" />
				<FormField label="Message" name="message" as="textarea" placeholder="your message..." />

				{isSuccess && (
					<SuccessAlert text="Your message has been successfully delivered. Our team will contact you as soon as possible at the email address you provided." />
				)}
				<button disabled={isSubmitting} className="button button-primary" type="submit">
					Send Message
				</button>
			</form>
		</FormProvider>
	);
};
