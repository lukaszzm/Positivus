import { useForm, type SubmitHandler, Form, FormProvider } from 'react-hook-form';
import styles from './NewsletterForm.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema, type Newsletter } from '../../../../schemas/newsletterSchema';
import { useState } from 'react';
import { SuccessAlert } from '../SuccessAlert';
import { FormField } from '../FormField';

export const NewsletterForm = () => {
	const form = useForm<Newsletter>({
		resolver: zodResolver(newsletterSchema),
		defaultValues: {
			email: '',
		},
	});
	const [isSuccess, setIsSuccess] = useState(false);
	const {
		handleSubmit,
		formState: { isSubmitting, errors },
	} = form;

	const onSubmit: SubmitHandler<Newsletter> = async (data) => {
		setIsSuccess(false);

		// MOCK REQUEST
		await new Promise((r) => setTimeout(r, 1000));

		setIsSuccess(true);
	};

	return (
		<div className={`card ${styles['form-container']}`}>
			<FormProvider {...form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormField label="Email" name="email" />

					{isSuccess && <SuccessAlert text="You have successfully subscribed to our list." />}

					<button disabled={isSubmitting} className="button-tertiary" type="submit">
						Subscribe to news
					</button>
				</form>
			</FormProvider>
		</div>
	);
};
