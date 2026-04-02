import Link from 'next/link';
import StatusDot from '@/components/atoms/StatusDot/StatusDot';
import styles from './LinkCard.module.css';

type CardTheme = 'profile' | 'tis' | 'projects' | 'news' | 'now' | 'deploy';
type DotColor  = 'purple' | 'yellow' | 'green' | 'blue' | 'orange' | 'cyan';

const THEME_COLOR: Record<CardTheme, DotColor> = {
  profile:  'purple',
  tis:      'yellow',
  projects: 'green',
  news:     'blue',
  now:      'orange',
  deploy:   'cyan',
};

interface LinkCardProps {
  tcId: string;
  version: string;
  statusText: string;
  title: string;
  tagline: string;
  href: string;
  theme: CardTheme;
  animationDelay?: number;
}

export default function LinkCard({ tcId, version, statusText, title, tagline, href, theme, animationDelay = 0 }: LinkCardProps) {
  return (
    <div
      className={`${styles.card} ${styles[theme]}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className={styles.meta}>
        <span>TC_ID: {tcId}</span>
        <span>{version}</span>
      </div>
      <div className={styles.status}>
        <StatusDot color={THEME_COLOR[theme]} pulse />
        <span>{statusText}</span>
      </div>
      <Link href={href} className={styles.title}>{title}</Link>
      <p className={styles.tagline}>{tagline}</p>
    </div>
  );
}
