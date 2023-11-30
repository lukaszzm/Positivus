import type { Testimonal } from '@/interfaces/Testimonal';
import styles from './CarouselItem.module.css';

interface CarouselItemProps extends Testimonal {}

export const CarouselItem = ({ quote, name, role }: CarouselItemProps) => {
	return (
		<div className={styles['carousel-item']}>
			<div className={styles['carousel-item__quote']}>
				<p>"{quote}"</p>
			</div>
			<div className={styles['carousel-item__by']}>
				<p className={styles['carousel-item__by__name']}>{name}</p>
				<p className={styles['carousel-item__by__role']}>{role}</p>
			</div>
		</div>
	);
};
