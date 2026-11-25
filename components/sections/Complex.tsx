"use client";

import { Fragment, useState } from "react";
import { complex } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Lightbox } from "@/components/ui/Lightbox";
import { BreakLines } from "@/components/ui/BreakLines";
import { clsx } from "@/lib/clsx";

export function Complex() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? complex.blocks[active] : null;

  return (
    <section id="complex" className="section-pad bg-offwhite">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <SectionHeading
            overline="Complex"
            title={complex.title.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
            className="md:col-span-6"
          />
          <p className="t-body md:col-span-6 md:max-w-none md:pb-2">
            <BreakLines lines={complex.lead} />
          </p>
        </div>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
          {complex.blocks.map((b, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={b.id}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                {/* 이미지(주인공) */}
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${b.title} 조감도 확대`}
                  className={clsx(
                    "group relative block w-full overflow-hidden lg:col-span-8",
                    reverse && "lg:order-2",
                  )}
                >
                  <Placeholder
                    file={b.file}
                    label={`${b.title} 조감도`}
                    ratio="aspect-[16/10]"
                  />
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-dark/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-offwhite opacity-0 transition-opacity group-hover:opacity-100">
                    View
                  </span>
                </button>

                {/* 텍스트(작은 컬럼) */}
                <div
                  className={clsx(
                    "lg:col-span-4",
                    reverse && "lg:order-1",
                  )}
                >
                  <span className="text-[15px] font-bold tracking-[0.04em] text-gold">
                    {b.no}
                  </span>
                  <h3 className="mt-3 text-[26px] font-bold tracking-tightest text-navy md:text-[30px]">
                    {b.title}
                  </h3>
                  <p className="mt-4 text-[16px] font-medium leading-[1.75] text-navy/65">
                    {b.copy.map((line, li) => (
                      <Fragment key={li}>
                        {li > 0 && (
                          <>
                            {" "}
                            <br className="hidden md:block" />
                          </>
                        )}
                        {line.text}
                        {line.accent && (
                          <span className="font-semibold text-gold">
                            {line.accent}
                          </span>
                        )}
                      </Fragment>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Lightbox
        open={active !== null}
        onClose={() => setActive(null)}
        caption={current ? `${current.title} 조감도 — ${current.file}` : undefined}
      >
        {current && (
          <Placeholder
            file={current.file}
            label={`${current.title} 조감도 (확대)`}
            ratio="aspect-[16/10]"
          />
        )}
      </Lightbox>
    </section>
  );
}
