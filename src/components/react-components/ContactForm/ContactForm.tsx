import styles from './ContactForm.module.css';
import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form';
import { type Contact, contactSchema } from '../../../schemas/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { VariantSelect } from './VariantSelect';
import { FormField } from './FormField';
import { useState } from 'react';
import { SuccessAlert } from './SuccessAlert';

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
				<FormField label="Name" name="name" />
				<FormField label="Email" name="email" />
				<FormField label="Message" name="message" as="textarea" />
				{isSuccess && <SuccessAlert />}
				<button disabled={isSubmitting} className="button button-primary" type="submit">
					Send Message
				</button>
			</form>
		</FormProvider>
	);
};
