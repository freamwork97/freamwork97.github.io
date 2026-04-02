import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';

const SERVICES = [
  { label: 'Financial Report Generator', href: 'https://financial-report-generator-taupe.vercel.app/', desc: '재무 보고서 자동 생성 서비스' },
];

export default function DeployPage() {
  return (
    <LogPageLayout title="Deploy">
      <LogContainer streamName="LOG_STREAM: deploy.log" meta="STATUS: LIVE">
        <LogEntry time="[SYSTEM]" status="info">
          배포된 서비스 목록입니다.
        </LogEntry>
        {SERVICES.map((service, i) => (
          <LogEntry key={i} time={`[${String(i + 1).padStart(2, '0')}]`} status="success">
            <a href={service.href} target="_blank" rel="noopener noreferrer">
              {service.label}
            </a>
            {' — '}{service.desc}
          </LogEntry>
        ))}
      </LogContainer>
    </LogPageLayout>
  );
}
