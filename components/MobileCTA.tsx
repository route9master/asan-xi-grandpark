import { site } from "@/lib/site";
import { IconPhone } from "@/components/ui/Icons";

/** 모바일 전용 하단 고정 CTA 바 */
export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 lg:hidden">
      <a
        href={`tel:${site.tel}`}
        className="flex items-center justify-center gap-2 bg-navy py-4 text-offwhite"
      >
        <IconPhone size={18} className="text-gold" />
        <span className="text-[14px] font-semibold tracking-tight">
          전화상담
        </span>
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center bg-gold py-4 text-dark"
      >
        <span className="text-[14px] font-semibold tracking-tight">
          방문예약 신청
        </span>
      </a>
    </div>
  );
}
