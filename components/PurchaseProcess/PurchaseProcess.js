import React from 'react';
import s from "./PurchaseProcess.module.css";
import { DoubleArrRight } from '../icons';

const PurchaseProcess = () => {
    return (
        <div className={s.container}>
            <h2 className={s.sectionTitle}>Процесс покупки авто в США</h2>
            <ul className={s.algorithmList}>
                <li className={s.algorithmItem}>
                    <span className={s.firstNumber}>1</span>
                    <p className={s.algorithmTitle}>Покупка<br/> авто</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>Подбор автомобиля на аукционе и экспертная проверка</p>                      
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>2</span>
                    <p className={s.algorithmTitle}>Доставка морем</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>Расчет оптимальной стоимости доставки автомобиля</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>3</span>
                    <p className={s.algorithmTitle}>Растаможка авто</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>Расчет оптимальной стоимости доставки автомобиля</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.fourNumber}>4</span>
                    <p className={s.algorithmTitle}>Ремонт <br/> авто</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>Комплексный ремонт на СТО нашего партнера</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>5</span>
                    <p className={s.algorithmTitle}>Серти- фикация</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>Услуга предоставляется нашим партнером по желанию</p>                    
                </li>
                <li className={s.algorithmItem}>
                    <span className={s.number}>6</span>
                    <p className={s.algorithmTitle}>Постановка на учет</p>
                    <DoubleArrRight className={s.arrSvg}/>
                    <p className={s.algorithmDesc}>Заключительный этап оформления вашего авто</p>
                </li>
            </ul>
        </div>
    );
};

export default PurchaseProcess;