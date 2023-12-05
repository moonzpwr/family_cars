import React from 'react';
import Image from "next/image";
import { ArrRightBlue, ArrShort, ArrBack } from '@/components/icons';
import carfax from '@/images/carfax.png'

import s from './FifthStep.module.css';
  

const FifthStep = ({increment, decrement}) => {
    
    return (
        <div className={s.container}>
            <h2 className={s.sectionTitle}>История выбранного автомобиля</h2>
            <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={s.allBlocks}>
                <div className={s.blockContainer}>
                    <h3 className={s.blockTitle}>Carfax</h3>
                    <div className={s.carfaxImg}><Image src={carfax}/></div>
                    <p className={s.blockDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href='#' className={s.details}>Подробнее <ArrRightBlue/></a>
                </div>
                <div className={s.blockContainer}>
                    <h3 className={s.blockTitle}>Бесплатные ресурсы</h3>
                    <p className={s.blockDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href='#' className={s.details}>Подробнее <ArrRightBlue/></a>
                </div>
            </div>
            <button onClick={decrement} className={s.goBackBtn}><ArrBack/>вернуться в каталог</button>
            <button onClick={increment} className={s.goForwarrdBtn}>далее <ArrShort/></button>
        </div>
    );
};

export default FifthStep;