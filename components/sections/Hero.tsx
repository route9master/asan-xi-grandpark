"use client";

import { useEffect, useState } from "react";
import { hero } from "@/lib/site";
import { CountUp } from "@/components/ui/CountUp";
import { clsx } from "@/lib/clsx";

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [broken, setBroken] = useState<string[]>([]);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((v) => (v + 1) % hero.slides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-[100svh] min-h-[600px] w-full flex-col overflow-hidden bg-dark pb-[60px] lg:min-h-[660px] lg:pb-0"
    >
      {/* 슬라이드 (크로스페이드) */}
      {hero.slides.map((s, i) => (
        <div
          key={s.file}
          className={clsx(
            "absolute inset-0 flex items-center justify-center bg-[#C9C3B8] transition-opacity duration-[1200ms] ease-in-out",
            i === idx ? "opacity-100" : "opacity-0",
          )}
          role="img"
          aria-label={s.label}
        >
          {broken.includes(s.file) ? (
            <span className="font-mono text-[12px] font-medium tracking-tight text-navy/35">
              {s.file}
            </span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/images/${s.file}`}
              alt={s.label}
              onError={() => setBroken((b) => [...b, s.file])}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>
      ))}

      {/* 네이비 오버레이 */}
      <div aria-hidden className="absolute inset-0 bg-dark/55" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark/80 to-transparent"
      />

      {/* 콘텐츠 (남는 공간을 채우고 하단 정렬) */}
      <div className="container-x relative flex flex-1 flex-col justify-end pt-[92px] pb-8 md:pb-12">
        <h1 className="text-[38px] font-bold leading-[1.12] tracking-tightest text-offwhite sm:text-[44px] md:text-[68px] lg:text-[76px]">
          {hero.headline.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-lg text-pretty text-[17px] font-medium leading-[1.6] text-offwhite/80 md:text-[20px]">
          {hero.subline}
        </p>
      </div>

      {/* 하단 스탯 밴드 (일반 흐름 — 겹침 없음) */}
      <div className="relative shrink-0 border-t border-white/15 bg-dark/40 backdrop-blur-sm">
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {hero.stats.map((s, i) => (
            <div
              key={s.label}
              className={clsx(
                "flex flex-col gap-1 py-4 md:py-6",
                i !== 0 && "md:border-l md:border-white/10 md:pl-8",
                i % 2 !== 0 && "border-l border-white/10 pl-6 md:pl-8",
              )}
            >
              <div className="flex items-baseline gap-1">
                <CountUp
                  to={s.value}
                  separator={s.separator}
                  className="text-[24px] font-bold leading-none tracking-tightest text-offwhite md:text-[36px]"
                />
                <span className="text-[14px] font-semibold text-gold md:text-[16px]">
                  {s.suffix}
                </span>
              </div>
              <span className="text-[13px] font-semibold tracking-tight text-offwhite/70 md:text-[15px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
