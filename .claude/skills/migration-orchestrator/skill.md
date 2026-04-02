---
name: migration-orchestrator
description: "정적 HTML 사이트를 React/Next.js 풀스택 앱으로 마이그레이션하는 전체 파이프라인을 조율하는 오케스트레이터. '마이그레이션 시작', '사이트를 Next.js로 전환', '풀스택으로 바꿔줘', 'github.io에 배포' 등의 요청 시 반드시 이 스킬을 사용할 것. 와이어프레임 → 디자인 → FE/BE 구현 → 배포까지 에이전트 팀으로 자동화한다."
---

# Migration Orchestrator

`freamwork97.github.io` 정적 사이트를 Next.js 풀스택 앱으로 마이그레이션하는 에이전트 팀 파이프라인.

## 실행 모드: 에이전트 팀 (파이프라인 + 팬아웃 복합)

```
Phase 1: 분석 (coordinator 단독)
Phase 2: 디자인 팀 (design-agent)
Phase 3: 구현 팀 (frontend-agent + backend-agent 병렬)
Phase 4: 배포 팀 (deploy-agent)
```

## 에이전트 구성

| 팀원 | 에이전트 타입 | 역할 | 스킬 | 출력 |
|------|-------------|------|------|------|
| coordinator | migration-coordinator | 파이프라인 리더 | migration-orchestrator | _workspace/ 관리 |
| design-agent | design-agent | 와이어프레임 & 디자인 시스템 | wireframe-design | 02_wireframes, 02_design-tokens, 02_component-hierarchy |
| frontend-agent | frontend-agent | Next.js 구현 | nextjs-migration | src/ 코드, 03b_fe-progress |
| backend-agent | backend-agent | API 설계 & 구현 | api-design | 03a_api-contract.yaml, API 코드 |
| deploy-agent | deploy-agent | 빌드 & 배포 | github-pages-deploy | .github/workflows/deploy.yml |

## 워크플로우

### Phase 0: 준비

1. 작업 디렉토리 생성: `_workspace/`
2. 사용자 입력 확인:
   - 마이그레이션 범위 (전체 / 특정 페이지)
   - 백엔드 필요 여부 (정적 JSON / Vercel Functions)
   - 디자인 유지 여부

### Phase 1: 현황 분석 (coordinator 단독)

coordinator가 직접 수행:

1. 기존 HTML 파일 목록 및 페이지 인벤토리 작성
2. 각 페이지의 콘텐츠 영역, 네비게이션, 재사용 요소 식별
3. 기존 CSS에서 색상, 폰트, 간격 값 추출
4. 콘텐츠 모델 도출 (어떤 데이터가 필요한가)
5. 산출물 저장: `_workspace/01_analysis.md`

### Phase 2: 디자인 팀 구성

```
TeamCreate(
  team_name: "design-team",
  members: [
    {
      name: "design-agent",
      agent_type: "design-agent",
      model: "opus",
      prompt: "Phase 2 시작. _workspace/01_analysis.md 를 읽고 wireframe-design 스킬을 사용하여 와이어프레임과 디자인 시스템을 설계하라. 완료 시 coordinator에게 알릴 것."
    }
  ]
)

TaskCreate(tasks: [
  { title: "페이지별 와이어프레임 작성", assignee: "design-agent",
    description: "_workspace/02_wireframes.md 에 저장" },
  { title: "디자인 토큰 정의", assignee: "design-agent",
    description: "_workspace/02_design-tokens.md 에 저장" },
  { title: "컴포넌트 계층 구조 도출", assignee: "design-agent",
    description: "_workspace/02_component-hierarchy.md 에 저장" }
])
```

Phase 2 완료 확인 후 TeamDelete("design-team").

### Phase 3: 구현 팀 구성

**Phase 3a: API 계약 협의 (병렬 협업)**

```
TeamCreate(
  team_name: "impl-team",
  members: [
    {
      name: "frontend-agent",
      agent_type: "frontend-agent",
      model: "opus",
      prompt: "Phase 3a 시작. _workspace/02_*.md 를 읽고 API 계약 협의를 위해 backend-agent와 소통하라. api-design 스킬 참조."
    },
    {
      name: "backend-agent",
      agent_type: "backend-agent",
      model: "opus",
      prompt: "Phase 3a 시작. _workspace/01_analysis.md와 02_component-hierarchy.md를 읽고 OpenAPI spec 초안을 _workspace/03a_api-contract-draft.yaml 에 작성한 뒤 frontend-agent에게 경로를 SendMessage로 알려라."
    }
  ]
)

TaskCreate(tasks: [
  { title: "API 계약 초안 작성", assignee: "backend-agent",
    description: "OpenAPI 3.0 spec → _workspace/03a_api-contract-draft.yaml" },
  { title: "API 계약 검토", assignee: "frontend-agent",
    description: "backend-agent 초안 검토 후 SendMessage로 의견 전달",
    depends_on: ["API 계약 초안 작성"] },
  { title: "API 계약 확정", assignee: "backend-agent",
    description: "FE 의견 반영 → _workspace/03a_api-contract.yaml 확정본",
    depends_on: ["API 계약 검토"] }
])
```

**Phase 3b: 병렬 구현 (FE + BE 동시)**

계약 확정 후:

```
TaskCreate(tasks: [
  { title: "Next.js 컴포넌트 구현", assignee: "frontend-agent",
    description: "nextjs-migration 스킬 사용. src/ 에 구현" },
  { title: "API 구현", assignee: "backend-agent",
    description: "api-design 스킬 사용. 정적 JSON 또는 Vercel Functions" }
])
```

FE와 BE 모두 완료 확인 후 TeamDelete("impl-team").

### Phase 4: 배포 팀 구성

```
TeamCreate(
  team_name: "deploy-team",
  members: [
    {
      name: "deploy-agent",
      agent_type: "deploy-agent",
      model: "opus",
      prompt: "Phase 4 시작. github-pages-deploy 스킬을 사용하여 Next.js 정적 빌드 및 freamwork97.github.io 배포 파이프라인을 구성하라."
    }
  ]
)

TaskCreate(tasks: [
  { title: "빌드 설정 검증", assignee: "deploy-agent",
    description: "next.config.js output:export, .nojekyll 확인" },
  { title: "GitHub Actions 워크플로우 작성", assignee: "deploy-agent",
    description: ".github/workflows/deploy.yml 생성" },
  { title: "배포 검증", assignee: "deploy-agent",
    description: "배포 URL 접근 확인 후 _workspace/04_deploy-report.md 작성" }
])
```

### Phase 5: 정리

1. 활성 팀이 있으면 TeamDelete
2. `_workspace/` 보존 (감사 추적용)
3. 사용자에게 결과 요약 보고:
   - 배포 URL: `https://freamwork97.github.io`
   - 생성된 컴포넌트 수
   - API 엔드포인트 목록
   - 남은 작업 (있다면)

## 데이터 흐름

```
[분석] → 01_analysis.md
    ↓
[디자인] → 02_wireframes.md
         → 02_design-tokens.md
         → 02_component-hierarchy.md
    ↓
[API 계약] → 03a_api-contract-draft.yaml
  FE ←SendMessage→ BE
         → 03a_api-contract.yaml (확정)
    ↓ (병렬)
[FE 구현] → src/app/*, src/components/*
[BE 구현] → public/api/*.json 또는 vercel-functions/
    ↓
[배포] → .github/workflows/deploy.yml
       → https://freamwork97.github.io
```

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 팀원 1명 실패 | SendMessage 상태 확인 → 재시작. 재실패 시 coordinator가 직접 수행 |
| Phase 2 산출물 불완전 | design-agent 재시작, `01_analysis.md` 재전달 |
| API 계약 합의 실패 | coordinator가 중재 → 최소 API 스펙으로 축소 후 진행 |
| 빌드 실패 | deploy-agent가 에러 분석 → frontend-agent에게 수정 요청 |
| 팀원 과반 실패 | 사용자에게 알리고 진행 여부 확인 |
| 데이터 충돌 | 출처 병기 후 보존, coordinator가 최종 판단 |

## 테스트 시나리오

### 정상 흐름

1. 사용자: "사이트를 Next.js로 마이그레이션하고 github.io에 배포해줘"
2. Phase 1: coordinator가 10개 HTML 파일 분석 → `01_analysis.md` 생성
3. Phase 2: design-agent가 와이어프레임 + 디자인 토큰 작성 → 3개 파일 생성
4. Phase 3a: BE가 API 초안 작성 → FE 검토 → 계약 확정
5. Phase 3b: FE + BE 병렬 구현 (약 20개 컴포넌트, JSON API)
6. Phase 4: deploy-agent가 Actions 워크플로우 작성 + 배포
7. 예상 결과: `https://freamwork97.github.io` 에 Next.js 앱 배포 완료

### 에러 흐름

1. Phase 3b에서 frontend-agent가 `generateStaticParams` 누락으로 빌드 실패
2. deploy-agent가 에러 감지 → frontend-agent에게 SendMessage
3. frontend-agent가 동적 라우트에 `generateStaticParams` 추가
4. deploy-agent가 재빌드 → 성공
5. `04_deploy-report.md`에 "빌드 1회 재시도 후 성공" 기록
