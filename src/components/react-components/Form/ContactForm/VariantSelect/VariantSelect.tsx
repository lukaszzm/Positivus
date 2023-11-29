import type { Contact } from '@/schemas/contactSchema';
import styles from './VariantSelect.module.css';
import { useFormContext } from 'react-hook-form';

export const VariantSelect = () => {
	const { register } = useFormContext<Contact>();

	return (
		<div className={styles['radio-wrapper']}>
			<label htmlFor="variant-sayHi">
				<input {...register('variant')} type="radio" value="sayHi" id="variant-sayHi" /> Say Hi
			</label>
			<label htmlFor="variant-quote">
				<input {...register('variant')} type="radio" value="quote" id="variant-quote" /> Get a Quote
			</label>
		</div>
	);
};
