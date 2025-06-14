import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Portfolio</h3>
            <p className="footer__description">
              モダンでプロフェッショナルなWebサイトを制作しています。
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">ナビゲーション</h4>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <Link to="/" className="footer__nav-link">Home</Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/about" className="footer__nav-link">About</Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/portfolio" className="footer__nav-link">Portfolio</Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/blog" className="footer__nav-link">Blog</Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/contact" className="footer__nav-link">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">ソーシャル</h4>
            <div className="footer__social">
              <a href="https://github.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}