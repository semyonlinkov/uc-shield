import React from 'react';
import styles from './Documents.module.scss';

const Documents = () => {
	return (
		<div className={styles.container_documents}>
			<div className={styles.wrapper_documents}>
				<h1>Документы для поступления</h1>
				<h3>Перечень необходимых документов для поступления на курсы «Подготовка частных охранников»:</h3>
				<ol>
					<li>Паспорт гражданина РФ;</li>
					<li>Медицинское заключение по форме 046-1, пройденное по месту регистрации;</li>
					<li>Документ об образовании.</li>
				</ol>
				<h3>
					Перечень необходимых документов для поступления на курсы «Подготовка частных охранников» для лиц, ранее
					получившие статус частного охранника на основании стажа работы в УВД и органах безопасности:
				</h3>
				<ol>
					<li>Паспорт гражданина РФ;</li>
					<li>Медицинское заключение по форме 046-1, пройденное по месту регистрации;</li>
					<li>Архивная справка или выписка из приказа</li>
					<li>Удостоверение личности частного охранника, выданное ОВД.</li>
				</ol>
				<h3>
					Перечень необходимых документов для поступления на курсы «Повышение квалификации частных охранников»:
				</h3>
				<ol>
					<li>Паспорт гражданина РФ;</li>
					<li>Медицинское заключение по форме 046-1, пройденное по месту регистрации;</li>
					<li>
						Документ, подтверждающий профессиональную подготовку по программе «Подготовка кадров для частной
						охраны»;
					</li>
					<li>Удостоверение личности частного охранника, выданное ОВД.</li>
				</ol>
				<h3>
					Перечень необходимых документов для поступления на курсы «Подготовка юридических лиц с особыми уставными
					задачами, действиями в условиях, связанных с применением служебного и боевого оружия, специальных средств
					и физической силы»:
				</h3>
				<ol>
					<li>Паспорт гражданина РФ;</li>
					<li>Медицинское заключение по форме 046-1, пройденное по месту регистрации;</li>
					<li>Документ об образовании.</li>
				</ol>
				<h3>
					Перечень необходимых документов для поступления на курсы «Подготовка работников ведомственной охраны
					федеральных органов исполнительной власти к действиям в условиях, связанных с применением служебного
					огнестрельного и боевого оружия, специальных средств и физической силы»:
				</h3>
				<ol>
					<li>Паспорт гражданина РФ;</li>
					<li>Медицинское заключение по форме 046-1, пройденное по месту регистрации;</li>
					<li>Документ об образовании.</li>
				</ol>
				<h3>
					Перечень необходимых документов для поступления на курсы «Повышение квалификации руководителей частных
					охранных организаций»:
				</h3>
				<ol>
					<li>Паспорт гражданина РФ;</li>
					<li>Документ об образовании.</li>
				</ol>
				<h3>
					Перечень необходимых документов для поступления на курсы "Подготовка лиц в целях изучения правил
					безопасного обращения с оружием и приобретения навыков безопасного обращения с оружием":
				</h3>
				<ol>
					<li>Паспорт гражданина РФ;</li>
					<li>Медицинское заключение по форме 046-1, пройденное по месту регистрации;</li>
				</ol>
			</div>
		</div>
	);
};

export default Documents;
