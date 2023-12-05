import React from 'react';
import { ArrRight, DocCheck } from '@/components/icons';

import s from './FinishStep.module.css';
  

const FinishStep = ({increment, decrement}) => {
    
    return (
        <div className={s.container}>
            <h2 className={s.sectionTitle}>Ваш заказ получен. Менеджер свяжеться с вами в ближайшее время</h2>
            <DocCheck className={s.docIcon}/>
            <p className={s.desc}>При затоплении точно определить сложность повреждения практически невозможно. в основном это замена поврежденных частей автомобиля, бампера, крышки багажника,усилителя бампера,абсорбера бампера,фонарей, парктроников,задней панели, рихтовка либо замена ниши запасного колеса</p>
            <h3 className={s.whatNext}>Что дальше?</h3>
            <div className={s.firstCard}><p className={s.cardTitle}>Качественный ремонт, подбор запчастей</p><a href='#'>Подробнее <ArrRight/></a></div>
            <div className={s.secondCard}><p className={s.cardTitle}>Химчистка, детейлинг</p><a href='#'>Подробнее <ArrRight/></a></div>
        </div>
    );
};

export default FinishStep;