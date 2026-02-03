'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassPanel from '@/components/ui/GlassPanel';

const comparisonData = {
  general: {
    title: '일반 대행사',
    subtitle: '기존 방식',
    items: [
      { icon: '📦', text: '광고 운영만', detail: '서비스 범위' },
      { icon: '👥', text: '담당자 여러 명, 떠넘기기', detail: '커뮤니케이션' },
      { icon: '📊', text: '월 1회 PDF 리포트', detail: '리포팅' },
      { icon: '🔧', text: '세팅 후 방치', detail: '최적화' },
      { icon: '💰', text: '고정 수수료', detail: '비용 구조' },
    ],
  },
  dsjc: {
    title: 'DS&JC',
    subtitle: '원스톱 솔루션',
    items: [
      { icon: '🚀', text: '페이지 제작 → SEO → 광고 → 관리 원스톱', detail: '서비스 범위' },
      { icon: '🤝', text: '한 팀이 처음부터 끝까지', detail: '커뮤니케이션' },
      { icon: '📊', text: '실시간 대시보드 + 주간 인사이트', detail: '리포팅' },
      { icon: '🔄', text: '지속적 A/B 테스트 & 개선', detail: '최적화' },
      { icon: '💰', text: '성과 연동 옵션 제공', detail: '비용 구조' },
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-4">
            Why DS&JC?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold mb-4">
            왜 <span className="gradient-text">DS&JC</span>인가요?
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            일반 대행사와의 차이를 확인하세요.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* General Agency Card - Grayscale */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <GlassPanel
              variant="dark"
              className="p-6 sm:p-8 h-full opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wider text-foreground-subtle">
                  {comparisonData.general.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-foreground-muted mt-1">
                  {comparisonData.general.title}
                </h3>
              </div>

              <motion.ul className="space-y-4" variants={containerVariants}>
                {comparisonData.general.items.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
                  >
                    <span className="text-2xl grayscale">{item.icon}</span>
                    <div>
                      <p className="font-medium text-foreground-muted">{item.text}</p>
                      <p className="text-sm text-foreground-subtle">{item.detail}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Result badge */}
              <div className="mt-8 p-4 rounded-xl bg-white/5 text-center">
                <p className="text-sm text-foreground-subtle">평균 성과</p>
                <p className="text-2xl font-bold text-foreground-muted">ROAS 180%</p>
              </div>
            </GlassPanel>
          </motion.div>

          {/* DS&JC Card - Brand Colors */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <GlassPanel
              variant="glow"
              className="p-6 sm:p-8 h-full relative"
            >
              {/* Recommended badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-brand-primary text-background text-sm font-semibold">
                  추천
                </span>
              </div>

              <div className="mb-8">
                <span className="text-xs uppercase tracking-wider text-brand-primary">
                  {comparisonData.dsjc.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-1">
                  {comparisonData.dsjc.title}
                </h3>
              </div>

              <motion.ul className="space-y-4" variants={containerVariants}>
                {comparisonData.dsjc.items.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-medium text-foreground">{item.text}</p>
                      <p className="text-sm text-foreground-muted">{item.detail}</p>
                    </div>
                    <svg
                      className="w-5 h-5 text-brand-primary ml-auto flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Result badge */}
              <div className="mt-8 p-4 rounded-xl bg-brand-primary/20 border border-brand-primary/30 text-center">
                <p className="text-sm text-foreground-muted">보장 성과</p>
                <p className="text-2xl font-bold text-brand-primary">ROAS 300%+</p>
              </div>
            </GlassPanel>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-foreground-muted mb-6">
            아직도 고민 중이신가요? <strong className="text-foreground">편하게 문의</strong>해 주세요.
          </p>
          <a
            href="https://t.me/DSad_26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-lg"
            >
              문의하기
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
