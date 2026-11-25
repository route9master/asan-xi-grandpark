/** 가벼운 className 병합 유틸 (falsy 값 무시) */
export function clsx(
  ...args: Array<string | false | null | undefined>
): string {
  return args.filter(Boolean).join(" ");
}
