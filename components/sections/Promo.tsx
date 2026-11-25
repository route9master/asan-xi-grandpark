import { promo, disclaimer } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 분양 상담 안내 — Hero 바로 다음.
 * (기존 "특별 분양 조건" 섹션을 대체하는 중립 CTA 밴드)
 * 홍보 사이트 성격 고지문을 메인 화면에 눈에 띄게 노출한다.
 */
export function Promo() {
  return (
    <section id="promo" className="section-pad bg-offwhite">
      <div className="container-x">
        <SectionHeading overline={promo.overline} title={promo.title} />

        <p className="mt-8 text-[18px] font-medium leading-[1.6] text-navy md:text-[20px]">
          {promo.lead}
        </p>

        <a href="#contact" className="btn-flat mt-8 inline-flex px-8 py-4">
          <span className="text-[15px] font-semibold">상담 문의하기</span>
        </a>

        {/* 홍보 사이트 성격 안내문 (메인 화면) */}
        <div className="mt-10 border border-navy/15 bg-navy/[0.03] p-5 md:p-7">
          <p className="text-[14px] font-medium leading-[1.75] text-navy/70 md:text-[15px]">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
