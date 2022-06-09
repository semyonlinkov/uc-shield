import React from 'react';
import styles from './MainPage.module.scss';
import ImgDoc from '../../img/pdf128.png';
import ImgLearn from '../../img/learn.png';
import ImgDirections from '../../img/directions.png';
import ImgLicense from '../../img/driver-license.png';
import ImgDiploma1 from '../../img/01.jpg';
import ImgDiploma2 from '../../img/02.jpg';
import ImgDiploma3 from '../../img/03.jpg';
import ImgDiploma4 from '../../img/04.jpg';
import ImgDiploma5 from '../../img/05.jpg';
import IMGSber from '../../img/sber.png';
import IMGRosgvard from '../../img/rosgvard.png';
import IMGExting from '../../img/fire-extinguisher.png';
import IMGAnchor from '../../img/anchor.png';
import IMGTarget from '../../img/target.png';
import IMGChev from '../../img/chevron.png';
import IMGCarousel1 from '../../img/2222.jpg';
import IMGCarousel2 from '../../img/3333.jpg';
import IMGCarousel3 from '../../img/1111.jpg';
import IMGCarousel4 from '../../img/4444.jpg';
import IMGCarousel5 from '../../img/uc1.jpg';
import IMGCarousel6 from '../../img/uc2.jpg';
import IMGCarousel7 from '../../img/ucZal.jpg';
import IMGTir1 from '../../img/tir1.jpg';
import IMGTir2 from '../../img/tir2.jpg';
import IMGTir3 from '../../img/tir3.jpg';

import { Carousel, Image } from 'antd';

const MainPage = () => {
	return (
		<>
			<div className={styles.container_main_img}>
				<div className={styles.wrapper_main_img}>
					<div className={styles.text_content}>
						<h1 style={{ color: 'white' }}>УЧЕБНЫЙ ЦЕНТР «ЩИТ»</h1>
						<h3 style={{ color: 'white' }}>
							Частное образовательное учреждения дополнительного профессионального образования Учебный центр
							«Щит» осуществляет свою деятельность на рынке образовательных услуг Астраханской области уже в
							течении 13 лет. За это время Учебный центр «Щит» зарекомендовал себя как успешное образовательное
							учреждение по подготовке лиц, работающих в сфере охранной деятельности (частных охранников 4, 5, 6
							разрядов).
						</h3>
						<button>Записаться на обучение</button>
					</div>
				</div>
			</div>
			<div className={styles.container_info_section2}>
				<div className={styles.wrapper_info_section2}>
					<div className={styles.info_block2}>
						<h3>Квалифицированные специалисты</h3>
						<img src={ImgLearn} alt="learn" />
						<h4>Преподаватели и пенсионеры МВД, имеющие богатый опыт работы</h4>
					</div>
					<hr />
					<div className={styles.info_block2}>
						<h3>Удобное месторасположение</h3>
						<img src={ImgDirections} alt="directions" />
						<h4>Мы находимся почти в самом центре города</h4>
					</div>
					<hr />
					<div className={styles.info_block2}>
						<h3>Гарантия трудоустройства</h3>
						<img src={ImgLicense} alt="license" />
						<h4>Как в регионе, так и вахтовым методом</h4>
					</div>
				</div>
			</div>
			<div className={styles.container_info_section}>
				<div className={styles.wrapper_info_section}>
					<div className={styles.carousel}>
						<Carousel autoplay>
							<img src={IMGCarousel6} alt="pic-6" />
							<img src={IMGCarousel5} alt="pic-5" />
							<img src={IMGCarousel1} alt="pic-1" />
							<img src={IMGCarousel3} alt="pic-3" />
							<img src={IMGCarousel4} alt="pic-4" />
							<img src={IMGCarousel7} alt="pic-7" />
						</Carousel>
					</div>
					<div className={styles.info}>
						<h1>ЧОУ УЦ "ЩИТ"</h1>
						<p>
							В УЧЕБНОМ ЦЕНТРЕ "ЩИТ" созданы все необходимые условия для удовлетворения образовательных
							потребностей граждан в получении необходимых профессиональных знаний, ускоренного приобретения
							трудовых навыков для выполнения работы на высоком профессиональном уровне. Учебный центр «Щит»
							оснащен необходимой учебной и материальной базой, а именно: имеет оснащенные учебные классы,
							огнестрельный тир, компьютерный класс, спортзал.
						</p>
						<p>
							Основанием для осуществления деятельности Учебным центром «Щит» является лицензия на осуществление
							образовательной деятельности, выданная Министерством образования и науки Астраханской области (№680
							от 08.10.2010г.)
						</p>
						{/* <p>
							Так же, на базе Учебного центра «Щит» Комиссией, в состав которой входят сотрудники ЦЛРР УМВД
							России по Астраханской области осуществляется прием квалификационных экзаменов и периодических
							проверок частных охранников (4,5,6 разрядов).
						</p> */}
						{/* <p>
							Кроме того, УЧЕБНЫЙ ЦЕНТР "ЩИТ" проводит обучение граждан безопасному обращению с оружием;
							осуществляет подготовку граждан в группе и индивидуально по направлению «современные методы
							самообороны»; реализует специализированные курсы подготовки «Личная безопасность на улице», а так
							же проводит проверку знаний правил безопасного обращения с оружием и наличия навыков безопасного
							обращения с оружием с составлением акта проверки.
						</p> */}
					</div>
				</div>
			</div>
			<div className={styles.container_info_section3}>
				<div className={styles.wrapper_info_section3}>
					<div className={styles.carousel}>
						<Carousel autoplay>
							<img src={IMGTir3} alt="pic-3" />
							<img src={IMGTir2} alt="pic-2" />
							<img src={IMGTir1} alt="pic-1" />
						</Carousel>
					</div>
					<div className={styles.info}>
						<h1>ТИР</h1>
						<p>
							УЧЕБНЫЙ ЦЕНТР "ЩИТ" проводит обучение граждан безопасному обращению с оружием; осуществляет
							подготовку граждан в группе и индивидуально по направлению «современные методы самообороны»;
							реализует специализированные курсы подготовки «Личная безопасность на улице», а так же проводит
							проверку знаний правил безопасного обращения с оружием и наличия навыков безопасного обращения с
							оружием с составлением акта проверки.
						</p>
					</div>
				</div>
			</div>
			<h2 className={styles.title} style={{ paddingTop: '0px' }}>
				Дополнительные курсы
			</h2>
			<div className={styles.container_addons}>
				<div className={styles.wrapper_addons}>
					<div className={styles.addon_block}>
						<img src={IMGExting} alt="extinguisher" />
						<h4>Пожарно-технический минимум</h4>
						<img className={styles.chev} src={IMGChev} alt="chevron" />
					</div>
					<hr />
					<div className={styles.addon_block}>
						<img src={IMGAnchor} alt="anchor" />
						<h4>Обучение плавсоства</h4>
						<img className={styles.chev} src={IMGChev} alt="chevron" />
					</div>
					<hr />
					<div className={styles.addon_block}>
						<img src={IMGTarget} alt="target" />
						<h4>Обучение оружию</h4>
						<img className={styles.chev} src={IMGChev} alt="chevron" />
					</div>
				</div>
			</div>
			<div className={styles.container_docs_section}>
				<div className={styles.wrapper_docs_section}>
					<div className={styles.doc_block}>
						<img src={ImgDoc} alt="document" />
						<div className={styles.info}>
							<h2>МЕТОДИЧЕСКОЕ ПОСОБИЕ</h2>
							<p>Для подготовки частных охранников с вопросами для проверки знаний и рекомендациями</p>
						</div>
					</div>
					<div className={styles.doc_block}>
						<img src={ImgDoc} alt="document" />
						<div className={styles.info}>
							<h2>МЕТОДИЧЕСКОЕ ПОСОБИЕ</h2>
							<p>Для подготовки частных охранников с вопросами для проверки знаний и рекомендациями</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.container_licensess_section}>
				<div className={styles.wrapper_licensess_section}>
					<div>
						<h2 className={styles.title_gray}>Лицензии и свидетельства УЦ "Щит"</h2>
					</div>
					<div className={styles.licenses}>
						<div className={styles.license}>
							<Image src={ImgDiploma1} />
						</div>
						<div className={styles.license}>
							<Image src={ImgDiploma2} />
						</div>
						<div className={styles.license}>
							<Image src={ImgDiploma4} />
						</div>
					</div>
				</div>
			</div>
			<h2 className={styles.title}>Наши партнеры и клиенты</h2>
			<div className={styles.container_partners}>
				<div className={styles.wrapper_partners}>
					<div className={styles.partner_block}>
						<img src={IMGSber} alt="img-sber" />
						<h4>Обучение инкасаторов ПАО Сбербанк</h4>
					</div>
					<div className={styles.partner_block}>
						<img src={IMGRosgvard} alt="img-rosgvard" />
						<h4>ФГУП Охрана Росгвардии</h4>
					</div>
				</div>
			</div>
			<div className={styles.container_register}>
				<div className={styles.wrapper_register}>
					<h2>Записаться на обучение</h2>
					<p>Ваше имя:</p>
					<input type="text" />
					<p>Телефон:</p>
					<input type="text" />
					<button>Отправить</button>
				</div>
			</div>
		</>
	);
};

export default MainPage;
