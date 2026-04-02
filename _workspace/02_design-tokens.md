# Phase 2: 디자인 토큰

> 기존 CSS 변수를 네임스페이스 정리하여 `src/styles/tokens.css`로 마이그레이션.
> Bootstrap 의존성 완전 제거. 순수 CSS (CSS Modules + global tokens).

---

## 1. 색상 토큰 (Color Tokens)

### 기존 → 신규 매핑

```css
/* src/styles/tokens.css */

:root {
  /* ─── Background ─── */
  --color-bg-primary:    #0d1117;   /* 기존 --bg-primary   | 메인 배경, 터미널 body */
  --color-bg-secondary:  #161b22;   /* 기존 --bg-secondary | 카드, 패널, navbar, footer */
  --color-bg-tertiary:   #21262d;   /* 기존 --bg-tertiary  | 헤더 바, hover 배경 */

  /* ─── Semantic Status ─── */
  --color-status-success: #3fb950;  /* 기존 --pass-green   | PASSED, 성공, 주요 accent */
  --color-status-warning: #d29922;  /* 기존 --warn-yellow  | WARN, 경고 상태 */
  --color-status-error:   #f85149;  /* 기존 --error-red    | ERROR, 실패, 404 */
  --color-status-info:    #58a6ff;  /* 기존 --info-blue    | INFO, 링크 hover */

  /* ─── Accent ─── */
  --color-accent-purple:  #bc8cff;  /* 기존 --purple-accent | DEBUG, Profile 카드 */
  --color-accent-orange:  #ff8c42;  /* 기존 --orange-accent | Now 카드 */
  --color-accent-cyan:    #39d0d8;  /* 기존 --cyan-accent   | Deploy 카드 */

  /* ─── Text ─── */
  --color-text-primary:   #c9d1d9;  /* 기존 --text-primary   | 본문, 제목 */
  --color-text-secondary: #8b949e;  /* 기존 --text-secondary | 부제, nav-link */
  --color-text-dim:       #484f58;  /* 기존 --text-dim       | 타임스탬프, 힌트 */

  /* ─── Border ─── */
  --color-border-main:    #30363d;  /* 기존 --border-main   | 주요 보더 */
  --color-border-subtle:  #21262d;  /* 기존 --border-subtle | 그리드 라인 */

  /* ─── Terminal Dots ─── */
  --color-dot-red:    #ff5f57;
  --color-dot-yellow: #ffbd2e;
  --color-dot-green:  #28c941;
}
```

### 카드별 accent 색상 (컴포넌트 레벨)

| 카드 | Accent 변수 | 값 |
|------|------------|-----|
| Profile | `--color-accent-purple` | `#bc8cff` |
| TIS | `--color-status-warning` | `#d29922` |
| Projects | `--color-status-success` | `#3fb950` |
| News | `--color-status-info` | `#58a6ff` |
| Now | `--color-accent-orange` | `#ff8c42` |
| Deploy | `--color-accent-cyan` | `#39d0d8` |

---

## 2. 타이포그래피 토큰 (Typography Tokens)

```css
:root {
  /* ─── Font Family ─── */
  --font-mono:    'JetBrains Mono', 'Space Mono', monospace;
  --font-heading: 'Space Mono', 'JetBrains Mono', monospace;

  /* ─── Font Size ─── */
  --text-xs:   9px;      /* version-badge, navbar-status, card-meta */
  --text-sm:   10.5px;   /* log-header, log-label, inter-hint */
  --text-base: 12.5px;   /* log-entry, inter-line, nav-link */
  --text-md:   14px;     /* body default */
  --text-lg:   1.15rem;  /* navbar-brand */
  --text-xl:   1.2rem;   /* card title (link-card a) */
  --text-2xl:  1.9rem;   /* page-title-log, profile-name */
  --text-3xl:  3.2rem;   /* hero-title */
  --text-4xl:  4rem;     /* 404 error-code */

  /* ─── Font Weight ─── */
  --font-light:     300;
  --font-normal:    400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;
  --font-extrabold: 800;

  /* ─── Line Height ─── */
  --leading-tight:  1.1;   /* hero-title */
  --leading-snug:   1.55;  /* card-tagline */
  --leading-normal: 1.65;  /* log-entry */
  --leading-relaxed:1.7;   /* body */

  /* ─── Letter Spacing ─── */
  --tracking-tight:  -0.03em;  /* headings */
  --tracking-normal: -0.01em;  /* body */
  --tracking-wide:   0.05em;   /* log-status, version-badge */
  --tracking-wider:  0.08em;   /* navbar-status */
  --tracking-widest: 0.15em;   /* accent-text, error-label */
}
```

### 폰트 로드 전략

```css
/* src/styles/fonts.css — next/font/google으로 대체 가능 */
/* layout.tsx에서 next/font 사용 권장:
   import { JetBrains_Mono, Space_Mono } from 'next/font/google'
*/
```

```typescript
// src/app/layout.tsx 예시
import { JetBrains_Mono, Space_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-mono',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
});
```

---

## 3. 간격 시스템 (Spacing Tokens)

```css
:root {
  /* ─── Spacing Scale (4px base) ─── */
  --space-0:   0;
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-7:   28px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;

  /* ─── Component-specific spacing ─── */
  --navbar-padding-y:  0.6rem;
  --navbar-padding-x:  2rem;
  --card-padding:      22px 22px 20px;
  --card-gap:          1.25rem;
  --log-body-padding:  16px 20px;
  --log-entry-padding: 7px 10px;
  --section-padding:   1.5rem 1.75rem;

  /* ─── Border Radius ─── */
  --radius-sm:  3px;   /* tag, badge, sub-nav-link */
  --radius-md:  4px;   /* nav-link, log-entry, error-btn */
  --radius-lg:  6px;   /* content-section, glass */
  --radius-xl:  8px;   /* card, terminal, log-container */
}
```

---

## 4. 애니메이션 토큰 (Animation Tokens)

```css
:root {
  /* ─── Transition ─── */
  --transition-base:  all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:  all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* ─── Z-Index ─── */
  --z-base:    1;
  --z-navbar:  1000;
}

/* ─── Keyframes (global) ─── */
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@keyframes scanline {
  0% { transform: translateY(0); }
  100% { transform: translateY(40px); }
}

@keyframes pulse-glow {
  from { transform: scale(1); opacity: 0.8; }
  to   { transform: scale(1.4); opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes progress-fill {
  from { width: 0%; }
  to   { width: 100%; }
}

@keyframes glitch {
  0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
  20%      { clip-path: inset(60% 0 30% 0); transform: translate(4px, 0); }
  40%      { clip-path: inset(30% 0 60% 0); transform: translate(-2px, 0); }
  60%      { clip-path: inset(80% 0 5% 0); transform: translate(3px, 0); }
  80%      { clip-path: inset(10% 0 80% 0); transform: translate(-3px, 0); }
}
```

---

## 5. Body 배경 패턴 보존 (Background Pattern)

```css
/* src/styles/globals.css */

body {
  background-color: var(--color-bg-primary);
  background-image:
    radial-gradient(
      ellipse 80% 50% at 50% -10%,
      rgba(63, 185, 80, 0.06),
      transparent
    ),
    linear-gradient(
      var(--color-border-subtle) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      var(--color-border-subtle) 1px,
      transparent 1px
    );
  background-size: 100% 100%, 40px 40px, 40px 40px;
  background-position: center, -1px -1px, -1px -1px;
  color: var(--color-text-primary);
  font-family: var(--font-mono);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  line-height: var(--leading-relaxed);
  display: flex;
  flex-direction: column;
  font-size: var(--text-md);
  letter-spacing: var(--tracking-normal);
}

/* ─── Scrollbar ─── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--color-bg-primary); }
::-webkit-scrollbar-thumb { background: var(--color-border-main); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-text-dim); }

/* ─── Selection ─── */
::selection {
  background: var(--color-status-success);
  color: var(--color-bg-primary);
}

/* ─── Focus ─── */
:focus-visible {
  outline: 2px solid var(--color-status-success);
  outline-offset: 2px;
}
```

---

## 6. Bootstrap 제거 계획

### 현재 Bootstrap 사용 현황

| Bootstrap 기능 | 사용 위치 | 대체 방안 |
|---------------|----------|----------|
| `.navbar`, `.navbar-expand-lg`, `.navbar-dark` | HeaderNavi.html | CSS Modules: `Header.module.css` (이미 커스텀 스타일이 90%) |
| `.navbar-brand` | HeaderNavi | `<Link>` + custom class |
| `.navbar-toggler`, `.collapse`, `.navbar-collapse` | HeaderNavi | React state + CSS transition (`max-height` 토글) |
| `.navbar-nav`, `.nav-item`, `.nav-link` | HeaderNavi | `<nav>` + `<ul>` + custom flex layout |
| `.container` | 모든 페이지 | `.container` 유틸리티 클래스 자체 정의 |
| `.my-4`, `.my-5` | 콘텐츠 페이지 | spacing token으로 대체 |
| `.text-center` | footer, hero | `text-align: center` 직접 사용 |
| `.d-none`, `.d-lg-flex` | navbar-status | `@media` 쿼리 직접 사용 (이미 styles.css에 존재) |
| `data-toggle="collapse"` (JS) | 모바일 메뉴 | React `useState` 토글 |
| jQuery | Navi.js | 완전 제거 (React 컴포넌트로 대체) |
| Popper.js | Bootstrap 의존성 | 완전 제거 |

### 자체 정의할 유틸리티

```css
/* src/styles/utilities.css */

.container {
  width: 100%;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

@media (max-width: 576px) {
  .container { max-width: 100%; }
}

@media (min-width: 577px) and (max-width: 768px) {
  .container { max-width: 720px; }
}

@media (min-width: 769px) and (max-width: 992px) {
  .container { max-width: 960px; }
}
```

### 마이그레이션 순서

1. `tokens.css` 작성 (CSS 변수 네임스페이스 정리)
2. `globals.css` 작성 (body, scrollbar, selection, keyframes)
3. `utilities.css` 작성 (container 등 최소 유틸리티)
4. 각 컴포넌트별 CSS Module 작성 (Bootstrap 클래스 → 커스텀 클래스)
5. Bootstrap CDN 링크 제거
6. jQuery, Popper.js CDN 링크 제거

---

## 7. CSS 파일 구조 (Next.js)

```
src/
  styles/
    tokens.css        ← 디자인 토큰 (CSS 변수)
    globals.css       ← body, scrollbar, selection, keyframes, reset
    utilities.css     ← container 등 공통 유틸리티
  components/
    Header/
      Header.module.css
    Footer/
      Footer.module.css
    LogContainer/
      LogContainer.module.css
    LogEntry/
      LogEntry.module.css
    TerminalHero/
      TerminalHero.module.css
    LinkCard/
      LinkCard.module.css
    SubNav/
      SubNav.module.css
    ...
```

`layout.tsx`에서 global import:
```typescript
import '@/styles/tokens.css';
import '@/styles/globals.css';
import '@/styles/utilities.css';
```
