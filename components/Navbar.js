import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/oms">
          <a>Reservas OMS</a>
        </Link>
        <ul></ul>
      </li>
      <li>
        <Link href="/commerce">
          <a>Estoque Commerce</a>
        </Link>
      </li>
      <li>
        <Link href="/quotation">
          <a>Cotação</a>
        </Link>
      </li>
    </ul>
  );
}

// index vai ser sempre o '/' ou seja acesso a pasta raiz
