import React from 'react';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ header, items, active, setActive }) => {
	return (
		<div className={active ? `${styles.menu} ${styles.active}` : styles.menu} onClick={() => setActive(false)}>
			<div className={styles.menu__content} onClick={(e) => e.stopPropagation()}>
				<ul>
					{items.map((item) => (
						<li>
							<a href={item.href}>{item.value}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BurgerMenu;
