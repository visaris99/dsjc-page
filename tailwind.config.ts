import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // [변경] Background: 3Commas 스타일의 Slate Blue 계열 (완전 블랙보다 세련됨)
        background: {
          DEFAULT: "#0F172A", // Slate-900 (Main BG)
          secondary: "#1E293B", // Slate-800 (Card/Section BG)
          tertiary: "#334155", // Slate-700 (Borders)
        },
        foreground: {
          DEFAULT: "#F8FAFC", // Slate-50 (Main Text)
          muted: "#94A3B8",   // Slate-400 (Sub Text)
          subtle: "#64748B",  // Slate-500
        },
        // [변경] Brand Colors: 상승(Teal) & 강조(Orange) 조합
        brand: {
          primary: "#00DC82",   // 3Commas Teal (성장, 성공, 메인 컬러)
          secondary: "#0F766E", // Darker Teal
          accent: "#F97316",    // CTA Orange (문의하기 버튼 등 강조)
          highlight: "#2DD4BF", // Lighter Teal for gradients
        },
        // Chart colors (데이터 시각화용 팔레트)
        chart: {
          green: "#00DC82",
          blue: "#3B82F6",
          orange: "#F97316",
          red: "#EF4444",
          grid: "rgba(148, 163, 184, 0.1)",
        },
      },
      fontFamily: {
        // 한글/기본은 Pretendard, 숫자는 Inter 강제 적용
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
        mono: ["var(--font-inter)", "Roboto Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
        glow: "0 0 40px rgba(0, 220, 130, 0.15)", // Teal Glow
        "glow-lg": "0 0 60px rgba(0, 220, 130, 0.25)",
      },
      backgroundImage: {
        // [변경] 그라데이션을 Teal -> Blue로 변경 (신뢰감 + Tech)
        "gradient-brand": "linear-gradient(135deg, #00DC82 0%, #3B82F6 100%)",
        "gradient-dark": "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        "gradient-glow": "conic-gradient(from 90deg at 50% 50%, #0F172A 0%, #1E293B 50%, #00DC82 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
