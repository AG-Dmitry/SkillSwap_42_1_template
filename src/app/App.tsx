import { Link, Outlet } from "react-router-dom";
import styles from "./styles/app.module.css";

type AppProps = {
  title?: string;
};

export default function App({ title = "SkillSwap" }: AppProps) {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <nav className={styles.nav} aria-label="main navigation">
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/profile" className={styles.navLink}>
            Profile
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} SkillSwap</span>
      </footer>
    </div>
  );
}
