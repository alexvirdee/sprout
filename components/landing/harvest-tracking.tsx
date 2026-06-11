"use client";

import { ShoppingBasket, Check, Trophy } from "lucide-react";
import { Reveal } from "./reveal";
import { Badge } from "@/components/ui/badge";

const harvests = [
  { plant: "Sungold tomatoes", amount: "1 lb 4 oz", date: "Sun, Jun 8", emoji: "🍅" },
  { plant: "Genovese basil", amount: "120g", date: "Sat, Jun 7", emoji: "🌿" },
  { plant: "Lettuce mix", amount: "200g", date: "Thu, Jun 5", emoji: "🥬" },
];

const tasks = [
  { label: "Picked 6 Sungold tomatoes", done: true },
  { label: "Trimmed the basil for pesto", done: true },
  { label: "Weigh and log the chard", done: false },
];

const badges = [
  { title: "First Harvest", caption: "Jun 2026", emoji: "🥕", tone: "bg-gold-100 text-gold-800" },
  { title: "10 lb Club", caption: "+4 lb this week", emoji: "🏆", tone: "bg-terra-100 text-terra-700" },
  { title: "Tomato Whisperer", caption: "20+ picked", emoji: "🍅", tone: "bg-sprout-100 text-sprout-800" },
];

export function HarvestTracking() {
  return (
    <section id="harvest" className="bg-cream">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal className="order-2 grid grid-cols-1 gap-5 lg:order-1" stagger="[data-card]">
          <div data-card className="rounded-xl border border-stone bg-white p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-ink-muted">Harvested this season</div>
                <div className="mt-1 font-heading text-[34px] font-bold tracking-tightest text-ink">
                  18 lb 6 oz
                </div>
              </div>
              <Badge tone="gold" solid>
                +4 lb 2 oz
              </Badge>
            </div>
            <ul className="mt-5 divide-y divide-stone">
              {harvests.map((h) => (
                <li key={h.plant} className="flex items-center gap-3 py-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-meadow text-2xl">
                    {h.emoji}
                  </span>
                  <div className="flex-1">
                    <div className="font-heading text-[14.5px] font-semibold text-ink">
                      {h.plant}
                    </div>
                    <div className="text-[12.5px] text-ink-muted">{h.date}</div>
                  </div>
                  <div className="font-heading text-[14px] font-semibold text-sprout-700">
                    {h.amount}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div data-card className="rounded-xl border border-stone bg-white p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div className="font-heading text-[16px] font-semibold text-ink">Today</div>
              <Badge tone="green">3 tasks</Badge>
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {tasks.map((t) => (
                <li key={t.label} className="flex items-center gap-3">
                  <span
                    className={`flex h-6 w-6 flex-none items-center justify-center rounded-md ${
                      t.done
                        ? "bg-sprout-500 text-white shadow-brand"
                        : "border-[1.5px] border-stone bg-white"
                    }`}
                  >
                    {t.done && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                  </span>
                  <span
                    className={`text-[14.5px] ${
                      t.done ? "text-ink-muted line-through decoration-stone" : "text-ink-body"
                    }`}
                  >
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="order-1 flex flex-col justify-center lg:order-2" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-gold-50 text-gold-700 self-start">
            <ShoppingBasket className="h-3.5 w-3.5" strokeWidth={2.2} />
            Harvest tracking
          </span>
          <h2
            data-reveal
            className="mt-5 font-heading text-[34px] leading-[1.08] tracking-tighter text-ink sm:text-[40px]"
          >
            Celebrate what you grew.
          </h2>
          <p data-reveal className="mt-5 max-w-[460px] text-[17px] leading-relaxed text-ink-body">
            Log every harvest by weight and date, tick off the day's tasks, and earn quiet
            badges for milestones. Your first tomato deserves a moment.
          </p>
          <div data-reveal className="mt-7 flex flex-wrap gap-3">
            {badges.map((b) => (
              <div
                key={b.title}
                className={`flex items-center gap-3 rounded-pill ${b.tone} pl-2 pr-4 py-1.5`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow-xs">
                  {b.emoji}
                </span>
                <div className="leading-tight">
                  <div className="font-heading text-[13.5px] font-semibold">{b.title}</div>
                  <div className="text-[11.5px] opacity-75">{b.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
