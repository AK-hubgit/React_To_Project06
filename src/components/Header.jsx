import logo from "../assets/logo.png";
// below is called css modules
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={styles.para}>A community of artists and art-lovers.</p>
    </header>
  );
}
