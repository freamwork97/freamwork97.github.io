---
name: github-pages-deploy
description: "Next.js 앱을 GitHub Pages(github.io)에 배포하는 스킬. 'github.io 배포', 'Pages 배포 설정', 'GitHub Actions 워크플로우 만들어줘', 'next export 설정', '.nojekyll 필요해' 요청 시 반드시 이 스킬을 사용할 것. freamwork97.github.io 유저 페이지 전용."
---

# GitHub Pages Deploy Skill

Next.js `output: 'export'`로 정적 파일을 생성하고 `freamwork97.github.io` 유저 페이지에 배포한다.

## 배포 원칙

- 별도 서버 없음 — Vercel, Supabase, Firebase 등 외부 서비스 일절 불사용
- `next export` → `out/` → GitHub Pages 직접 서빙이 전부
- 추가 인프라 비용 $0

## 배포 전제 조건 확인

1. `next.config.js`에 `output: 'export'` 설정 확인
2. `images: { unoptimized: true }` 확인
3. 모든 동적 라우트에 `generateStaticParams` 확인

문제 발견 시 frontend-agent에게 SendMessage로 수정 요청.

## Step 1: 빌드 검증

```bash
npm run build
# → out/ 디렉토리 생성 확인
ls out/
# index.html, 404.html, _next/, 각 페이지 디렉토리 등
```

빌드 성공 확인 후 다음 단계 진행. 상세 에러 해결은 `references/nextjs-export.md` 참조.

## Step 2: .nojekyll 파일

`out/` 에 `.nojekyll` 파일이 없으면 GitHub Pages가 `_next/` 폴더를 Jekyll 규칙에 의해 무시한다.

```bash
touch out/.nojekyll
```

GitHub Actions에서 자동 생성하도록 워크플로우에 포함한다.

## Step 3: GitHub Actions 워크플로우

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Add .nojekyll
        run: touch out/.nojekyll

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out/

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 4: GitHub 레포 Pages 설정

GitHub 레포 Settings → Pages에서:
- **Source**: `GitHub Actions` 선택 (배포 방식으로 Actions 사용)

> `freamwork97.github.io`는 유저 페이지이므로 기본 도메인은 `https://freamwork97.github.io`.

## Step 5: 배포 검증

Actions 탭에서 워크플로우 실행 확인 후:

```bash
# 배포 URL 접근 확인 (curl 또는 브라우저)
# 주요 페이지 체크:
# https://freamwork97.github.io/
# https://freamwork97.github.io/profile/
# https://freamwork97.github.io/project/
# https://freamwork97.github.io/404 (존재하지 않는 경로)
```

검증 결과를 `_workspace/04_deploy-report.md`에 저장.

## 체크리스트

- [ ] `next.config.js` 빌드 설정 확인
- [ ] `npm run build` 로컬 빌드 성공
- [ ] `out/` 디렉토리 생성 확인
- [ ] `.github/workflows/deploy.yml` 생성
- [ ] GitHub 레포 Pages 소스를 "GitHub Actions"으로 설정
- [ ] master push 후 Actions 실행 확인
- [ ] 배포 URL 접근 성공

## 빌드 에러 해결

자주 발생하는 에러와 해결법은 `references/nextjs-export.md` 참조.
