"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** 최종 값 (예: 1588) */
  to: number;
  /** 애니메이션 시간(ms) */
  duration?: number;
  /** 천단위 콤마 표시 */
  separator?: boolean;
  className?: string;
};

/**
 * 뷰포트 진입 시 0 → to 로 카운트업.
 * IntersectionObserver + requestAnimationFrame, 1회만 실행.
 */
export function CountUp({
  to,
  duration = 1600,
  separator = true,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            // easeOutExpo
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setValue(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const display = separator ? value.toLocaleString("en-US") : String(value);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
