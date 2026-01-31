'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassPanel from '@/components/ui/GlassPanel';
import Button from '@/components/ui/Button';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const problems = [
  {
    icon: '📞',
    title: '타겟팅 없는 콜드콜',
    description: 'DB 사서 무작위로 돌리면?\n"관심 없어요" "뭔데요" "끊을게요"\n100통 중 99통이 거절입니다.',
  },
  {
    icon: '📉',
    title: '시간 대비 성과 하락',
    description: '하루 종일 전화해도 계약은 0~1건\n직원 지치고, 이직률 높아지고\n인건비는 인건비대로 나갑니다.',
  },
  {
    icon: '🚫',
    title: '"또 영업 전화야?"',
    description: '스팸 차단 앱, 모르는 번호 안 받기\n고객들의 방어벽은 점점 높아지고\nTM 자체에 대한 거부감이 커졌습니다.',
  },
  {
    icon: '❌',
    title: '구매 DB의 함정',
    description: '오래된 DB, 중복 DB, 허위 정보\n"이 번호 없는 번호입니다"\n돈 주고 산 DB가 쓰레기인 경우 허다합니다.',
  },
];

const benefits = [
  {
    icon: '🎯',
    title: '니즈 있는 고객만 유입',
    description: '"보험 비교 받아보고 싶어요"\n"무료 상담 신청합니다"\n고객이 먼저 손 들고 들어옵니다.',
  },
  {
    icon: '📈',
    title: '계약 전환율 급상승',
    description: '관심 없는 100명 vs 관심 있는 10명\n후자가 계약률이 5배 이상 높습니다.\n같은 시간, 더 많은 성과.',
  },
  {
    icon: '💰',
    title: '광고비 = 성과비',
    description: '허공에 뿌리는 광고비 없습니다.\n리드가 들어왔을 때만 비용 발생.\nROI 계산이 명확해집니다.',
  },
  {
    icon: '😌',
    title: '영업팀 사기 회복',
    description: '"오늘도 거절만 100번..."이 아니라\n"오늘 신청 고객 15명 컨택 완료"\n팀 분위기가 달라집니다.',
  },
];

const processSteps = [
  {
    number: '01',
    title: '타겟 설계',
    description: '어떤 고객이 우리 상품에 관심 가질까?\n업종, 연령, 관심사, 행동 패턴 분석\n정밀 타겟팅 전략 수립',
  },
  {
    number: '02',
    title: '광고 집행',
    description: '메타(페이스북/인스타), 구글, 틱톡 등\n타겟이 있는 채널에 맞춤 광고 노출\n클릭 유도하는 소재 제작',
  },
  {
    number: '03',
    title: '리드 수집',
    description: '랜딩페이지에서 고객이 직접 정보 입력\n이름, 연락처, 관심 상품 등\n본인 의지로 신청한 따뜻한 리드',
  },
  {
    number: '04',
    title: 'DB 전달',
    description: '수집된 리드를 실시간 전달\n중복/허위 필터링 완료\n바로 TM 연결 가능한 상태',
  },
];

const comparisonData = [
  { label: 'DB 확보 방식', tm: '구매 또는 무작위 수집', cpa: '고객이 직접 신청' },
  { label: '고객 관심도', tm: '없음 (모름)', cpa: '있음 (본인이 신청)' },
  { label: '첫 통화 반응', tm: '"누구세요?" "관심 없어요"', cpa: '"아, 제가 신청한 거요"' },
  { label: '통화 연결률', tm: '10~20%', cpa: '60~80%' },
  { label: '계약 전환율', tm: '1% 미만', cpa: '5~15%' },
  { label: '직원 스트레스', tm: '극심함', cpa: '현저히 낮음' },
  { label: '비용 구조', tm: 'DB 구매비 + 인건비', cpa: '유효 리드당 과금' },
];

export default function CpaPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const problemRef = useRef(null);
  const problemInView = useInView(problemRef, { once: true, margin: '-100px' });
  const solutionRef = useRef(null);
  const solutionInView = useInView(solutionRef, { once: true, margin: '-100px' });
  const benefitRef = useRef(null);
  const benefitInView = useInView(benefitRef, { once: true, margin: '-100px' });
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: '-100px' });
  const caseRef = useRef(null);
  const caseInView = useInView(caseRef, { once: true, margin: '-100px' });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen">
      <div className="bg-gradient-blob" />
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20">
        <div className="section-container">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-foreground-subtle mb-8 justify-center"
          >
            <a href="/" className="hover:text-brand-primary transition-colors">Home</a>
            <span className="opacity-50">/</span>
            <span className="text-brand-primary font-medium">CPA 광고의 이점</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-accent mb-6">
              TM 영업, 이대로 괜찮으신가요?
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-display-lg font-bold mb-6">
              콜 100통에 계약 1건,
              <br />
              <span className="gradient-text">이제 그만하셔도 됩니다</span>
            </h1>
            <p className="text-xl text-foreground-muted leading-relaxed mb-10">
              타겟팅 없는 무작위 TM은 효율도, 사기도 바닥입니다.
              <br />
              이젠 <strong className="text-foreground">&apos;관심 있는 고객&apos;</strong>만 골라서 연락하세요.
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
                CPA 광고 상담받기
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section ref={problemRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-foreground-subtle mb-4">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold">
              기존 TM, <span className="text-brand-accent">왜 점점 힘들어질까요?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={problemInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassPanel className="p-6 h-full border-white/5 hover:border-brand-accent/30 transition-colors">
                  <span className="text-3xl mb-4 block">{problem.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-sm text-foreground-muted whitespace-pre-line leading-relaxed">
                    {problem.description}
                  </p>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section ref={solutionRef} className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-4">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold mb-6">
              <span className="gradient-text">CPA 광고</span>, 뭐가 다른가요?
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              CPA(Cost Per Action)는 <strong className="text-foreground">&apos;고객이 직접 행동했을 때만&apos;</strong> 비용이 발생하는 광고입니다.
              <br />
              즉, 관심 있는 고객이 스스로 정보를 남겼을 때만 비용을 지불합니다.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <GlassPanel className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-foreground-subtle font-medium">항목</th>
                      <th className="text-center p-4 text-foreground-muted font-medium bg-white/5">기존 TM (콜드콜)</th>
                      <th className="text-center p-4 text-brand-primary font-bold bg-brand-primary/10">CPA 광고</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={row.label} className={index !== comparisonData.length - 1 ? 'border-b border-white/5' : ''}>
                        <td className="p-4 text-foreground font-medium">{row.label}</td>
                        <td className="p-4 text-center text-foreground-muted bg-white/5">{row.tm}</td>
                        <td className="p-4 text-center text-foreground font-medium bg-brand-primary/10">{row.cpa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-4">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold">
              CPA로 바꾸면 <span className="gradient-text">이렇게 달라집니다</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassPanel variant="glow" className="p-6 h-full">
                  <span className="text-3xl mb-4 block">{benefit.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-foreground-muted whitespace-pre-line leading-relaxed">
                    {benefit.description}
                  </p>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-4">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold">
              DS&JC의 <span className="gradient-text">CPA 마케팅 프로세스</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary/50 to-transparent z-0" style={{ width: '100%' }} />
                )}
                <GlassPanel className="p-6 h-full relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-brand-primary">{step.number}</span>
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-foreground-muted whitespace-pre-line leading-relaxed">
                    {step.description}
                  </p>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section ref={caseRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={caseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-4">
              Results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold">
              실제로 <span className="gradient-text">이렇게 달라졌습니다</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Case 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={caseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <GlassPanel className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-primary/20 text-brand-primary mb-4">
                  보험 TM 영업팀
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground-subtle mb-3 font-medium">Before</p>
                    <div className="space-y-2 text-sm text-foreground-muted">
                      <p>일 콜 수: <span className="text-foreground">200통</span></p>
                      <p>연결률: <span className="text-foreground">15%</span></p>
                      <p>일 계약: <span className="text-foreground">0.5건</span></p>
                      <p>이직률: <span className="text-foreground">월 20%</span></p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-brand-primary mb-3 font-medium">After (CPA 도입)</p>
                    <div className="space-y-2 text-sm">
                      <p className="text-foreground-muted">일 콜 수: <span className="text-brand-primary font-bold">40통</span></p>
                      <p className="text-foreground-muted">연결률: <span className="text-brand-primary font-bold">72%</span></p>
                      <p className="text-foreground-muted">일 계약: <span className="text-brand-primary font-bold">3.2건</span></p>
                      <p className="text-foreground-muted">이직률: <span className="text-brand-primary font-bold">월 5%</span></p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>

            {/* Case 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={caseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassPanel className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-primary/20 text-brand-primary mb-4">
                  대출 상담 회사
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground-subtle mb-3 font-medium">Before</p>
                    <div className="space-y-2 text-sm text-foreground-muted">
                      <p>DB 구매비: <span className="text-foreground">월 500만원</span></p>
                      <p>유효 상담: <span className="text-foreground">30건</span></p>
                      <p>상담당 비용: <span className="text-foreground">16.7만원</span></p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-brand-primary mb-3 font-medium">After (CPA 도입)</p>
                    <div className="space-y-2 text-sm">
                      <p className="text-foreground-muted">CPA 비용: <span className="text-brand-primary font-bold">월 400만원</span></p>
                      <p className="text-foreground-muted">유효 상담: <span className="text-brand-primary font-bold">180건</span></p>
                      <p className="text-foreground-muted">상담당 비용: <span className="text-brand-primary font-bold">2.2만원</span></p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </div>

          <p className="text-center text-sm text-foreground-subtle mt-8">
            ※ 실제 수치는 업종/상품에 따라 다를 수 있습니다
          </p>
        </div>
      </section>

      {/* CTA Section */}
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
                이제 <span className="gradient-text">시대가 바뀌었습니다</span>
              </h2>
              <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
                무작위 TM에 지치셨다면,
                <br />
                <strong className="text-foreground">&apos;찾아오는 고객&apos;</strong>을 만나보세요.
                <br />
                <span className="text-sm">데이터 기반 CPA 마케팅으로 영업의 효율을 바꿔드립니다.</span>
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
                  무료 상담 받기
                </Button>
              </a>
              <p className="text-sm text-foreground-subtle mt-6">
                상담은 무료입니다. 부담 없이 문의하세요.
              </p>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
