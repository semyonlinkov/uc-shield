import React from 'react';
import styles from './Header.module.scss';
import ImgShield from '../../img/shield.png';

const Header = ({ setActive, active }) => {
	return (
		<>
			<div className={styles.container_contacts}>
				<div className={styles.wrapper_contacts}>
					<div className={styles.phone}>
						<p>т. 111-111-11-11</p>
					</div>
					<div className={styles.address}>
						<p>г.Астрахань ул.Боевая 38</p>
					</div>
				</div>
			</div>
			<div className={styles.container_main_info}>
				<div className={styles.wrapper_main_info}>
					<div className={styles.logo}>
						<img src={ImgShield} alt="shield-logo" />
						<p>Название компании</p>
					</div>
					<ul className={styles.links}>
						<li>О нас</li>
						<li>Обучение</li>
						<li>Цены</li>
						<li>Контакты</li>
					</ul>
				</div>
				<div className={styles.burger_wrapper} onClick={() => setActive((prev) => !prev)}>
					<div className={styles.burger_btn}>
						<span />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
