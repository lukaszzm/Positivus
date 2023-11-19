import { useEffect, useState } from 'react';
import styles from './HamburgerMenu.module.css';
import { FiAlignRight, FiX } from 'react-icons/fi';

interface HamburgerMenuProps {
	links: Array<{ label: string; href: string }>;
}

const enableScrollbar = () => (document.body.style.overflow = 'auto');

const disableScrollbar = () => (document.body.style.overflow = 'hidden');

export const HamburgerMenu = ({ links }: HamburgerMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			disableScrollbar();
		} else {
			enableScrollbar();
		}

		return () => {
			enableScrollbar();
		};
	}, [isOpen]);

	return (
		<>
			<button onClick={() => setIsOpen((open) => !open)} className={`${styles['menu__button']} ${isOpen && styles.active}`} aria-expanded={isOpen}>
				{isOpen ? <FiX /> : <FiAlignRight />}
			</button>

			{isOpen && (
				<div className={styles['menu__container']}>
					<ul className={styles['menu__list']} aria-hidden={!isOpen}>
						{links.map((link) => (
							<li key={link.href} className={styles['menu__item']}>
								<a href={link.href} className={styles['menu__link']} onClick={() => setIsOpen(false)}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};
