'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="section-container py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold gradient-text">
          DS&JC
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/cpa" className="text-foreground-muted hover:text-foreground transition-colors">
            CPA광고의 이점
          </a>
          <a href="/service" className="text-foreground-muted hover:text-foreground transition-colors">
            서비스 소개
          </a>
          <a href="/cases" className="text-foreground-muted hover:text-foreground transition-colors">
            성공 사례
          </a>
        </nav>

        <a
          href="https://t.me/DSad_26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="sm">
            문의하기
          </Button>
        </a>
      </div>
    </motion.header>
  );
}
