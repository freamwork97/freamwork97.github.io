import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';

const REPOS = [
  { label: 'Python (2023)', href: 'https://github.com/freamwork97/python_TIS',  desc: 'Python 기초 학습 기록' },
  { label: 'Python (2024)', href: 'https://github.com/freamwork97/python_TIS2', desc: 'Python 심화 학습 기록' },
  { label: 'C++',           href: 'https://github.com/freamwork97/cpp_TIS',     desc: 'C++ 학습 기록' },
  { label: 'Java',          href: 'https://github.com/freamwork97/java_TIS',    desc: 'Java 학습 기록' },
  { label: 'Data',          href: 'https://github.com/freamwork97/Data_TIS',    desc: '데이터 분석 학습 기록' },
  { label: 'Algorithm',     href: 'https://github.com/freamwork97/Algorithm',   desc: '알고리즘 풀이 기록' },
];

export default function TISPage() {
  return (
    <LogPageLayout title="TIS">
      <LogContainer streamName="LOG_STREAM: study.log" meta="STATUS: ACTIVE">
        <LogEntry time="[SYSTEM]" status="info">
          Things I Studied — 공부한 흔적들을 모아두고 있습니다.
        </LogEntry>
        {REPOS.map((repo, i) => (
          <LogEntry key={i} time={`[${String(i + 1).padStart(2, '0')}]`} status="debug">
            <a href={repo.href} target="_blank" rel="noopener noreferrer">
              {repo.label}
            </a>
            {' — '}{repo.desc}
          </LogEntry>
        ))}
      </LogContainer>
    </LogPageLayout>
  );
}
