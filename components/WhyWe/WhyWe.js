import React from 'react';
import { Check } from '../icons';
import { ArrRightBlue } from '../icons';
import s from './WhyWe.module.css';


const WhyWe = () => {

    return (
        <div className={s.bgContainer}>
            <div className={s.container}>
                <h2 className={s.sectionTitle}>Почему вам стоит выбрать нас</h2>
                <a href="#" className={s.aboutUs}>O нашей компании <ArrRightBlue className={s.arrSvg} /></a>
                <ul className={s.reasonList}>
                    <li className={s.reasonItem}>
                        <p className={s.reasonTitle}> <Check className={s.checkSvg} />ПОдбор и проверка</p>
                        <p className={s.reasonDesc}>Проверяем за 10 этапов составленных за годы опыта и основанных на реальных кейсах клиентов (Чек лист)</p>
                    </li>
                    <li className={s.reasonItem}>
                        <p className={s.reasonTitle}> <Check className={s.checkSvg} />Страховка авто</p>
                        <p className={s.reasonDesc}>Страхование автомобиля и перевозки морем включает в себя такие риски как: катастофы, пожар, кораблекрушение и т.п.</p>
                    </li>
                    <li className={s.reasonItem}>
                        <p className={s.reasonTitle}> <Check className={s.checkSvg} />поддержка 24/7</p>
                        <p className={s.reasonDesc}>Наши менеджеры удобным для вас способом предоставляют исчерпывающую консультацию по доставке в удобное время</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhyWe;