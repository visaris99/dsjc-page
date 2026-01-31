'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ChartData {
  month: string;
  value: number;
  color?: string;
}

interface RevenueChartProps {
  data?: ChartData[];
  title?: string;
  animate?: boolean;
  className?: string;
}

const defaultData: ChartData[] = [
  { month: '1월', value: 45 },
  { month: '2월', value: 52 },
  { month: '3월', value: 68 },
  { month: '4월', value: 75 },
  { month: '5월', value: 85 },
  { month: '6월', value: 92 },
];

export default function RevenueChart({
  data = defaultData,
  title = '월별 ROAS 성장률',
  animate = true,
  className = '',
}: RevenueChartProps) {
  const [isVisible, setIsVisible] = useState(!animate);
  const maxValue = Math.max(...data.map((d) => d.value));

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h4 className="text-sm font-medium text-foreground-muted mb-4">{title}</h4>
      )}
      <div className="flex items-end justify-between gap-2 h-32">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          const isLast = index === data.length - 1;

          return (
            <div key={item.month} className="flex flex-col items-center gap-2 flex-1">
              <motion.div
                className="w-full rounded-t-lg relative overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: isVisible ? `${height}%` : 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  background: isLast
                    ? 'linear-gradient(180deg, #00d4aa 0%, #00b894 100%)'
                    : item.color || 'rgba(255, 255, 255, 0.15)',
                  boxShadow: isLast ? '0 0 20px rgba(0, 212, 170, 0.4)' : 'none',
                }}
              >
                {isLast && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  />
                )}
              </motion.div>
              <span className="text-xs text-foreground-subtle">{item.month}</span>
            </div>
          );
        })}
      </div>
      <motion.div
        className="mt-4 flex items-center justify-end gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-2xl font-bold text-brand-primary">+{data[data.length - 1]?.value}%</span>
        <span className="text-sm text-foreground-muted">전월 대비</span>
      </motion.div>
    </div>
  );
}
