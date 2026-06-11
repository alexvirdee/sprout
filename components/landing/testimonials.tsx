"use client";

import { Star } from "lucide-react";
import { Reveal } from "./reveal";
import { TESTIMONIALS, TONE_STYLES } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:py-28">
        <Reveal className="mx-auto mb-14 max-w-[640px] text-center" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-gold-50 text-gold-700">
            <Star className="h-3.5 w-3.5 fill-current" strokeWidth={2.2} />
            Loved by gardeners everywhere
          </span>
          <h2
            data-reveal
            className="mt-5 font-heading text-[36px] leading-[1.08] tracking-tighter text-ink sm:text-[42px]"
          >
            A calmer way to grow.
          </h2>
          <p data-reveal className="mt-4 text-lg leading-relaxed text-ink-body">
            From window-sill beginners to homestead pros, Sprout has quietly helped people
            spend more time in their garden — and less time wondering what's next.
          </p>
        </Reveal>

        <Reveal
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
          stagger="[data-card]"
        >
          {TESTIMONIALS.map((t) => {
            const tone = TONE_STYLES[t.tone];
            return (
              <article
                data-card
                key={t.name}
                className="flex flex-col rounded-xl border border-stone bg-cream p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex gap-1 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[15.5px] leading-relaxed text-ink-body">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-heading text-[13.5px] font-bold ${tone.soft}`}
                  >
                    {t.initials}
                  </span>
                  <div className="leading-tight">
                    <div className="font-heading text-[14.5px] font-semibold text-ink">
                      {t.name}
                    </div>
                    <div className="text-[12.5px] text-ink-muted">{t.role}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
