import LogPageLayout from '@/components/templates/LogPageLayout/LogPageLayout';
import LogContainer from '@/components/organisms/LogContainer/LogContainer';
import LogEntry from '@/components/molecules/LogEntry/LogEntry';

export default function NowPage() {
  return (
    <LogPageLayout title="Now">
      <LogContainer streamName="LOG_STREAM: now.log" meta="TOTAL_ENTRIES: 4">
        <LogEntry time="[FOCUS]" status="info">
          <strong>현재 집중하고 있는 것</strong><br />
          개발도 꾸준히 하고 있지만, 요즘은 만들어 보고 싶은 것을 직접 만들고
          기획하는 연습에 더 집중하고 있습니다.
        </LogEntry>
        <LogEntry time="[PLAN]" status="debug">
          <strong>기획 방식</strong><br />
          기획은 노트에 만들고 싶은 아이디어 리스트를 정리하는 수준으로 시작하고
          있습니다. 떠오르는 아이디어를 짧게 정리한 뒤, 구현 가능한 단위로 쪼개는 방식으로
          연습하고 있습니다.
        </LogEntry>
        <LogEntry time="[TOOL]" status="success">
          <strong>Claude 활용 연습</strong><br />
          정리한 아이디어는 Claude로 빠르게 구현해 보면서 검증하고 있습니다.
          단순히 결과를 받는 것보다, 더 효율적으로 원하는 결과를 만들기 위해
          프롬프트를 다듬고 작업 흐름을 개선하는 연습을 진행 중입니다.
        </LogEntry>
        <LogEntry time="[INTER]" status="warn" statusLabel="[WATCH]">
          <strong>현재 관심 사항</strong><br />
          요즘은 AI를 활용한 개발에 관심이 많습니다. 하나의 AI를 사용하지 않고,
          여러 AI(Claude, Antigravity, Codex 등)를 활용하여 개발하는 방식에
          관심이 많습니다. 현재는 Agent와 Skill을 활용해 보려고 합니다.
        </LogEntry>
      </LogContainer>
    </LogPageLayout>
  );
}
