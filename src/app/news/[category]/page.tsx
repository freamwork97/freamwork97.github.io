import { notFound } from 'next/navigation';
import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';
import { NEWS_SUB_NAV } from '../newsData';
import { ECONOMY_LINKS, IT_LINKS, BLOCKCHAIN_LINKS } from '../newsLinks';

const CATEGORY_META: Record<string, {
  title: string;
  stream: string;
  meta: string;
  links: readonly { href: string; title: string }[];
}> = {
  economy:    { title: '경제',     stream: 'LOG_STREAM: news_economy.log',    meta: 'CATEGORY: Economy',    links: ECONOMY_LINKS },
  it:         { title: 'IT',       stream: 'LOG_STREAM: news_it.log',         meta: 'CATEGORY: IT',         links: IT_LINKS },
  blockchain: { title: '블록체인', stream: 'LOG_STREAM: news_blockchain.log', meta: 'CATEGORY: BlockChain', links: BLOCKCHAIN_LINKS },
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
          {meta.title} 카테고리 뉴스를 모아두고 있습니다. ({meta.links.length}개)
        </LogEntry>
        {meta.links.map((link, i) => (
          <LogEntry key={i} time={`[${String(i + 1).padStart(3, '0')}]`} status="debug">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </LogEntry>
        ))}
      </LogContainer>
    </LogPageLayout>
  );
}
