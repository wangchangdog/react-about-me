import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { Footer } from './components/layout/Footer/Footer'
import { Header } from './components/layout/Header/Header'
import { useTheme } from './hooks/useTheme'
import { About } from './pages/About/About'
import { Blog } from './pages/Blog/Blog'
import { Contact } from './pages/Contact/Contact'
import { Home } from './pages/Home/Home'
import { Portfolio } from './pages/Portfolio/Portfolio'
import './styles/globals.css'
import './styles/reset.css'
import './styles/variables.css'

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
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
