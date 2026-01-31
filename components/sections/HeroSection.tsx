'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import GlassPanel from '@/components/ui/GlassPanel';
import RevenueChart from '@/components/charts/RevenueChart';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const floatVariants = {
  animate: {
    y: [0, -15, 0],
    rotateX: [0, 3, 0],
    rotateY: [0, -3, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut' as const,
      repeat: Infinity,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="bg-gradient-blob" />

      {/* Additional animated blobs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copywriting + CTA */}
          <div className="space-y-8">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-primary/30"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-sm text-foreground-muted">데이터 기반 마케팅 파트너</span>
            </motion.div>

            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-display-lg font-bold leading-tight"
            >
              광고비는 줄이고,
              <br />
              <span className="gradient-text">매출은 극대화</span>하는
              <br />
              퍼포먼스 마케팅
            </motion.h1>

            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-lg text-foreground-muted max-w-lg leading-relaxed"
            >
              DS애드와 제이씨마케팅이 함께합니다.
              <br />
              실시간 데이터 분석과 AI 기반 최적화로
              <strong className="text-foreground"> ROAS 300% 이상</strong> 달성을 약속드립니다.
            </motion.p>

            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
              >
                무료 상담 신청
              </Button>
              <Button variant="secondary" size="lg">
                서비스 소개서
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-brand-primary">500+</span>
                <span className="text-sm text-foreground-muted">광고주<br/>파트너</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-brand-primary">98%</span>
                <span className="text-sm text-foreground-muted">고객<br/>만족도</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-brand-primary">15년</span>
                <span className="text-sm text-foreground-muted">업계<br/>경력</span>
              </div>
            </motion.div>
          </div>

          {/* Right: 3D Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative perspective-1000"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <GlassPanel
                variant="glow"
                className="p-6 sm:p-8"
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">실시간 대시보드</h3>
                    <p className="text-sm text-foreground-muted">2024년 6월 현황</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                    <span className="text-xs text-brand-primary">LIVE</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-sm text-foreground-muted mb-1">총 광고비</p>
                    <p className="text-xl font-bold text-foreground">₩245.8M</p>
                    <p className="text-xs text-brand-primary mt-1">-12% 절감</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-sm text-foreground-muted mb-1">총 매출</p>
                    <p className="text-xl font-bold text-foreground">₩892.4M</p>
                    <p className="text-xs text-brand-primary mt-1">+34% 증가</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-sm text-foreground-muted mb-1">ROAS</p>
                    <p className="text-xl font-bold text-brand-primary">363%</p>
                    <p className="text-xs text-foreground-muted mt-1">목표 300%</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-sm text-foreground-muted mb-1">전환율</p>
                    <p className="text-xl font-bold text-foreground">4.2%</p>
                    <p className="text-xs text-brand-primary mt-1">+0.8%p</p>
                  </div>
                </div>

                {/* Chart */}
                <RevenueChart />
              </GlassPanel>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-xl glass border border-brand-accent/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              style={{ transform: 'translateZ(40px)' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-10 h-10 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-xl glass border border-brand-primary/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
