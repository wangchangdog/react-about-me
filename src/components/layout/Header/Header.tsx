import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <span className="header__logo-text">Portfolio</span>
          </Link>

          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link to="/" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/about" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/portfolio" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/blog" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/contact" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="header__menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`header__menu-icon ${isMenuOpen ? 'header__menu-icon--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}