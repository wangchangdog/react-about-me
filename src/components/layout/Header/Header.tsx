import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../../utils/cn'
import { ThemeToggle } from '../../ui/ThemeToggle/ThemeToggle'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-fixed bg-theme-nav-bg/80 border-b border-theme-nav-border backdrop-blur-md transition-all duration-base">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 min-h-[80px]">
          <Link to="/" className="no-underline text-theme-text-primary">
            <span className="text-2xl font-bold text-primary">Portfolio</span>
          </Link>

          <nav className={cn(
            // Desktop styles
            "hidden md:flex items-center",
            // Mobile styles
            "max-md:absolute max-md:top-full max-md:left-0 max-md:right-0 max-md:bg-theme-nav-bg max-md:border-b max-md:border-theme-nav-border max-md:transition-all max-md:duration-base",
            isMenuOpen
              ? "max-md:translate-y-0 max-md:opacity-100 max-md:visible"
              : "max-md:-translate-y-full max-md:opacity-0 max-md:invisible"
          )}>
            <ul className="flex list-none m-0 p-0 gap-8 max-md:flex-col max-md:gap-0 max-md:py-4">
              <li className="m-0">
                <Link
                  to="/"
                  className="no-underline text-theme-nav-link font-medium transition-colors duration-base relative hover:text-theme-nav-link-hover max-md:block max-md:py-4 max-md:px-4 max-md:border-b max-md:border-theme-border-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-base hover:after:w-full max-md:after:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="m-0">
                <Link
                  to="/about"
                  className="no-underline text-theme-nav-link font-medium transition-colors duration-base relative hover:text-theme-nav-link-hover max-md:block max-md:py-4 max-md:px-4 max-md:border-b max-md:border-theme-border-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-base hover:after:w-full max-md:after:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="m-0">
                <Link
                  to="/portfolio"
                  className="no-underline text-theme-nav-link font-medium transition-colors duration-base relative hover:text-theme-nav-link-hover max-md:block max-md:py-4 max-md:px-4 max-md:border-b max-md:border-theme-border-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-base hover:after:w-full max-md:after:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li className="m-0">
                <Link
                  to="/blog"
                  className="no-underline text-theme-nav-link font-medium transition-colors duration-base relative hover:text-theme-nav-link-hover max-md:block max-md:py-4 max-md:px-4 max-md:border-b max-md:border-theme-border-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-base hover:after:w-full max-md:after:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li className="m-0">
                <Link
                  to="/contact"
                  className="no-underline text-theme-nav-link font-medium transition-colors duration-base relative hover:text-theme-nav-link-hover max-md:block max-md:py-4 max-md:px-4 max-md:border-b-0 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-base hover:after:w-full max-md:after:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4 ml-6 max-md:ml-0 max-md:px-4 max-md:py-2">
              <ThemeToggle />
            </div>
          </nav>

          <button
            className="flex flex-col justify-center items-center w-11 h-11 bg-transparent border-0 cursor-pointer p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="flex flex-col w-6 h-[18px] relative">
              <span className={cn(
                "w-full h-0.5 bg-theme-text-primary transition-all duration-base absolute top-0 origin-center",
                isMenuOpen && "rotate-45 translate-x-1.5 translate-y-1.5"
              )}></span>
              <span className={cn(
                "w-full h-0.5 bg-theme-text-primary transition-all duration-base absolute top-1/2 -translate-y-1/2 origin-center",
                isMenuOpen && "opacity-0"
              )}></span>
              <span className={cn(
                "w-full h-0.5 bg-theme-text-primary transition-all duration-base absolute bottom-0 origin-center",
                isMenuOpen && "-rotate-45 translate-x-1.5 -translate-y-1.5"
              )}></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}