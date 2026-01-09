# Design Tokens to Tailwind CSS

이 프로젝트는 Figma Design Tokens를 Tailwind CSS에 자동으로 연동합니다.

## 사용 방법

### 1. 토큰 생성 (일회성)

Figma Design Token 파일(`figma-design-token.json`)에서 Color 토큰을 추출하여 Tailwind CSS 설정을 생성합니다:

```bash
npm run generate:tailwind-tokens
```

이 명령어는 `tailwind.config.js` 파일을 자동으로 업데이트합니다.

### 2. 자동 감시 모드

`figma-design-token.json` 파일이 변경될 때마다 자동으로 Tailwind CSS 설정을 업데이트하려면:

```bash
npm run watch:tokens
```

이 명령어는 파일 변경을 감시하고, 변경이 감지되면 자동으로 `tailwind.config.js`를 재생성합니다.

## 토큰 사용 예시

생성된 토큰은 Tailwind CSS 클래스로 사용할 수 있습니다:

```tsx
// Primary 색상 사용
<div className="bg-primary-500 text-white">Primary Button</div>

// Gray 색상 사용
<div className="bg-gray-100 text-gray-900">Gray Background</div>

// Semantic 토큰 사용
<div className="bg-btn-bg-primary-base border-btn-border-primary">
  Button
</div>
```

## 토큰 구조

토큰은 다음과 같이 구성됩니다:

- **색상 팔레트**: `primary`, `gray`, `blue`, `red`, `green`, `indigo` 등
- **시맨틱 토큰**: `bg`, `border`, `text`, `icon`, `btn`, `input`, `control`, `toggle` 등

### 색상 팔레트 예시

```tsx
// Primary 색상 (100-900)
bg-primary-100
bg-primary-500
bg-primary-900

// Gray 색상 (000, 100-900)
bg-gray-000  // white
bg-gray-500
bg-gray-900
```

### 시맨틱 토큰 예시

```tsx
// 버튼 관련
bg-btn-bg-primary-base
border-btn-border-primary
text-btn-text-primary

// 입력 필드 관련
bg-input-bg-base
border-input-border-hover
text-input-text-normal

// 컨트롤 관련
bg-control-bg-normal
border-control-border-level1
```

## 파일 구조

```
.
├── figma-design-token.json    # Figma에서 내보낸 디자인 토큰
├── tailwind.config.js         # 자동 생성된 Tailwind 설정 (수정 금지)
└── scripts/
    ├── generate-tailwind-tokens.js  # 토큰 생성 스크립트
    └── watch-tokens.js              # 파일 감시 스크립트
```

## 주의사항

- `tailwind.config.js` 파일은 자동 생성되므로 **수동으로 수정하지 마세요**
- `figma-design-token.json` 파일을 업데이트한 후에는 `npm run generate:tailwind-tokens`를 실행하거나 `npm run watch:tokens`를 사용하세요
- 개발 중에는 `watch:tokens`를 별도 터미널에서 실행하여 자동 업데이트를 받을 수 있습니다

## 문제 해결

### 토큰이 업데이트되지 않는 경우

1. `figma-design-token.json` 파일이 올바른 형식인지 확인
2. 파일에 `resolvedType: "COLOR"`인 변수가 있는지 확인
3. 스크립트를 다시 실행: `npm run generate:tailwind-tokens`

### 색상이 #000000으로 표시되는 경우

일부 토큰이 다른 변수를 참조하거나 별도의 모드 값을 가지고 있을 수 있습니다. 
이 경우 해당 토큰의 `valuesByMode` 구조를 확인하세요.
