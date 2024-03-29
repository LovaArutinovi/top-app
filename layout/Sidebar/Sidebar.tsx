import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import React from "react";
import { Menu } from "layout/Menu/Menu";
import Logo from "../logo.svg";
import Link from "next/link";
import { Search } from "components";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <>
      <div className={cn(className, styles.sidebar)} {...props}>
        <Link href="/">
          <a href="#">
            <Logo className={styles.logo} />
          </a>
        </Link>
        <Search />
        <Menu />
      </div>
    </>
  );
};
