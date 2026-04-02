# 디자인 토큰 & 와이어프레임 레퍼런스

## freamwork97.github.io 기존 테마 분석

현재 사이트는 터미널/해커 스타일 테마를 사용한다:
- 다크 배경 + 초록/청록 강조색
- 모노스페이스 폰트 (코드 느낌)
- 로그(log) 스타일 텍스트 레이아웃

## 디자인 토큰 표준 형식

```css
/* src/styles/tokens.css */
:root {
  /* 색상 */
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #111111;
  --color-text-primary: #e0e0e0;
  --color-text-secondary: #888888;
  --color-accent: #00ff88;        /* 터미널 그린 */
  --color-accent-alt: #00ccff;    /* 사이언 */
  --color-border: #333333;
  --color-error: #ff4444;

  /* 타이포그래피 */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 2rem;      /* 32px */

  /* 간격 (4px 그리드) */
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */

  /* 반경 */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;

  /* 반응형 브레이크포인트 (CSS 변수는 미디어쿼리에 직접 쓸 수 없으므로 주석으로 문서화) */
  /* sm: 640px, md: 768px, lg: 1024px, xl: 1280px */
}
```

## 와이어프레임 ASCII 패턴

### 홈페이지 (터미널 히어로)
```
┌─────────────────────────────────────────┐
│ freamwork97          [nav] [nav] [nav]  │  ← Header (organism)
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ > whoami                        │    │  ← Terminal Hero (organism)
│  │ freamwork97 — developer         │    │
│  │ > ls projects/                  │    │
│  │ [proj1] [proj2] [proj3]         │    │
│  │ > _                             │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌───────┐ ┌───────┐ ┌───────┐          │  ← Card Grid (organism)
│  │ Card  │ │ Card  │ │ Card  │          │
│  └───────┘ └───────┘ └───────┘          │
└─────────────────────────────────────────┘
│ Footer                                  │  ← Footer (organism)
└─────────────────────────────────────────┘
```

### 프로필 페이지 (로그 스타일)
```
┌─────────────────────────────────────────┐
│ [LOG] 2024-01-01 INFO: profile loaded   │  ← LogEntry (molecule) × N
│ [LOG] 2024-01-02 INFO: skill added      │
│ ...                                     │
│                                         │
│  Name: freamwork97                      │  ← ProfileCard (organism)
│  Role: developer                        │
│  Skills: [tag][tag][tag]                │
└─────────────────────────────────────────┘
```

## Atomic Design 컴포넌트 예시

### Atoms (원자)
```typescript
// Button
interface ButtonProps {
  variant: 'primary' | 'ghost' | 'terminal';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// Badge / Tag
interface BadgeProps {
  label: string;
  color?: 'accent' | 'muted' | 'error';
}

// TerminalCursor (깜빡이는 커서)
// LogTimestamp
// CodeBlock
```

### Molecules (분자)
```typescript
// NavItem: Icon + Label + Link
// Card: Title + Description + Link + optional Image
// LogEntry: [level] timestamp message
// SkillTag: Badge with hover effect
// SearchBar: Input + Button
```

### Organisms (유기체)
```typescript
// Header: Logo + Nav + MobileMenu
// Footer: Links + Copyright
// TerminalHero: 터미널 시뮬레이션 with 타이핑 효과
// CardGrid: responsive grid of Card[]
// ProjectList: 프로젝트 목록
// ProfileCard: 프로필 정보
```

## 반응형 전략

```css
/* 모바일 퍼스트 */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;           /* 모바일: 1열 */
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);  /* 태블릿: 2열 */
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);  /* 데스크탑: 3열 */
  }
}
```
