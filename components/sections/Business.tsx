import { business } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/ui/CountUp";
import { Placeholder } from "@/components/ui/Placeholder";
import { BreakLines } from "@/components/ui/BreakLines";

export function Business() {
  return (
    <section id="business" className="section-pad bg-offwhite">
      <div className="container-x">
        {/* 헤더: 비대칭 (제목 좌 / 리드 우하단) */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <SectionHeading
            overline="Business"
            title={business.title.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
            className="md:col-span-6"
          />
          <p className="t-body md:col-span-6 md:max-w-none md:pb-2">
            <BreakLines lines={business.lead} />
          </p>
        </div>

        {/* 카운트업 강조 수치 */}
        <div className="mt-16 grid grid-cols-3 border-y border-navy/15">
          {business.highlights.map((h, i) => (
            <div
              key={h.label}
              className={
                "py-8 md:py-10 " +
                (i !== 0 ? "border-l border-navy/15 pl-6 md:pl-10" : "pr-6")
              }
            >
              <div className="flex items-baseline gap-1">
                <CountUp
                  to={h.value}
                  separator={h.separator}
                  className="text-[36px] font-bold leading-none tracking-tightest text-navy md:text-[56px]"
                />
                <span className="text-[15px] font-semibold text-gold md:text-[18px]">
                  {h.suffix}
                </span>
              </div>
              <p className="mt-3 text-[15px] font-semibold tracking-tight text-navy/55 md:text-[17px]">
                {h.label}
              </p>
            </div>
          ))}
        </div>

        {/* 이미지(큰) + 표(작은 컬럼) — 에디토리얼 비대칭 */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <Placeholder
            file="business-aerial.jpg"
            label="단지 전경 조감도"
            ratio="aspect-[16/10]"
          />

          <div>
            <table className="w-full border-collapse">
              <tbody>
                {business.table.map(([k, v]) => (
                  <tr key={k} className="border-b border-navy/12">
                    <th className="w-[104px] py-4 text-left align-top text-[15px] font-semibold tracking-tight text-navy/50 md:w-[132px] md:text-[16px]">
                      {k}
                    </th>
                    <td className="py-4 text-left text-[16px] font-medium leading-relaxed text-navy md:text-[17px]">
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 t-caption">
              <BreakLines
                lines={[
                  "※ 상기 내용은 인·허가 및 사업 추진 과정에서 변경될 수 있으며,",
                  "정확한 사항은 입주자 모집공고문을 확인하시기 바랍니다.",
                ]}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
