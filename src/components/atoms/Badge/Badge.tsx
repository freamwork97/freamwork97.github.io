import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return <span className={`${styles.badge} ${className ?? ''}`}>{children}</span>;
}
