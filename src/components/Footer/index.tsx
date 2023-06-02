import { Contact } from "./components/Contact/index";
import { Location } from "./components/Location/index";
import { Social } from "./components/Social/index";
import styles from "./style.module.css";

export function Footer() {
  return (
    <footer className={styles.rodape} id="contact">
      <h4 className={styles.rodape__titulo}>Cozana Home</h4>

      <div className={styles.rodape__container}>
        <Location />
        <Contact />
        <Social />
      </div>

      <p className={styles.made}>
        Made by <span>Tayna!</span>
      </p>
    </footer>
  );
}
