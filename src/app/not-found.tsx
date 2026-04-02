'use client';

import Link from 'next/link';
import TerminalDots from '@/components/atoms/TerminalDots/TerminalDots';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <main className={styles.wrap}>
        <div className={styles.terminal}>
          <div className={styles.header}>
            <TerminalDots size="md" />
            <span className={styles.title}>windra@portfolio ~ bash</span>
          </div>
          <div className={styles.body}>
            <div className={styles.codeWrap}>
              <div className={styles.code}>404</div>
            </div>
            <div className={styles.label}>PROCESS TERMINATED — ROUTE NOT FOUND</div>

            <div className={styles.log}>
              <div className={styles.logLine}>
                <span className={styles.logTime}>[SYSTEM]</span>
                <span className={`${styles.logTag} ${styles.err}`}>[ERROR]</span>
                <span className={styles.logMsg}>
                  Cannot GET <span className={styles.dim}>this_page</span> — No such file or directory
                </span>
              </div>
              <div className={styles.logLine}>
                <span className={styles.logTime}>[STACK]</span>
                <span className={`${styles.logTag} ${styles.warn}`}>[WARN]</span>
                <span className={styles.logMsg}>Route resolution failed. Exit code: 404</span>
              </div>
              <div className={styles.logLine}>
                <span className={styles.logTime}>[HINT]</span>
                <span className={`${styles.logTag} ${styles.info}`}>[INFO]</span>
                <span className={styles.logMsg}>Returning to root process may resolve the issue.</span>
              </div>
            </div>

            <div className={styles.divider} />
            <div className={styles.actions}>
              <Link href="/" className={`${styles.btn} ${styles.btnPrimary}`}>
                ↩ cd ~/home
              </Link>
              <button
                onClick={() => history.back()}
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                ← go back
              </button>
            </div>
            <div className={styles.divider} />
            <p className={styles.hint}>페이지가 삭제되었거나 URL이 잘못되었을 수 있습니다.</p>
          </div>
        </div>
      </main>
    </>
  );
}
