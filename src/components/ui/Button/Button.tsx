import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
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
}) => {
  const baseClasses = 'button'
  const variantClass = `button--${variant}`
  const sizeClass = `button--${size}`
  const disabledClass = disabled || loading ? 'button--disabled' : ''
  const loadingClass = loading ? 'button--loading' : ''

  const classes = [
    baseClasses,
    variantClass,
    sizeClass,
    disabledClass,
    loadingClass,
    className
  ].filter(Boolean).join(' ')

  const buttonContent = (
    <>
      {loading && <span className="button__spinner"></span>}
      <span className={`button__content ${loading ? 'button__content--hidden' : ''}`}>
        {children}
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
        >
          {buttonContent}
        </a>
      )
    } else {
      return (
        <Link to={href} className={classes}>
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
    >
      {buttonContent}
    </button>
  )
}