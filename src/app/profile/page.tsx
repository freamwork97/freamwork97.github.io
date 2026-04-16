import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';
import SocialButton from '@/components/molecules/SocialButton/SocialButton';
import Badge from '@/components/atoms/Badge/Badge';
import styles from './page.module.css';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
  </svg>
);

export default function ProfilePage() {
  return (
    <LogPageLayout title="Profile">
      <LogContainer streamName="LOG_STREAM: identity.log" meta="SIZE: 12.4KB">
        <LogEntry time="[16:44:09]" status="info">
          Initializing user profile: <strong>정승용 (Windra)</strong>
        </LogEntry>
        <LogEntry time="[16:44:12]" status="info">
          Primary Role: <strong>QA Engineer × Full-Stack Developer</strong>
        </LogEntry>
        <LogEntry time="[16:44:15]" status="success">
          Bio: 개발을 좋아하는 QA 엔지니어. 지식을 테스트하고, 성장을 검증하며, 배움을 기록으로 증명합니다.
        </LogEntry>
        <LogEntry time="[16:44:20]" status="debug">
          Scanning tech stacks...
          <div>
            <Badge>Python</Badge>
            <Badge>FastAPI</Badge>
            <Badge>MySQL</Badge>
            <Badge>GitHub</Badge>
            <Badge>HTML/CSS/JS</Badge>
          </div>
        </LogEntry>
      </LogContainer>

      <LogContainer streamName="LOG_STREAM: history.log" meta="TOTAL_ENTRIES: 2">
        <LogEntry time="[2016-2023]" status="info">
          Academic context loaded: <strong>건국대학교 컴퓨터공학과</strong>
        </LogEntry>
        <LogEntry time="[2024-NOW]" status="success">
          Current process running: <strong>QA 엔지니어</strong> (2024.12.11 ~ 🟢)
        </LogEntry>
      </LogContainer>

      <LogContainer streamName="LOG_STREAM: contributions.log" meta="SOURCE: GitHub">
        <LogEntry time="[GRAPH]" status="info">
          <div>GitHub Contribution Activity — freamwork97</div>
          <div className={styles.graphWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ghchart.rshah.org/3fb950/freamwork97"
              alt="GitHub contribution graph for freamwork97"
              className={styles.graph}
              loading="lazy"
            />
          </div>
        </LogEntry>
      </LogContainer>

      <div className={styles.social}>
        <SocialButton href="https://github.com/freamwork97" icon={<GitHubIcon />} label="GitHub" external />
        <SocialButton href="mailto:freamwork@kakao.com" icon={<EmailIcon />} label="Email" />
      </div>
    </LogPageLayout>
  );
}
