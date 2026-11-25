import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://asan-xi-grandpark.vercel.app"),
  title: "아산자이 그랜드파크 | 분양 정보 및 상담 안내",
  description:
    "아산자이 그랜드파크 분양 정보 안내 — 사업개요, 입지환경, 단지배치, 평면, 커뮤니티 정보와 방문·상담 안내. 본 사이트는 분양 상담 연결을 위한 홍보 페이지입니다.",
  openGraph: {
    title: "아산자이 그랜드파크 | 분양 정보 및 상담 안내",
    description:
      "숲세권 프리미엄, 신축 대단지, 직주근접. 아산자이 그랜드파크 분양 정보와 상담 안내.",
    type: "website",
    locale: "ko_KR",
    siteName: "아산자이 그랜드파크",
    images: [
      {
        url: "/images/hero-01.png",
        width: 1903,
        height: 960,
        alt: "아산자이 그랜드파크 조감도",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "아산자이 그랜드파크 | 분양 정보 및 상담 안내",
    description:
      "숲세권 프리미엄, 신축 대단지, 직주근접. 아산자이 그랜드파크 분양 정보와 상담 안내.",
    images: ["/images/hero-01.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2140",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
