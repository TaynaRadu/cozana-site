import cozonac1 from "../../assets/images/cozonac1.png";
import styles from "./style.module.css";
import { BannerProps } from "./types";

export function Banner(props: BannerProps) {
  return (
    <section className={styles.banner} id="banner">
      <img className={styles.banner__img} src={props.img} alt="" />
      <h2 className={styles.banner__title}>{props.text}</h2>
    </section>
  );
}
