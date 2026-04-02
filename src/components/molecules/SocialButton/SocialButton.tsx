import styles from './SocialButton.module.css';

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
  className?: string;
}

export default function SocialButton({ href, icon, label, external = false, className }: SocialButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.btn} ${className ?? ''}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className={styles.icon}>{icon}</span>
      {label}
    </a>
  );
}
