import React from 'react';
import Image from "next/image";
import logo from "@/images/logo.png";
import s from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={s.logoContainer}>
            <a href='/'>
                <span className={s.logo}>Sokol<span>car</span></span>
                <div className={s.logoPng}>
                    <Image src={logo} />
                </div>
            </a>
        </div>
    )
};

export default Logo;