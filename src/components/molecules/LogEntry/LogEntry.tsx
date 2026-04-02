import styles from './LogEntry.module.css';

export type LogStatus = 'info' | 'success' | 'warn' | 'debug';

const STATUS_LABELS: Record<LogStatus, string> = {
  info:    '[INFO]',
  success: '[SUCCESS]',
  warn:    '[WATCH]',
  debug:   '[DEBUG]',
};

interface LogEntryProps {
  time: string;
  status: LogStatus;
  statusLabel?: string;
  children: React.ReactNode;
  className?: string;
}

export default function LogEntry({ time, status, statusLabel, children, className }: LogEntryProps) {
  return (
    <div className={`${styles.entry} ${styles[status]} ${className ?? ''}`}>
      <span className={styles.time}>{time}</span>
      <span className={`${styles.status} ${styles[status]}`}>
        {statusLabel ?? STATUS_LABELS[status]}
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
