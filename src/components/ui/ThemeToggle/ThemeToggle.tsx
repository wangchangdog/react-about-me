import { useTheme } from '../../../hooks/useTheme'
import { cn } from '../../../utils/cn'

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
    <div className="flex items-center">
      <button
        className="flex items-center gap-2 px-3 py-2 bg-theme-card-bg border border-theme-card-border rounded-full cursor-pointer transition-all duration-base text-sm min-w-12 min-h-10 hover:bg-theme-bg-tertiary hover:-translate-y-0.5 hover:shadow-md focus:outline-2 focus:outline-primary focus:outline-offset-2"
        onClick={handleToggle}
        aria-label={`現在: ${getLabel()}。クリックして切り替え`}
        title={getLabel()}
      >
        <span className="text-lg leading-none flex items-center justify-center w-5 h-5" role="img" aria-hidden="true">
          {getIcon()}
        </span>
        <span className="flex items-center justify-center w-4 h-4 bg-theme-bg-tertiary rounded-full relative overflow-hidden">
          <span
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-base",
              resolvedTheme === 'light'
                ? "bg-yellow-400 shadow-sm shadow-yellow-400/50"
                : "bg-primary shadow-sm shadow-primary/50"
            )}
          />
        </span>
      </button>
    </div>
  )
}