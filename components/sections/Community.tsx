import { community } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { BreakLines } from "@/components/ui/BreakLines";
import { clsx } from "@/lib/clsx";

export function Community() {
  return (
    <section id="community" className="section-pad bg-navy">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <SectionHeading
            overline="Community"
            tone="light"
            title={community.title.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
            className="md:col-span-6"
          />
          <p className="t-body text-offwhite/60 md:col-span-6 md:max-w-none md:pb-2">
            <BreakLines lines={community.lead} />
          </p>
        </div>

        {/* 오프셋 2단 — 이미지 주인공, 프레임 없음 */}
        <div className="mt-16 grid gap-x-14 gap-y-16 md:mt-20 md:grid-cols-2">
          {community.facilities.map((f, i) => (
            <figure
              key={f.name}
              className={clsx(i % 2 === 1 && "md:mt-24")}
            >
              <Placeholder
                file={f.file}
                label={f.name}
                ratio="aspect-[3/2]"
                tone="dark"
              />
              <figcaption className="mt-6 flex gap-5">
                <span className="text-[14px] font-bold tracking-[0.04em] text-gold">
                  {f.no}
                </span>
                <div>
                  <h3 className="text-[20px] font-bold tracking-tight text-offwhite md:text-[22px]">
                    {f.name}
                  </h3>
                  <p className="mt-2 text-[14px] font-semibold uppercase tracking-[0.06em] text-gold/80">
                    {f.kr}
                  </p>
                  <p className="mt-3 text-[16px] font-medium leading-[1.6] text-offwhite/65 md:text-[17px]">
                    {f.copy}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-16 t-caption max-w-none text-offwhite/40">
          ※ 커뮤니티 시설의 명칭 및 구성은 실시설계 및 인·허가 과정에서 변경될 수 있습니다.
        </p>
      </div>
    </section>
  );
}
