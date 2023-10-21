import styles from './SuccessAlert.module.css';

export const SuccessAlert = () => {
	return (
		<div className={styles.alert}>
			<p>Your message has been successfully delivered. Our team will contact you as soon as possible at the email address you provided.</p>
		</div>
	);
};
