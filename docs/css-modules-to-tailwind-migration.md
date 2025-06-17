# CSS Modules から Tailwind CSS への移行戦略

## プロジェクト現状分析

### 現在のスタイリング構成
- **スタイルファイル**: CSS Modules (`.module.css`)
- **グローバルスタイル**: `src/styles/` ディレクトリ内
  - `variables.css`: デザインシステム変数
  - `globals.css`: グローバルユーティリティクラス（既にTailwindに近い構造）
  - `reset.css`: CSS リセット
  - `media-queries.css`: レスポンシブ設定

### コンポーネント構成
- **UIコンポーネント**: `src/components/ui/`
- **レイアウトコンポーネント**: `src/components/layout/`
- **ページコンポーネント**: `src/pages/`

## 移行戦略

### フェーズ1: 環境準備とセットアップ
1. **Tailwind CSS のインストール**
   ```bash
   npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms @tailwindcss/typography
   npx tailwindcss init -p
   ```

2. **設定ファイルの作成・更新**
   - `tailwind.config.js` の設定
   - 既存のデザインシステム変数をTailwind設定に移行
   - PostCSS設定の更新

3. **Vite設定の更新**
   - CSS Modules設定の段階的削除準備

### フェーズ2: デザインシステムの移行
1. **カスタムデザイントークンの設定**
   - `variables.css` からTailwind設定へのマッピング
   - カラーパレット、スペーシング、タイポグラフィ設定
   - カスタムアニメーション、シャドウの設定

2. **グローバルスタイルの整理**
   - `globals.css` の内容をTailwindベースに変換
   - 必要な基本スタイルのみを残す

### フェーズ3: コンポーネント別段階移行
#### 優先順位付け
1. **高優先度** (システム全体に影響)
   - Button コンポーネント
   - Header/Footer コンポーネント
   - ThemeToggle コンポーネント

2. **中優先度** (再利用性が高い)
   - Card, Input, Modal などのUIコンポーネント
   - レイアウトコンポーネント

3. **低優先度** (ページ固有)
   - ページコンポーネント（Home, About, Blog, Contact, Portfolio）

#### 移行手順
1. 既存の `.module.css` ファイルを分析
2. スタイルをTailwindクラスに変換
3. カスタムCSSが必要な部分を特定
4. Reactコンポーネントのクラス名を更新
5. テスト・検証

### フェーズ4: 最適化と後処理
1. **未使用CSS/ファイルの削除**
   - `.module.css` ファイルの削除
   - 不要なimport文の削除

2. **パフォーマンス最適化**
   - Tailwind CSS のPurging設定確認
   - バンドルサイズの検証

3. **最終調整**
   - レスポンシブデザインの確認
   - ダークモード対応の確認
   - ブラウザ間互換性テスト

## 詳細実装計画

### 1. デザイントークンマッピング

#### カラーシステム
```js
// tailwind.config.js
colors: {
  primary: {
    DEFAULT: '#2563eb',
    light: '#3b82f6',
    dark: '#1d4ed8',
  },
  secondary: {
    DEFAULT: '#10b981',
    light: '#34d399',
    dark: '#059669',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    // ... 既存のグレースケール
  }
}
```

#### スペーシング・サイジング
```js
spacing: {
  '18': '4.5rem', // 72px
  '22': '5.5rem', // 88px
  // カスタムスペーシング値
}
```

#### タイポグラフィ
```js
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  // 既存のフォントサイズシステム
}
```

### 2. コンポーネント移行例

#### Button コンポーネント
```tsx
// Before (CSS Modules)
<button className={styles.button}>Click me</button>

// After (Tailwind)
<button className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
  Click me
</button>
```

### 3. 段階的移行のためのアプローチ

#### ハイブリッド期間
- CSS ModulesとTailwindの併用期間を設ける
- `@apply`ディレクティブを活用して段階的移行
- 既存の`.module.css`内でTailwindユーティリティを使用

```css
/* 移行期間中の例 */
.button {
  @apply inline-flex items-center justify-center px-4 py-2;
  @apply bg-primary text-white font-medium rounded-md;
  @apply hover:bg-primary-dark transition-colors;
}
```

## リスク管理

### 潜在的リスク
1. **スタイルの見た目の違い**: 細かなスタイル差異
2. **パフォーマンス**: 初期バンドルサイズの増加
3. **開発効率**: 移行期間中の開発速度低下

### 対策
1. **詳細なデザイン比較テスト**
2. **段階的ロールアウト**
3. **自動化ツールの活用**（可能な部分）

## 成功指標

1. **技術指標**
   - 全`.module.css`ファイルの削除完了
   - バンドルサイズの最適化
   - ビルド時間の維持または改善

2. **品質指標**
   - デザインの一貫性維持
   - レスポンシブ対応の完全性
   - ブラウザ互換性の維持

3. **開発体験指標**
   - コード記述量の削減
   - スタイリングの開発速度向上
   - メンテナンス性の向上

## タイムライン

- **フェーズ1**: 1-2日
- **フェーズ2**: 2-3日
- **フェーズ3**: 5-7日
- **フェーズ4**: 1-2日

**総予想期間**: 9-14日

## 次のステップ

1. この戦略の承認
2. フェーズ1の実行開始
3. 各フェーズでの進捗確認とフィードバック
4. 必要に応じた戦略調整 