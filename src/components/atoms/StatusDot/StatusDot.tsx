import styles from './StatusDot.module.css';

type DotColor = 'green' | 'purple' | 'yellow' | 'blue' | 'orange' | 'cyan';

interface StatusDotProps {
  color?: DotColor;
  pulse?: boolean;
  className?: string;
}

export default function StatusDot({ color = 'green', pulse = false, className }: StatusDotProps) {
  return (
    <span
      className={`${styles.dot} ${styles[color]} ${pulse ? styles.pulse : ''} ${className ?? ''}`}
    />
  );
}
