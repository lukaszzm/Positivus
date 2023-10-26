import styles from './SuccessAlert.module.css';

interface SuccessAlertProps {
	text: string;
}

export const SuccessAlert = ({ text }: SuccessAlertProps) => {
	return (
		<div className={styles.alert}>
			<p>{text}</p>
		</div>
	);
};
