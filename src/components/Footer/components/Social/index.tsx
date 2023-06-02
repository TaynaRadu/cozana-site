import styles from "../../style.module.css";

export function Social() {
  return (
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
  );
}
