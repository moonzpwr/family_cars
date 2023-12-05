import React from 'react';
import { ArrRightBlue, ArrRight } from '../icons';
import s from './OurServices.module.css'

const OurServices = () => {
    return (
        <div className={s.container}>
            <h2 className={s.sectionTitle}>Наши услуги</h2>
            <a href="#" className={s.ourServices}>Наши услуги <ArrRightBlue className={s.sectionArrSvg} /></a>
            <ul className={s.servicesList}>
                <li className={ `${s.firstService} ${s.servicesItem}`}>
                    <p className={s.servicesTitle}>Комплексное сопровождение</p>
                    <a href="#" className={s.sectionDetails}>Подробнее <ArrRight className={s.arrSvg}/></a>
                </li>
                 <li className={ `${s.secoundService} ${s.servicesItem}`}>
                    <p className={s.servicesTitle}>Экспертная проверка выбранного вами автомобиля</p>
                    <a href="#" className={s.sectionDetails}>Подробнее <ArrRight className={s.arrSvg}/></a>
                </li>
                 <li className={ `${s.thirdService} ${s.servicesItem}`}>
                    <p className={s.servicesTitle}>Качественный ремонт, подбор запчастей</p>
                    <a href="#" className={s.sectionDetails}>Подробнее <ArrRight className={s.arrSvg}/></a>
                </li>
                 <li className={ `${s.fourthService} ${s.servicesItem}`}>
                    <p className={s.servicesTitle}>Химчистка, детейлинг</p>
                    <a href="#" className={s.sectionDetails}>Подробнее <ArrRight className={s.arrSvg}/></a>
                </li>
            </ul>
        </div>
    )
};

export default OurServices;