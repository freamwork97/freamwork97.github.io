import TerminalDots from '@/components/atoms/TerminalDots/TerminalDots';
import styles from './LogContainer.module.css';

interface LogContainerProps {
  streamName: string;
  meta?: string;
  children: React.ReactNode;
  className?: string;
}

export default function LogContainer({ streamName, meta, children, className }: LogContainerProps) {
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      <div className={styles.header}>
        <TerminalDots size="sm" className={styles.dots} />
        <span>{streamName}</span>
        {meta && <span className={styles.meta}>{meta}</span>}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
