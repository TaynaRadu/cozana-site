import styles from "./style.module.css";

export function Footer() {
  return (
    <footer className={styles.rodape} id="contact">
      <h4 className={styles.rodape__titulo}>Cozana Home</h4>
      <div className={styles.rodape__container}>
        <ul className={styles.rodape__lista}>
          <li className={styles["rodape__lista--titulo"]}>Location</li>
          <li className={styles["rodape__lista--item"]}>
            355 Tudor Vladimirescu
          </li>
          <li className={styles["rodape__lista--item"]}>
            Ilfov, Domnești, București
          </li>
        </ul>
        <ul className={styles.rodape__lista}>
          <li className={styles["rodape__lista--titulo"]}>Contact</li>
          <li className={styles["rodape__lista--item"]}>
            <a
              href="https://wa.me/40730883083"
              target="_blank"
              className={styles.rodape__social}
            >
              730 883 083
            </a>
          </li>
          <li className={styles["rodape__lista--item"]}>
            radu.ana.ra@gmail.com
          </li>
        </ul>
        <ul className={styles.rodape__lista}>
          <li className={styles["rodape__lista--titulo"]}>Follow</li>
          <li className={styles["rodape__lista--item"]}>
            <a href="" className={styles.rodape__social}>
              Instagram
            </a>
          </li>
          <li className={styles["rodape__lista--item"]}>
            <a
              href="https://www.facebook.com/cozanahome"
              target="_blank"
              className={styles.rodape__social}
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.made}>
        Made by <span>Tayna!</span>
      </p>
    </footer>
  );
}
