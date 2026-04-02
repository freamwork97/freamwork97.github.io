# Next.js 컴포넌트 패턴 레퍼런스

## CSS Module 패턴

```typescript
// src/components/molecules/Card.module.css
.card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
  transition: border-color 0.2s;
}
.card:hover {
  border-color: var(--color-accent);
}

// src/components/molecules/Card.tsx
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export default function Card({ title, description, href }: CardProps) {
  return (
    <Link href={href} className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
```

## 터미널 히어로 컴포넌트 (타이핑 효과)

```typescript
// src/components/organisms/TerminalHero.tsx
'use client';
import { useState, useEffect } from 'react';
import styles from './TerminalHero.module.css';

const LINES = [
  '> whoami',
  'freamwork97 — developer & creator',
  '> ls skills/',
  '[react] [typescript] [design] [deploy]',
  '> _',
];

export default function TerminalHero() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine >= LINES.length) return;
    const timer = setTimeout(() => {
      setDisplayedLines(prev => [...prev, LINES[currentLine]]);
      setCurrentLine(prev => prev + 1);
    }, 800);
    return () => clearTimeout(timer);
  }, [currentLine]);

  return (
    <section className={styles.terminal}>
      {displayedLines.map((line, i) => (
        <div key={i} className={styles.line}>{line}</div>
      ))}
      {currentLine < LINES.length && (
        <span className={styles.cursor}>█</span>
      )}
    </section>
  );
}
```

## 루트 레이아웃 패턴

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export const metadata: Metadata = {
  title: 'freamwork97',
  description: 'developer portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

## 404 페이지

```typescript
// src/app/not-found.tsx
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <pre className={styles.ascii}>
        {`404 — NOT FOUND\n> cd /\n> _`}
      </pre>
      <Link href="/">← 홈으로</Link>
    </div>
  );
}
```

## 페이지별 변환 매핑

| 기존 파일 | Next.js 경로 |
|-----------|-------------|
| `index.html` | `src/app/page.tsx` |
| `404.html` | `src/app/not-found.tsx` |
| `Profile/index.html` | `src/app/profile/page.tsx` |
| `News/index.html` | `src/app/news/page.tsx` |
| `Now/index.html` | `src/app/now/page.tsx` |
| `Project/index.html` | `src/app/project/page.tsx` |
| `TIS/index.html` | `src/app/tis/page.tsx` |

## globals.css 구조

```css
/* src/styles/globals.css */
@import './tokens.css';

*, *::before, *::after { box-sizing: border-box; }

html { font-size: 16px; }

body {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: var(--font-mono);
  margin: 0;
}

a { color: var(--color-accent); text-decoration: none; }
a:hover { text-decoration: underline; }
```
