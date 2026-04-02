---
name: nextjs-migration
description: "기존 HTML/CSS 정적 사이트를 Next.js 14 App Router 기반으로 마이그레이션하는 스킬. 'Next.js로 전환', '컴포넌트 만들어줘', 'App Router 구조 잡아줘', 'React로 바꿔줘' 요청 시 이 스킬을 사용할 것. next export 정적 배포 설정 포함."
---

# Next.js Migration Skill

기존 HTML 페이지를 Next.js 14 App Router + TypeScript + CSS Modules 구조로 변환한다.

## Step 1: 프로젝트 초기화

기존 레포에 Next.js를 추가한다 (기존 HTML 파일은 `legacy/` 로 이동).

```bash
# 1. 기존 파일 백업
mkdir legacy && mv *.html css/ JS/ legacy/

# 2. Next.js 초기화 (현재 디렉토리에)
npx create-next-app@latest . --typescript --app --no-tailwind --src-dir --import-alias "@/*"
```

**`next.config.js` 필수 설정:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // github.io 정적 배포
  images: {
    unoptimized: true,     // 정적 호스팅은 Image Optimization API 불가
  },
  trailingSlash: true,     // github.io 경로 호환성
};

module.exports = nextConfig;
```

## Step 2: 디렉토리 구조

```
src/
├── app/
│   ├── layout.tsx          ← 루트 레이아웃 (Header + Footer 포함)
│   ├── page.tsx            ← 홈페이지 (/)
│   ├── profile/page.tsx    ← 프로필 (/profile)
│   ├── news/page.tsx       ← 뉴스 (/news)
│   ├── now/page.tsx        ← Now (/now)
│   ├── project/page.tsx    ← 프로젝트 (/project)
│   ├── tis/page.tsx        ← TIS (/tis)
│   └── not-found.tsx       ← 404 페이지
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── styles/
│   ├── globals.css         ← 디자인 토큰 + 리셋
│   └── tokens.css          ← CSS 커스텀 프로퍼티
└── lib/
    └── api.ts              ← API 페칭 유틸리티
```

## Step 3: 페이지 변환 패턴

HTML → Next.js 변환 시 주의사항은 `references/component-patterns.md` 참조.

**기본 변환 규칙:**
- `<script>` 인라인 JS → React 이벤트 핸들러 또는 `useEffect`
- `<link href>` 네비게이션 → `next/link`의 `<Link>`
- `<img src>` → `next/image`의 `<Image unoptimized>`
- 전역 CSS 클래스 → CSS Module (`styles.className`)
- 반복 HTML 패턴 → 컴포넌트 추상화

## Step 4: 서버/클라이언트 컴포넌트 구분

```typescript
// 기본값: Server Component (인터랙션 없음)
// src/components/organisms/Header.tsx
export default function Header() {
  return <header>...</header>;
}

// 클라이언트 필요 시: 'use client' 추가
// src/components/organisms/TerminalHero.tsx
'use client';
import { useState, useEffect } from 'react';

export default function TerminalHero() {
  const [text, setText] = useState('');
  // 타이핑 애니메이션 로직
}
```

## Step 5: 데이터 페칭

API 계약(`_workspace/03a_api-contract.yaml`) 확정 전에는 Mock 데이터를 사용한다.

```typescript
// src/lib/api.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export async function getProjects() {
  const res = await fetch(`${BASE_URL}/projects.json`);
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

// 정적 생성 (빌드 타임 페칭)
// src/app/project/page.tsx
export default async function ProjectPage() {
  const projects = await getProjects();
  return <ProjectList projects={projects} />;
}
```

## Step 6: 정적 라우팅 확인

`output: 'export'` 모드에서는 동적 라우트에 `generateStaticParams`가 필수:

```typescript
// src/app/project/[slug]/page.tsx
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}
```

## 체크리스트

- [ ] `next.config.js`에 `output: 'export'` 설정
- [ ] `images: { unoptimized: true }` 설정
- [ ] 모든 동적 라우트에 `generateStaticParams` 추가
- [ ] `src/styles/globals.css`에 디자인 토큰 import
- [ ] `not-found.tsx` 작성 (기존 404.html 대체)
- [ ] `next build`로 빌드 성공 확인

## 컴포넌트 패턴 상세

복잡한 컴포넌트 구현 패턴, CSS Module 사용법, 타이핑 애니메이션 등 상세 구현은
`references/component-patterns.md` 참조.
