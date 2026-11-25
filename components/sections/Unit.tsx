"use client";

import { useRef, useState } from "react";
import { unitDanji } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Lightbox } from "@/components/ui/Lightbox";
import { BreakLines } from "@/components/ui/BreakLines";
import { clsx } from "@/lib/clsx";

export function Unit() {
  const [danjiIdx, setDanjiIdx] = useState(0);
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(false);
  const touchX = useRef<number | null>(null);

  const danji = unitDanji[danjiIdx];
  const cards = danji.cards;
  const card = cards[idx];

  const selectDanji = (i: number) => {
    setDanjiIdx(i);
    setIdx(0);
  };

  const go = (dir: 1 | -1) => {
    setIdx((v) => (v + dir + cards.length) % cards.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <section id="unit" className="section-pad bg-white">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <SectionHeading
            overline="Unit"
            title={
              <>
                <span className="block">단지별 평면,</span>
                <span className="block">한 장으로 보다</span>
              </>
            }
            className="md:col-span-6"
          />
          <p className="t-body md:col-span-6 md:max-w-none md:pb-2">
            <BreakLines
              lines={[
                "1·2단지의 타입별 평면 카드를 좌우로 넘겨 확인하세요.",
                "카드를 누르면 크게 볼 수 있습니다.",
              ]}
            />
          </p>
        </div>

        {/* 단지 선택 */}
        <div className="mt-14 flex gap-px border-y border-navy/15">
          {unitDanji.map((d, i) => (
            <button
              key={d.id}
              type="button"
              aria-pressed={i === danjiIdx}
              onClick={() => selectDanji(i)}
              className={clsx(
                "flex-1 px-4 py-4 text-[15px] font-semibold tracking-tight transition-colors md:flex-none md:px-12",
                i === danjiIdx
                  ? "bg-navy text-offwhite"
                  : "bg-white text-navy/45 hover:text-navy",
              )}
            >
              {d.name}
              <span
                className={clsx(
                  "ml-2 text-[12px] font-semibold",
                  i === danjiIdx ? "text-gold" : "text-navy/30",
                )}
              >
                {d.types.length}
              </span>
            </button>
          ))}
        </div>

        {/* 타입 칩 (빠른 이동 + 현재 위치) */}
        <div className="mt-8 flex flex-wrap gap-2">
          {cards.map((c, i) => (
            <button
              key={c.type}
              type="button"
              aria-pressed={i === idx}
              onClick={() => setIdx(i)}
              className={clsx(
                "border px-4 py-2 text-[14px] font-semibold tracking-tight transition-colors",
                i === idx
                  ? "border-navy bg-navy text-offwhite"
                  : "border-navy/20 text-navy/55 hover:border-navy/50 hover:text-navy",
              )}
            >
              {c.type}
            </button>
          ))}
        </div>

        {/* 캐러셀 */}
        <div className="mt-10">
          <div
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {cards.map((c, i) => (
                <div key={c.file} className="w-full shrink-0 px-0">
                  <button
                    type="button"
                    onClick={() => setZoom(true)}
                    aria-label={`${danji.name} ${c.type} 평면 카드 확대`}
                    tabIndex={i === idx ? 0 : -1}
                    className="group relative mx-auto block w-full max-w-4xl overflow-hidden border border-navy/10"
                  >
                    <Placeholder
                      file={c.file}
                      label={`${danji.name} · ${c.type} 평면 카드`}
                      ratio="aspect-[16/10]"
                      className="bg-[#EFECE6]"
                    />
                    <span className="absolute bottom-4 right-4 bg-dark/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-offwhite opacity-0 transition-opacity group-hover:opacity-100">
                      Zoom
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* 화살표 */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="이전 타입"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-navy/15 bg-offwhite/90 text-navy transition-colors hover:bg-navy hover:text-offwhite md:left-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="다음 타입"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-navy/15 bg-offwhite/90 text-navy transition-colors hover:bg-navy hover:text-offwhite md:right-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          {/* 현재 타입 · 인덱스 */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[15px] font-semibold tracking-tight text-navy">
              {danji.name} · {card.type}
              <span className="ml-2 font-mono text-[13px] font-medium text-navy/40">
                {card.file}
              </span>
            </p>
            <p className="text-[14px] font-semibold tracking-tight text-navy/50">
              <span className="text-navy">
                {String(idx + 1).padStart(2, "0")}
              </span>{" "}
              / {String(cards.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <p className="mt-10 t-caption max-w-none">
          ※ 상기 평면 카드는 소비자의 이해를 돕기 위한 것으로 실제 시공 시 변경될 수 있으며, 타입·세대수·면적은 사업계획 승인에 따라 달라질 수 있습니다.
        </p>
      </div>

      <Lightbox
        open={zoom}
        onClose={() => setZoom(false)}
        caption={`${danji.name} · ${card.type} 평면 카드 — ${card.file}`}
      >
        <Placeholder
          file={card.file}
          label={`${danji.name} · ${card.type} 평면 카드 (확대)`}
          ratio="aspect-[16/10]"
          className="mx-auto bg-[#EFECE6]"
        />
      </Lightbox>
    </section>
  );
}
