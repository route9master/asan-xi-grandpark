"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "promo-popup-dismissed-until";

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const until = Number(localStorage.getItem(STORAGE_KEY) || 0);
    if (Date.now() < until) return;
    const t = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const close = () => setOpen(false);

  const dismissToday = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    setOpen(false);
  };

  const goContact = () => {
    setOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-lg"
      >
        <button
          onClick={close}
          aria-label="닫기"
          className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-xl leading-none text-white hover:bg-black/80"
        >
          ×
        </button>
        <img
          src="/images/promo-popup.png"
          alt="분양 조건 안내"
          onClick={goContact}
          className="w-full cursor-pointer rounded-t-lg object-contain"
        />
        <button
          onClick={dismissToday}
          className="w-full rounded-b-lg bg-black/80 py-3 text-sm text-white hover:bg-black"
        >
          오늘 하루 보지 않기
        </button>
      </div>
    </div>
  );
}
