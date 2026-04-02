import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';
import Badge from '@/components/atoms/Badge/Badge';
import { NEWS_SUB_NAV } from './newsData';

export default function NewsPage() {
  return (
    <LogPageLayout title="News" subNav={NEWS_SUB_NAV}>
      <LogContainer streamName="LOG_STREAM: news.log" meta="STATUS: UPDATED">
        <LogEntry time="[SYSTEM]" status="info">
          마음에 드는 뉴스들을 모아두고 있습니다.
        </LogEntry>
        <LogEntry time="[GUIDE]" status="success">
          위의 카테고리를 선택하여 뉴스를 확인해보세요.
        </LogEntry>
        <LogEntry time="[INDEX]" status="debug">
          Scanning news categories...
          <div>
            <Badge>Economy</Badge>
            <Badge>IT</Badge>
            <Badge>BlockChain</Badge>
          </div>
        </LogEntry>
      </LogContainer>
    </LogPageLayout>
  );
}
