"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { clsx } from "@/lib/clsx";
import { IconPhone } from "@/components/ui/Icons";

const nav = [
  { href: "#promo", label: "Consulting", kr: "상담안내" },
  { href: "#business", label: "Business", kr: "사업개요" },
  { href: "#location", label: "Location", kr: "입지환경" },
  { href: "#complex", label: "Complex", kr: "단지안내" },
  { href: "#unit", label: "Unit", kr: "평면안내" },
  { href: "#community", label: "Community", kr: "커뮤니티" },
  { href: "#contact", label: "Reservation", kr: "방문예약" },
];

/**
 * 헤더 배경 상태에 따라 흰색/남색 로고를 교체.
 * - 배경 어두움(투명, 히어로 위): logo-white.png
 * - 배경 밝음(스크롤/메뉴 열림): logo-navy.png
 * 실제 파일 교체 전에는 파일명 플레이스홀더 박스를 보여준다.
 */
function BrandLogo({ light }: { light: boolean }) {
  // light = 로고를 밝게(흰색) 써야 하는 상태
  const file = light ? "logo-white.png" : "logo-navy.png";
  const [broken, setBroken] = useState(false);

  useEffect(() => setBroken(false), [file]);

  return (
    <a href="#hero" aria-label={site.name} className="flex items-center">
      {broken ? (
        <span
          className={clsx(
            "flex h-12 items-center gap-2 border px-3 md:h-14",
            light
              ? "border-white/40 text-offwhite/80"
              : "border-navy/30 text-navy/70",
          )}
        >
          <span className="text-[13px] font-bold tracking-tight">LOGO</span>
          <span className="font-mono text-[10px] font-medium tracking-tight opacity-70">
            {file}
          </span>
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/images/${file}`}
          alt={site.name}
          onError={() => setBroken(true)}
          className="h-12 w-auto md:h-14"
        />
      )}
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 밝은 배경 여부: 스크롤됐거나 모바일 메뉴가 열린 상태
  const lightBg = scrolled || open;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        lightBg
          ? "border-b border-navy/10 bg-offwhite/95 backdrop-blur supports-[backdrop-filter]:bg-offwhite/85"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between md:h-[88px]">
        {/* 배경 어두우면(=lightBg false) 흰색 로고 */}
        <BrandLogo light={!lightBg} />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={clsx(
                "text-[15px] font-semibold tracking-[0.01em] transition-colors hover:text-gold",
                lightBg ? "text-navy/75" : "text-offwhite/85",
              )}
            >
              {n.kr}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.tel}`}
            className={clsx(
              "hidden items-center gap-2 border px-4 py-2 transition-colors hover:bg-gold hover:text-dark sm:flex",
              lightBg
                ? "border-navy/25 text-navy"
                : "border-gold/60 text-offwhite",
            )}
          >
            <IconPhone size={17} className="text-gold" />
            <span className="text-[14px] font-semibold tracking-tight">
              {site.tel}
            </span>
          </a>

          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={clsx(
              "flex h-10 w-10 items-center justify-center lg:hidden",
              lightBg ? "text-navy" : "text-offwhite",
            )}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 (밝은 패널) */}
      {open && (
        <div className="border-t border-navy/10 bg-offwhite/95 backdrop-blur lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-navy/10 py-3.5"
              >
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-gold">
                  {n.label}
                </span>
                <span className="text-[15px] font-semibold text-navy/85">
                  {n.kr}
                </span>
              </a>
            ))}
            <a
              href={`tel:${site.tel}`}
              className="btn-flat mt-3 py-3"
            >
              <IconPhone size={18} />
              <span className="text-[15px] font-semibold">{site.tel}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
