'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassPanel from '@/components/ui/GlassPanel';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '퍼포먼스 마케팅',
    description: '네이버, 카카오, 메타, 구글 등 모든 플랫폼에서 ROAS를 극대화하는 통합 광고 운영',
    features: ['검색 광고', '디스플레이 광고', '리타겟팅', '전환 최적화'],
    color: 'brand-primary',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: '데이터 분석',
    description: '실시간 대시보드와 AI 분석으로 광고 성과를 투명하게 추적하고 인사이트 도출',
    features: ['실시간 모니터링', 'AI 인사이트', '커스텀 리포트', '예측 분석'],
    color: 'chart-blue',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: '크리에이티브 전략',
    description: '데이터 기반의 A/B 테스트와 지속적인 소재 최적화로 클릭률과 전환율 극대화',
    features: ['광고 소재 제작', 'A/B 테스트', '카피라이팅', '비주얼 최적화'],
    color: 'brand-accent',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '컨설팅 & 전략',
    description: '비즈니스 목표에 맞춘 맞춤형 마케팅 전략 수립과 지속적인 성장 로드맵 제시',
    features: ['시장 분석', '경쟁사 분석', '채널 전략', '성장 로드맵'],
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
            <span className="gradient-text">통합 마케팅</span> 서비스
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            데이터와 기술을 기반으로 비즈니스 성장을 이끄는 전문 서비스를 제공합니다.
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
              <GlassPanel
                hover
                className="p-6 h-full group"
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
                <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground-subtle">
                      <svg className="w-4 h-4 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
