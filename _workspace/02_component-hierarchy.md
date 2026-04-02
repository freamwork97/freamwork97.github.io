# Phase 2: 컴포넌트 계층 구조

> Atomic Design 기반 분류. 기존 터미널/로그 테마를 100% 보존하며 React 컴포넌트로 재구조화.
>
> **배포 전략**: `next export` → `out/` → GitHub Pages 직접 배포. 서버 없음.
> - 모든 콘텐츠는 빌드 타임에 결정 (완전 정적)
> - Server Actions, API Routes 불필요
> - 데이터: `src/data/*.ts` 상수 또는 빌드 타임 JSON import
> - `'use client'`는 실제 사용자 상호작용이 있는 컴포넌트에만 사용

---

## 트리 구조 개요

```
src/components/
├── atoms/
│   ├── Button/
│   ├── Badge/
│   ├── StatusDot/
│   ├── TerminalCursor/
│   └── TerminalDots/
├── molecules/
│   ├── LogEntry/
│   ├── NavItem/
│   ├── LinkCard/
│   └── SocialButton/
├── organisms/
│   ├── Header/
│   ├── Footer/
│   ├── LogContainer/
│   ├── TerminalHero/
│   ├── CardGrid/
│   └── SubNav/
├── templates/
│   ├── PageLayout/
│   └── LogPageLayout/
└── (pages → src/app/ 라우트)
```

---

## Atoms

### 1. Button

터미널 테마의 액션 버튼. 404 페이지 등에서 사용.

```typescript
// src/components/atoms/Button/Button.tsx

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  href?: string;              // 있으면 <a>, 없으면 <button>
  onClick?: () => void;
  icon?: React.ReactNode;     // 좌측 아이콘 (예: ↩, ←)
  className?: string;
}

// 매핑:
// variant="primary"   → error-btn-primary (green border, green bg/10%)
// variant="secondary" → error-btn-secondary (neutral border)
// font: JetBrains Mono, 0.78rem, font-weight 600
// hover: translateY(-2px), box-shadow
```

### 2. Badge (LogLabel)

인라인 태그 뱃지. 기술스택, 카테고리 표시에 사용.

```typescript
// src/components/atoms/Badge/Badge.tsx

interface BadgeProps {
  children: React.ReactNode;  // 예: "Python", "FastAPI"
  className?: string;
}

// 매핑: .log-label
// bg-tertiary, border-main, text-secondary
// font: 10.5px JetBrains Mono
// padding: 1px 7px, border-radius 3px
```

### 3. StatusDot

카드 및 navbar 상태 표시 점.

```typescript
// src/components/atoms/StatusDot/StatusDot.tsx

interface StatusDotProps {
  color?: 'green' | 'purple' | 'yellow' | 'blue' | 'orange' | 'cyan';
  pulse?: boolean;   // true: pulse-glow 애니메이션 적용
  size?: 'sm' | 'md'; // sm: 5px (navbar), md: 6px (card)
  className?: string;
}

// box-shadow: 0 0 6~8px 해당 색상
// pulse=true → animation: pulse-glow 1s/1.5s infinite alternate
```

### 4. TerminalCursor

깜빡이는 커서 블록.

```typescript
// src/components/atoms/TerminalCursor/TerminalCursor.tsx

interface TerminalCursorProps {
  className?: string;
}

// width: 7px, height: 1em
// background: --color-status-success
// animation: blink 1s infinite
```

### 5. TerminalDots

터미널/로그 헤더의 ●●● 3색 점.

```typescript
// src/components/atoms/TerminalDots/TerminalDots.tsx

interface TerminalDotsProps {
  size?: 'sm' | 'md';   // sm: 9px (log-dot), md: 10px (terminal-dot)
  className?: string;
}

// 3개의 span: red(#ff5f57), yellow(#ffbd2e), green(#28c941)
// display: flex, gap: 5~6px
// border-radius: 50%
```

---

## Molecules

### 6. LogEntry

로그 컨테이너 내부의 개별 로그 행.

```typescript
// src/components/molecules/LogEntry/LogEntry.tsx

type LogStatus = 'info' | 'success' | 'warn' | 'debug';

interface LogEntryProps {
  time: string;              // 예: "[16:44:09]", "[SYSTEM]", "[2016-2023]"
  status: LogStatus;         // left-border 색상 + 상태 텍스트 결정
  statusLabel?: string;      // 커스텀 라벨. 예: "[WATCH]" (기본: "[INFO]" 등)
  children: React.ReactNode; // log-content 영역 (HTML 허용: <strong>, Badge 등)
  className?: string;
}

// 매핑: .log-entry + .log-entry.{status}
// display: flex, gap: 12px
// log-time: text-dim, min-width 80px, 11px
// log-status: font-weight 700, min-width 76px, 11px
// log-content: text-primary, flex-grow 1, 12.5px
// status별 border-left-color & background rgba
// hover: rgba 강화
```

### 7. NavItem

Header navbar의 개별 네비게이션 링크.

```typescript
// src/components/molecules/NavItem/NavItem.tsx

interface NavItemProps {
  href: string;
  label: string;        // 예: "프로필", "TIS"
  isActive?: boolean;   // 현재 페이지 여부
  className?: string;
}

// 매핑: .nav-link
// ::before → "[ ]" (기본), "[✓]" (hover/active)
// font: 12px, font-weight 500
// active: green bg/8%, green border/25%
// hover: bg-tertiary, border-main
// Next.js Link 컴포넌트 사용
// pathname 비교로 isActive 자동 판별 가능
```

### 8. LinkCard

홈페이지의 프로젝트/섹션 카드.

```typescript
// src/components/molecules/LinkCard/LinkCard.tsx

type CardTheme = 'profile' | 'tis' | 'projects' | 'news' | 'now' | 'deploy';

interface LinkCardProps {
  tcId: string;           // 예: "001"
  version: string;        // 예: "v1.2.0", "DAILY", "BUILD"
  statusText: string;     // 예: "PASSED", "SYNCED", "STABLE"
  title: string;          // 예: "Profile"
  tagline: string;        // 카드 설명
  href: string;           // 링크 경로
  theme: CardTheme;       // 카드별 accent 색상 결정
  animationDelay?: number; // fadeInUp delay (초)
  className?: string;
}

// 매핑: .link-card + .card-{theme}
// 구조: card-meta(tcId + version) → status-indicator(StatusDot + statusText) → <a> → tagline
// border-left: 3px solid (theme accent)
// hover: translateY(-6px) rotate(-0.5deg), box-shadow
// ::before: radial-gradient(theme color)
// fadeInUp animation with delay
```

### 9. SocialButton

소셜 링크 버튼 (GitHub, Email 등).

```typescript
// src/components/molecules/SocialButton/SocialButton.tsx

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;    // SVG 아이콘
  label: string;             // 예: "GitHub", "Email"
  external?: boolean;        // true → target="_blank" rel="noopener noreferrer"
  className?: string;
}

// 매핑: .social-btn-log
// bg-primary, border-main, text-secondary
// hover: bg-tertiary, info-blue border/color, translateY(-3px)
// font: 0.82rem JetBrains Mono
// svg: opacity 0.7 → 1 on hover
```

---

## Organisms

### 10. Header

전체 사이트 최상단 네비게이션 바.

```typescript
// src/components/organisms/Header/Header.tsx
// 'use client' — 모바일 메뉴 토글 state 필요

interface HeaderProps {
  className?: string;
}

// 내부 구성:
// - <Link> navbar-brand: "> Windra [v2.0]" (blink cursor ::before)
// - <span> navbar-status: "● ALL TESTS PASSED" (StatusDot pulse + text)
// - 햄버거 버튼 (모바일, useState 토글)
// - <nav> NavItem[] × 6 (프로필, TIS, 프로젝트, 뉴스, Now, Deploy)
//
// sticky top, bg-secondary, border-bottom
// box-shadow: 0 1px 0 border-main, 0 4px 16px rgba(0,0,0,0.4)
// z-index: 1000
//
// Bootstrap 대체:
// - collapse → CSS max-height transition + overflow hidden
// - navbar-toggler → <button> with border-main
// - 반응형: @media(max-width:991px) → status 숨김, 세로 링크
```

### 11. Footer

전체 사이트 하단 푸터.

```typescript
// src/components/organisms/Footer/Footer.tsx

interface FooterProps {
  className?: string;
}

// 구성:
// - ::before gradient line (green → blue → transparent)
// - "✓ BUILD PASSED | 5 SUITES | 0 FAILURES" (footer-meta)
// - "> (c) 2025 windra. Built with Passion."
// border-top, bg-secondary, text-secondary
// margin-top: auto (flex 하단 고정)
```

### 12. LogContainer

로그 스타일 콘텐츠 컨테이너. Profile, TIS, Project, News, Now, Deploy 모든 콘텐츠 페이지에서 사용.

```typescript
// src/components/organisms/LogContainer/LogContainer.tsx

interface LogContainerProps {
  streamName: string;     // 예: "identity.log", "study.log"
  meta?: string;          // 예: "SIZE: 12.4KB", "STATUS: ACTIVE"
  children: React.ReactNode; // LogEntry[] 또는 임의 콘텐츠
  className?: string;
}

// 구조:
// ┌─ log-container ──────────────────────────┐
// │ ::before (green gradient top line)       │
// │ ┌─ log-header ─────────────────────────┐ │
// │ │ TerminalDots(sm) | streamName | meta │ │
// │ └─────────────────────────────────────┘ │
// │ ┌─ log-body ───────────────────────────┐ │
// │ │ {children}                           │ │
// │ └─────────────────────────────────────┘ │
// └──────────────────────────────────────────┘
//
// bg-secondary, border-main, border-radius 8px
// box-shadow: 0 4px 24px rgba(0,0,0,0.5)
// hover: border-color → pass-green
```

### 13. TerminalHero

홈페이지 인터랙티브 터미널. 명령어 입력 및 응답 처리.

```typescript
// src/components/organisms/TerminalHero/TerminalHero.tsx
// 'use client' — 입력 핸들링, state 관리 필요

interface TerminalCommand {
  name: string;
  handler: (args: string[]) => TerminalLine[] | null; // null = clear
}

interface TerminalLine {
  text: string;
  cls: 'green' | 'blue' | 'yellow' | 'red' | 'dim' | 'purple' | '';
}

interface TerminalHeroProps {
  commands?: TerminalCommand[]; // 커스텀 명령어 (기본 내장: help, whoami, skills, ls, goto, contact, date, clear)
  className?: string;
}

// 내부 state:
// - outputLines: TerminalLine[]
// - inputValue: string
// - history: string[]
// - historyIndex: number
//
// 구조:
// ┌─ inter-terminal ───────────────────────────────┐
// │ ┌─ terminal-header ──────────────────────────┐ │
// │ │ TerminalDots(md) | "windra@portfolio~bash" │ │
// │ │                           [hint: type help]│ │
// │ └────────────────────────────────────────────┘ │
// │ ┌─ inter-output (100px, scroll) ─────────────┐ │
// │ │ {outputLines.map(line => <InterLine />)}    │ │
// │ └────────────────────────────────────────────┘ │
// │ ┌─ inter-input-line ─────────────────────────┐ │
// │ │ "windra@portfolio:~$" [input___________]   │ │
// │ └────────────────────────────────────────────┘ │
// └────────────────────────────────────────────────┘
//
// 키 이벤트: Enter(실행), ArrowUp/Down(히스토리)
// goto 명령어: next/navigation의 router.push() 사용
// XSS 방지: escapeHtml 유틸 적용
```

### 14. CardGrid

홈페이지 카드 그리드 레이아웃.

```typescript
// src/components/organisms/CardGrid/CardGrid.tsx

interface CardGridProps {
  children: React.ReactNode;  // LinkCard[]
  className?: string;
}

// 기존 cards-row-top + cards-row-bottom 통합
// display: flex, flex-wrap, justify-content: center
// gap: 1.25rem
// 반응형: 3열 → 2열(860px) → 1열(576px)
// 또는 row별 분리: <CardRow> 컴포넌트로 구성
```

### 15. SubNav

하위 네비게이션 바. TIS, Project, News, Deploy 페이지에서 사용.

```typescript
// src/components/organisms/SubNav/SubNav.tsx

interface SubNavLink {
  label: string;        // 예: "Python", "경제"
  href: string;         // 내부 또는 외부 URL
  external?: boolean;   // true → target="_blank"
  isActive?: boolean;   // 현재 선택된 항목
}

interface SubNavProps {
  links: SubNavLink[];
  className?: string;
}

// 매핑: .sub-nav + .sub-nav-links + .sub-nav-link
// bg-secondary, border-bottom
// flex wrap, gap 0.4rem, center
// 각 링크: bg-primary, border-main, "→" prefix
// hover: info-blue 강조, arrow translateX(2px)
// external: hover 시 "↗" suffix 표시
// active: green color, green border
```

---

## Templates

### 16. PageLayout

Header + main + Footer 기본 레이아웃. `layout.tsx`에서 사용.

```typescript
// src/components/templates/PageLayout/PageLayout.tsx
// (또는 src/app/layout.tsx에 직접 통합)

interface PageLayoutProps {
  children: React.ReactNode;
}

// 구조:
// <html>
//   <body className={`${jetbrainsMono.variable} ${spaceMono.variable}`}>
//     <Header />
//     <main>{children}</main>
//     <Footer />
//   </body>
// </html>
//
// body: flex column, min-height 100vh
// main: flex 1, position relative, z-index 1
```

### 17. LogPageLayout

로그 스타일 콘텐츠 페이지의 공통 레이아웃. Profile, TIS, Project, News, Now, Deploy에서 사용.

```typescript
// src/components/templates/LogPageLayout/LogPageLayout.tsx

interface LogPageLayoutProps {
  title: string;           // 예: "Profile", "TIS", "News"
  subNav?: SubNavLink[];   // 있으면 SubNav 렌더링
  children: React.ReactNode; // LogContainer[] 등 페이지 콘텐츠
  className?: string;
}

// 구조:
// {subNav && <SubNav links={subNav} />}
// <main className="container my-4">
//   <h1 className="page-title-log">{title}</h1>
//                                    ^"$ cat" prefix (::before)
//   {children}
// </main>
```

---

## Pages (App Router)

> **데이터 전략 (확정)**: 서버 없음. `next export` 정적 빌드.
> - 콘텐츠 데이터는 `src/data/*.ts`에 TypeScript 상수로 정의 (타입 안전, import만으로 사용)
> - 또는 `import data from '@/data/profile.json'` 형태로 JSON 직접 import
> - Server Actions, API Routes, runtime fetch 모두 불필요
> - `mailto:` 링크, `target="_blank"` 외부 링크만 사용 (동적 기능 없음)

### 데이터 파일 구조

```
src/data/
├── profile.ts       ← 이름, 역할, bio, 기술스택, 학력, 경력, 소셜링크
├── projects.ts      ← [{id, title, description, tags[], githubUrl}]
├── tis.ts           ← [{category, description, githubUrl}]
├── news.ts          ← [{category, items[]}] 또는 카테고리별 분리
├── now.ts           ← [{item, description, status}]
├── deploy.ts        ← [{title, url, description, tech[]}]
└── cards.ts         ← 홈페이지 6개 카드 데이터
```

### 18. HomePage (`src/app/page.tsx`)

```typescript
// Server Component (기본)
// TerminalHero만 'use client' 분리

import { CARDS } from '@/data/cards';
// 구성: TerminalHero + CardGrid(LinkCard × 6)
// 카드 데이터: src/data/cards.ts 상수 import
```

### 19. ProfilePage (`src/app/profile/page.tsx`)

```typescript
// Server Component
import { PROFILE } from '@/data/profile';
// LogPageLayout(title="Profile") +
//   LogContainer("identity.log") + LogEntry[] +
//   LogContainer("history.log") + LogEntry[] +
//   LogContainer("contributions.log") + <img> +
//   SocialButton[]
// 데이터: src/data/profile.ts 상수 import
```

### 20. TISPage (`src/app/tis/page.tsx`)

```typescript
// Server Component
import { TIS_CATEGORIES } from '@/data/tis';
// LogPageLayout(title="TIS", subNav=[Python,C++,Java,Data,Algorithm]) +
//   LogContainer("study.log") + LogEntry[]
// SubNav 링크: GitHub 외부 링크 (external=true)
// 데이터: src/data/tis.ts 상수 import
```

### 21. ProjectPage (`src/app/project/page.tsx`)

```typescript
// Server Component
import { PROJECTS } from '@/data/projects';
// LogPageLayout(title="Projects", subNav=[회원제게시판,주식정보사이트,뉴스분류]) +
//   LogContainer("projects.log") + LogEntry[]
// SubNav 링크: GitHub 외부 링크 (external=true)
// 데이터: src/data/projects.ts 상수 import
```

### 22. NewsPage (`src/app/news/page.tsx`)

```typescript
// Server Component — 인덱스 페이지
import { NEWS_CATEGORIES } from '@/data/news';
// LogPageLayout(title="News", subNav=[경제,IT,블록체인]) +
//   LogContainer("news.log") + LogEntry[]
// SubNav 링크: /news/economy, /news/it, /news/blockchain (내부 링크)
```

### 23. NewsCategoryPage (`src/app/news/[category]/page.tsx`)

```typescript
// Server Component
import { getNewsByCategory, NEWS_CATEGORIES } from '@/data/news';
// generateStaticParams → ['blockchain', 'economy', 'it']
// LogPageLayout(title="News/{category}", subNav=[경제,IT,블록체인]) +
//   LogContainer("news_{category}.log") + 뉴스 링크 리스트 + Pagination
// 데이터: src/data/news.ts에서 카테고리별 필터링
// Pagination: 정적이므로 클라이언트 사이드 페이지네이션 또는 빌드 타임 분할
```

### 24. NowPage (`src/app/now/page.tsx`)

```typescript
// Server Component
import { NOW_ITEMS } from '@/data/now';
// LogPageLayout(title="Now") +  (SubNav 없음)
//   LogContainer("now.log") + LogEntry[] × 4
// 데이터: src/data/now.ts 상수 import
```

### 25. DeployPage (`src/app/deploy/page.tsx`)

```typescript
// Server Component
import { DEPLOYED_SERVICES } from '@/data/deploy';
// LogPageLayout(title="Deploy", subNav=[Financial Report Generator]) +
//   LogContainer("deploy.log") + LogEntry[]
// SubNav 링크: 외부 서비스 URL (external=true)
// 데이터: src/data/deploy.ts 상수 import
```

### 26. NotFoundPage (`src/app/not-found.tsx`)

```typescript
// 'use client' — history.back() 사용
// Header/SubNav 없음, Footer만 포함
// 독립 레이아웃:
//   error-wrap (수직 중앙) +
//     error-terminal (TerminalDots + 404 glitch + error-log + Button[])
// glitch 애니메이션: ::after pseudo-element, clip-path 기반
// 이메일: mailto: 링크, 외부 링크: target="_blank"
```

---

## 컴포넌트 의존성 맵

```
PageLayout
├── Header
│   ├── TerminalCursor (brand ::before blink)
│   ├── StatusDot (navbar-status)
│   └── NavItem × 6
├── main
│   ├── HomePage
│   │   ├── TerminalHero ('use client')
│   │   │   └── TerminalDots
│   │   └── CardGrid
│   │       └── LinkCard × 6
│   │           └── StatusDot
│   │
│   ├── ProfilePage
│   │   └── LogPageLayout
│   │       ├── LogContainer × 3
│   │       │   ├── TerminalDots
│   │       │   └── LogEntry × N
│   │       │       └── Badge × N
│   │       └── SocialButton × 2
│   │
│   ├── TISPage / ProjectPage / DeployPage
│   │   └── LogPageLayout
│   │       ├── SubNav
│   │       └── LogContainer
│   │           ├── TerminalDots
│   │           └── LogEntry × N
│   │               └── Badge × N
│   │
│   ├── NewsPage
│   │   └── LogPageLayout
│   │       ├── SubNav
│   │       └── LogContainer
│   │
│   ├── NewsCategoryPage
│   │   └── LogPageLayout
│   │       ├── SubNav (active 표시)
│   │       └── LogContainer + Pagination
│   │
│   ├── NowPage
│   │   └── LogPageLayout (SubNav 없음)
│   │       └── LogContainer
│   │           └── LogEntry × 4
│   │
│   └── NotFoundPage
│       ├── TerminalDots
│       └── Button × 2
│
└── Footer
```

---

## 'use client' 경계

> **원칙**: `next export` 정적 빌드이므로 Server Components는 빌드 타임에만 실행됨.
> `'use client'`는 실제 사용자 상호작용(입력, 토글, 브라우저 API)이 필요한 컴포넌트에만 사용.
> Server Actions, API Routes는 사용하지 않음.

| 컴포넌트 | 렌더링 | 이유 |
|---------|--------|-----|
| TerminalHero | `'use client'` | 키보드 입력, state 관리, DOM 조작, router.push |
| Header | `'use client'` | 모바일 메뉴 토글 useState |
| NotFoundPage | `'use client'` | history.back() |
| 나머지 전체 | Server Component (빌드 타임) | 정적 콘텐츠, 데이터는 import로 주입 |

> Header는 클라이언트지만 NavItem은 서버 컴포넌트로 분리 가능 (children으로 전달).

---

## next.config 설정 (정적 빌드)

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // next export → out/ 디렉토리
  images: {
    unoptimized: true,     // GitHub Pages에서 Image Optimization 불가
  },
  trailingSlash: true,     // GitHub Pages 호환 (/profile → /profile/index.html)
};

module.exports = nextConfig;
```
