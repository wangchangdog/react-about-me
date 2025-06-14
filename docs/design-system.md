# デザインシステム

このドキュメントでは、プロフィール・ポートフォリオサイトのデザインシステムを定義します。

## デザインコンセプト

### テーマ
**Modern Professional** - モダンでプロフェッショナル、かつ親しみやすい印象を与えるデザイン

### デザイン原則
1. **シンプルさ**: 情報を明確に伝える、クリーンなデザイン
2. **一貫性**: 全ページで統一されたUI/UX
3. **アクセシビリティ**: 誰もが使いやすいインターフェース
4. **レスポンシブ**: あらゆるデバイスで快適な体験

## カラーパレット

### プライマリカラー
```css
:root {
  --color-primary: #2563eb;      /* Blue 600 */
  --color-primary-light: #3b82f6; /* Blue 500 */
  --color-primary-dark: #1d4ed8;  /* Blue 700 */
}
```

### セカンダリカラー
```css
:root {
  --color-secondary: #10b981;      /* Emerald 500 */
  --color-secondary-light: #34d399; /* Emerald 400 */
  --color-secondary-dark: #059669;  /* Emerald 600 */
}
```

### ニュートラルカラー
```css
:root {
  --color-white: #ffffff;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-black: #000000;
}
```

### システムカラー
```css
:root {
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
}
```

## テーマシステム（ライト・ダークモード）

### テーマ切り替え機能
- ユーザーが手動でテーマを切り替え可能（ライト/ダーク/システム設定に従う）
- ヘッダーにテーマ切り替えボタンを配置（月・太陽・自動アイコン）
- 選択したテーマをローカルストレージに保存
- スムーズなテーマ切り替えアニメーション（250ms）
- システム設定変更時の自動切り替え対応

### ライトモード（デフォルト）
```css
:root,
[data-theme="light"] {
  /* 背景色 */
  --theme-bg-primary: #ffffff;
  --theme-bg-secondary: #f9fafb;
  --theme-bg-tertiary: #f3f4f6;

  /* テキスト色 */
  --theme-text-primary: #111827;
  --theme-text-secondary: #6b7280;
  --theme-text-tertiary: #9ca3af;

  /* ボーダー色 */
  --theme-border-primary: #e5e7eb;
  --theme-border-secondary: #d1d5db;

  /* カード・パネル */
  --theme-card-bg: #ffffff;
  --theme-card-border: #e5e7eb;
  --theme-card-shadow: var(--shadow-base);

  /* ナビゲーション */
  --theme-nav-bg: rgba(255, 255, 255, 0.95);
  --theme-nav-backdrop: blur(10px);

  /* フォーム */
  --theme-input-bg: #ffffff;
  --theme-input-border: #d1d5db;
  --theme-input-focus-border: var(--color-primary);

  /* 特殊要素 */
  --theme-hero-overlay: rgba(0, 0, 0, 0.1);
  --theme-code-bg: #f3f4f6;
}
```

### ダークモード
```css
[data-theme="dark"] {
  /* 背景色 */
  --theme-bg-primary: #111827;
  --theme-bg-secondary: #1f2937;
  --theme-bg-tertiary: #374151;

  /* テキスト色 */
  --theme-text-primary: #f9fafb;
  --theme-text-secondary: #d1d5db;
  --theme-text-tertiary: #9ca3af;

  /* ボーダー色 */
  --theme-border-primary: #374151;
  --theme-border-secondary: #4b5563;

  /* カード・パネル */
  --theme-card-bg: #1f2937;
  --theme-card-border: #374151;
  --theme-card-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);

  /* ナビゲーション */
  --theme-nav-bg: rgba(31, 41, 55, 0.95);
  --theme-nav-backdrop: blur(10px);

  /* フォーム */
  --theme-input-bg: #374151;
  --theme-input-border: #4b5563;
  --theme-input-focus-border: var(--color-primary-light);

  /* 特殊要素 */
  --theme-hero-overlay: rgba(0, 0, 0, 0.3);
  --theme-code-bg: #374151;
}

  /* ナビゲーション */
  --nav-bg: rgba(31, 41, 55, 0.95);
  --nav-backdrop: blur(10px);

  /* フォーム */
  --input-bg: #374151;
  --input-border: #4b5563;
  --input-focus-border: var(--color-primary-light);
}
```

### テーマ切り替えアニメーション
```css
* {
  transition: background-color var(--transition-base), 
              border-color var(--transition-base),
              color var(--transition-base);
}
```

## タイポグラフィ

### フォントファミリー
```css
:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-secondary: 'Poppins', sans-serif;
  --font-mono: 'Fira Code', 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
}
```

### フォントサイズ
```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
}
```

### フォントウェイト
```css
:root {
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}
```

### 行間
```css
:root {
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

## スペーシング

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

## レイアウト

### ブレークポイント
```css
:root {
  --breakpoint-sm: 640px;   /* スマートフォン */
  --breakpoint-md: 768px;   /* タブレット */
  --breakpoint-lg: 1024px;  /* デスクトップ */
  --breakpoint-xl: 1280px;  /* 大型デスクトップ */
  --breakpoint-2xl: 1536px; /* 超大型デスクトップ */
}
```

### コンテナ幅
```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
}
```

### Z-index
```css
:root {
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
}
```

## ボーダー・角丸

### ボーダー幅
```css
:root {
  --border-0: 0;
  --border-1: 1px;
  --border-2: 2px;
  --border-4: 4px;
}
```

### 角丸
```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;    /* 4px */
  --radius-base: 0.375rem; /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;
}
```

## シャドウ

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}
```

## トランジション

```css
:root {
  --transition-fast: 150ms ease-in-out;
  --transition-base: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
  --transition-slower: 500ms ease-in-out;
}
```

## コンポーネントガイドライン

### Button
- **Primary**: メインアクション用（CTAボタンなど）
- **Secondary**: サブアクション用
- **Outline**: 境界線スタイル
- **Ghost**: 背景なしスタイル
- **ゲーミングエフェクト**: RGB色変化のアニメーション枠線
  - グラデーション境界線の回転アニメーション
  - ホバー時の発光エフェクト
  - レインボーカラーの循環

### Typography
- **H1**: ページタイトル（一つのページに一つ）
- **H2**: セクションタイトル
- **H3**: サブセクションタイトル
- **Body**: 本文テキスト
- **Caption**: 補足テキスト

### Spacing
- **Section間**: 80px (--space-20) 以上
- **コンポーネント間**: 32px (--space-8)
- **要素間**: 16px (--space-4)
- **テキスト行間**: 1.5 (--leading-normal)

## レスポンシブデザイン

### モバイルファースト
基本スタイルをモバイル向けに設計し、大画面向けにメディアクエリで拡張

### ブレークポイント使用例
```css
/* モバイル (デフォルト) */
.hero-title {
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
}

/* タブレット以上 */
@media (min-width: 768px) {
  .hero-title {
    font-size: var(--text-4xl);
  }
}

/* デスクトップ以上 */
@media (min-width: 1024px) {
  .hero-title {
    font-size: var(--text-5xl);
  }
}
```

## アクセシビリティ

### カラーコントラスト
- テキストと背景のコントラスト比: 最低4.5:1
- 大きなテキスト（18px以上）: 最低3:1

### フォーカス
- すべてのインタラクティブ要素にフォーカススタイル
- `outline: 2px solid var(--color-primary);`

### セマンティクス
- 適切なHTMLタグの使用
- ARIA属性の適切な実装
- スクリーンリーダー対応

## ライト・ダークモードテーマ

### テーマ切り替え機能
- ユーザーが手動でテーマを切り替え可能（ライト/ダーク/自動）
- システム設定に従うオプション
- 選択したテーマをローカルストレージに保存
- ヘッダーにテーマ切り替えボタンを配置
- スムーズなテーマ切り替えアニメーション

### テーマ変数
```css
:root {
  /* 共通のテーマ変数 */
  --theme-background: var(--color-white);
  --theme-surface: var(--color-gray-50);
  --theme-card: var(--color-white);
  --theme-text-primary: var(--color-gray-900);
  --theme-text-secondary: var(--color-gray-600);
  --theme-text-muted: var(--color-gray-500);
  --theme-border: var(--color-gray-200);
  --theme-shadow: rgb(0 0 0 / 0.1);
  --theme-shadow-lg: rgb(0 0 0 / 0.15);
  --theme-shadow-xl: rgb(0 0 0 / 0.25);
}
```

### ライトモード（デフォルト）
```css
[data-theme="light"] {
  --theme-background: var(--color-white);
  --theme-surface: var(--color-gray-50);
  --theme-card: var(--color-white);
  --theme-text-primary: var(--color-gray-900);
  --theme-text-secondary: var(--color-gray-600);
  --theme-text-muted: var(--color-gray-500);
  --theme-border: var(--color-gray-200);
  --theme-shadow: rgb(0 0 0 / 0.1);
  --theme-shadow-lg: rgb(0 0 0 / 0.15);
}
```

### ダークモード
```css
[data-theme="dark"] {
  --theme-background: var(--color-gray-900);
  --theme-surface: var(--color-gray-800);
  --theme-card: var(--color-gray-800);
  --theme-text-primary: var(--color-gray-100);
  --theme-text-secondary: var(--color-gray-300);
  --theme-text-muted: var(--color-gray-400);
  --theme-border: var(--color-gray-700);
  --theme-shadow: rgb(0 0 0 / 0.3);
  --theme-shadow-lg: rgb(0 0 0 / 0.5);
}
```

### 自動テーマ（システム設定に従う）
```css
@media (prefers-color-scheme: dark) {
  [data-theme="auto"] {
    --theme-background: var(--color-gray-900);
    --theme-surface: var(--color-gray-800);
    --theme-card: var(--color-gray-800);
    --theme-text-primary: var(--color-gray-100);
    --theme-text-secondary: var(--color-gray-300);
    --theme-text-muted: var(--color-gray-400);
    --theme-border: var(--color-gray-700);
    --theme-shadow: rgb(0 0 0 / 0.3);
    --theme-shadow-lg: rgb(0 0 0 / 0.5);
  }
}

@media (prefers-color-scheme: light) {
  [data-theme="auto"] {
    --theme-background: var(--color-white);
    --theme-surface: var(--color-gray-50);
    --theme-card: var(--color-white);
    --theme-text-primary: var(--color-gray-900);
    --theme-text-secondary: var(--color-gray-600);
    --theme-text-muted: var(--color-gray-500);
    --theme-border: var(--color-gray-200);
    --theme-shadow: rgb(0 0 0 / 0.1);
    --theme-shadow-lg: rgb(0 0 0 / 0.15);
  }
}
```

## アニメーション

### 原則
- **Control**: ユーザーが停止できるアニメーション
- **Duration**: 300ms以下の短いアニメーション
- **Easing**: ease-in-out を基本とする
- **Purpose**: 意味のあるアニメーションのみ実装

### 使用場面
- ページ遷移
- モーダル表示/非表示
- ホバーエフェクト
- スクロールアニメーション（控えめに）

## ゲーミングPC風ボタンアニメーション

### 概要
特定のボタン（主にCTAボタン）にゲーミングPC風のRGBアニメーション効果を追加します。

### 仕様
- **エフェクト**: 回転するRGBグラデーション枠線
- **色変化**: 赤 → オレンジ → 黄 → 緑 → シアン → 青 → マゼンタ → 赤（循環）
- **アニメーション時間**: 4秒で1周（無限ループ）
- **適用条件**: `.gaming-button`クラス付きボタン
- **レスポンス**: ホバー時に回転速度アップ（2秒で1周）
- **サイズ**: 枠線幅3px、内側に2pxのマージン
- **発光効果**: ホバー時にグロウエフェクト追加

### CSS実装
```css
.gaming-button {
  position: relative;
  z-index: 1;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.gaming-button::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  z-index: -1;
  border-radius: inherit;
  background: conic-gradient(
    from 0deg,
    #ff0000 0deg,
    #ff8000 51.4deg,
    #ffff00 102.8deg,
    #80ff00 154.2deg,
    #00ff00 205.6deg,
    #00ff80 257deg,
    #00ffff 308.4deg,
    #0080ff 359.8deg,
    #0000ff 411.2deg,
    #8000ff 462.6deg,
    #ff00ff 514deg,
    #ff0080 565.4deg,
    #ff0000 616.8deg
  );
  animation: gaming-rotate 4s linear infinite;
}

.gaming-button:hover::before {
  animation-duration: 2s;
  filter: blur(1px) brightness(1.2);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
}

@keyframes gaming-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ダークモード対応 */
[data-theme="dark"] .gaming-button {
  background: var(--theme-bg-secondary);
  color: var(--theme-text-primary);
}

[data-theme="light"] .gaming-button {
  background: var(--theme-bg-primary);
  color: var(--theme-text-primary);
}
```

### 使用例
```jsx
<Button variant="primary" className="gaming-button">
  Contact Me
</Button>
```

### 適用箇所
- HomeページのメインCTAボタン
- Contactページのフォーム送信ボタン
- Portfolioページの「View Project」ボタン（オプション）
- **サイズ**: 枠線幅2px、内側に1pxのマージン

### CSS実装
```css
.gaming-button {
  position: relative;
  background: linear-gradient(45deg, var(--bg-primary), var(--bg-secondary));
  border: none;
  border-radius: var(--radius-md);
  overflow: hidden;
  z-index: 1;
}

.gaming-button::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: conic-gradient(
    from 0deg,
    #ff0000, #ff8000, #ffff00, #80ff00,
    #00ff00, #00ff80, #00ffff, #0080ff,
    #0000ff, #8000ff, #ff00ff, #ff0080,
    #ff0000
  );
  border-radius: inherit;
  animation: gaming-rotate 3s linear infinite;
  z-index: -1;
}

.gaming-button:hover::before {
  animation-duration: 2s;
}

@keyframes gaming-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ダークモード対応 */
[data-theme="dark"] .gaming-button {
  background: linear-gradient(45deg, var(--bg-secondary), var(--bg-tertiary));
}
```

### 使用例
```jsx
<Button variant="primary" className="gaming-button">
  Contact Me
</Button>
```

### 適用箇所
- HomeページのメインCTAボタン
- Contactページのフォーム送信ボタン
- Portfolioページの「View Project」ボタン（オプション）

## 実装仕様書

### 必要な実装
1. **useThemeフック**: テーマ状態管理とローカルストレージ連携
2. **ThemeToggleコンポーネント**: テーマ切り替えボタンUI
3. **CSS変数拡張**: テーマ対応変数の追加
4. **ゲーミングアニメーション**: 上記CSS実装
5. **全コンポーネント更新**: 新しいテーマ変数の適用

### 開発順序
1. テーマ管理システム（useTheme + ThemeToggle）
2. CSS変数システムの拡張
3. 既存コンポーネントのテーマ対応
4. ゲーミングボタンアニメーション実装
5. テスト・調整