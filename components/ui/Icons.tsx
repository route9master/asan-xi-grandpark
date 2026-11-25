type IconProps = {
  className?: string;
  size?: number;
};

/**
 * 사이트 전역에서 사용하는 유일한 라인 아이콘(전화).
 * 디자인 원칙상 SVG 아이콘은 최소한으로만 사용한다.
 */
export function IconPhone({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M6.5 4h3l1.2 4-2 1.2a11 11 0 005 5l1.2-2 4 1.2v3a1.5 1.5 0 01-1.6 1.5A15.5 15.5 0 015 6.6 1.5 1.5 0 016.5 4z" />
    </svg>
  );
}
