import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DS&JC | 데이터 기반 퍼포먼스 마케팅",
  description: "DS애드와 제이씨마케팅이 함께하는 데이터 기반 퍼포먼스 마케팅. ROAS 300% 이상 달성을 약속드립니다.",
  keywords: ["퍼포먼스 마케팅", "디지털 마케팅", "ROAS", "광고 대행사", "DS애드", "제이씨마케팅"],
  openGraph: {
    title: "DS&JC | 데이터 기반 퍼포먼스 마케팅",
    description: "광고비는 줄이고, 매출은 극대화하는 데이터 기반 퍼포먼스 마케팅",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
