import styles from "./style.module.css";
import cx from "classnames";
import { Link } from "react-router-dom";

export type ItemMenu = {
  label: string;
  href: string;
  style: "albastru" | "galben" | "rosu";
};

type MenuProps = {
  items: ItemMenu[];
};

export function Menu(props: MenuProps) {
  return (
    <nav>
      <ul className={styles.menu__list}>
        {props.items.map(({ label, href, style }) => (
          <li className={styles.menu__item} key={href}>
            <Link to={href} className={cx(styles.menu__link, styles[style])}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
