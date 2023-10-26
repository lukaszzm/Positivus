import { ErrorMessage } from '@hookform/error-message';
import styles from './FormField.module.css';
import { useFormContext } from 'react-hook-form';
import type { Contact } from '../../../../schemas/contactSchema';

type FormFieldProps = {
	label: string;
	name: keyof Contact;
	as?: 'textarea' | 'input';
};

export const FormField = ({ as, label, name }: FormFieldProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext<Contact>();

	return (
		<div className={styles['form-field']}>
			<label htmlFor={name}>{label}</label>

			{as === 'textarea' ? (
				<textarea {...register(name)} rows={4} placeholder={name} id={name} />
			) : (
				<input {...register(name)} type="text" placeholder={name} id={name} />
			)}

			<p className={styles['error-message']}>
				<ErrorMessage name={name} errors={errors} />
			</p>
		</div>
	);
};
