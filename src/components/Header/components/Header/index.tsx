import { Logo } from "../Logo/index";
import { Menu } from "../Menu/index";
import styles from "./style.module.css";

const MENU_ITENS = [
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
