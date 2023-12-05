import React from 'react';
import MobileSvg from "@/components/icons/Mobile";
import s from "./FooterContacts.module.css";

const FooterContacts = () => {
    return (
        <address className={s.contactsContainer}>
                  <MobileSvg />
                  <div className={s.telContainer}>
                      <a href="tel:+380442055977">+38 044 205 5977</a>
                      <button className={s.telBtn}>обратный звонок</button>
                      <button className={s.telBtn}>показать все номера</button>
                  </div>
        </address>
    );
};

export default FooterContacts;