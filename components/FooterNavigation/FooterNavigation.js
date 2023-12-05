import React from 'react';
import s from "./FooterNavigation.module.css";


const FooterNavigation = ({ navigationConfig = [] }) => {
    return (
        <nav>
            <ul className={s.menuList}>
                {navigationConfig.map(({ link, title } = {}) => <li key={title}><a href={link}>{title}</a></li>)}
            </ul>
        </nav>
    );
};

export default FooterNavigation;