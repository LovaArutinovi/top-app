import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import React, { useState } from "react";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p className={styles.footer__copy}>
        OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
      </p>
      <a className={styles.footer__link} href="#">
        Пользовательское соглашение
      </a>
      <a className={styles.footer__link} href="#">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
