import React, { useEffect } from 'react';
import styles from './FireSafety.module.scss';
import { useLocation } from 'react-router';

const FireSafety = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className={styles.container_fire_safety}>
			<div className={styles.wrapper_fire_safety}>
				<h1>Oбучение пожарно-технического минимума</h1>
				<p>
					Частное образовательное учреждение дополнительного профессионального образования
					<strong>Учебный центр «Щит» </strong>
					осуществляет образовательную деятельность с 2009 г. В настоящий момент центр расширил направление своей
					профессиональной деятельности, проводя{' '}
					<strong>
						обучение пожарно-технического минимума для руководителей, специалистов и работников организаций,
						ответственных за пожарную безопасность с учетом специфики деятельности.
					</strong>{' '}
					В целях популяризации навыков среди населения в области пожарной безопасности, а так же передачи им
					научных, нормативных и практических знаний, для руководителей и работников предприятий всех форм
					собственности проводится такое обучение. Пожарно-технический минимум проводится в соответствии с Приказом
					МЧС от 12.12.2007 N 645. В соответствии с п. 1 ст. 26 Закона Российской Федерации «Об образовании»
					проводить переподготовку и повышать квалификацию работников вправе образовательные учреждения
					дополнительного профессионального образования. В соответствии с Приказом Минобразования РФ от 06.09.2000
					N 2571 "Об утверждении Положения о порядке и условиях профессиональной переподготовки специалистов"
					образовательные учреждения получают право на осуществление образовательной деятельности по дополнительным
					профессиональным образовательным программам с момента лицензирования соответствующих образовательных
					программ. Постановлением Правительства РФ от 02.11.2000 N 841 (ред. от 22.10.2008) "Об утверждении
					Положения об организации обучения населения в области гражданской обороны", разработанным в соответствии
					с Федеральным законом "О гражданской обороне", определяются основные задачи обучения населения в области
					гражданской обороны, соответствующие функции федеральных органов исполнительной власти, органов
					исполнительной власти субъектов Российской Федерации, органов местного самоуправления и организаций, а
					также формы обучения.
				</p>
				<p>
					Нашими услугами могут воспользоваться работники разных категорий: – руководители предприятий,
					специалисты, инженерно-технический персонал. Обучение проходят по различным программ дополнительного
					профессионального обучения в сфере пожарной безопасности, подготовленные и разработанные ведущими
					специалистами Астраханской области. Курсы пожарной безопасности рассчитаны на слушателей с различным
					уровнем подготовки. Программы обучения составлены с учетом специфики рынка противопожарных работ и услуг,
					нормативных требований и законодательных актов. В результате обучения на курсах Вы будете владеть
					достоверной и актуальной информацией, а также практическими навыками по противодействию пожарам. Мы
					гарантируем Вам возможность ознакомления с новейшими видами противопожарного оборудования, налаживание и
					развитие деловых контактов, возможность узнать мнение признанных экспертов в области противопожарной
					безопасности. Обучение в нашей компании проводится в очной или дистанционной форме, на платной основе. По
					итогам выдаются квалификационные удостоверения установленного образца. Для проведения занятий Учебный
					центр по пожарной безопасности может предложить аудиторию для групповых занятий и лекционный зал,
					рассчитанные на 25 человек По всем вопросам о порядке обучения и оплаты услуг, вы можете обратится по
					телефонам указанным в разделе Контакты, либо с любой страницы сайта (звонок бесплатный).
				</p>
				<h4>Мы рады Вас видеть!</h4>
			</div>
		</div>
	);
};

export default FireSafety;