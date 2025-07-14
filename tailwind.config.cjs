/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // カラーシステム - variables.css から移行
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
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        // テーマ変数
        'theme-bg-primary': 'var(--theme-bg-primary)',
        'theme-bg-secondary': 'var(--theme-bg-secondary)',
        'theme-bg-tertiary': 'var(--theme-bg-tertiary)',
        'theme-text-primary': 'var(--theme-text-primary)',
        'theme-text-secondary': 'var(--theme-text-secondary)',
        'theme-text-tertiary': 'var(--theme-text-tertiary)',
        'theme-border-primary': 'var(--theme-border-primary)',
        'theme-border-secondary': 'var(--theme-border-secondary)',
        'theme-card-bg': 'var(--theme-card-bg)',
        'theme-card-border': 'var(--theme-card-border)',
        'theme-nav-bg': 'var(--theme-nav-bg)',
        'theme-nav-border': 'var(--theme-nav-border)',
        'theme-nav-link': 'var(--theme-nav-link)',
        'theme-nav-link-hover': 'var(--theme-nav-link-hover)',
        'theme-nav-link-active': 'var(--theme-nav-link-active)',
        'theme-input-bg': 'var(--theme-input-bg)',
        'theme-input-border': 'var(--theme-input-border)',
        'theme-input-focus-border': 'var(--theme-input-focus-border)',
      },
      
      // フォントファミリー
      fontFamily: {
        primary: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        secondary: ['"Poppins"', 'sans-serif'],
        mono: ['"Fira Code"', '"SF Mono"', '"Monaco"', '"Cascadia Code"', 'monospace'],
      },
      
      // フォントサイズ - line-height付き
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      // line-height
      lineHeight: {
        'tight': '1.25',
        'normal': '1.5',
        'relaxed': '1.75',
      },
      
      // スペーシング - 既存のカスタム値を追加
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
      },
      
      // ボーダー半径
      borderRadius: {
        'sm': '0.25rem',
        'base': '0.375rem', 
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      
      // ボーダー幅
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
      
      // ボックスシャドウ
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'theme-card-shadow': 'var(--theme-card-shadow)',
      },
      
      // トランジション
      transitionDuration: {
        'base': '150ms',
        'slow': '300ms',
      },
      
      // Z-index
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },
      
      // コンテナサイズ
      maxWidth: {
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1536px',
      },
      
      // カスタムアニメーション
      animation: {
        'fade-in': 'fadeIn 150ms ease-out',
        'slide-up': 'slideUp 150ms ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'gaming-border': 'gamingBorder 4s linear infinite',
        'gradient-x': 'gradientX 3s ease-in-out infinite alternate',
      },
      
      // キーフレーム
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(1rem)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        gamingBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gradientX: {
          '0%': { 
            'background-position': '0% 50%',
            'filter': 'drop-shadow(0 0 5px rgba(255, 0, 128, 0.5))'
          },
          '100%': { 
            'background-position': '100% 50%',
            'filter': 'drop-shadow(0 0 10px rgba(64, 224, 208, 0.5))'
          },
        },
      },
    },
  },
  plugins: [],
} 