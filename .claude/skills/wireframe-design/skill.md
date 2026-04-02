---
name: wireframe-design
description: "기존 HTML 사이트를 분석하여 React 마이그레이션용 와이어프레임, 디자인 토큰, 컴포넌트 계층 구조를 설계하는 스킬. '와이어프레임 그려줘', '디자인 시스템 만들어줘', '컴포넌트 구조 설계해줘', '디자인 토큰 정의해줘' 요청 시 반드시 이 스킬을 사용할 것."
---

# Wireframe & Design System Skill

기존 HTML/CSS에서 React 컴포넌트 기반 디자인 시스템으로 전환하기 위한 설계 작업을 수행한다.

## Step 1: 기존 사이트 분석

`_workspace/01_analysis.md` 를 읽어 다음을 파악한다:

- 페이지 목록 및 각 페이지의 주요 섹션
- 반복 등장하는 UI 패턴 (헤더, 카드, 리스트 등)
- 기존 CSS의 색상, 폰트, 간격 값
- 모바일 반응형 여부

## Step 2: 와이어프레임 작성

각 페이지에 대해 ASCII/Markdown 와이어프레임을 작성한다. 상세 패턴은 `references/design-tokens.md` 참조.

**형식 예시:**
```
┌─────────────────────────────┐
│ [HEADER] Logo  Nav  Nav  Nav│
├─────────────────────────────┤
│                             │
│  [HERO] Terminal 텍스트      │
│  > 명령어 입력 영역          │
│                             │
├─────────────────────────────┤
│ [CARD] [CARD] [CARD]        │
└─────────────────────────────┘
```

저장: `_workspace/02_wireframes.md`

## Step 3: 디자인 토큰 정의

기존 CSS에서 추출한 값을 CSS 커스텀 프로퍼티로 표준화한다.

**토큰 카테고리:**
- `--color-*`: 브랜드 색상, 배경, 텍스트, 강조색
- `--font-*`: 폰트 패밀리, 사이즈 스케일
- `--spacing-*`: 여백 시스템 (4px 기반)
- `--radius-*`: 테두리 반경
- `--breakpoint-*`: 반응형 분기점

저장: `_workspace/02_design-tokens.md`

## Step 4: 컴포넌트 계층 구조 도출

Atomic Design 기준으로 컴포넌트를 분류한다:

| 레벨 | 예시 | Next.js 경로 |
|------|------|------------|
| Atom | Button, Input, Badge | `src/components/atoms/` |
| Molecule | NavItem, Card, SearchBar | `src/components/molecules/` |
| Organism | Header, Footer, Sidebar | `src/components/organisms/` |
| Template | PageLayout | `src/components/templates/` |
| Page | HomePage, ProfilePage | `src/app/*/page.tsx` |

저장: `_workspace/02_component-hierarchy.md`

## 출력 형식

### `02_wireframes.md` 구조
```markdown
# 와이어프레임

## {PageName}
경로: /{path}
설명: {페이지 목적}

[ASCII 와이어프레임]

### 섹션 목록
- {섹션명}: {역할}
```

### `02_design-tokens.md` 구조
```markdown
# 디자인 토큰

## 색상
| 토큰명 | 값 | 용도 |
|--------|-----|------|

## 타이포그래피
...

## 간격
...
```

### `02_component-hierarchy.md` 구조
```markdown
# 컴포넌트 계층 구조

## Atoms
- ComponentName: {역할, Props 목록}

## Molecules
...
```

## 주의사항

- `freamwork97.github.io`는 터미널/로그 스타일의 개성 있는 테마를 사용한다. 이 정체성을 반드시 보존한다.
- 외부 디자인 툴(Figma 등) 없이 텍스트 기반 산출물만 생성한다.
- 상세 토큰 패턴과 Atomic Design 예시는 `references/design-tokens.md` 참조.
