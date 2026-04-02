import { notFound } from 'next/navigation';
import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';
import { NEWS_SUB_NAV } from '../newsData';

const CATEGORY_META: Record<string, { title: string; stream: string; meta: string }> = {
  economy:    { title: '경제',     stream: 'LOG_STREAM: news_economy.log',    meta: 'CATEGORY: Economy' },
  it:         { title: 'IT',       stream: 'LOG_STREAM: news_it.log',         meta: 'CATEGORY: IT' },
  blockchain: { title: '블록체인', stream: 'LOG_STREAM: news_blockchain.log', meta: 'CATEGORY: BlockChain' },
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((category) => ({ category }));
}

interface Props {
  params: { category: string };
}

export default function NewsCategoryPage({ params }: Props) {
  const meta = CATEGORY_META[params.category];
  if (!meta) notFound();

  const subNav = NEWS_SUB_NAV.map(link => ({
    ...link,
    isActive: link.href === `/news/${params.category}`,
  }));

  return (
    <LogPageLayout title={`News / ${meta.title}`} subNav={subNav}>
      <LogContainer streamName={meta.stream} meta={meta.meta}>
        <LogEntry time="[SYSTEM]" status="info">
          {meta.title} 카테고리 뉴스를 모아두고 있습니다.
        </LogEntry>
        <LogEntry time="[STATUS]" status="warn" statusLabel="[WATCH]">
          콘텐츠를 준비 중입니다. 곧 업데이트됩니다.
        </LogEntry>
      </LogContainer>
    </LogPageLayout>
  );
}
