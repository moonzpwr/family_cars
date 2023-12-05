import React from 'react';
import Logo from '@/components/Logo';
import Contacts from '@/components/Contacts';
import Auth from '@/components/Auth';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <div className={s.backdrop} />
            <div className={s.headerContainer}>

              <Logo/>
              <Contacts/>
                <div className={s.auth}>
                    <Auth />
                </div>
              <select className={s.lang}>
                  <option value='RU'>RU</option>
                  <option value='UA'>UA</option>
                  <option value='EN'>EN</option>
              </select>
          </div>
      </header>
    );
};

export default Header;
