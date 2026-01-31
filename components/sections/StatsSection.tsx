'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  {
    value: 500,
    suffix: '+',
    label: '누적 프로젝트',
    description: '다양한 업종의 고객사',
  },
  {
    value: 15,
    suffix: '년',
    label: '통합 경력',
    description: '축적된 노하우',
  },
  {
    value: 98,
    suffix: '%',
    label: '재계약률',
    description: '높은 고객 만족도',
  },
  {
    value: 287,
    suffix: '%',
    label: '평균 ROAS',
    description: '검증된 성과',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [count, isInView, value]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-transparent to-brand-accent/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold mb-4">
            <span className="gradient-text">숫자</span>로 증명하는 성과
          </h2>
          <p className="text-lg text-foreground-muted">
            데이터가 보여주는 DS&JC의 실력
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl glass"
            >
              <div className="text-4xl sm:text-5xl font-bold text-brand-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-foreground-muted">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Logos / Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-foreground-subtle mb-6">공식 파트너사</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="px-6 py-3 rounded-lg glass text-foreground-muted font-medium">
              네이버
            </div>
            <div className="px-6 py-3 rounded-lg glass text-foreground-muted font-medium">
              카카오
            </div>
            <div className="px-6 py-3 rounded-lg glass text-foreground-muted font-medium">
              Google
            </div>
            <div className="px-6 py-3 rounded-lg glass text-foreground-muted font-medium">
              Meta
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
