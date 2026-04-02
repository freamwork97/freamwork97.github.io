import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.meta}>✓ BUILD PASSED | 5 SUITES | 0 FAILURES</p>
        <p className={styles.copy}>&gt; &copy; 2025 windra. Built with Passion.</p>
      </div>
    </footer>
  );
}
