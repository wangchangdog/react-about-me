import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

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
  const baseClasses = styles.button
  const variantClass = styles[`button--${variant}`] || ''
  const sizeClass = styles[`button--${size}`] || ''
  const disabledClass = disabled || loading ? styles['button--disabled'] || '' : ''
  const loadingClass = loading ? styles['button--loading'] || '' : ''

  const classes = [
    baseClasses,
    variantClass,
    sizeClass,
    variant === 'gaming' && styles['gaming-button'],
    disabledClass,
    loadingClass,
    className
  ].filter(Boolean).join(' ')

  const buttonContent = (
    <>
      {loading && <span className={styles.button__spinner}></span>}
      <span className={`${styles.button__content} ${loading ? styles['button__content--hidden'] : ''}`}>
        {variant === 'gaming' ? (
          <span className={styles.button__text}>
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