"use client";

import { useEffect, useState } from "react";
import { clsx } from "@/lib/clsx";

type PlaceholderProps = {
  /** 실제 파일명 (예: hero-01.png) — /public/images/{file} */
  file: string;
  /** 대체 텍스트 / 파일 없을 때 표시할 라벨 */
  label: string;
  /** 파일이 없을 때 폴백 박스에만 적용할 비율 (예: aspect-[16/10]) */
  ratio?: string;
  /** 다크 톤 배경 여부 (폴백 박스) */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * /public/images/{file} 이미지를 "원본 비율 그대로" 렌더링한다.
 * - 로드 성공: width:100% / height:auto → 잘림·여백 없이 원본 비율 노출
 * - 로드 실패: ratio 비율의 회색 박스 + 파일명으로 폴백
 */
export function Placeholder({
  file,
  label,
  ratio = "aspect-[16/10]",
  tone = "light",
  className,
}: PlaceholderProps) {
  const [broken, setBroken] = useState(false);

  // 파일명이 바뀌면(캐러셀 등) 에러 상태 초기화
  useEffect(() => setBroken(false), [file]);

  if (broken) {
    return (
      <div
        className={clsx(
          "relative flex w-full items-center justify-center overflow-hidden",
          tone === "light"
            ? "bg-[#E4DFD6] text-navy/40"
            : "bg-white/[0.05] text-offwhite/35",
          ratio,
          className,
        )}
        role="img"
        aria-label={label}
      >
        <div className="flex flex-col items-center gap-1.5 px-4 text-center">
          <span className="text-[15px] font-semibold tracking-tight">
            {label}
          </span>
          <span className="font-mono text-[12px] font-medium tracking-tight opacity-60">
            {file}
          </span>
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/${file}`}
      alt={label}
      onError={() => setBroken(true)}
      className={clsx("block h-auto w-full", className)}
    />
  );
}
