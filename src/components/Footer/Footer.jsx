import React, { useEffect, useRef } from 'react';
import styles from './Footer.module.scss';
import ImgMap from '../../img/map.PNG';

const Footer = () => {
	const mapWrap = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');

		script.src =
			'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A07f475490e836846cc9d9e19d071c93acfe6dcf9a35327d88afa2e10f8b20c05&amp';
		script.async = true;

		mapWrap.current.appendChild(script);

		return () => {
			mapWrap.current.removeChild(script);
		};
	}, []);

	return (
		<div className={styles.container_footer}>
			<div className={styles.wrapper_footer}>
				<div className={styles.contacts}>
					<h2 style={{ color: 'white', textAlign: 'start' }}>Контакты</h2>
					<p>Заместитель директора Декельбаум: Глеб Алексеевич 8 908-105-15-70</p>
					<p>Директор: Чернов Эдуард Викторович 8 913-628-84-34</p>
					<p>Россия, 644043, г. Омск, ул. Щербанёва, д. 25 (цоколь) офис 001</p>
					<p>Связаться с нами Телефон: (3812) 28-84-34 / 51-01-79</p>
					<p>Сайт: www.dpo-shit.ru</p>
					<p>E-mail: college-sisk@hotmail.com</p>
				</div>
				<div ref={mapWrap} className={styles.map}></div>
			</div>
		</div>
	);
};

export default Footer;
