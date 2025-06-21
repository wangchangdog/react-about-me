# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
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
