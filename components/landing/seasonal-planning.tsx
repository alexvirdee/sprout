"use client";

import { Sun, Snowflake, Sprout as SproutIcon, Leaf } from "lucide-react";
import { Reveal } from "./reveal";

const SEASONS = [
  { key: "spring", label: "Spring", color: "from-sage-200 to-sprout-200", emoji: "🌱", tone: "sage" },
  { key: "summer", label: "Summer", color: "from-gold-200 to-gold-300", emoji: "☀️", tone: "gold" },
  { key: "fall", label: "Fall", color: "from-terra-200 to-terra-300", emoji: "🍂", tone: "terra" },
  { key: "winter", label: "Winter", color: "from-neutral-150 to-neutral-200", emoji: "❄️", tone: "neutral" },
] as const;

const TIMELINE = [
  { plant: "Lettuce mix", phase: "Harvest", week: 10, color: "bg-gold-400" },
  { plant: "Tomatoes", phase: "Fruiting", week: 7, color: "bg-terra-400" },
  { plant: "Basil", phase: "Thriving", week: 8, color: "bg-sprout-500" },
  { plant: "Pumpkin", phase: "Sowing", week: 3, color: "bg-sage-500" },
];

export function SeasonalPlanning() {
  return (
    <section id="seasonal" className="relative overflow-hidden bg-gradient-meadow">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-12 h-[360px] w-[360px] blob bg-gold-100/60 blur-2xl"
      />
      <div className="relative mx-auto grid max-w-[1200px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:py-28">
        <Reveal className="flex flex-col justify-center" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-gold-50 text-gold-700 self-start">
            <Sun className="h-3.5 w-3.5" strokeWidth={2.2} />
            Seasonal planning
          </span>
          <h2
            data-reveal
            className="mt-5 font-heading text-[34px] leading-[1.08] tracking-tighter text-ink sm:text-[42px]"
          >
            Always in step with the season.
          </h2>
          <p data-reveal className="mt-5 max-w-[460px] text-[17px] leading-relaxed text-ink-body">
            Sprout maps each plant to the right window and shows your whole year at a glance —
            sowing, transplanting, and harvesting right on time.
          </p>
          <div data-reveal className="mt-7 grid grid-cols-4 gap-2">
            {SEASONS.map((s) => (
              <div
                key={s.key}
                className={`group relative overflow-hidden rounded-md border border-stone bg-white p-3 text-center transition-shadow ${
                  s.key === "summer" ? "ring-2 ring-gold-400/60" : ""
                }`}
              >
                <div
                  className={`mx-auto flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br ${s.color} text-lg`}
                >
                  {s.emoji}
                </div>
                <div className="mt-2 font-heading text-[13px] font-semibold text-ink">
                  {s.label}
                </div>
                {s.key === "summer" && (
                  <div className="mt-1 text-[10.5px] font-heading font-semibold uppercase tracking-wider text-gold-700">
                    Now
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative" stagger="[data-card]">
          <div
            data-card
            className="rounded-xl border border-stone bg-white p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading text-[18px] font-semibold text-ink">
                  Your season at a glance
                </div>
                <div className="mt-0.5 text-sm text-ink-muted">Week 7 of summer · day 41</div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                <Sun className="h-5 w-5" strokeWidth={2.2} />
              </div>
            </div>
            <div className="mt-5 space-y-4">
              {TIMELINE.map((t) => (
                <div key={t.plant}>
                  <div className="flex items-center justify-between text-[13px]">
                    <div className="font-heading font-semibold text-ink">{t.plant}</div>
                    <div className="text-ink-muted">{t.phase}</div>
                  </div>
                  <div className="mt-1.5 grid grid-cols-12 gap-1">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const active = i + 1 === t.week;
                      const inWindow = i + 1 >= t.week - 1 && i + 1 <= t.week + 1;
                      return (
                        <div
                          key={i}
                          className={`h-2.5 rounded-sm ${
                            active
                              ? t.color
                              : inWindow
                              ? `${t.color} opacity-50`
                              : "bg-neutral-150"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-md bg-cream p-4 text-[13.5px] text-ink-body">
              <Leaf className="mt-0.5 h-5 w-5 flex-none text-sprout-700" strokeWidth={2.2} />
              <span>
                <span className="font-heading font-semibold text-ink">Heads up — </span>
                It's almost time to start your fall lettuce. We'll remind you on the 18th.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
