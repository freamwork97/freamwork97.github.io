# Phase 1: 현황 분석

## 사이트 정보
- 이름: Windra Portfolio (freamwork97.github.io)
- 작성자: 정승용 (Windra) — QA Engineer × Full-Stack Developer
- 백엔드: 없음 (정적 JSON API 전략 사용)

## 페이지 인벤토리

| 기존 경로 | Next.js 경로 | 설명 |
|---------|------------|------|
| `/index.html` | `/` | 홈 — 인터랙티브 터미널 + 6개 카드 |
| `/Profile/ProfileIndex.html` | `/profile` | 로그 스타일 프로필 |
| `/TIS/TISIndex.html` | `/tis` | Things I Studied (카테고리 + GitHub 링크) |
| `/Project/ProjectIndex.html` | `/project` | 프로젝트 목록 (GitHub 링크) |
| `/News/NewsIndex.html` | `/news` | 뉴스 인덱스 |
| `/News/BlockChain.html` | `/news/blockchain` | 블록체인 뉴스 |
| `/News/Economy.html` | `/news/economy` | 경제 뉴스 |
| `/News/IT.html` | `/news/it` | IT 뉴스 |
| `/Now/NowIndex.html` | `/now` | 현재 집중하는 것 |
| `/Deploy/DeployIndex.html` | `/deploy` | 배포된 서비스 목록 |
| `/404.html` | `not-found.tsx` | 커스텀 404 (글리치 효과) |

## 기존 디자인 시스템 (CSS 변수)

```css
--bg-primary:    #0d1117   /* GitHub dark 배경 */
--bg-secondary:  #161b22   /* 카드/패널 배경 */
--bg-tertiary:   #21262d   /* 헤더/서브 배경 */
--pass-green:    #3fb950
--warn-yellow:   #d29922
--error-red:     #f85149
--info-blue:     #58a6ff
--purple-accent: #bc8cff
--orange-accent: #ff8c42
--cyan-accent:   #39d0d8
--text-primary:  #c9d1d9
--text-secondary:#8b949e
--text-dim:      #484f58
--border-main:   #30363d
--border-subtle: #21262d
Font: JetBrains Mono, Space Mono (monospace)
Body bg: 다크 + 40px 그리드 패턴 + 녹색 radial gradient
```

## 재사용 컴포넌트 패턴

### LogContainer (모든 콘텐츠 페이지에서 사용)
```
┌─ [●●●] LOG_STREAM: xxx.log    SIZE: xxx ─┐
│  [time] [STATUS] content...               │
│  [time] [STATUS] content...               │
└───────────────────────────────────────────┘
```
- 상태: info(파랑), success(녹색), warn(노랑), debug(보라)

### LinkCard (홈페이지 카드)
```
┌─────────────────────┐
│ TC_ID: 001  v1.2.0  │  ← card-meta
│ ● PASSED            │  ← status-indicator
│ [링크 텍스트]        │
│ 설명 텍스트          │
└─────────────────────┘
```

### InteractiveTerminal (홈페이지)
- 명령어: help, whoami, skills, ls, goto [page], contact, date, clear
- `windra@portfolio:~$` 프롬프트
- 히스토리 ↑↓ 지원

### Header Navbar
- Bootstrap navbar
- 브랜드: "Windra v2.0"
- 상태 텍스트: "ALL TESTS PASSED"
- 링크: 프로필, TIS, 프로젝트, 뉴스, Now, Deploy

### SubNavs
- ProjectNavi: GitHub 저장소 링크들 (회원제게시판, 주식정보사이트, 뉴스분류)
- TISNavi: GitHub 링크 (Python, C++, Java, Data, Algorithm)
- NewsNavi: 뉴스 서브페이지 링크 (BlockChain, Economy, IT)

## 콘텐츠 모델 (정적 JSON)

```
profile.json — 이름, 역할, bio, 기술스택, 학력, 경력, 소셜링크
projects.json — [{id, title, description, tags[], githubUrl}]
tis.json — [{category, description, githubUrl}]
news-categories.json — [{id, name, slug}]
now.json — [{item, description, status}]
deploy.json — [{title, url, description, tech[]}]
```

## 기술 부채 (제거 대상)

- Bootstrap 4.5 CDN → CSS Modules로 대체
- jQuery CDN → React 이벤트 핸들러로 대체
- Navi.js ($.load() 동적 HTML 주입) → React 컴포넌트로 대체
- 중복 HTML (헤더/푸터 모든 페이지에 수동 주입) → layout.tsx로 통합

## 배포 전략 확정

- **백엔드: 없음** — 별도 서버 일절 사용하지 않음
- **외부 서비스: 없음** — Vercel, Supabase, Firebase 등 불필요
- 모든 콘텐츠: 정적 JSON 파일 (`public/api/v1/*.json`) 또는 컴포넌트 hardcode
- 동적 기능 대안: 이메일 → `mailto:` 링크, 외부 링크 → `target="_blank"`
- 빌드: `next build` (`output: 'export'`) → `out/` 디렉토리 생성
- 배포: `out/` 내용을 `gh-pages` 브랜치에 push → GitHub Pages 서빙
- CI: GitHub Actions (master push → 자동 빌드+배포)
- **추가 인프라 비용: $0**
