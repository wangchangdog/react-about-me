import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../../ui/ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Link to="/" className={styles.header__logo}>
            <span className={styles['header__logo-text']}>Portfolio</span>
          </Link>

          <nav className={`${styles.header__nav} ${isMenuOpen ? styles['header__nav--open'] : ''}`}>
            <ul className={styles['header__nav-list']}>
              <li className={styles['header__nav-item']}>
                <Link to="/" className={styles['header__nav-link']} onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className={styles['header__nav-item']}>
                <Link to="/about" className={styles['header__nav-link']} onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li className={styles['header__nav-item']}>
                <Link to="/portfolio" className={styles['header__nav-link']} onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </Link>
              </li>
              <li className={styles['header__nav-item']}>
                <Link to="/blog" className={styles['header__nav-link']} onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li className={styles['header__nav-item']}>
                <Link to="/contact" className={styles['header__nav-link']} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className={styles.header__actions}>
              <ThemeToggle />
            </div>
          </nav>

          <button
            className={styles['header__menu-button']}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles['header__menu-icon']} ${isMenuOpen ? styles['header__menu-icon--open'] : ''}`}>
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