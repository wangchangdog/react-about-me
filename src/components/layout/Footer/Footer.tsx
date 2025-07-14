import { Link } from 'react-router-dom'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-theme-bg-tertiary text-theme-text-secondary pt-16 pb-8 border-t border-theme-border-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-theme-text-primary mb-4">Portfolio</h3>
            <p className="leading-relaxed text-theme-text-tertiary">
              モダンでプロフェッショナルなWebサイトを制作しています。
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-theme-text-primary mb-4">ナビゲーション</h4>
            <nav>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                <li>
                  <Link to="/" className="text-theme-text-tertiary no-underline transition-colors duration-base hover:text-theme-text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-theme-text-tertiary no-underline transition-colors duration-base hover:text-theme-text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-theme-text-tertiary no-underline transition-colors duration-base hover:text-theme-text-primary">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-theme-text-tertiary no-underline transition-colors duration-base hover:text-theme-text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-theme-text-tertiary no-underline transition-colors duration-base hover:text-theme-text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-theme-text-primary mb-4">ソーシャル</h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com"
                className="text-theme-text-tertiary no-underline px-3 py-2 border border-theme-border-secondary rounded-md transition-all duration-base hover:text-theme-text-primary hover:border-primary hover:bg-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="text-theme-text-tertiary no-underline px-3 py-2 border border-theme-border-secondary rounded-md transition-all duration-base hover:text-theme-text-primary hover:border-primary hover:bg-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                className="text-theme-text-tertiary no-underline px-3 py-2 border border-theme-border-secondary rounded-md transition-all duration-base hover:text-theme-text-primary hover:border-primary hover:bg-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-theme-border-secondary text-center">
          <p className="text-theme-text-tertiary text-sm">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}