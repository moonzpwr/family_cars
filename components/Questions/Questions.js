import React from 'react';
import { ArrRight } from '../icons';
import s from './Questions.module.css';

const Questions = () => {
    return (
        <div className={s.container}>
            <form className={s.questionsForm}>
                <h2 className={s.questionsTitle}>Остались вопросы?</h2>
                <p className={s.questionsDesc}>Если у вас остались вопросы, заполните форму и наши специалисты в ближайшее время свяжутся с вами</p>
                <div className={s.inputsContainer}>
                    <input type="text" id="name" className={s.name} placeholder="Ваше имя" />
                    <input type="tel" id="tel" className={s.tel} placeholder="Ваш телефон"/>
                    <input type="email" id="email" className={s.email} placeholder="Ваш e-mail"/>
                </div>
                <button type="submit" className={s.btn}>Oтправить запрос <ArrRight className={s.arr}/></button>
            </form>

        </div>
    )
};

export default Questions;