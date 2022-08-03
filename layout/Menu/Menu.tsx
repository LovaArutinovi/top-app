import styles from "./Menu.module.css";
import React, { useContext, useEffect } from "react";
import { AppContext } from "context/app.context";
import { FirstLevelMenuItem } from "interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelCategory } from "interfaces/page.interface";
import cn from "classnames";

const firstLEvelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Скрвисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLEvelMenu.map((menu) => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.FirstLevelActive]: menu.id == firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = () => {};
  const buildThirdLevel = () => {};
  return (
    <>
      <div className={styles.menu}>{buildFirstLevel()}</div>
    </>
  );
};
