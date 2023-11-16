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

	const translateX = `translateX(-${activeItem * 100}%)`;

	return (
		<div className={styles.carousel}>
			<div className={styles['carousel__items-container']} style={{ transform: translateX }}>
				{items.map((item, index) => (
					<CarouselItem key={index} {...item} />
				))}
			</div>

			<CarouselControls active={activeItem} length={items.length} setActive={setActiveItem} />
		</div>
	);
};
