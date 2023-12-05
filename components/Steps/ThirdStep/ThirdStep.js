import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { ArrShort, ArrBack, CallUs } from '@/components/icons';
import lightDmg from '@/images/lightDmg.jpg';
import middleDmg from '@/images/middleDmg.jpg';
import hardDmg from '@/images/hardDmg.jpg';
import water from '@/images/water.jpg';
import s from './ThirdStep.module.css';
    


const ThirdStep = ({ increment, decrement, vin, data = {} }) => {
    const { options = {}, images = [] } = data;
    const [damageRate, setDamageRate] = useState('light');
    const [damageType, setDamageType] = useState('carcass');

    const handleChangeSelect = (e) => {
        if (e.target.classList.value.includes('rateSelect')) {
            setDamageRate(e.target.value)
        } else if (e.target.classList.value.includes('damageTypeSelect')) {
            setDamageType(e.target.value)
        }
    };
     const {
        year,
        fuel,
        motorType,
        transmission,
        bodyStyle,
        cylinders,
        // damageType,
        primaryDamage,
        secondaryDamage,
        color,
        driveTrain,
        keys,
        airbags,
        airbags2,
        odometer,
        odometerActuality,
        keys2,
        complectation,
        motorVolume,
        manufacturer,
        model,
        lotType,
        buyerLimitations,
        certificateTitle,
        countryLocation,
        countryState,
        locationName,
        locationAria,
        abilityToDrive,
        odometerType,
        saleType
    } = options;

    // const fetchData = async (vin) => {
    //     try {
    //         const response = await fetch(`/api/items/${vin}`);
    //         if (!response) {
    //             throw new Error(`Error: ${response.status}`);
    //         }
    //         const responseToJSON = await response.json();
    //         const { easyCars } = responseToJSON;
    //         setData(easyCars);
    //     }
    //     catch (e) {
    //         console.error(e);
    //     }
    // };

    // useEffect(() => {
    //     if (!vin) return;
    //     console.log('vin', vin);
    //     fetchData(vin);
    // }, [vin]);
    
    const renderDescCarcassDmgSwitch = (param) => {
        switch (param) {
            case 'light':
                return <div className={s.desc}>
                    Незначительные повреждения заднего бампера, усилителя бампера, задней панели, крышки багажника, задних фонерей, парктроников, крепления бампера.<br /> <br />Возможны незначительные повреждения уплотнителей, обшивки багажнего отделения
                </div>
            case 'middle':
                return <div className={s.desc}>
                    Значительные повреждения заднего бампера(под вопросом его восстановление), значительные повреждения заднего усилителя бампера(замена),
                    <br /> <br />
                    Значительные повреждения задней крышки багажника(под вопросом его восстановление), крепления бампера
                    <br /> <br />
                    Значительные повреждения задней крышки багажника(под вопросом ее восстановление),
                    <br /> <br />
                    Значительные повреждения задней панели(под вопросом его восстановление)
                    повреждения задних фонарей, парктроников?
                    <br /> <br />
                    Важно понимать, даже при незначительном повреждении последних- это их замена на новые или бу детали
                    <br /> <br />
                    Также повреждаются петли крышки багажника, определить по фото затруднительно
                    <br /> <br />
                    Возможны повреждения уплотнителей, обшивки багажнего отделения
                    <br /> <br />
                    Даже при стредних ударах, весьма вероятно повреждения несущих конструкций, как следствие машина ставится на стапель, для восстановления геометрии кузова
                    <br /> <br />
                    Также возможны повреждения задних крыльев в следствии нарушении геометрии кузова
                    <span className={s.warningBlue}> <CallUs /> <span>Для точного определения сложности повреждения и оценочной стоимости ремонта настоятельно рекомендуем <a href='#'>обратиться к нашим экспертам</a></span></span>
                </div>;
            case 'hard':
                return <div className={s.desc}>
                    При тяжелых повреждениях, в основном это замена поврежденных частей автомобиля, бампера, крышки багажника,усилителя бампера,абсорбера бампера,фонарей, парктроников,задней панели, рихтовка либо замена ниши запасного колеса
                    <br /> <br />
                    Скорее всего повреждены задние ланжероны
                    <br /> <br />
                    Также при таких ударах возможно повреждение выхлопной системы авто, заднего подрамника и как следствие задней ходовой части авто
                    <br /> <br />
                    Если треснуло заднее стекло, это точно очень тяжелое повреждение
                    <br /> <br />
                    Также при таких ударах возможно повреждение выхлопной системы авто, заднего подрамника и как следствие задней ходовой части авто
                    <ul className={s.exampleList}>
                        <li>Пример: </li>
                        <li>Как видим в зоне 1 наблюдается довольно сильное замятие усилителя бампера, задней панели, и ниши запасного колеса</li>
                        <li>В зоне 2 складка на крыле, она образовалась в следствии сильного удара, что скорее всего свидетельствует о повреждении заднего лонжерона</li>
                        <li>В зоне 3 наблюдается сильный залом крыла, скорее всего его качественный ремонт не возможен</li>
                        <li>В зоне 4 - мы видим замятие крыла, а также на заднем стекле отслоение тонировки, что также возможно возникло в результате сильнейшего удара,  разрушение заднего стекла свидетельствует о сильном ударе</li>
                    </ul>
                    <span className={s.warningRed}> <CallUs /> <span>Для точного определения сложности повреждения и оценочной стоимости ремонта настоятельно рекомендуем <a href='#'>обратиться к нашим экпертам</a></span></span>
                </div>
            default:
                break;
        }
    };

    const renderOtherDmgSwitch = (param) => {
        switch (param) {
            case 'mechanical':
                return <div className={s.desc}>
                    Механические повреждения заднего бампера(под вопросом его восстановление), значительные повреждения заднего усилителя бампера(замена),
                    <br /> <br />
                    Значительные повреждения задней крышки багажника(под вопросом его восстановление), крепления бампера
                    <br /> <br />
                    Значительные повреждения задней крышки багажника(под вопросом ее восстановление),
                    <br /> <br />
                    Значительные повреждения задней панели(под вопросом его восстановление)
                    повреждения задних фонарей, парктроников
                    <br /> <br />
                    Также возможны повреждения задних крыльев, в следствии нарушении геометрии кузова
                    <span className={s.warningBlue}> <CallUs /> <span>Для точного определения сложности повреждения и оценочной стоимости ремонта настоятельно рекомендуем <a href='#'>обратиться к нашим экпертам</a></span></span>
                </div>
            case 'water':
                return <div className={s.desc}>
                    При затоплении точно определить сложность повреждения практически невозможно. В основном это замена поврежденных частей автомобиля, бампера, крышки багажника, усилителя бампера, абсорбера бампера, фонарей, парктроников, задней панели, рихтовка либо замена ниши запасного колеса
                    <br /> <br />
                    Скорее всего повреждены задние ланжероны
                    <br /> <br />
                    Также при таких ударах возможно повреждение выхлопной системы авто, заднего подрамника и как следствие задней ходовой части авто
                    <br /> <br />
                    Если треснуло заднее стекло, это точно очень тяжелое повреждение
                    <br /> <br />
                    Также при таких ударах возможно повреждение выхлопной системы авто, заднего подрамника и как следствие задней ходовой части авто
                    <span className={s.warningRed}> <CallUs /> <span>Для точного определения сложности повреждения и оценочной стоимости ремонта настоятельно рекомендуем <a href='#'>обратиться к нашим экспертам</a></span></span>
                </div>;
            default:
                break;
        }
    };
    
    const renderImgSwitch = (param) => {
        if (damageType === 'carcass') {
            switch (param) {
            case 'light':
                return lightDmg
            case 'middle':
                return middleDmg
            case 'hard':
                return hardDmg
            default:
                break;
            };
        } else {
            switch (param) {
            case 'mechanical':
                return middleDmg
            case 'water':
                return water
            default:
                break;
            };
        }
        
    }

    const renderDmgTypeMarkSwitch = (param) => {
        switch (param) {
            case 'carcass':
                return s.greenMark
            case 'mechanical':
                return s.questionMark
            case 'water':
                return s.warnMark
            default:
                break;
        };
    };

    const renderDmgRateMarkSwitch = (param) => {
        switch (param) {
            case 'light':
                return `${s.greenMark} ${s.rateSelect}`
            case 'middle':
                return `${s.questionMark} ${s.rateSelect}`
            case 'hard':
                return `${s.warnMark} ${s.rateSelect}`
            default:
                break;
        };
    };
    
    return (
        <div className={s.container}>
            <h2 className={s.sectionTitle}>Определение сложности повреждений</h2>
            <p className={s.damageTypeTitle}>Тип повреждения</p>
            <select className={`${s.damageTypeSelect} ${renderDmgTypeMarkSwitch(damageType)} ${primaryDamage || secondaryDamage ? s.disabled : null}`} onChange={handleChangeSelect} >
                <option value='carcass'>Задняя правая часть</option>
                <option value='mechanical'>Механические</option>
                <option value='water'>Затопление</option>
            </select>
            <p className={`${damageType === 'carcass' ? s.rateTitle : s.hidden}`}>Степень тяжести повреждений</p>
            <select className={`${damageType === 'carcass' ? renderDmgRateMarkSwitch(damageRate) : s.hidden}`} onChange={handleChangeSelect}>
                <option value='light'>Легкая степень</option>
                <option value='middle'>Средняя степень</option>
                <option value='hard'>Тяжелая степень</option>
            </select>
            <div className={s.imgContainer}><Image src={damageType === 'carcass' ? renderImgSwitch(damageRate) : renderImgSwitch(damageType)} /></div>
            {damageType === 'carcass' ? renderDescCarcassDmgSwitch(damageRate) : renderOtherDmgSwitch(damageType)}
            <button onClick={decrement} className={s.goBackBtn}><ArrBack/>вернуться в каталог</button>
            <button onClick={increment} className={s.goForwarrdBtn}>далее <ArrShort/></button>
        </div>
    );
};

export default ThirdStep;