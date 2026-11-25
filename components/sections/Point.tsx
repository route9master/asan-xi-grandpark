import { points } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreakLines } from "@/components/ui/BreakLines";

export function Point() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-x">
        <SectionHeading
          overline="Point"
          title={points.title.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        />

        {/* 대형 넘버드 에디토리얼 행 */}
        <div className="mt-14 border-t border-navy/15">
          {points.rows.map((r) => (
            <div
              key={r.no}
              className="grid gap-4 border-b border-navy/15 py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <div className="flex items-baseline gap-5 md:col-span-5">
                <span className="text-[15px] font-bold tracking-[0.04em] text-gold">
                  {r.no}
                </span>
                <h3 className="text-[28px] font-bold tracking-tightest text-navy md:text-[38px]">
                  {r.title}
                </h3>
              </div>
              <p className="text-pretty text-[17px] font-medium leading-[1.7] text-navy/70 md:col-span-7 md:pt-2 md:text-[19px]">
                {typeof r.copy === "string" ? (
                  r.copy
                ) : (
                  <BreakLines lines={r.copy} />
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
