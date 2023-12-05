import React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { ArrRightBlue } from '@/components/icons';

import s from './FirstStep.module.css';
    
const CustomSlider = styled(Slider)(() => ({
  padding: '15px 0',
  '& .MuiSlider-thumb': {
      backgroundColor: 'transparent',
      '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: 20,
          width: 20,
          backgroundColor: '#424adb',
          transition: 'all .1s ease',
          transform: 'scale(0)',
      },
      '&:hover, &:active': {
          '&:before': {
              transform: 'scale(1)',
          },
      },
      '&:after': {
          display: 'none',
      },
      '& input': {
          display: 'none',
      },
    },
  '& .MuiSlider-valueLabel': {
    fontSize: 17,
    fontWeight: 'light',
    top: -6,
    backgroundColor: 'transparent',
    color: '#424adb',
  },
  '& .MuiSlider-track': {
      height: 2,
      border: 'none',
      backgroundColor: '#414ce6'
  },
  '& .MuiSlider-rail': {
      height: 2,
    backgroundColor: '#f8f8f8',
    border: '1px solid #d9d9d9'
  },
}));

const FirstStep = ({increment}) => {
    const [value, setValue] = React.useState([2000, 5000]);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    
    return (
        <div className={s.container}>
            <p className={s.desc}>
                Равным образом рамки и место обучения кадров представляет собой интересный эксперимент проверки направлений
                прогрессивного развития. С другой стороны консультация с широким активом в значительной степени обуславливает создание форм развития.
                Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, .
                соответствует насущным потребностям.
            </p>
            <form className={s.form}>
                <input type="text" placeholder="Ваше имя" className={s.formName}/>
                <input type="tel" placeholder="Контактный телефон" className={s.formTel} />
                <div className={s.sliderBlock}>
                    <p className={s.formTitle}>Бюджет</p>
                    <CustomSlider
                        className={s.formSlider}
                        min={0}
                        max={20000}
                        step={500}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="on"
                    />
                </div>
                <div className={s.radioBlock}>
                    <p className={s.formTitle}>Выберите цель</p>                
                    <label className={s.formLabel}>
                        Экономия
                        <input type="radio" name="quality" className={s.radioBtn}/>
                    </label>
                    <label className={s.formLabel}>
                        Целее авто
                        <input type="radio" name="quality" className={s.radioBtn}/>
                    </label>
                </div>
                <button type="submit" className={s.submitBtn} onClick={increment}>следующий шаг <ArrRightBlue className={s.arr}/></button>
            </form>
        </div>
    );
};

export default FirstStep;