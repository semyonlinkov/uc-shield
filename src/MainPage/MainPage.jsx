import React from 'react';
import styles from './MainPage.module.scss';
import ImgDoc from '../img/docs.png';
import ImgLearn from '../img/learn.png';
import ImgDirections from '../img/directions.png';
import ImgLicense from '../img/driver-license.png';
import ImgDiplom1 from '../img/1.jpg';
import ImgDiplom2 from '../img/2.jpg';
import ImgDiplom3 from '../img/3.jpg';

const MainPage = () => {
	return (
		<>
			<div className={styles.container_main_img}>
				<div className={styles.wrapper_main_img}>
					<div className={styles.text_content}>
						<h1>УЧЕБНЫЙ ЦЕНТР «ХУЙ ЗНАЕТ КАКОЙ»</h1>
						<p>Учим-хуючим охранять там всю хуйню. Можно и не охранять, всем так-то похуй</p>
						<button>Записаться на обучение</button>
					</div>
				</div>
			</div>
			<div className={styles.container_docs_section}>
				<div className={styles.wrapper_docs_section}>
					<div className={styles.doc_block}>
						<img src={ImgDoc} alt="document" />
						<div className={styles.info}>
							<h2>МЕТОДИЧЕСКОЕ ПОСОБИЕ</h2>
							<p>для подготовки частных охранников с вопросами для проверки знаний и рекомендациями</p>
						</div>
					</div>
					<div className={styles.doc_block}>
						<img src={ImgDoc} alt="document" />
						<div className={styles.info}>
							<h2>МЕТОДИЧЕСКОЕ ПОСОБИЕ</h2>
							<p>для подготовки частных охранников с вопросами для проверки знаний и рекомендациями</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.container_info_section}>
				<div className={styles.wrapper_info_section}>
					<h1>АНО ДПО "ЩИТ"</h1>
					<p>
						Автономная некоммерческая организация дополнительного профессионального образования "ЩИТ", ранее
						известное как "Колледж охраны и сыска" работает с 1995 года. За почти 25-ти летний период
						образовательным центром было подготовлено более XXXX частных охранников.
					</p>
					<p>
						В настоящее время АНО ДПО "ЩИТ" готовит частных охранников 4,5,6 разряда, а также осуществляет
						периодическую проверку и проводит квалификационный экзамен для присвоение статуса частного охранника.
					</p>
					<p>
						Все обучающиеся, прошедшие курс обучения и успешно сдавшие квалификационный экзамен получают
						дополнительную профессию и свидетельство установленного образца
					</p>
				</div>
			</div>
			<div className={styles.container_info_section2}>
				<div className={styles.wrapper_info_section2}>
					<div className={styles.info_block2}>
						<p>Квалифицированные специалисты</p>
						<img src={ImgLearn} alt="learn" />
						<p>преподаватели и пенсионеры МВД, имеющие богатый опыт работы</p>
					</div>
					<div className={styles.info_block2}>
						<p>Удобное месторасположение</p>
						<img src={ImgDirections} alt="directions" />
						<p>мы находимся почти в самом центре города</p>
					</div>
					<div className={styles.info_block2}>
						<p>Гарантия трудоустройства</p>
						<img src={ImgLicense} alt="license" />
						<p>как в регионе, так и вахтовым методом на север</p>
					</div>
				</div>
			</div>
			<h2 className={styles.title}>Лицензии и свидетельства АНО ДПО "Щит"</h2>
			<div className={styles.container_licensess_section}>
				<div className={styles.wrapper_licensess_section}>
					<div className={styles.license}>
						<img src={ImgDiplom1} alt="license" />
					</div>
					<div className={styles.license}>
						<img src={ImgDiplom2} alt="license" />
					</div>
					<div className={styles.license}>
						<img src={ImgDiplom3} alt="license" />
					</div>
				</div>
			</div>
			<h2 className={styles.title}>Стоимость обучения</h2>
			<div className={styles.container_price}>
				<div className={styles.wrapper_price}>
					<div className={styles.table}>
						<div>Наименование курса</div>
						<div>Сроки обучения</div>
						<div>Стоимость курса</div>
						<div>На частного охранника 4-го разряда</div>
						<div>2 нед.</div>
						<div>3 000 рублей.</div>
						<div>Частного охранника 5-го разряда</div>
						<div>4 нед.</div>
						<div>5 000 рублей.</div>
						<div>Частного охранника 6-го разряда</div>
						<div>6 нед.</div>
						<div>6 000 рублей.</div>
						<div>Частного охранника 6-го разряда</div>
						<div>6 нед.</div>
						<div>6 000 рублей.</div>
						<div>Тематические семинары</div>
						<div>4 часа</div>
						<div>1 500 рублей</div>
						<div>Подготовка к периодической проверке</div>
						<div></div>
						<div>500 рублей</div>
						<div>Подготовка к квалификационному экзамену</div>
						<div></div>
						<div>500 рублей</div>
					</div>
				</div>
			</div>
			<div className={styles.container_register}>
				<div className={styles.wrapper_register}>
					<h2>Записаться на обучение</h2>
					<p>Ваше имя</p>
					<input type="text" />
					<p>Телефон</p>
					<input type="text" />
					<button>Отправить</button>
				</div>
			</div>
		</>
	);
};

export default MainPage;
