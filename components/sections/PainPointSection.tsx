'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const painPoints = [
  '"대행사 바꿔봐도 결과는 비슷해요"',
  '"랜딩페이지 따로, 광고 따로... 관리가 너무 힘들어요"',
  '"광고비는 나가는데 매출이 안 따라와요"',
  '"리포트는 오는데 뭘 봐야 할지 모르겠어요"',
  '"담당자가 자꾸 바뀌어서 처음부터 다시 설명해야 해요"',
];

export default function PainPointSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-brand-accent mb-4">
            Pain Points
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-display-md font-bold mb-4">
            혹시 이런 <span className="text-brand-accent">고민</span> 있으신가요?
          </h2>
        </motion.div>

        {/* Pain Points List */}
        <div className="max-w-2xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 mb-3 rounded-xl glass hover:bg-white/5 transition-colors"
            >
              <div className="w-6 h-6 rounded border-2 border-foreground-subtle flex-shrink-0 mt-0.5" />
              <p className="text-lg text-foreground-muted">{point}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-foreground font-medium mb-2">
            저희도 광고주였습니다.
          </p>
          <p className="text-lg text-foreground-muted">
            그래서 이 답답함을 잘 압니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
