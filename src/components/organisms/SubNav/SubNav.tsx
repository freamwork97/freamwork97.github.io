import Link from 'next/link';
import styles from './SubNav.module.css';

export interface SubNavLink {
  label: string;
  href: string;
  external?: boolean;
  isActive?: boolean;
}

interface SubNavProps {
  links: SubNavLink[];
  className?: string;
}

export default function SubNav({ links, className }: SubNavProps) {
  return (
    <nav className={`${styles.nav} ${className ?? ''}`}>
      <div className={styles.links}>
        {links.map((link) =>
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.link} ${link.isActive ? styles.active : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              → {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.link} ${link.isActive ? styles.active : ''}`}
            >
              → {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
