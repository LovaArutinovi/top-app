import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import { motion } from "framer-motion";

export const Card = motion(
  forwardRef(
    (
      { children, color = "white", className, ...props }: CardProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      return (
        <div
          className={cn(styles.card, className, {
            [styles.blue]: color == "blue",
          })}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }
  )
);
