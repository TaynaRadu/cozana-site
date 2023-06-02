import styles from "../../style.module.css";

export function Contact() {
  return (
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
      <li className={styles["rodape__lista--item"]}>radu.ana.ra@gmail.com</li>
    </ul>
  );
}
