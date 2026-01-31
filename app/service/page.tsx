'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassPanel from '@/components/ui/GlassPanel';
import Button from '@/components/ui/Button';
import Footer from '@/components/sections/Footer';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: '전환되는 랜딩페이지 제작',
    description: '광고 클릭 후 이탈하면 의미 없습니다.\n방문자가 행동하게 만드는 페이지를 설계합니다.',
    features: [
      '업종별 전환 구조 분석',
      '모바일 최적화 필수 적용',
      '로딩 속도 최적화',
      'A/B 테스트용 다중 버전 제작',
      '폼/CTA 배치 전략 설계',
    ],
    result: '광고에 바로 연결 가능한 고전환 랜딩페이지',
    color: 'brand-primary',
  },
  {
    number: '02',
    title: '검색 최적화 (SEO)',
    description: '광고 없이도 고객이 찾아오게 만듭니다.\n업종과 타겟에 맞는 키워드 전략을 세웁니다.',
    features: [
      '네이버 검색 최적화 (스마트플레이스, 블로그, 웹문서)',
      '구글 SEO (메타태그, 구조화 데이터, 사이트맵)',
      '메타/인스타그램 픽셀 설치 및 이벤트 설정',
      '카카오 채널 연동 및 최적화',
      '업종별 핵심 키워드 리서치 & 맞춤 세팅',
      '전환 추적 태그 설치 (GTM, 픽셀, API 연동)',
    ],
    result: '모든 채널에서 검색되고 추적되는 마케팅 인프라',
    color: 'chart-blue',
  },
  {
    number: '03',
    title: '채널별 광고 전략 설계',
    description: '"일단 다 돌려보자"는 돈 버리는 방법입니다.\n데이터 기반으로 채널과 예산을 설계합니다.',
    features: [
      '구글 Ads (검색, 디스플레이, 유튜브, 퍼포먼스맥스)',
      '메타 광고 (페이스북, 인스타그램)',
      '틱톡 광고',
      '네이버 검색광고 & GFA',
      '카카오모먼트',
    ],
    subFeatures: '채널별 예산 배분 / 타겟 오디언스 설계 / 광고 소재 방향 제안',
    result: '예산 대비 최적의 채널 믹스와 실행 계획서',
    color: 'brand-accent',
  },
  {
    number: '04',
    title: '지속적인 운영 & 성과 관리',
    description: '광고는 켜는 게 아니라 \'키우는\' 겁니다.\n세팅하고 끝이 아니라, 성과 날 때까지 붙어 있습니다.',
    features: [
      '일일 성과 모니터링',
      '주간 리포트 & 인사이트 공유',
      '소재 피로도 체크 & 교체 제안',
      '입찰가/타겟 지속 최적화',
      '시즌/이슈 대응 빠른 조정',
      '월간 성과 리뷰 미팅',
    ],
    result: '계속 개선되는 광고, 꾸준히 오르는 ROAS',
    color: 'chart-purple',
  },
];

const caseStudies = [
  {
    image: '/case_1.png',
    category: '보험 / CPA 마케팅',
    title: '보험 보장분석 DB 수집 캠페인',
    description: '보험 무료 보장분석 신청을 통한 잠재고객 DB 확보\n리드 제출 기반 CPA 마케팅으로 유효 DB 단가 최적화',
    stats: [
      { label: '월 리드 수', value: '2,400건+' },
      { label: 'DB 단가', value: '목표 대비 -32%' },
      { label: '유효 전환율', value: '68%' },
    ],
  },
  {
    image: '/case_2.png',
    category: '핀테크 / CPA 마케팅',
    title: '코인 자동매매 프로그램 무료체험 캠페인',
    description: '랜딩페이지 내 무료 평가판 신청 유도\n사용자 정보 리드 제출 기반 CPA 마케팅',
    stats: [
      { label: '월 신청 수', value: '1,800건+' },
      { label: 'CPA', value: '목표 대비 -28%' },
      { label: '체험 → 유료 전환', value: '23%' },
    ],
  },
];

function StepSection({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="section-container">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={isEven ? '' : 'lg:order-2'}
          >
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-5xl font-bold opacity-20"
                style={{ color: `var(--${step.color})` }}
              >
                {step.number}
              </span>
              <span className="text-sm uppercase tracking-wider text-foreground-subtle">STEP {step.number}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {step.title}
            </h2>
            <p className="text-lg text-foreground-muted mb-8 whitespace-pre-line leading-relaxed">
              {step.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {step.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: `var(--${step.color})` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground-muted">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {step.subFeatures && (
              <p className="text-sm text-foreground-subtle mb-6 italic">
                {step.subFeatures}
              </p>
            )}
          </motion.div>

          {/* Result Card */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isEven ? '' : 'lg:order-1'}
          >
            <GlassPanel variant="glow" className="p-8">
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, var(--${step.color}) 0%, var(--${step.color}) 100%)`, opacity: 0.2 }}
                >
                  <span className="text-4xl font-bold" style={{ color: `var(--${step.color})` }}>
                    {step.number}
                  </span>
                </div>
                <p className="text-sm text-foreground-subtle mb-2">결과물</p>
                <p className="text-xl font-semibold text-foreground">{step.result}</p>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <GlassPanel hover className="overflow-hidden">
        {/* Image */}
        <div className="relative h-48 bg-white/5">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-primary/20 text-brand-primary mb-4">
            {study.category}
          </span>
          <h3 className="text-xl font-bold text-foreground mb-3">{study.title}</h3>
          <p className="text-sm text-foreground-muted mb-6 whitespace-pre-line">
            {study.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {study.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-lg font-bold text-brand-primary">{stat.value}</p>
                <p className="text-xs text-foreground-subtle">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  );
}

export default function ServicePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const caseRef = useRef(null);
  const caseInView = useInView(caseRef, { once: true, margin: '-100px' });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen">
      {/* Background gradient */}
      <div className="bg-gradient-blob" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="section-container py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold gradient-text">DS&JC</a>
          <a
            href="https://t.me/DS_ad26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="sm">
              문의하기
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-6">
              One-Stop Marketing Solution
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-display-lg font-bold mb-6">
              <span className="gradient-text">원스톱 마케팅</span> 솔루션
            </h1>
            <p className="text-xl text-foreground-muted leading-relaxed">
              만들고, 최적화하고, 광고하고, 관리합니다.
              <br />
              4단계로 끊김 없이 연결됩니다.
            </p>
          </motion.div>

          {/* Step indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex justify-center items-center gap-4 flex-wrap"
          >
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
                  style={{ background: `var(--${step.color})`, color: 'var(--background)' }}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-white/20 mx-2 hidden sm:block" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Step Sections */}
      {steps.map((step, index) => (
        <StepSection key={step.number} step={step} index={index} />
      ))}

      {/* Case Studies Section */}
      <section ref={caseRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={caseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold">
              실제 <span className="gradient-text">성과</span>를 확인하세요
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section ref={ctaRef} className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <GlassPanel variant="glow" className="p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                우리 업종은 어떻게 하면 좋을까요?
              </h2>
              <p className="text-lg text-foreground-muted mb-8">
                편하게 물어보세요.
              </p>
              <a
                href="https://t.me/DS_ad26"
                target="_blank"
                rel="noopener noreferrer"
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
                  문의하기
                </Button>
              </a>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
