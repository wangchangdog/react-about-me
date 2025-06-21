import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-about-me/', // GitHub Pagesのリポジトリ名に合わせて設定
  build: {
    outDir: 'dist',
  },
})
