import SubNav, { SubNavLink } from '@/components/organisms/SubNav/SubNav';
import styles from './LogPageLayout.module.css';

interface LogPageLayoutProps {
  title: string;
  subNav?: SubNavLink[];
  children: React.ReactNode;
}

export default function LogPageLayout({ title, subNav, children }: LogPageLayoutProps) {
  return (
    <>
      {subNav && <SubNav links={subNav} />}
      <main className={`container ${styles.main}`}>
        <h1 className="page-title-log">{title}</h1>
        {children}
      </main>
    </>
  );
}
