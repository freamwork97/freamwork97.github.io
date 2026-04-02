import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';
import Badge from '@/components/atoms/Badge/Badge';

const SUB_NAV = [
  { label: '회원제 게시판',   href: 'https://github.com/freamwork97/spring_member_board_project', external: true },
  { label: '주식정보 사이트', href: 'https://github.com/freamwork97/Test_project',               external: true },
  { label: '뉴스분류',       href: 'https://github.com/freamwork97/sesac_team_project_dl',       external: true },
];

export default function ProjectPage() {
  return (
    <LogPageLayout title="Projects" subNav={SUB_NAV}>
      <LogContainer streamName="LOG_STREAM: projects.log" meta="STATUS: STABLE">
        <LogEntry time="[SYSTEM]" status="info">
          진행한 프로젝트 흔적들을 모아두었습니다.
        </LogEntry>
        <LogEntry time="[GUIDE]" status="success">
          위의 메뉴를 누르면 GitHub 저장소로 이동합니다.
        </LogEntry>
        <LogEntry time="[INDEX]" status="debug">
          Scanning project repositories...
          <div>
            <Badge>회원제 게시판</Badge>
            <Badge>주식정보 사이트</Badge>
            <Badge>뉴스분류</Badge>
          </div>
        </LogEntry>
      </LogContainer>
    </LogPageLayout>
  );
}
