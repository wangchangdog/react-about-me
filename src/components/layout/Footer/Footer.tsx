import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles.footer__section}>
            <h3 className={styles.footer__title}>Portfolio</h3>
            <p className={styles.footer__description}>
              モダンでプロフェッショナルなWebサイトを制作しています。
            </p>
          </div>

          <div className={styles.footer__section}>
            <h4 className={styles.footer__subtitle}>ナビゲーション</h4>
            <nav className={styles.footer__nav}>
              <ul className={styles['footer__nav-list']}>
                <li className={styles['footer__nav-item']}>
                  <Link to="/" className={styles['footer__nav-link']}>Home</Link>
                </li>
                <li className={styles['footer__nav-item']}>
                  <Link to="/about" className={styles['footer__nav-link']}>About</Link>
                </li>
                <li className={styles['footer__nav-item']}>
                  <Link to="/portfolio" className={styles['footer__nav-link']}>Portfolio</Link>
                </li>
                <li className={styles['footer__nav-item']}>
                  <Link to="/blog" className={styles['footer__nav-link']}>Blog</Link>
                </li>
                <li className={styles['footer__nav-item']}>
                  <Link to="/contact" className={styles['footer__nav-link']}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.footer__section}>
            <h4 className={styles.footer__subtitle}>ソーシャル</h4>
            <div className={styles.footer__social}>
              <a href="https://github.com" className={styles['footer__social-link']} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" className={styles['footer__social-link']} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com" className={styles['footer__social-link']} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}