import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PKZHWTQD');`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
