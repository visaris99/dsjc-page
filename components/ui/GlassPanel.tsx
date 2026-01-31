'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassPanelProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  variant?: 'default' | 'light' | 'dark' | 'glow';
  hover?: boolean;
  className?: string;
}

export default function GlassPanel({
  children,
  variant = 'default',
  hover = false,
  className = '',
  ...motionProps
}: GlassPanelProps) {
  const variants = {
    default: 'glass',
    light: 'glass-light',
    dark: 'glass-dark',
    glow: 'glass-glow',
  };

  const hoverClass = hover
    ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-glass-lg transition-all duration-300'
    : '';

  return (
    <motion.div
      className={`${variants[variant]} rounded-2xl ${hoverClass} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
