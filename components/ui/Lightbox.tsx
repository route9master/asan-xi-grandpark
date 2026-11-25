"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LightboxProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  /** 확대된 항목의 캡션 */
  caption?: string;
};

/**
 * React Portal 기반 라이트박스.
 * document.body 에 렌더링하여 부모의 transform/overflow 로 인한
 * fixed-position 깨짐을 방지한다.
 */
export function Lightbox({ open, onClose, children, caption }: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // 배경 스크롤 잠금
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark/90 p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={caption ?? "이미지 확대 보기"}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="닫기"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-offwhite/80 transition-colors hover:text-offwhite md:right-8 md:top-8"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          aria-hidden
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        {caption && (
          <p className="mt-4 text-center text-[13px] font-medium tracking-tight text-offwhite/70">
            {caption}
          </p>
        )}
      </div>
    </div>,
    document.body,
  );
}
