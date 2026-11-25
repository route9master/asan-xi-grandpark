import { clsx } from "@/lib/clsx";

type SectionHeadingProps = {
  /** 영문 오버라인 (Business, Location, Complex, Unit ...) */
  overline: string;
  /** 한글 제목 */
  title: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/** 영문 오버라인 + 한글 제목 조합 (전 섹션 통일 포맷) */
export function SectionHeading({
  overline,
  title,
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(className)}>
      <p className="overline">{overline}</p>
      <h2
        className={clsx(
          "t-title mt-5",
          tone === "light" ? "text-offwhite" : "text-navy",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
