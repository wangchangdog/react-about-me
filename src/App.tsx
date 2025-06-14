import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer/Footer'
import { Header } from './components/layout/Header/Header'
import { About } from './pages/About/About'
import { Blog } from './pages/Blog/Blog'
import { Contact } from './pages/Contact/Contact'
import { Home } from './pages/Home/Home'
import { Portfolio } from './pages/Portfolio/Portfolio'
import style from './App.module.css'
import './styles/globals.css'
import './styles/media-queries.css'
import './styles/reset.css'
import './styles/variables.css'

function App() {
  return (
    <Router>
      <div className={style["app"]}>
        <Header />
        <main className={style["main-content"]}>
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
    </Router>
  )
}

export default App
