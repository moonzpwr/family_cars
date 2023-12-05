import React, { useEffect } from 'react';
import Image from "next/image";
import ford from '@/images/ford.jpg';
import { Attention, RedLogo } from '@/components/icons';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import s from './SelectedCar.module.css';
    

const SelectedCar = ({ data = {} }) => {
    const { options = {}, images = [] } = data;
    const imagesCollection = [];
    if (images.length > 0) {
        images.forEach(image => {
            imagesCollection.push({ original: image, thumbnail: image, originalHeight: '300px' });
        })
    }

    const {
        year,
        fuel,
        motorType,
        transmission,
        bodyStyle,
        cylinders,
        damageType,
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
    return (
        <div className={s.bgContainer}>
            <div className={s.container}>
                <h2 className={s.lotTitle}>Выбранный вами лот</h2>
                <p className={s.carTitle}>{`${year} ${manufacturer} ${model} ${motorType}`}</p>
                <div className={s.carImg}>
                    <ImageGallery
                        items={imagesCollection}
                        showThumbnails={false}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        autoPlay
                        additionalClass={s.imageGallery}
                        slideInterval={5000}
                    />
                </div>
                <ul className={s.carParamsList}>
                    <li className={s.carParamsItem}>
                        <span className={s.itemTitle}>Пробег</span>
                        <span className={s.itemValue}>{odometer} миль</span>
                    </li>
                    <li className={s.carParamsItem}>
                        <span className={s.itemTitle}>Тип толива</span>
                        <span className={s.itemValue}>{fuel}</span>
                    </li>
                    <li className={s.carParamsItem}>
                        <span className={s.itemTitle}>Объем двигателя</span>
                        <span className={s.itemValue}>{motorVolume} л</span>
                    </li>
                    <li className={s.carParamsItem}>
                        <span className={s.itemTitle}>Привод</span>
                        <span className={s.itemValue}>{driveTrain}</span>
                    </li>
                    <li className={s.carParamsItem}>
                        <span className={s.itemTitle}>Коробка передач</span>
                        <span className={s.itemValue}>{transmission}</span>
                    </li>
                    <li className={s.carParamsItem}>
                        <span className={s.itemTitle}>Ключи</span>
                        <span className={s.itemValue}>{keys}</span>
                    </li>
                </ul>
                <ul className={s.carConditionList}>
                    <li className={s.carConditionItem}>
                        <span className={s.itemTitle}>Код запуска</span>
                        <span className={s.conditionValue}>{abilityToDrive}</span>
                        <Attention className={s.warnSvg}/>
                    </li>
                    <li className={s.carConditionItem}>
                        <span className={s.itemTitle}>Вид повреждений</span>
                        <span className={s.conditionValue}>{ damageType}</span>
                        <Attention className={s.warnSvg}/>
                    </li>
                    <li className={s.carConditionItem}>
                        <span className={s.itemTitle}>Основные повреждения</span>
                        <span className={s.conditionValue}>{ primaryDamage ? primaryDamage : 'нет'}</span>
                        <Attention className={s.warnSvg}/>
                    </li>
                    <li className={s.carConditionItem}>
                        <span className={s.itemTitle}>Вторичные повреждения</span>
                        <span className={s.conditionValue}>{secondaryDamage ? secondaryDamage : 'нет'}</span>
                        <Attention className={s.warnSvg}/>
                    </li>
                </ul>
                <div className={s.attention}>
                    <RedLogo className={s.logo}/>
                    <p>
                    Для устранения таких повреждений необходим дорогостоящий и сложный ремонт. Рекомендуем обратиться к эксперту для оценки повреждений
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SelectedCar;