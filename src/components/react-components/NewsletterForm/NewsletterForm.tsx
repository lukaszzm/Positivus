import { useForm, type SubmitHandler, Form } from 'react-hook-form';
import styles from './NewsletterForm.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema, type Newsletter } from '../../../schemas/newsletterSchema';
import { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';

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
			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="email" placeholder="Email" />
					<ErrorMessage name="email" errors={errors} />

					<button disabled={isSubmitting} className="button-tertiary" type="submit">
						Subscribe to news
					</button>
				</form>
			</Form>
		</div>
	);
};
