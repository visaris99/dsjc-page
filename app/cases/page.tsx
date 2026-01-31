'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassPanel from '@/components/ui/GlassPanel';
import Button from '@/components/ui/Button';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Image from 'next/image';

const cases = [
  {
    id: 1,
    image: '/case_1.png',
    tags: ['핀테크', 'CPA 마케팅'],
    title: '코인 자동매매 프로그램',
    subtitle: '무료 체험판 리드 수집',
    background: '코인 자동매매 솔루션 회사의 신규 고객 확보 프로젝트. 무료 평가판 체험 신청을 통해 잠재 고객 DB를 수집하고, 체험 후 유료 전환을 유도하는 CPA 마케팅 진행.',
    strategy: [
      '타겟: 코인 투자에 관심 있는 30~50대 남성',
      '채널: 메타(페이스북/인스타), 구글 디스플레이',
      '랜딩: 자동매매 수익률 강조 + 무료체험 신청폼',
      '전환 포인트: 이름/연락처/이메일 제출',
    ],
    stats: [
      { label: '월 리드 수', value: '1,800건+' },
      { label: 'CPA 단가', value: '목표 대비 -28%' },
      { label: '체험→유료 전환', value: '23%' },
    ],
    insight: '기존에 블로그 마케팅만 했는데, CPA로 전환하고 나서 실제 문의가 체감될 정도로 늘었습니다.',
  },
  {
    id: 2,
    image: '/case_2.png',
    tags: ['보험', 'CPA 마케팅', 'TM 연계'],
    title: '보험 무료 보장분석',
    subtitle: 'DB 수집 캠페인',
    background: '보험 TM 영업팀의 콜드콜 효율 저하 문제 해결을 위해 "무료 보장분석" 신청 기반 CPA 마케팅 도입. 관심 고객 DB를 확보하여 TM 연결률과 계약률 개선.',
    strategy: [
      '타겟: 30~50대, 기존 보험 가입자 (리모델링 니즈)',
      '채널: 메타 광고 (카드뉴스형 소재)',
      '랜딩: 보장분석 필요성 강조 + 간편 신청폼',
      '전환 포인트: 이름/연락처/생년월일 제출',
    ],
    stats: [
      { label: '월 리드 수', value: '2,400건+' },
      { label: 'DB 단가', value: '목표 대비 -32%' },
      { label: '유효 전환율', value: '68%' },
      { label: 'TM 연결률', value: '기존 대비 +340%' },
    ],
    insight: '무작위 DB 대비 CPA 리드의 TM 연결률이 3배 이상 높게 나타남. 첫 통화 거부율 현저히 감소.',
  },
  {
    id: 3,
    image: '/case_3.png',
    tags: ['보험', 'CPA 마케팅', '듀얼 채널', '문자 마케팅'],
    title: '보험 보장분석 듀얼 캠페인',
    subtitle: '문자 + 전화 투트랙 전략',
    background: '단일 TM 채널의 한계를 넘어서기 위해 문자(LMS) 선발송 + 전화 후속 컨택 듀얼 전략 설계. 고객 접점을 다양화하여 전환율 극대화.',
    strategy: [
      '1차 접점: 문자(LMS) 발송 - 보장분석 안내 + 링크',
      '2차 접점: 미응답자 대상 TM 컨택',
      '타겟 세분화: 문자 반응자 / 미반응자 분리 관리',
      'A/B 테스트: 문자 카피 및 발송 시간대 최적화',
    ],
    stats: [
      { label: '문자 오픈율', value: '41%' },
      { label: '문자→링크 클릭', value: '12.4%' },
      { label: 'TM 연결률', value: '72%' },
      { label: '통합 계약 전환', value: '기존 대비 +31%' },
    ],
    channelComparison: [
      { channel: '문자(LMS)', response: '12.4%', conversion: '8.2%', note: '부담 없이 정보 확인' },
      { channel: '전화(TM)', response: '34.2%', conversion: '18.7%', note: '즉각적 상담 가능' },
      { channel: '듀얼 통합', response: '-', conversion: '24.3%', note: '단일 채널 대비 +31%' },
    ],
    insight: '문자로 먼저 정보를 전달하면 TM 콜 시 "아, 문자 받았어요"라는 반응이 나옴. 콜드콜 거부감이 현저히 줄어드는 효과. 문자만, 전화만 하는 것보다 듀얼로 접근했을 때 전환율이 가장 높음.',
  },
  {
    id: 4,
    image: '/case_4.png',
    tags: ['투자', '선물거래', 'CPA 마케팅', '리딩방'],
    title: '국내선물 · 해외선물',
    subtitle: '투자 상담 리드 수집',
    background: '선물 투자 리딩 서비스의 신규 회원 모집 프로젝트. 국내선물(코스피200, 미니선물)과 해외선물(나스닥, 골드 등) 각각의 타겟층에 맞는 차별화된 광고 전략 수립.',
    strategy: [
      '국내선물: 주식 경험 있는 40~60대, 안정적 수익 추구',
      '해외선물: 공격적 투자 성향 30~50대, 고수익 추구',
      '채널: 메타, 구글, 네이버 GFA',
      '랜딩: 무료 상담 신청 / 리딩방 체험 신청',
    ],
    stats: [
      { label: '총 월 리드', value: '2,100건+' },
      { label: '평균 CPA', value: '목표 대비 -21%' },
      { label: '상담→가입 전환', value: '평균 17.5%' },
      { label: '리딩방 잔존율', value: '3개월 기준 62%' },
    ],
    productComparison: [
      { product: '국내선물', leads: '1,200건+', cpa: '목표 대비 -18%', conversion: '15%' },
      { product: '해외선물', leads: '900건+', cpa: '목표 대비 -24%', conversion: '21%' },
    ],
    insight: '국내선물은 "안정성", 해외선물은 "수익률"을 강조한 소재가 CTR이 높게 나타남. 투자 경험 여부를 폼에서 미리 수집하면 상담 시 맞춤 설명이 가능해 전환율 상승. 야간 시간대(21시~24시) 광고 노출이 해외선물 타겟에게 특히 효과적.',
  },
];

function CaseSection({ caseData, index }: { caseData: typeof cases[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <section ref={ref} className="py-20 relative">
      {index % 2 === 1 && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />
      )}
      <div className="section-container relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={!isEven ? 'lg:order-2' : ''}
          >
            <GlassPanel className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={caseData.image}
                  alt={caseData.title}
                  fill
                  className="object-cover"
                />
              </div>
            </GlassPanel>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={!isEven ? 'lg:order-1' : ''}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {caseData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-brand-primary/20 text-brand-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {caseData.title}
            </h2>
            <p className="text-lg text-brand-primary font-medium mb-6">
              {caseData.subtitle}
            </p>

            {/* Background */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-2">
                프로젝트 배경
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {caseData.background}
              </p>
            </div>

            {/* Strategy */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-3">
                진행 전략
              </h3>
              <ul className="space-y-2">
                {caseData.strategy.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground-muted">
                    <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Channel Comparison (Case 3) */}
            {caseData.channelComparison && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-3">
                  채널별 성과
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-foreground-subtle font-medium">채널</th>
                        <th className="text-center py-2 text-foreground-subtle font-medium">반응률</th>
                        <th className="text-center py-2 text-foreground-subtle font-medium">상담 전환</th>
                        <th className="text-left py-2 text-foreground-subtle font-medium">특징</th>
                      </tr>
                    </thead>
                    <tbody>
                      {caseData.channelComparison.map((row, i) => (
                        <tr key={i} className="border-b border-white/5">
                          <td className="py-2 text-foreground font-medium">{row.channel}</td>
                          <td className="py-2 text-center text-foreground-muted">{row.response}</td>
                          <td className="py-2 text-center text-brand-primary font-bold">{row.conversion}</td>
                          <td className="py-2 text-foreground-muted text-xs">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Product Comparison (Case 4) */}
            {caseData.productComparison && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-3">
                  상품별 성과
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-foreground-subtle font-medium">구분</th>
                        <th className="text-center py-2 text-foreground-subtle font-medium">월 리드</th>
                        <th className="text-center py-2 text-foreground-subtle font-medium">CPA 단가</th>
                        <th className="text-center py-2 text-foreground-subtle font-medium">유료 전환</th>
                      </tr>
                    </thead>
                    <tbody>
                      {caseData.productComparison.map((row, i) => (
                        <tr key={i} className="border-b border-white/5">
                          <td className="py-2 text-foreground font-medium">{row.product}</td>
                          <td className="py-2 text-center text-foreground-muted">{row.leads}</td>
                          <td className="py-2 text-center text-brand-primary">{row.cpa}</td>
                          <td className="py-2 text-center text-brand-primary font-bold">{row.conversion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-3">
                핵심 성과
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {caseData.stats.map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5">
                    <p className="text-lg font-bold text-brand-primary">{stat.value}</p>
                    <p className="text-xs text-foreground-subtle">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight */}
            <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
              <p className="text-sm text-foreground-muted italic leading-relaxed">
                💡 {caseData.insight}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function CasesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen">
      <div className="bg-gradient-blob" />
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16">
        <div className="section-container">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-foreground-subtle mb-8 justify-center"
          >
            <a href="/" className="hover:text-brand-primary transition-colors">Home</a>
            <span className="opacity-50">/</span>
            <span className="text-brand-primary font-medium">성공 사례</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-6">
              CASE STUDY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-display-lg font-bold mb-6">
              말이 아닌 <span className="gradient-text">결과</span>로 증명합니다
            </h1>
            <p className="text-xl text-foreground-muted leading-relaxed">
              실제 집행한 광고의 성과입니다.
              <br />
              업종별 맞춤 전략이 어떤 차이를 만드는지 확인하세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Sections */}
      {cases.map((caseData, index) => (
        <CaseSection key={caseData.id} caseData={caseData} index={index} />
      ))}

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
                우리 업종도 가능할까요?
              </h2>
              <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
                업종별 맞춤 전략을 무료로 상담해 드립니다.
                <br />
                비슷한 사례가 있는지 먼저 물어보세요.
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
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
