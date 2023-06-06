import logoRemovedPreview from "../../../../assets/images/logo-removebg-preview.png";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/">
      <img className={styles.logo} src={logoRemovedPreview} alt="Logo" />
    </Link>
  );
}
