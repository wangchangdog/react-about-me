import { useTheme } from '../../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

export const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️'
      case 'dark':
        return '🌙'
      case 'system':
        return '💻'
      default:
        return '☀️'
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'ライトモード'
      case 'dark':
        return 'ダークモード'
      case 'system':
        return 'システム設定'
      default:
        return 'ライトモード'
    }
  }

  const handleToggle = () => {
    const themes = ['light', 'dark', 'system'] as const
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <div className={styles['theme-toggle']}>
      <button
        className={styles['theme-toggle__button']}
        onClick={handleToggle}
        aria-label={`現在: ${getLabel()}。クリックして切り替え`}
        title={getLabel()}
      >
        <span className={styles['theme-toggle__icon']} role="img" aria-hidden="true">
          {getIcon()}
        </span>
        <span className={styles['theme-toggle__indicator']}>
          <span
            className={`${styles['theme-toggle__dot']} ${styles[`theme-toggle__dot--${resolvedTheme}`]}`}
          />
        </span>
      </button>
    </div>
  )
}