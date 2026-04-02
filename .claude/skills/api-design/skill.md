---
name: api-design
description: "github.io 정적 배포 제약을 고려한 API 설계 스킬. OpenAPI spec 작성, 정적 JSON API 구성, Vercel Functions 설계를 수행한다. 'API 설계해줘', '백엔드 만들어줘', 'API 계약 작성', 'OpenAPI spec', '엔드포인트 정의' 요청 시 이 스킬을 사용할 것."
---

# API Design Skill

github.io 정적 호스팅 제약을 고려하여 API를 설계한다. 콘텐츠 특성에 따라 정적 JSON API 또는 외부 서비스를 선택한다.

## Step 1: 배포 전략 결정

**판단 기준:**

| 데이터 특성 | 전략 | 배포 위치 |
|-----------|------|---------|
| 변경 빈도 낮음 (프로필, 프로젝트 목록) | 정적 JSON API | `public/api/*.json` |
| 사용자 입력 필요 (폼, 댓글) | Vercel Functions | 별도 Vercel 프로젝트 |
| 실시간 데이터 | 외부 서비스 (Supabase 등) | 외부 |

`freamwork97.github.io`는 포트폴리오 사이트이므로 대부분의 데이터는 **정적 JSON API**로 충분하다.

## Step 2: OpenAPI 3.0 Spec 작성

FE와 합의를 위한 계약 문서를 먼저 작성한다 (Contract-First).

```yaml
# _workspace/03a_api-contract-draft.yaml
openapi: 3.0.0
info:
  title: freamwork97 API
  version: '1.0'
  description: 정적 JSON API for freamwork97.github.io

servers:
  - url: /api/v1
    description: 정적 파일 기반 API

paths:
  /projects.json:
    get:
      summary: 프로젝트 목록
      responses:
        '200':
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Project'

  /profile.json:
    get:
      summary: 프로필 정보
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Profile'

components:
  schemas:
    Project:
      type: object
      required: [id, title, description, slug]
      properties:
        id: { type: string }
        title: { type: string }
        description: { type: string }
        slug: { type: string }
        tech: { type: array, items: { type: string } }
        url: { type: string }
        date: { type: string, format: date }

    Profile:
      type: object
      properties:
        name: { type: string }
        role: { type: string }
        bio: { type: string }
        skills: { type: array, items: { type: string } }
        social:
          type: object
          properties:
            github: { type: string }
```

저장: `_workspace/03a_api-contract-draft.yaml`

## Step 3: FE와 계약 협의

1. 초안을 `_workspace/03a_api-contract-draft.yaml`에 저장
2. frontend-agent에게 SendMessage로 경로 전달
3. FE의 수정 요청 반영
4. 확정본을 `_workspace/03a_api-contract.yaml`에 저장
5. TypeScript interface를 `_workspace/03a_data-models.ts`에 저장

## Step 4: 정적 JSON 파일 생성

계약 확정 후 `public/api/v1/` 에 실제 JSON 파일 생성:

```
public/
└── api/
    └── v1/
        ├── projects.json
        ├── profile.json
        ├── news.json
        └── tis.json
```

**JSON 파일 예시:**
```json
// public/api/v1/projects.json
[
  {
    "id": "1",
    "title": "freamwork97.github.io",
    "description": "개인 포트폴리오 사이트",
    "slug": "portfolio",
    "tech": ["Next.js", "TypeScript", "CSS Modules"],
    "url": "https://freamwork97.github.io",
    "date": "2024-01-01"
  }
]
```

## Step 5: TypeScript 타입 정의

```typescript
// _workspace/03a_data-models.ts (→ 이후 src/types/api.ts로 복사)

export interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  tech: string[];
  url?: string;
  date: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    twitter?: string;
  };
}
```

## 체크리스트

- [ ] 배포 전략 결정 및 coordinator/frontend-agent에게 공유
- [ ] OpenAPI spec 초안 작성 후 FE에게 SendMessage
- [ ] FE 검토 의견 반영
- [ ] 확정 spec 저장 (`03a_api-contract.yaml`)
- [ ] TypeScript 타입 저장 (`03a_data-models.ts`)
- [ ] 정적 JSON 파일 생성 (`public/api/v1/*.json`)
- [ ] CORS 헤더 설정 (Vercel Functions 사용 시)
