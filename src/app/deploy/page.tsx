import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';
import Badge from '@/components/atoms/Badge/Badge';

const SUB_NAV = [
  { label: 'Financial Report Generator', href: 'https://financial-report-generator-taupe.vercel.app/', external: true },
];

export default function DeployPage() {
  return (
    <LogPageLayout title="Deploy" subNav={SUB_NAV}>
      <LogContainer streamName="LOG_STREAM: deploy.log" meta="STATUS: LIVE">
        <LogEntry time="[SYSTEM]" status="info">
          배포된 서비스 목록입니다.
        </LogEntry>
        <LogEntry time="[GUIDE]" status="success">
          위의 메뉴를 누르면 배포된 서비스로 이동합니다.
        </LogEntry>
        <LogEntry time="[INDEX]" status="debug">
          Scanning deployed services...
          <div><Badge>Financial Report Generator</Badge></div>
        </LogEntry>
      </LogContainer>
    </LogPageLayout>
  );
}
