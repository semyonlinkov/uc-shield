import React from 'react';
import styles from './Header.module.scss';
import ImgLogo from '../../img/volga-shield-logo-500.png';
import { Link, useNavigate } from 'react-router-dom';
import ImgBurger from '../../img/burgerMenu64.png';
import ImgClose from '../../img/closeCross64.png';
import { Dropdown, Menu, Space } from 'antd';

const Header = ({ active, setActive }) => {
	const navigate = useNavigate();

	return (
		<>
			<div className={styles.container_contacts}>
				<div className={styles.wrapper_contacts}>
					<div className={styles.phone}>
						<p>т. 8 967-331-72-27</p>
					</div>
					<div className={styles.address}>
						<p>г.Астрахань ул.Боевая 38 литер А</p>
					</div>
				</div>
			</div>
			<div className={styles.container_main_info}>
				<div className={styles.wrapper_main_info}>
					<div className={styles.logo} onClick={() => navigate('/')}>
						<img src={ImgLogo} alt="shield-logo" />
						<p>Учебный центр "ЩИТ"</p>
					</div>
					<ul className={styles.links}>
						<li>
							<Link to="/">Главная</Link>
						</li>
						<li>
							<Link to="/about">О нас</Link>
						</li>
						<li>
							<Dropdown
								placement="bottom"
								overlay={
									<Menu
										items={[
											{
												label: <Link to="/docs">Документы для поступления</Link>,
												key: '0',
											},
											{
												label: <Link to="/exams">Порядок сдачи экзамена</Link>,
												key: '1',
											},
											{
												label: <Link to="/fire-safety">Пожарно-технический минимум</Link>,
												key: '2',
											},
											{
												label: <Link to="/crew-training">Обучение плавсоства</Link>,
												key: '3',
											},
										]}
									/>
								}
								trigger={['click', 'hover']}>
								<p style={{ padding: '10px' }}>Обучение ⮟</p>
							</Dropdown>
						</li>
						<li>
							<Link to="/prices">Цены</Link>
						</li>
						<li>
							<Link to="/contacts">Контакты</Link>
						</li>
					</ul>
				</div>
				<div className={styles.burger_wrapper} onClick={() => setActive((prev) => !prev)}>
					{active ? <img src={ImgClose} alt="" /> : <img src={ImgBurger} alt="" />}
				</div>
			</div>
		</>
	);
};

export default Header;
