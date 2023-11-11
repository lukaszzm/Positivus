import styles from './CarouselControls.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface CarouselControlsProps {
	active: number;
	length: number;
	setActive: (active: number) => void;
}

export const CarouselControls = ({ active, length, setActive }: CarouselControlsProps) => {
	const prevHandler = () => {
		setActive(active === 0 ? active : active - 1);
	};

	const nextHandler = () => {
		setActive(active === length - 1 ? active : active + 1);
	};

	return (
		<div className={styles['controls-wrapper']}>
			<button disabled={active === 0} onClick={prevHandler} className={styles.arrow}>
				<FiChevronLeft />
			</button>

			<div className={styles.dots}>
				{Array.from({ length }).map((_, index) => (
					<button key={index} onClick={() => setActive(index)} className={styles.dot} aria-active={active === index} />
				))}
			</div>

			<button disabled={active === length - 1} onClick={nextHandler} className={styles.arrow}>
				<FiChevronRight />
			</button>
		</div>
	);
};
