'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-brand-primary to-brand-secondary
      text-background font-semibold
      shadow-[0_4px_20px_rgba(0,212,170,0.3)]
      hover:shadow-[0_6px_30px_rgba(0,212,170,0.4)]
    `,
    secondary: `
      bg-white/10 border border-white/20
      text-foreground font-semibold
      hover:bg-white/15 hover:border-white/30
    `,
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-xl
        transition-all duration-300
        flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </motion.button>
  );
}
