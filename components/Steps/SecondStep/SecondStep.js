import React, { useEffect } from 'react';
import {ArrBack, ArrRightBlue} from '@/components/icons';

import s from './SecondStep.module.css';

const SecondStep = ({increment, decrement, referer}) => {
    const receiveMessage = ({ data: { lotView: { vin, referer } = {} } = {}, origin } = {}) => {
        if (origin === 'https://easycars.yez.biz' && vin) {
            increment({ vinNumber: vin, referer });
        }
    };

    useEffect(() => {
        window.addEventListener("message", receiveMessage, false);
    }, []);
    
    return (
        <div className={s.container}>
            <iframe src={referer || 'https:easycars.yez.biz'} width="100%" height="500px" align="left" />
            {false && (
                <button type="submit" className={s.submitBtn} onClick={increment}>следующий шаг <ArrRightBlue className={s.arr}/></button>
            )}
            <button onClick={decrement} className={s.goBackBtn}><ArrBack/>вернуться в каталог</button>
        </div>
    );
};

export default SecondStep;