import styles from "./style.module.css";
import { descriptionProps } from "./types";

export function Description({ title, text }: descriptionProps) {
  return (
    <section className={styles.despre} id="despre">
      <h2 className={styles.despre__title}>{title}</h2>
      <p className={styles.despre__description}>{text}</p>
    </section>
  );
}
