import React, { useEffect, useRef } from 'react';
import styles from './Footer.module.scss';
import ImgMap from '../img/map.PNG';

const Footer = () => {
	const mapWrap = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');

		script.src =
			'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A07f475490e836846cc9d9e19d071c93acfe6dcf9a35327d88afa2e10f8b20c05&amp;width=607&amp;height=332&amp;lang=ru_RU&amp;scroll=true';
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
					<p>т: 111-111-111-11</p>
					<p>т: 111-111-111-11</p>
					<p>т: 111-111-111-11</p>
					<p>т: 111-111-111-11</p>
					<p>т: 111-111-111-11</p>
				</div>
				<div ref={mapWrap} className={styles.map}></div>
			</div>
		</div>
	);
};

export default Footer;
