'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassPanel from '@/components/ui/GlassPanel';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: '랜딩페이지 제작',
    description: '전환되는 페이지, 처음부터 제대로',
    subDescription: '광고를 위한 페이지를 만듭니다. 예쁜 것보다 \'팔리는 구조\'가 먼저입니다.',
    color: 'brand-primary',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO 최적화',
    description: '검색에서 먼저 발견되게',
    subDescription: '네이버, 구글, 메타, 카카오까지 고객이 찾을 때 거기 있어야 합니다.',
    color: 'chart-blue',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: '광고 전략 설계',
    description: '예산 낭비 없는 정확한 설계',
    subDescription: '구글 Ads, 메타, 틱톡 채널별 최적 예산 배분과 타겟 설정',
    color: 'brand-accent',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '운영 & 관리',
    description: '광고 켜고 끝? 저희는 다릅니다',
    subDescription: '성과 나올 때까지 모니터링하고 데이터 보고 계속 개선합니다.',
    color: 'chart-purple',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold mb-4">
            이렇게 <span className="gradient-text">도와드립니다</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            클릭하면 자세한 서비스 내용을 확인할 수 있습니다.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href="/service" className="block h-full">
                <GlassPanel
                  hover
                  className="p-6 h-full group cursor-pointer"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}
                    style={{
                      background: `linear-gradient(135deg, var(--${service.color}) 0%, var(--${service.color}) 100%)`,
                      opacity: 0.2,
                    }}
                  >
                    <span className={`text-${service.color}`}>{service.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-base font-medium text-brand-primary mb-2">
                    {service.description}
                  </p>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {service.subDescription}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center text-brand-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    자세히 보기
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </GlassPanel>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
