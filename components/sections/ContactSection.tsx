'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import GlassPanel from '@/components/ui/GlassPanel';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref} id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-primary mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold mb-6">
              지금 바로{' '}
              <span className="gradient-text">무료 상담</span>을
              <br />
              신청하세요
            </h2>
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              전문 컨설턴트가 귀사의 현재 마케팅 현황을 분석하고,
              최적화된 성장 전략을 무료로 제안해 드립니다.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                '무료 광고 계정 진단 및 분석',
                '맞춤형 마케팅 전략 제안',
                '예상 ROAS 시뮬레이션',
                '성과 미달 시 수수료 환불 보장',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground-muted">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-foreground-subtle mb-4">직접 연락을 원하시면</p>
              <div className="space-y-2">
                <a href="tel:02-1234-5678" className="flex items-center gap-3 text-foreground hover:text-brand-primary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  02-1234-5678
                </a>
                <a href="mailto:contact@dsjc.co.kr" className="flex items-center gap-3 text-foreground hover:text-brand-primary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@dsjc.co.kr
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassPanel variant="glow" className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">회사명 *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-brand-primary/50 transition-colors"
                      placeholder="회사명 입력"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">담당자명 *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-brand-primary/50 transition-colors"
                      placeholder="성함 입력"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">이메일 *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-brand-primary/50 transition-colors"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">연락처 *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-brand-primary/50 transition-colors"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-foreground-muted mb-2">월 광고 예산</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-brand-primary/50 transition-colors"
                  >
                    <option value="" className="bg-background">선택해 주세요</option>
                    <option value="under-500" className="bg-background">500만원 미만</option>
                    <option value="500-1000" className="bg-background">500만원 ~ 1,000만원</option>
                    <option value="1000-3000" className="bg-background">1,000만원 ~ 3,000만원</option>
                    <option value="3000-5000" className="bg-background">3,000만원 ~ 5,000만원</option>
                    <option value="over-5000" className="bg-background">5,000만원 이상</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-foreground-muted mb-2">문의 내용</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                    placeholder="문의하실 내용을 입력해 주세요"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  무료 상담 신청하기
                </Button>

                <p className="text-xs text-foreground-subtle text-center">
                  제출하신 정보는 상담 목적으로만 사용되며,
                  <br />개인정보처리방침에 따라 안전하게 관리됩니다.
                </p>
              </form>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
