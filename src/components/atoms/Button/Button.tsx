import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  icon?: string;
  className?: string;
}

export default function Button({ children, variant, href, onClick, icon, className }: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className ?? ''}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
