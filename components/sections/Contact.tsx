"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return setError("성함을 입력해 주세요.");
    if (!phone.trim()) return setError("연락처를 입력해 주세요.");
    if (!agree) return setError("개인정보 수집·이용에 동의해 주세요.");
    setError("");

    const body = [
      "[아산자이 그랜드파크 상담문의]",
      `성함: ${name.trim()}`,
      `연락처: ${phone.trim()}`,
      `문의내용: ${message.trim() || "(없음)"}`,
    ].join("\n");

    window.location.href = `sms:${site.smsNumber}?body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section-pad bg-dark">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* 좌측 안내 */}
          <div>
            <SectionHeading
              overline="Reservation"
              tone="light"
              title={
                <>
                  <span className="block">지금, 가장</span>
                  <span className="block">먼저 만나다</span>
                </>
              }
            />
            <p className="mt-6 t-body text-offwhite/65">
              방문·상담을 예약하시면 문자 접수 창을 통해 빠르게 안내해
              드립니다. 대표번호로 직접 문의하셔도 됩니다.
            </p>

            <div className="mt-12 border-t border-white/15 pt-8">
              <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-gold">
                {site.telLabel}
              </p>
              <a
                href={`tel:${site.tel}`}
                className="mt-3 block text-[36px] font-semibold tracking-tightest text-offwhite transition-colors hover:text-gold md:text-[46px]"
              >
                {site.tel}
              </a>
              <p className="mt-4 t-caption text-offwhite/55">
                {site.smsLabel} {site.smsNumberDisplay} · 연중무휴 상담
                <br />
                방문 상담은 사전 예약을 권장드립니다.
              </p>
            </div>
          </div>

          {/* 우측 폼 */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="border border-white/12 bg-white/[0.03] p-7 md:p-10"
          >
            <div className="space-y-6">
              <Field label="성함" htmlFor="name" required>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="홍길동"
                  autoComplete="name"
                  className={inputCls}
                />
              </Field>

              <Field label="연락처" htmlFor="phone" required>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-0000-0000"
                  autoComplete="tel"
                  className={inputCls}
                />
              </Field>

              <Field label="문의내용" htmlFor="message">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="관심 타입, 방문 희망일 등 문의사항을 남겨 주세요."
                  className={`${inputCls} resize-none`}
                />
              </Field>
            </div>

            {/* 개인정보 동의 */}
            <label className="mt-7 flex cursor-pointer items-start gap-3">
              <span
                className={
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border text-[11px] transition-colors " +
                  (agree
                    ? "border-gold bg-gold text-dark"
                    : "border-white/30 text-transparent")
                }
                aria-hidden
              >
                ✓
              </span>
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="sr-only"
              />
              <span className="text-[15px] font-medium leading-[1.6] text-offwhite/70">
                개인정보 수집·이용에 동의합니다. 입력하신 정보는 문자 메시지
                발송에만 사용되며 서버에 별도 저장되지 않습니다.{" "}
                <span className="font-semibold text-gold">(필수)</span>
              </span>
            </label>

            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[14px] font-medium text-offwhite/55 underline underline-offset-2 hover:text-gold"
            >
              개인정보 처리방침 보기
            </a>

            {error && (
              <p className="mt-4 text-[13px] font-semibold text-gold" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn-flat mt-8 w-full py-4"
            >
              문자로 상담 신청
            </button>
            <p className="mt-4 text-center text-[14px] font-medium text-offwhite/50">
              신청 시 문자 메시지 작성창이 열리며, 전송하면 접수가 완료됩니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full border border-white/15 bg-transparent px-4 py-3.5 text-[15px] text-offwhite placeholder:text-offwhite/30 outline-none transition-colors focus:border-gold";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2.5 block text-[15px] font-semibold tracking-tight text-offwhite/80"
      >
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      {children}
    </div>
  );
}
