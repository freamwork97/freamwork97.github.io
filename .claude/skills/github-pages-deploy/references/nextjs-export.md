# Next.js Static Export 에러 해결 레퍼런스

## 자주 발생하는 빌드 에러

### 1. 동적 라우트 에러
```
Error: Page "/project/[slug]" is missing "generateStaticParams()"
```
**해결:** 해당 페이지에 `generateStaticParams` 추가.
```typescript
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(p => ({ slug: p.slug }));
}
```

### 2. Server Action 에러
```
Error: Server Actions are not supported with static export.
```
**해결:** `'use server'` 폼 액션을 클라이언트 사이드 fetch로 변경.

### 3. Image Optimization 에러
```
Error: Image Optimization using the default loader is not compatible with export.
```
**해결:** `next.config.js`에 `images: { unoptimized: true }` 확인.

### 4. `_next` 폴더 404
**증상:** 사이트 로드되지만 CSS/JS가 적용 안 됨.
**원인:** `.nojekyll` 파일 누락.
**해결:** `out/.nojekyll` 파일 생성.

### 5. basePath 문제 (서브디렉토리 배포 시)
`freamwork97.github.io`는 루트 도메인이므로 basePath 불필요.
단, 조직 레포(`username.github.io/repo-name`) 배포 시:
```javascript
const nextConfig = {
  basePath: '/repo-name',
  assetPrefix: '/repo-name/',
};
```

## GitHub Actions 디버깅

### Pages 403 에러
- Settings → Pages → Source가 "GitHub Actions"인지 확인
- `permissions: pages: write` 확인

### Actions 워크플로우 실패
- Node.js 버전 확인 (20 권장)
- `npm ci` vs `npm install` — lock file 있으면 `npm ci` 사용

### 배포 지연
- Pages 배포는 Actions 완료 후 1~3분 소요
- `github.io` 캐시로 인해 최대 10분 지연 가능
