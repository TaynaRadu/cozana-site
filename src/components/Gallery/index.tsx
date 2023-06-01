import styles from "./style.module.css";
import cx from "classnames";

export function Gallery() {
  return (
    <section className={styles.servicii} id="galerie">
      <h2 className={styles.servicii__title}>Galerie</h2>

      <div className={styles.servicii__container}>
        <div className={cx(styles.servicii__img, styles.one)}></div>
        <div className={cx(styles.servicii__img, styles.two)}></div>
        <div className={cx(styles.servicii__img, styles.three)}></div>
        <div className={cx(styles.servicii__img, styles.four)}></div>
        <div className={cx(styles.servicii__img, styles.five)}></div>
        <div className={cx(styles.servicii__img, styles.six)}></div>
        <div className={cx(styles.servicii__img, styles.seven)}></div>
        <div className={cx(styles.servicii__img, styles.eight)}></div>
      </div>
    </section>
  );
}
