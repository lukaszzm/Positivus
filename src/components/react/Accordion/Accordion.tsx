import { useRef, useState } from 'react';
import styles from './Accordion.module.css';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

interface AccordionProps {
	number: string;
	title: string;
	description: string;
}

export const Accordion = ({ number, title, description }: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const contentRef = useRef<HTMLDivElement>(null);

	const state = isOpen ? 'open' : 'closed';

	const clickButtonHandler = () => {
		if (contentRef.current) {
			const open = isOpen;
			setIsOpen(!open);
			contentRef.current.style.maxHeight = open ? '0' : contentRef.current.scrollHeight + 'px';
		}
	};

	return (
		<div className={`card ${styles.accordion}`} data-state={state}>
			<h3 data-state={state} data-orientation="vertical">
				<button className={styles.control} onClick={clickButtonHandler}>
					<div className={styles.label}>
						<span className={styles.number}>{number}</span>
						<span className={styles.heading}>{title}</span>
					</div>
					<span className={styles.icon}>{isOpen ? <FiMinusCircle /> : <FiPlusCircle />}</span>
				</button>
			</h3>
			<div data-state={state} className={styles.content} ref={contentRef}>
				<p>{description}</p>
			</div>
		</div>
	);
};
