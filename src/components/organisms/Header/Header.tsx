'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StatusDot from '@/components/atoms/StatusDot/StatusDot';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '/profile', label: '프로필' },
  { href: '/tis',     label: 'TIS'    },
  { href: '/project', label: '프로젝트' },
  { href: '/news',    label: '뉴스'   },
  { href: '/now',     label: 'Now'    },
  { href: '/deploy',  label: 'Deploy' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandCursor} />
          Windra
          <span className={styles.version}>v2.0</span>
        </Link>

        <span className={styles.status}>
          <StatusDot color="green" pulse />
          ALL TESTS PASSED
        </span>

        <button
          className={`${styles.toggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.navLink} ${active ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {active ? '[✓]' : '[ ]'} {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
