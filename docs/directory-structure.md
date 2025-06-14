# ディレクトリ構成

このプロジェクトは案1の機能別+ページ別構成を採用し、各コンポーネントにスタイルファイルを配置する設計です。

## 全体構成

```
src/
├── components/          # 共通コンポーネント
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   │   └── Navigation/
│   │       ├── Navigation.tsx
│   │       └── Navigation.css
│   ├── ui/             # UI基本コンポーネント
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.css
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── Input.css
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   └── Card.css
│   │   └── Modal/
│   │       ├── Modal.tsx
│   │       └── Modal.css
│   └── common/         # その他共通コンポーネント
│       ├── Loading/
│       │   ├── Loading.tsx
│       │   └── Loading.css
│       └── ErrorBoundary/
│           ├── ErrorBoundary.tsx
│           └── ErrorBoundary.css
├── pages/              # ページコンポーネント
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   └── components/
│   │       ├── HeroSection/
│   │       │   ├── HeroSection.tsx
│   │       │   └── HeroSection.css
│   │       ├── FeaturedWorks/
│   │       │   ├── FeaturedWorks.tsx
│   │       │   └── FeaturedWorks.css
│   │       └── Introduction/
│   │           ├── Introduction.tsx
│   │           └── Introduction.css
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.css
│   │   └── components/
│   │       ├── Profile/
│   │       │   ├── Profile.tsx
│   │       │   └── Profile.css
│   │       ├── Skills/
│   │       │   ├── Skills.tsx
│   │       │   └── Skills.css
│   │       └── Timeline/
│   │           ├── Timeline.tsx
│   │           └── Timeline.css
│   ├── Contact/
│   │   ├── Contact.tsx
│   │   ├── Contact.css
│   │   └── components/
│   │       ├── ContactForm/
│   │       │   ├── ContactForm.tsx
│   │       │   └── ContactForm.css
│   │       └── ContactInfo/
│   │           ├── ContactInfo.tsx
│   │           └── ContactInfo.css
│   ├── Portfolio/
│   │   ├── Portfolio.tsx
│   │   ├── Portfolio.css
│   │   └── components/
│   │       ├── ProjectCard/
│   │       │   ├── ProjectCard.tsx
│   │       │   └── ProjectCard.css
│   │       └── ProjectFilter/
│   │           ├── ProjectFilter.tsx
│   │           └── ProjectFilter.css
│   └── Blog/
│       ├── Blog.tsx
│       ├── Blog.css
│       └── components/
│           ├── PostCard/
│           │   ├── PostCard.tsx
│           │   └── PostCard.css
│           └── PostList/
│               ├── PostList.tsx
│               └── PostList.css
├── hooks/              # カスタムフック
│   ├── useForm.ts
│   ├── useLocalStorage.ts
│   └── useResponsive.ts
├── utils/              # ユーティリティ関数
│   ├── validation.ts
│   ├── constants.ts
│   └── helpers.ts
├── assets/             # 静的ファイル
│   ├── images/
│   │   ├── hero/
│   │   ├── portfolio/
│   │   └── profile/
│   ├── icons/
│   │   ├── social/
│   │   └── tech/
│   └── fonts/
├── styles/             # グローバルスタイル
│   ├── globals.css
│   ├── variables.css
│   ├── reset.css
│   └── media-queries.css
└── types/              # TypeScript型定義
    ├── index.ts
    └── api.ts
```

## ディレクトリの役割

### `components/`
再利用可能な共通コンポーネントを格納します。

- **layout/**: ページレイアウトに関するコンポーネント（Header、Footer、Navigation）
- **ui/**: 基本的なUIコンポーネント（Button、Input、Card、Modal）
- **common/**: その他の共通コンポーネント（Loading、ErrorBoundary）

### `pages/`
各ページを構成するコンポーネントを格納します。

- 各ページディレクトリ内に、そのページ固有のコンポーネントを`components/`サブディレクトリに配置
- ページレベルのスタイルファイルも同一ディレクトリに配置

### `hooks/`
カスタムフックを格納します。

### `utils/`
ユーティリティ関数やヘルパー関数を格納します。

### `assets/`
画像、アイコン、フォントなどの静的ファイルを格納します。

### `styles/`
グローバルスタイル、CSS変数、リセットCSSなどを格納します。

### `types/`
TypeScriptの型定義ファイルを格納します。

## 命名規則

### ディレクトリ名
- PascalCase（例: `HeroSection/`, `ContactForm/`）

### ファイル名
- **Reactコンポーネント**: PascalCase + `.tsx`（例: `Header.tsx`）
- **CSSファイル**: PascalCase + `.css`（例: `Header.css`）
- **フック**: camelCase + `.ts`（例: `useForm.ts`）
- **ユーティリティ**: kebab-case + `.ts`（例: `validation.ts`）

### CSS Class名
- BEM記法を採用（例: `.header`, `.header__nav`, `.header__nav--active`）

## インポート規則

### 相対パス
```typescript
// 同一ディレクトリ内
import './Header.css'

// 親ディレクトリ
import { Button } from '../ui/Button/Button'

// 共通コンポーネント
import { Header } from '../../components/layout/Header/Header'
```

### 絶対パス（alias設定推奨）
```typescript
// 将来的に設定予定
import { Button } from '@/components/ui/Button/Button'
import { useForm } from '@/hooks/useForm'
```

## ファイル構成例

### コンポーネントファイル
```typescript
// Header.tsx
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      {/* コンテンツ */}
    </header>
  )
}
```

### スタイルファイル
```css
/* Header.css */
.header {
  /* スタイル */
}

.header__nav {
  /* ナビゲーションスタイル */
}

.header__nav--active {
  /* アクティブ状態 */
}
```

## 今後の拡張性

この構成により、以下の拡張が容易になります：

1. **新しいページの追加**: `pages/`に新しいディレクトリを作成
2. **共通コンポーネントの追加**: `components/`の適切なサブディレクトリに追加
3. **スタイルの管理**: 各コンポーネントに対応するCSSファイルで管理
4. **テストファイルの追加**: 各コンポーネントディレクトリに`*.test.tsx`ファイルを追加可能