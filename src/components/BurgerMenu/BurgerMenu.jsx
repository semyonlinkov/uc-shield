import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ header, items, active, setActive }) => {
	return (
		<div className={active ? `${styles.menu} ${styles.active}` : styles.menu} onClick={() => setActive(false)}>
			<div
				className={styles.menu__content}
				// onClick={(e) => e.stopPropagation()}
			>
				<ul>
					{items.map((item) => (
						<li>
							<Link to={item.href}>{item.value}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BurgerMenu;
