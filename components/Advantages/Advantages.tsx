import styles from "./Advantages.module.css";
import { AdvantagesProps } from "./Advantages.props";
import cn from "classnames";
import CheckIcon from "./check.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      <div className={styles.advantages}>
        {advantages.map((a) => (
          <div className={styles.advantage} key={a._id}>
            <CheckIcon />
            <div className={styles.title}>{a.title}</div>
            <hr className={styles.vline} />
            <div className={styles.description}>{a.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};
