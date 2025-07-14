import type { ErrorInfo, ReactNode } from 'react'
import { Component } from 'react'
import { Button } from '../../ui/Button/Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-theme-bg-primary">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="text-6xl mb-6" role="img" aria-label="エラー">
              😵
            </div>
            <h1 className="text-2xl font-bold text-theme-text-primary mb-4">
              何か問題が発生しました
            </h1>
            <p className="text-theme-text-secondary mb-6 leading-relaxed">
              申し訳ございません。予期しないエラーが発生しました。
              ページを再読み込みするか、しばらく時間をおいてから再度お試しください。
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                variant="primary"
                onClick={this.handleReset}
                aria-label="アプリケーションを再試行"
              >
                再試行
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                aria-label="ページを再読み込み"
              >
                ページを再読み込み
              </Button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-theme-text-secondary hover:text-theme-text-primary">
                  エラー詳細（開発モード）
                </summary>
                <pre className="mt-2 p-4 bg-theme-bg-tertiary rounded text-xs overflow-auto text-theme-text-primary">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
