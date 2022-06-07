import React from 'react';
import styles from './Exams.module.scss';

const Exams = () => {
	return (
		<div className={styles.container_exams}>
			<div className={styles.wrapper_exams}>
				<h1>Порядок сдачи экзамена</h1>
				<div className={styles.table}>
					<div>Квалификационный экзамен охранников 4-го, 5-го и 6-го разрядов</div>
					<div>
						Периодическая проверка знаний и навыков на пригодность к действиям в условиях, связанных с применением
						огнестрельного оружия, специальных средств
					</div>
					<div>
						Первичная и плановая проверка знания правил безопасного обращения с оружием и наличия навыков
						безопасного обращения с оружием у граждан
					</div>
					<div>каждый четверг каждого месяца</div>
				</div>
			</div>
		</div>
	);
};

export default Exams;
