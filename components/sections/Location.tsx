import { location } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";

export function Location() {
  return (
    <section id="location" className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          overline="Location"
          title={location.title.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        />

        {/* 도보 리스트(작은 텍스트 컬럼) + 지도(큰 이미지) — 비대칭 */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ul>
            {location.walk.map((w, i) => (
              <li
                key={w.place}
                className={
                  "flex items-baseline gap-5 py-6 md:gap-7 " +
                  (i !== 0 ? "border-t border-navy/12" : "")
                }
              >
                <span className="shrink-0">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-gold">
                    도보
                  </span>
                  <span className="mt-1 block">
                    <span className="text-[30px] font-bold leading-none tracking-tightest text-navy md:text-[38px]">
                      {w.min}
                    </span>
                    <span className="ml-0.5 text-[14px] font-semibold text-navy/55">
                      분
                    </span>
                  </span>
                </span>
                <span className="pt-1">
                  <span className="block text-[18px] font-semibold tracking-tight text-navy md:text-[20px]">
                    {w.place}
                  </span>
                  <span className="mt-2 block text-[16px] font-semibold leading-[1.6] text-navy/60 md:text-[18px]">
                    {w.desc}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div>
            <Placeholder
              file={location.mapFile}
              label="단지 위치도"
              ratio="aspect-[16/10]"
            />
            <p className="mt-4 t-caption">
              ※ 본 위치도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을
              수 있으며, 교통·개발 계획은 관련 기관 사정에 따라 변경될 수
              있습니다.
            </p>
          </div>
        </div>

        {/* 번호 인사이트 리스트 */}
        <div className="mt-20 border-t border-navy/15 pt-14">
          <ul className="grid gap-x-16 gap-y-10 md:grid-cols-2">
            {location.insights.map((text, i) => (
              <li key={i} className="flex gap-6">
                <span className="shrink-0 text-[15px] font-bold tracking-[0.04em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-pretty text-[17px] font-medium leading-[1.65] text-navy/80 md:text-[19px]">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
