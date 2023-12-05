import React from 'react';
import s from './Steps.module.css';

const Steps = ({ currentStep }) => {
    return (
        <div className={s.container}>
            <div className={s.secoundaryContainer}>
                <h1 className={s.title}>Купи машину сам</h1>
                <p className={s.desc}>Пройди 5 шагов и купи машину сам. Мы поможем на каждом шаге, будем давать рекомендации... </p>
            </div>
            <ul className={s.stepsList}>
                <li className={`${s.stepsItem} ${currentStep === 0 && s.isActive}`} >шаг 1</li>
                <li className={`${s.stepsItem} ${currentStep === 1 && s.isActive}`} >шаг 2</li>
                <li className={`${s.stepsItem} ${currentStep === 2 && s.isActive}`} >шаг 3</li>
                <li className={`${s.stepsItem} ${currentStep === 3 && s.isActive}`} >шаг 4</li>
                <li className={`${s.stepsItem} ${currentStep === 4 && s.isActive}`} >шаг 5</li>
                <li className={`${s.stepsItem} ${currentStep === 5 && s.isActive}`} >шаг 6</li>
            </ul>
        </div>
    );
};

export default Steps;