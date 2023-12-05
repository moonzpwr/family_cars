import React from 'react';
import Image from "next/image";
import logo from "@/images/logo.png";
import honda from '@/images/honda.jpg';
import jeep from '@/images/jeep.jpg';
import ford from '@/images/ford.jpg';
import volkswagen from '@/images/volkswagen.jpg';
import fordEscape from '@/images/ford_escape.jpg';
import audi from '@/images/audi.jpg';
import s from './Stories.module.css';
import { Play, ArrRightBlue } from '@/components/icons';

const Stories = () => {
    return (
        <div className={s.bgContainer}>
            <div className={s.container}>
                <h2 className={s.sectionTitle}>Реальные истории наших клиентов</h2>
                <a href="#" className={s.allStories}>Все истории <ArrRightBlue className={s.sectionArrSvg} /></a>
                <ul className={s.storiesList}>
                    <li className={s.storiesItem}>
                        <Image src={honda} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>Honda CR-V LX 2013 <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={jeep} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>jeep PATRIOT SPORT 2014 <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={ford} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>Ford Fusion SE 2015 <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={volkswagen} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>Volkswagen Jetta S 2016 <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={fordEscape} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>Ford Escape SE 2018 <Play /></a>
                    </li>
                    <li className={s.storiesItem}>
                        <Image src={audi} />
                        <div className={s.logo}><Image src={logo} /></div>
                        <a className={s.storiesTitle}>Audi Q5 PREMIUM 2011 <Play /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Stories;