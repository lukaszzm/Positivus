import { useState } from 'react';
import styles from './Carousel.module.css';
import { CarouselItem } from './CarouselItem';

interface Testimonal {
	name: string;
	role: string;
	quote: string;
}

interface CarouselProps {
	items: Array<Testimonal>;
}

export const Carousel = ({ items }: CarouselProps) => {
	const [activeItem, setActiveItem] = useState(0);

	const max = Math.floor(items.length / 2);
	const min = -max;

	const xValue = -(activeItem * 800);
	const translateX = `translateX(${xValue}px)`;

	return (
		<div className={styles.carousel}>
			<div className={styles['carousel__items-wrapper']} style={{ transform: translateX }}>
				{items.map((item, index) => (
					<CarouselItem key={index} {...item} />
				))}
			</div>
			<div className={styles['carousel__controls']}>
				<button className={styles['prev-arrow']} onClick={() => setActiveItem((active) => (active === min ? active : active - 1))}>
					Prev
				</button>
				<p>{activeItem}</p>
				<button className={styles['next-arrow']} onClick={() => setActiveItem((active) => (active === max ? active : active + 1))}>
					Next
				</button>
			</div>
		</div>
	);
};
