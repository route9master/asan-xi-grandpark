import { Fragment } from "react";

/**
 * 데스크탑(md+)에서는 지정 지점에서 명시적으로 줄바꿈하고,
 * 모바일에서는 br을 감춰 자연스러운 자동 줄바꿈에 맡긴다.
 * (좁은 화면에서 어색하게 끊기는 것을 방지)
 */
export function BreakLines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              {" "}
              <br className="hidden md:block" />
            </>
          )}
          {line}
        </Fragment>
      ))}
    </>
  );
}
