import styles from './Carousel.module.css';

import { useMemo, useState } from 'react';
import { CarouselItem } from './CarouselItem';
import { CarouselControls } from './CarouselControls';

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

	const baseValue = useMemo(() => (items.length - 1) * 400, []);

	const xValue = baseValue - activeItem * 800;
	const translateX = `translateX(${xValue}px)`;

	return (
		<div className={styles.carousel}>
			<div className={styles['carousel__items-wrapper']} style={{ transform: translateX }}>
				{items.map((item, index) => (
					<CarouselItem key={index} {...item} />
				))}
			</div>

			<CarouselControls active={activeItem} length={items.length} setActive={setActiveItem} />
		</div>
	);
};
