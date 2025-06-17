import { Link } from 'react-router-dom'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-4">Portfolio</h3>
            <p className="leading-relaxed text-gray-400">
              モダンでプロフェッショナルなWebサイトを制作しています。
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-white mb-4">ナビゲーション</h4>
            <nav>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                <li>
                  <Link to="/" className="text-gray-400 no-underline transition-colors duration-base hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 no-underline transition-colors duration-base hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-400 no-underline transition-colors duration-base hover:text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 no-underline transition-colors duration-base hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 no-underline transition-colors duration-base hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-white mb-4">ソーシャル</h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com"
                className="text-gray-400 no-underline px-3 py-2 border border-gray-700 rounded-md transition-all duration-base hover:text-white hover:border-primary hover:bg-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 no-underline px-3 py-2 border border-gray-700 rounded-md transition-all duration-base hover:text-white hover:border-primary hover:bg-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 no-underline px-3 py-2 border border-gray-700 rounded-md transition-all duration-base hover:text-white hover:border-primary hover:bg-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}