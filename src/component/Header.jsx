import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
        <Link href="/" className={styles.link}>
            index
        </Link>
        <Link href="/about" className={styles.link}>
            about
        </Link>
    </header>
  );
}
