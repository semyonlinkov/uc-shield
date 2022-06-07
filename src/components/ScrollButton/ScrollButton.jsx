import React, { useState } from 'react';
import ArrowUp from '../../img/up64.png';
import styles from './ScrollButton.module.scss';

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<img
			className={styles.btn_up}
			src={ArrowUp}
			onClick={scrollToTop}
			style={{ display: visible ? 'inline' : 'none' }}
		/>
	);
};

export default ScrollButton;
