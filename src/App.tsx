import { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { Footer } from './components/layout/Footer/Footer'
import { Header } from './components/layout/Header/Header'
import { useTheme } from './hooks/useTheme'
import './styles/globals.css'
import './styles/reset.css'
import './styles/variables.css'

// 遅延読み込み対応
const Home = lazy(() => import('./pages/Home/Home').then(module => ({ default: module.Home })))
const About = lazy(() => import('./pages/About/About').then(module => ({ default: module.About })))
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio').then(module => ({ default: module.Portfolio })))
const Blog = lazy(() => import('./pages/Blog/Blog').then(module => ({ default: module.Blog })))
const Contact = lazy(() => import('./pages/Contact/Contact').then(module => ({ default: module.Contact })))

// ローディングコンポーネント
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-theme-border-primary border-t-primary rounded-full animate-spin"></div>
      <p className="text-theme-text-secondary">読み込み中...</p>
    </div>
  </div>
)

function AppContent() {
  const { theme } = useTheme()

  return (
    <ErrorBoundary>
      <div
        className="w-screen min-h-screen flex flex-col bg-theme-bg-primary text-theme-text-primary transition-all duration-base"
        style={{ '--header-height': '80px' } as React.CSSProperties}
        data-theme={theme}
      >
        <Header />
        <main className="flex-1 pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

function App() {
  return (
    <Router basename='/react-about-me'>
      <AppContent />
    </Router>
  )
}

export default App
