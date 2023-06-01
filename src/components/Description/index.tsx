import styles from "./style.module.css";

export function Description() {
  return (
    <section className={styles.despre} id="despre">
      <h2 className={styles.despre__title}>Despre</h2>
      <p className={styles.despre__description}>
        Cozana Home este o brutărie artizanală unde se simte aroma cozonacilor
        cu parfum de sarbatoare tot timpul anului, nu doar de sărbători. Se
        plămădesc din ingrediente naturale, și se coc în tihnă. Indiferent dacă
        sunt cu nucă, stafide, rahat sau mac sunt dulci, francezi de se topesc
        în gură. Cozonacii se fac la comandă, după pofta clientului, iar
        ingredientul secret , un stop de iubire născut din pasiunea pentru
        dulciuri sănătoase.
      </p>
    </section>
  );
}
