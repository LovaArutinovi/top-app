import styles from "./Sort.module.css";
import { SortEnum, SortProps } from "./Sort.props";
import cn from "classnames";
import SortIcon from "./sort.svg";
import { KeyboardEvent } from "react";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  // const keyDownSort = (key: KeyboardEvent, sort: SortEnum) => {
  //   if (key.code == "Space" || key.code == "Enter") {
  //     key.preventDefault();
  //     setSort(sort);
  //   }
  // };
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <button
        onClick={() => setSort(SortEnum.Rating)}
        // onKeyDown={(key: KeyboardEvent) => keyDownSort(key, SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort == SortEnum.Price,
        })}
        // onKeyDown={(key: KeyboardEvent) => keyDownSort(key, SortEnum.Price)}
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
    </div>
  );
};
