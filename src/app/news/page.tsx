import Link from 'next/link';
import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';

const CATEGORIES = [
  { label: '경제',     href: '/news/economy',    desc: '경제 관련 뉴스 모음' },
  { label: 'IT',       href: '/news/it',          desc: 'IT·테크 뉴스 모음' },
  { label: '블록체인', href: '/news/blockchain',  desc: '블록체인·암호화폐 뉴스 모음' },
];

export default function NewsPage() {
  return (
    <LogPageLayout title="News">
      <LogContainer streamName="LOG_STREAM: news.log" meta="STATUS: UPDATED">
        <LogEntry time="[SYSTEM]" status="info">
          마음에 드는 뉴스들을 모아두고 있습니다.
        </LogEntry>
        {CATEGORIES.map((cat, i) => (
          <LogEntry key={i} time={`[${String(i + 1).padStart(2, '0')}]`} status="debug">
            <Link href={cat.href}>{cat.label}</Link>
            {' — '}{cat.desc}
          </LogEntry>
        ))}
      </LogContainer>
    </LogPageLayout>
  );
}
