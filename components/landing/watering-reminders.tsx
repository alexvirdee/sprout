"use client";

import { Droplets, CloudSun, Bell } from "lucide-react";
import { Reveal } from "./reveal";
import { Badge } from "@/components/ui/badge";

const items = [
  { name: "Tomatoes", when: "Today · 7:00 AM", tone: "terra", state: "Due" },
  { name: "Herbs", when: "Tomorrow", tone: "sage", state: "Soon" },
  { name: "Peppers", when: "In 2 days", tone: "sage", state: "Soon" },
  { name: "Strawberries", when: "Skipping — rain forecast", tone: "neutral", state: "Quiet" },
] as const;

const ROW_STYLES = {
  terra: { icon: "bg-terra-100 text-terra-600", chip: "terra" as const },
  sage: { icon: "bg-sage-100 text-sage-700", chip: "neutral" as const },
  neutral: { icon: "bg-neutral-150 text-ink-muted", chip: "neutral" as const },
} as const;

export function WateringReminders() {
  return (
    <section id="watering" className="bg-gradient-dawn">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal className="order-2 lg:order-1" stagger="[data-card]">
          <div
            data-card
            className="rounded-xl border border-stone bg-white p-6 shadow-lg sm:p-7"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading text-[19px] font-semibold text-ink">
                  Watering schedule
                </div>
                <div className="mt-0.5 text-sm text-ink-muted">Tuned to your forecast</div>
              </div>
              <Badge tone="green" dot>
                Live
              </Badge>
            </div>
            <ul className="mt-5 flex flex-col gap-3">
              {items.map((row) => {
                const styles = ROW_STYLES[row.tone];
                return (
                  <li
                    key={row.name}
                    className="flex items-center gap-4 rounded-md bg-cream/80 px-4 py-3"
                  >
                    <span
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-sm ${styles.icon}`}
                    >
                      <Droplets className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <div className="font-heading text-[15.5px] font-semibold text-ink">
                        {row.name}
                      </div>
                      <div className="text-[13px] text-ink-muted">{row.when}</div>
                    </div>
                    <Badge tone={styles.chip}>{row.state}</Badge>
                  </li>
                );
              })}
            </ul>
            <div
              className="mt-5 flex items-start gap-3 rounded-md bg-sprout-50 p-4 text-[13.5px] text-sprout-800"
            >
              <CloudSun className="mt-0.5 h-5 w-5 flex-none text-sprout-700" strokeWidth={2.2} />
              <span>
                Rain expected this afternoon. We've quietly skipped your strawberry watering —
                nothing for you to do.
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 flex flex-col justify-center lg:order-2" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-terra-50 text-terra-600 self-start">
            <Droplets className="h-3.5 w-3.5" strokeWidth={2.2} />
            Watering reminders
          </span>
          <h2
            data-reveal
            className="mt-5 font-heading text-[34px] leading-[1.08] tracking-tighter text-ink sm:text-[40px]"
          >
            Never miss a morning drink.
          </h2>
          <p data-reveal className="mt-5 max-w-[460px] text-[17px] leading-relaxed text-ink-body">
            Gentle, well-timed reminders tuned to each plant and the local forecast. Sprout
            nudges you when it matters and stays quiet when it rains.
          </p>
          <div data-reveal className="mt-6 flex flex-wrap gap-3">
            <Badge tone="gold" size="md">
              <Bell className="h-3.5 w-3.5" /> Quiet hours respected
            </Badge>
            <Badge tone="sage" size="md">
              <CloudSun className="h-3.5 w-3.5" /> Weather-aware
            </Badge>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
