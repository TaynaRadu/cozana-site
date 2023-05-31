import logoRemovedPreview from "../../assets/images/logo-removebg-preview.png";
import cx from "classnames";
import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logoRemovedPreview} alt="Logo" />

      <nav className={styles.menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a
              className={cx(styles.menu__link, styles.albastru)}
              href="#despre"
            >
              Despre
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={cx(styles.menu__link, styles.galben)} href="#galerie">
              Galerie
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={cx(styles.menu__link, styles.rosu)} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
