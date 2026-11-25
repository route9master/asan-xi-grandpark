import { site, operator, disclaimer } from "@/lib/site";
import { IconPhone } from "@/components/ui/Icons";

const notices = [
  "본 홈페이지는 분양 안내를 위한 온라인 분양 대행 광고물이며, 시행사·시공사의 공식 자료와 다를 수 있습니다.",
  "홈페이지 내 이미지(조감도·투시도·평면도 등)는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.",
  "상기 내용은 인·허가 및 사업 추진 과정에서 관계기관 협의에 따라 변경될 수 있습니다.",
  "청약 및 계약 관련 정확한 사항은 반드시 입주자 모집공고문을 확인하시기 바랍니다.",
];

const operatorRows: [string, React.ReactNode][] = [
  ["사이트 제작 및 광고 운영", operator.company],
  ["사업자등록번호", operator.bizNo],
  ["사업장 소재지", operator.address],
  [
    "광고 운영 문의",
    <a key="adtel" href={`tel:${operator.adTel}`} className="hover:text-gold">
      {operator.adTel}
    </a>,
  ],
  [
    "광고대행사 홈페이지",
    <a
      key="hp"
      href={operator.homepage}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gold"
    >
      {operator.homepage}
    </a>,
  ],
  ["분양 상담 담당", operator.consultRole],
  [site.telLabel, site.tel],
];

export function Footer() {
  return (
    <footer className="bg-[#061527] text-offwhite/70">
      <div className="container-x py-14 md:py-16">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[17px] font-semibold tracking-tight text-offwhite">
              {site.name}
            </p>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.11em] text-gold">
              {site.nameEn}
            </p>
          </div>

          <a
            href={`tel:${site.tel}`}
            className="inline-flex items-center gap-3 self-start border border-gold/40 px-5 py-3 transition-colors hover:bg-gold hover:text-dark md:self-auto"
          >
            <IconPhone size={19} className="text-gold" />
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">
                {site.telLabel}
              </span>
              <span className="text-[18px] font-semibold tracking-tight text-offwhite">
                {site.tel}
              </span>
            </span>
          </a>
        </div>

        {/* 홈페이지 운영 안내 */}
        <div className="mt-10 border border-white/12 bg-white/[0.03] p-6 md:p-7">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">
            홈페이지 운영 안내
          </p>
          <dl className="mt-5 space-y-3">
            {operatorRows.map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col gap-0.5 text-[14px] md:flex-row md:gap-4"
              >
                <dt className="shrink-0 font-semibold text-offwhite/55 md:w-[150px]">
                  {k}
                </dt>
                <dd className="font-medium leading-[1.6] text-offwhite/85 break-words">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 홍보 사이트 성격 고지문 */}
        <p className="mt-6 text-[13px] font-medium leading-[1.75] text-offwhite/55">
          {disclaimer}
        </p>

        {/* 유의사항 */}
        <ul className="mt-10 space-y-2.5">
          {notices.map((n, i) => (
            <li
              key={i}
              className="flex gap-2 text-[14px] font-medium leading-[1.65] text-offwhite/50"
            >
              <span className="text-gold/60">·</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-2 text-[13px] font-medium text-offwhite/45 md:flex-row md:items-center md:justify-between">
          <p>
            {site.smsLabel} {site.smsNumberDisplay} ·{" "}
            <a href="/privacy" className="underline hover:text-gold">
              개인정보 처리방침
            </a>
          </p>
          <p>© {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
