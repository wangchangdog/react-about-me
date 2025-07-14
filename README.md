# React Portfolio Website 🚀

モダンなReact + TypeScript + Viteを使用したレスポンシブ対応のポートフォリオサイトです。
ライト/ダークモード切り替え、ゲーミングスタイルのボタンアニメーション、アクセシビリティ対応など、最新のWeb開発技術を活用しています。

## ✨ 主な機能

### 🎨 デザイン・UI
- **レスポンシブデザイン**: モバイルファーストアプローチでタブレット・デスクトップに対応
- **ライト/ダークモード**: システム設定に連動したテーマ切り替え機能
- **ゲーミングボタンアニメーション**: RGB rotating borderとグラデーションアニメーション
- **モダンなUI**: TailwindCSSとカスタムCSS変数を活用したデザインシステム

### 🚀 パフォーマンス・技術
- **遅延読み込み**: React.lazy/Suspenseによるページ単位のコード分割
- **SEO対応**: メタタグ、Open Graph、Twitter Card対応
- **アクセシビリティ**: ARIA属性、キーボードナビゲーション、フォーカス管理
- **エラーハンドリング**: ErrorBoundaryによる堅牢なエラー処理

### 📝 ページ構成
- **Home**: ヒーローセクション、自己紹介、Featured Works
- **About**: プロフィール、スキル、タイムライン
- **Portfolio**: プロジェクト一覧、フィルタリング機能
- **Blog**: 記事一覧、カテゴリフィルタ
- **Contact**: お問い合わせフォーム（バリデーション機能付き）

## 🛠️ 技術スタック

### コア技術
- **React 18** - モダンなReactフック・機能活用
- **TypeScript** - 型安全性とコード品質向上
- **Vite** - 高速ビルドツール
- **React Router** - SPA routing

### スタイリング
- **TailwindCSS** - ユーティリティファーストCSS
- **CSS Variables** - テーマシステム実装
- **CSS Modules** - コンポーネント単位のスタイル管理

### 開発体験
- **ESLint** - コード品質チェック
- **TypeScript** - 静的型チェック
- **Hot Module Replacement** - 開発時の高速リロード

## 🚀 クイックスタート

### 前提条件
- Node.js 18.0.0 以上
- npm または yarn

### インストール・実行

```bash
# リポジトリをクローン
git clone https://github.com/kaperrine-dog/react-about-me.git
cd react-about-me

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーが起動したら、ブラウザで `http://localhost:5173/react-about-me/` にアクセスしてください。

### ビルド・デプロイ

```bash
# プロダクションビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

## 📁 プロジェクト構造

```
src/
├── components/           # 再利用可能なコンポーネント
│   ├── common/          # 共通コンポーネント（ErrorBoundary等）
│   ├── layout/          # レイアウトコンポーネント（Header, Footer）
│   └── ui/              # UIコンポーネント（Button, ThemeToggle等）
├── hooks/               # カスタムフック
├── pages/               # ページコンポーネント
│   ├── Home/
│   ├── About/
│   ├── Portfolio/
│   ├── Blog/
│   └── Contact/
├── styles/              # グローバルスタイル
│   ├── globals.css      # TailwindとカスタムCSS
│   ├── variables.css    # CSS変数（テーマシステム）
│   └── reset.css        # CSSリセット
├── types/               # TypeScript型定義
└── utils/               # ユーティリティ関数
```

## 🎨 テーマシステム

このプロジェクトでは独自のテーマシステムを実装しています：

- **ライトモード**: デフォルトの明るいテーマ
- **ダークモード**: 目に優しい暗いテーマ  
- **システム設定**: OSの設定に自動で連動

```typescript
// テーマ切り替えの使用例
const { theme, resolvedTheme, setTheme } = useTheme()

// テーマを手動で切り替え
setTheme('dark')      // ダークモード
setTheme('light')     // ライトモード  
setTheme('system')    // システム設定に従う
```

## 🎮 ゲーミングボタンアニメーション

RGB rotating borderとグラデーション効果を持つゲーミングスタイルのボタンを実装：

```tsx
<Button variant="gaming" size="lg">
  ゲーミングボタン
</Button>
```

## ♿ アクセシビリティ対応

- **キーボードナビゲーション**: Tab, Enter, Spaceキーでの操作
- **スクリーンリーダー対応**: ARIA属性、セマンティックHTML使用
- **フォーカス管理**: 明確なフォーカス状態表示
- **カラーコントラスト**: WCAG 2.1 AA基準適合

## 📱 レスポンシブ対応

```css
/* ブレークポイント */
sm: 640px    /* スマートフォン */
md: 768px    /* タブレット */
lg: 1024px   /* デスクトップ */
xl: 1280px   /* 大型デスクトップ */
2xl: 1536px  /* 超大型デスクトップ */
```

## 🔧 カスタマイズ

### テーマカラーの変更
`src/styles/variables.css` でテーマカラーを編集：

```css
:root {
  --color-primary: #2563eb;        /* メインカラー */
  --color-secondary: #10b981;      /* サブカラー */
  /* ... その他の色設定 */
}
```

### コンテンツの編集
各ページコンポーネント（`src/pages/`）でコンテンツを編集できます。

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 🤝 コントリビューション

Issues やPull Requestsを歓迎します！改善提案やバグ報告はお気軽に。

## 📞 お問い合わせ

- GitHub: [@kaperrine-dog](https://github.com/kaperrine-dog)
- Email: example@example.com

---

**Made with ❤️ using React + TypeScript + Vite**
    ...reactDom.configs.recommended.rules,
  },
})
```

## GitHub Pages デプロイ

このプロジェクトはGitHub Actionsを使用してGitHub Pagesに自動デプロイされるように設定されています。

### 初回設定

1. GitHubリポジトリの **Settings** タブに移動
2. 左側のメニューから **Pages** を選択
3. **Source** を **GitHub Actions** に設定
4. **Build and deployment** で **GitHub Actions** を選択

### デプロイ

`main`ブランチにプッシュすると、自動的にGitHub Pagesにデプロイされます。

```bash
git add .
git commit -m "Update website"
git push origin main
```

### 設定ファイル

- `.github/workflows/deploy.yml` - GitHub Actionsワークフローファイル
- `vite.config.ts` - GitHub Pages用のbase設定
- `public/404.html` - SPAのルーティング対応

### アクセスURL

デプロイ後のサイトURL: `https://ユーザー名.github.io/react-about-me/`

## 開発

### ローカル開発

```bash
npm install
npm run dev
```

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```
