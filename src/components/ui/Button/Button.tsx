import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../../utils/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gaming' | 'gaming-glow'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  'aria-label'?: string
  'aria-describedby'?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  href,
  onClick,
  type = 'button',
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
}) => {
  // ベースクラス
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-primary font-medium no-underline border-2 border-transparent rounded-md cursor-pointer transition-all duration-base relative overflow-hidden focus:outline-2 focus:outline-primary focus:outline-offset-2'

  // バリアントクラス
  const variantClasses = {
    primary: 'bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark hover:-translate-y-0.5 hover:shadow-md',
    secondary: 'bg-secondary text-white border-secondary hover:bg-secondary-dark hover:border-secondary-dark hover:-translate-y-0.5 hover:shadow-md',
    outline: 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md',
    ghost: 'bg-transparent text-theme-text-primary border-transparent hover:bg-theme-bg-secondary hover:-translate-y-0.5',
    gaming: 'gaming-button text-white',
    'gaming-glow': 'gaming-button text-white'
  }

  // サイズクラス
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]'
  }

  // 無効化クラス
  const disabledClasses = disabled || loading ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''

  // ローディングクラス
  const loadingClasses = loading ? 'pointer-events-none' : ''

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    loadingClasses,
    className
  )

  const buttonContent = (
    <>
      {loading && (
        <span className="absolute w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin"></span>
      )}
      <span className={`flex items-center justify-center gap-2 ${loading ? 'opacity-0' : ''}`}>
        {variant === 'gaming' || variant === 'gaming-glow' ? (
          <span className="bg-gradient-to-r from-pink-500 via-cyan-500 to-yellow-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x font-semibold relative">
            {children}
          </span>
        ) : (
          children
        )}
      </span>
    </>
  )

  if (href && !disabled && !loading) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
        >
          {buttonContent}
        </a>
      )
    } else {
      return (
        <Link
          to={href}
          className={classes}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
        >
          {buttonContent}
        </Link>
      )
    }
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    >
      {buttonContent}
    </button>
  )
}