'use client';

import { useState, useCallback } from 'react';
import TerminalHero from '@/components/organisms/TerminalHero/TerminalHero';
import CardGrid from '@/components/organisms/CardGrid/CardGrid';
import LinkCard from '@/components/molecules/LinkCard/LinkCard';
import BootScreen from '@/components/organisms/BootScreen/BootScreen';
import styles from './page.module.css';

const CARDS = [
  { tcId: '001', version: 'v1.2.0', statusText: 'PASSED',      title: 'Profile',   tagline: '경력 사항, 기술 스택 담은 저의 소개 페이지입니다.',                          href: '/profile', theme: 'profile',  delay: 0.05 },
  { tcId: '002', version: 'DAILY',  statusText: 'SYNCED',      title: 'TIS',       tagline: '매일의 학습 내용과 기술적 문제를 해결하며 얻은 통찰을 기록합니다.',          href: '/tis',     theme: 'tis',      delay: 0.10 },
  { tcId: '003', version: 'BUILD',  statusText: 'STABLE',      title: 'Projects',  tagline: '직접 기획하고 개발하며 테스트를 거친 다채로운 프로젝트 결과물입니다.',       href: '/project', theme: 'projects', delay: 0.15 },
  { tcId: '004', version: 'RSS',    statusText: 'UPDATED',     title: 'News',      tagline: 'IT 트렌드, 유용한 기술 아티클 및 최신 소식을 큐레이션하여 공유합니다.',     href: '/news',    theme: 'news',     delay: 0.20 },
  { tcId: '005', version: 'RUNNING',statusText: 'IN_PROGRESS', title: 'Now',       tagline: '현재 제가 집중하고 있는 사항을 확인하세요.',                               href: '/now',     theme: 'now',      delay: 0.25 },
  { tcId: '006', version: 'DEPLOY', statusText: 'LIVE',        title: 'Deploy',    tagline: '실제로 배포된 서비스 링크를 모아두었습니다.',                               href: '/deploy',  theme: 'deploy',   delay: 0.30 },
] as const;

export default function HomePage() {
  const [booting, setBooting] = useState(true);
  const handleDone = useCallback(() => setBooting(false), []);

  return (
    <main className={styles.main}>
      {booting && <BootScreen onDone={handleDone} />}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.accentText}>interactive shell</span>
          <TerminalHero />
          <CardGrid>
            {CARDS.map(c => (
              <LinkCard key={c.tcId} {...c} animationDelay={c.delay} />
            ))}
          </CardGrid>
        </div>
      </section>
    </main>
  );
}
