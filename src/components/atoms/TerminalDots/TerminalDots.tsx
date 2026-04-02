import styles from './TerminalDots.module.css';

interface TerminalDotsProps {
  size?: 'sm' | 'md';
  className?: string;
}

export default function TerminalDots({ size = 'sm', className }: TerminalDotsProps) {
  return (
    <div className={`${styles.dots} ${styles[size]} ${className ?? ''}`}>
      <span className={`${styles.dot} ${styles.red}`} />
      <span className={`${styles.dot} ${styles.yellow}`} />
      <span className={`${styles.dot} ${styles.green}`} />
    </div>
  );
}
