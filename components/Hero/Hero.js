import React from 'react';
import Link from 'next/link';
import s from './Hero.module.css'
import SelfCarSvg from '../icons/SelfCar';
import ExpCarSvg from '../icons/ExpCar';
import ArrRight from '../icons/ArrRight'

const Layout = () => {
    return (
        <>
            <h1 className={s.title}>Самостоятельная покупка и доставка авто из США</h1>
            <div className={s.buttonContainer}>
                
                <div className={s.byuCarBtn}>
                        <a href="/steper">
                            <SelfCarSvg className={s.carSvg}/>
                            <h2>
                                Купи машину сам
                                <ArrRight className={s.arr}
                                />
                            </h2>
                            <p>Пройди 5 шагов и купи машину сам. Мы поможем на каждом шаге, будем давать рекомендации... </p>
                        </a>
                </div>
                
                <div className={s.byuCarBtn}>
                    <a href="/buyTheCarYourself">
                        <ExpCarSvg className={s.carSvg}/>
                        <h2>Помощь эксперта
                            <ArrRight className={s.arr}/>
                        </h2>
                        <p>Обратитесь к нашим экспертам — они помогут выбрать автомобиль под ваши желания и бюджет...</p>
                    </a>
                </div> 
            </div> 
        </>
    )
};

export default Layout;