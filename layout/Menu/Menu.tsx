import styles from "./Menu.module.css";
import React, { useContext, useEffect } from "react";
import { AppContext } from "context/app.context";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  useEffect(() => {
    setMenu && setMenu([]);
  });
  return (
    <>
      <div>
        {menu && (
          <ul>
            {menu.map((element, index) => (
              <li>{element._id.secondCategory}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
