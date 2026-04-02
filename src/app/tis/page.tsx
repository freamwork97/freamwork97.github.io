import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';
import Badge from '@/components/atoms/Badge/Badge';

const SUB_NAV = [
  { label: 'Python(2023)', href: 'https://github.com/freamwork97/python_TIS',  external: true },
  { label: 'Python(2024)', href: 'https://github.com/freamwork97/python_TIS2', external: true },
  { label: 'C++',          href: 'https://github.com/freamwork97/cpp_TIS',     external: true },
  { label: 'Java',         href: 'https://github.com/freamwork97/java_TIS',    external: true },
  { label: 'Data',         href: 'https://github.com/freamwork97/Data_TIS',    external: true },
  { label: 'Algorithm',    href: 'https://github.com/freamwork97/Algorithm',   external: true },
];

export default function TISPage() {
  return (
    <LogPageLayout title="TIS" subNav={SUB_NAV}>
      <LogContainer streamName="LOG_STREAM: study.log" meta="STATUS: ACTIVE">
        <LogEntry time="[SYSTEM]" status="info">
          Things I Studied — 공부한 흔적들을 모아두고 있습니다.
        </LogEntry>
        <LogEntry time="[GUIDE]" status="success">
          위의 메뉴를 누르면 GitHub 저장소로 이동합니다.
        </LogEntry>
        <LogEntry time="[INDEX]" status="debug">
          Scanning study categories...
          <div>
            <Badge>Python</Badge>
            <Badge>C++</Badge>
            <Badge>Java</Badge>
            <Badge>Data</Badge>
            <Badge>Algorithm</Badge>
          </div>
        </LogEntry>
      </LogContainer>
    </LogPageLayout>
  );
}
