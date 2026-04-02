import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';

const PROJECTS = [
  { label: '회원제 게시판',   href: 'https://github.com/freamwork97/spring_member_board_project', desc: 'Spring Boot 기반 회원제 게시판' },
  { label: '주식정보 사이트', href: 'https://github.com/freamwork97/Test_project',               desc: '주식 정보 조회 웹 사이트' },
  { label: '뉴스 분류',      href: 'https://github.com/freamwork97/sesac_team_project_dl',       desc: '딥러닝 기반 뉴스 카테고리 분류' },
];

export default function ProjectPage() {
  return (
    <LogPageLayout title="Projects">
      <LogContainer streamName="LOG_STREAM: projects.log" meta="STATUS: STABLE">
        <LogEntry time="[SYSTEM]" status="info">
          진행한 프로젝트 흔적들을 모아두었습니다.
        </LogEntry>
        {PROJECTS.map((project, i) => (
          <LogEntry key={i} time={`[${String(i + 1).padStart(2, '0')}]`} status="debug">
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              {project.label}
            </a>
            {' — '}{project.desc}
          </LogEntry>
        ))}
      </LogContainer>
    </LogPageLayout>
  );
}
