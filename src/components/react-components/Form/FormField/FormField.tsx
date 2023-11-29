import { ErrorMessage } from '@hookform/error-message';
import styles from './FormField.module.css';
import { useFormContext } from 'react-hook-form';

type FormFieldProps = {
	label: string;
	name: string;
	placeholder?: string;
	as?: 'textarea' | 'input';
};

export const FormField = ({ as, label, name, placeholder }: FormFieldProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div className={styles['form-field']}>
			<label htmlFor={name}>{label}</label>

			{as === 'textarea' ? (
				<textarea {...register(name)} rows={4} placeholder={placeholder} id={name} autoComplete="off" />
			) : (
				<input {...register(name)} type="text" placeholder={placeholder} id={name} autoComplete="off" />
			)}

			<p className={styles['error-message']}>
				<ErrorMessage name={name} errors={errors} />
			</p>
		</div>
	);
};
