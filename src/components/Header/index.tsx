import { Logo } from "./components/Logo/index";
import { ItemMenu, Menu } from "./components/Menu/index";

import styles from "./style.module.css";

const MENU_ITENS: ItemMenu[] = [
  { label: "Despre", href: "#despre", style: "albastru" },
  { label: "Galerie", href: "#galerie", style: "galben" },
  { label: "Contact", href: "#contact", style: "rosu" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu items={MENU_ITENS} />
    </header>
  );
}
