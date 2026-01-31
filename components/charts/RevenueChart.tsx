'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const data = [
  { name: '1주', value: 2400 },
  { name: '2주', value: 1398 },
  { name: '3주', value: 9800 },
  { name: '4주', value: 3908 },
  { name: '5주', value: 4800 },
  { name: '6주', value: 3800 },
  { name: '7주', value: 4300 },
];

export default function RevenueChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-48 w-full bg-white/5 rounded-xl animate-pulse" />;

  return (
    <div className="h-48 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00DC82" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00DC82" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94A3B8', fontSize: 12 }}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', borderRadius: '8px' }}
            itemStyle={{ color: '#00DC82' }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00DC82"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorValue)"
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
