import styles from './CardGrid.module.css';

interface CardGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardGrid({ children, className }: CardGridProps) {
  return <div className={`${styles.grid} ${className ?? ''}`}>{children}</div>;
}
