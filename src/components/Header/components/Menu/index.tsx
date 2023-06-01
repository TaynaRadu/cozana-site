import styles from "./style.module.css";
import cx from "classnames";

export type ItemMenu = {
  label: string;
  href: string;
  style: string;
};

type MenuProps = {
  items: ItemMenu[];
};

export function Menu(props: MenuProps) {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {props.items.map(({ label, href, style }) => (
          <li className={styles.menu__item} key={href}>
            <a className={cx(styles.menu__link, styles[style])} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
