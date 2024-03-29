import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import React, { useEffect, useState } from "react";
import Logo from "../logo.svg";
import Link from "next/link";
import { ButtonIcon } from "components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import { Sidebar } from "layout/Sidebar/Sidebar";
import { useRouter } from "next/router";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: { stiffness: 20 },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { stiffness: 220 },
    },
  };
  return (
    <>
      <header className={cn(className, styles.header)} {...props}>
        <div>
          <Link href="/">
            <a href="#">
              <Logo className={styles.logo} />
            </a>
          </Link>
        </div>
        <ButtonIcon
          appearance="white"
          icon="menu"
          onClick={() => setIsOpened(true)}
        />
        <motion.div
          className={styles.mobileMenu}
          variants={variants}
          initial="closed"
          animate={isOpened ? "opened" : "closed"}
        >
          <Sidebar />
          <ButtonIcon
            className={styles.menuClose}
            appearance="white"
            icon="close"
            onClick={() => setIsOpened(false)}
          />
        </motion.div>
      </header>
    </>
  );
};
