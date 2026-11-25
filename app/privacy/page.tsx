import type { Metadata } from "next";
import { site, operator } from "@/lib/site";

export const metadata: Metadata = {
  title: `개인정보 처리방침 | ${site.name}`,
  description:
    "아산자이 그랜드파크 분양 상담 홍보 페이지 개인정보 처리방침 — 수집 항목, 이용 목적, 보유기간, 수집주체 안내.",
  robots: { index: true, follow: true },
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. 수집하는 개인정보 항목",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>필수: 이름, 연락처</li>
        <li>선택: 상담내용(관심 타입, 방문 희망일 등 이용자가 직접 입력한 내용)</li>
      </ul>
    ),
  },
  {
    heading: "2. 개인정보의 수집·이용 목적",
    body: (
      <p>
        아산자이 그랜드파크 분양 상담 문의 접수 및 상담 연결, 방문 예약 안내를
        목적으로 개인정보를 수집·이용합니다.
      </p>
    ),
  },
  {
    heading: "3. 수집 방법 및 저장 여부",
    body: (
      <p>
        본 사이트의 상담 신청은 이용자의 문자 메시지 앱을 여는 방식(SMS)으로
        동작합니다. 입력하신 정보는 문자 메시지 발송에만 사용되며, 본 사이트
        서버에 별도로 저장되지 않습니다.
      </p>
    ),
  },
  {
    heading: "4. 개인정보의 제3자 제공",
    body: (
      <p>
        상담 접수 목적으로 입력하신 정보는 문자 메시지를 통해 아산자이 그랜드파크
        분양 상담사에게 전달될 수 있습니다. 그 외의 목적으로는 제3자에게 제공하지
        않습니다.
      </p>
    ),
  },
  {
    heading: "5. 개인정보의 보유 및 이용기간",
    body: (
      <p>
        본 사이트는 개인정보를 서버에 저장하지 않으므로 별도 보유기간이 없습니다.
        문자 메시지로 전달된 상담 정보는 상담 담당자가 상담 목적 달성 후 지체 없이
        파기하며, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
      </p>
    ),
  },
  {
    heading: "6. 개인정보 수집주체",
    body: (
      <ul className="space-y-1.5">
        <li>수집주체: {operator.company} (사이트 제작 및 광고 운영)</li>
        <li>사업자등록번호: {operator.bizNo}</li>
        <li>소재지: {operator.address}</li>
        <li>
          문의:{" "}
          <a href={`tel:${operator.adTel}`} className="underline hover:text-gold">
            {operator.adTel}
          </a>
        </li>
      </ul>
    ),
  },
  {
    heading: "7. 이용자의 권리",
    body: (
      <p>
        이용자는 개인정보의 열람·정정·삭제를 요청할 수 있으며, 동의하지 않아도
        사업개요·입지·평면도 등 일반 분양 정보는 자유롭게 열람하실 수 있습니다.
        문의는 위 수집주체 연락처로 접수해 주시기 바랍니다.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-offwhite">
      <div className="container-x py-16 md:py-24">
        <a
          href="/"
          className="text-[14px] font-semibold text-navy/55 underline underline-offset-2 hover:text-gold"
        >
          ← {site.name} 홈으로
        </a>

        <h1 className="mt-6 text-[30px] font-bold tracking-tightest text-navy md:text-[40px]">
          개인정보 처리방침
        </h1>
        <p className="mt-3 text-[15px] font-medium leading-[1.7] text-navy/60">
          본 사이트는 아산자이 그랜드파크 분양 정보를 제공하고 상담 문의를
          연결하기 위한 홍보 페이지입니다. 홈페이지 제작 및 온라인 광고 운영은{" "}
          {operator.company}에서 담당합니다.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-[18px] font-bold tracking-tight text-navy md:text-[20px]">
                {s.heading}
              </h2>
              <div className="mt-3 text-[15px] font-medium leading-[1.75] text-navy/75 md:text-[16px]">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
