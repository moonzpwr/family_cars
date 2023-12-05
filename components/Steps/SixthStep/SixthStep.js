import React from 'react';
import { ArrShort, ArrBack, Doc, Money, Auction } from '@/components/icons';

import s from './SixthStep.module.css';
  

const SixthStep = ({increment, decrement}) => {
    
    return (
        <div className={s.container}>
            <h2 className={s.sectionTitle}>Покупка автомобиля на аукционе</h2>
            <p className={s.desc}>При затоплении точно определить сложность повреждения практически невозможно. в основном это замена поврежденных частей автомобиля, бампера, крышки багажника,усилителя бампера,абсорбера бампера,фонарей, парктроников,задней панели, рихтовка либо замена ниши запасного колеса</p>
            <ul className={s.cardContainer}>
                <li className={s.card}>
                    <a href='#'>
                        <Doc/>
                        <h3 className={s.cardTitle}>подписание договора</h3>
                    </a>
                </li>
                <li className={s.card}>
                    <a href='#'>
                        <Money/>
                        <h3 className={s.cardTitle}>внесение предоплаты</h3>
                    </a>
                </li>
                <li className={s.card}>
                    <a href='#'>
                        <Auction/>
                        <h3 className={s.cardTitle}>участие в аукционе</h3> 
                    </a>
                </li>
            </ul>
            <button onClick={decrement} className={s.goBackBtn}><ArrBack />вернуться в каталог</button>
            <button onClick={increment} className={s.goForwarrdBtn}>подтверждение заказа <ArrShort/></button>
        </div>
    );
};

export default SixthStep;