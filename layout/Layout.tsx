import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import React, {
  FunctionComponent,
  useState,
  KeyboardEvent,
  useRef,
} from "react";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { AppContextProvider, IAppContext } from "context/app.context";
import { Up } from "components";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
    useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      bodyRef.current?.focus();
    }
  };
  return (
    <div className={styles.wrapper}>
      <a
        className={cn(styles.skipLink, {
          [styles.displayed]: isSkipLinkDisplayed,
        })}
        onFocus={() => setIsSkipLinkDisplayed(true)}
        onBlur={() => setIsSkipLinkDisplayed(false)}
        onKeyDown={(key: KeyboardEvent) => skipContentAction(key)}
        tabIndex={1}
      >
        сразу к содержанию
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body} tabIndex={0} ref={bodyRef}>
        {children}
      </div>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
