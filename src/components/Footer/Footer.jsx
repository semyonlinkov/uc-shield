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
					<p>
						<strong>Заместитель директора:</strong> Назаров Ильяс Зульбахарович 8 967-331-61-07
					</p>
					<p>
						<strong>Директор:</strong> Михайлов Андрей Николаевич 8 967-331-72-21
					</p>
					<p>
						<strong>Адрес:</strong> Россия, 414000, г.Астрахань ул.Боевая 38 литер А
					</p>
					<p>
						<strong>Связаться с нами Телефон:</strong> 8 905-363-46-51 / 8 967-331-72-27
					</p>
					<p>
						<strong>Сайт:</strong> www.uc-shield.ru
					</p>
					<p>
						<strong>E-mail: </strong>
					</p>
				</div>
				<div ref={mapWrap} className={styles.map}></div>
			</div>
		</div>
	);
};

export default Footer;
