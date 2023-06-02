import styles from "./style.module.css";
import { GalleryProps } from "./types";

export function Gallery({ images }: GalleryProps) {
  return (
    <section className={styles.servicii} id="galerie">
      <h2 className={styles.servicii__title}>Galerie</h2>

      <div className={styles.servicii__container}>
        {images.map(({ img, alt }) => (
          <img
            key={alt}
            src={img}
            alt={alt}
            className={styles.servicii__img}
          ></img>
        ))}
      </div>
    </section>
  );
}
