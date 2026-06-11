"use client";

import { Leaf, Camera } from "lucide-react";
import { Reveal } from "./reveal";
import { Badge } from "@/components/ui/badge";

type Plant = {
  name: string;
  variety?: string;
  location: string;
  emoji: string;
  status: string;
  tone: "green" | "gold" | "sage" | "terra";
  progress: number;
  tilt: string;
};

const plants: Plant[] = [
  {
    name: "Genovese Basil",
    location: "Herb planter",
    emoji: "🌿",
    status: "Thriving",
    tone: "green",
    progress: 64,
    tilt: "-rotate-1",
  },
  {
    name: "Sungold Tomato",
    variety: "Cherry",
    location: "Bed 2",
    emoji: "🍅",
    status: "Harvest ready",
    tone: "gold",
    progress: 92,
    tilt: "rotate-1 lg:translate-y-8",
  },
  {
    name: "Lavender",
    variety: "Hidcote",
    location: "Border",
    emoji: "💜",
    status: "Thriving",
    tone: "sage",
    progress: 78,
    tilt: "-rotate-2 lg:translate-y-4",
  },
];

const STATUS_STYLES = {
  green: "bg-sprout-100 text-sprout-800",
  gold: "bg-gold-100 text-gold-800",
  sage: "bg-sage-100 text-sage-800",
  terra: "bg-terra-100 text-terra-700",
} as const;

export function PlantTracking() {
  return (
    <section id="plant-tracking" className="bg-cream">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal className="flex flex-col justify-center" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-sprout-50 text-sprout-700 self-start">
            <Leaf className="h-3.5 w-3.5" strokeWidth={2.2} />
            Plant tracking
          </span>
          <h2
            data-reveal
            className="mt-5 font-heading text-[34px] leading-[1.08] tracking-tighter text-ink sm:text-[40px]"
          >
            Every plant, beautifully kept.
          </h2>
          <p data-reveal className="mt-5 max-w-[460px] text-[17px] leading-relaxed text-ink-body">
            Build a living record of your whole garden — variety, location, planting date,
            and growth photos. Sprout's plant database knows the care basics so you don't
            have to.
          </p>
          <ul data-reveal className="mt-7 flex flex-col gap-3 text-[15.5px] text-ink-body">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sprout-100 text-sprout-700">
                <Leaf className="h-3 w-3" strokeWidth={2.6} />
              </span>
              Hundreds of plants, each with their own care window.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sprout-100 text-sprout-700">
                <Camera className="h-3 w-3" strokeWidth={2.6} />
              </span>
              Snap a photo from the bed — Sprout sorts it by plant.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sprout-100 text-sprout-700">
                <Leaf className="h-3 w-3" strokeWidth={2.6} />
              </span>
              Growth timelines and tidy care history — kept for good.
            </li>
          </ul>
        </Reveal>

        <Reveal className="relative" stagger="[data-card]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {plants.map((p) => (
              <div
                data-card
                key={p.name}
                className={`group overflow-hidden rounded-xl border border-stone bg-white shadow-md transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${p.tilt}`}
              >
                <div className="relative flex h-36 items-center justify-center bg-gradient-meadow">
                  <span className="text-[52px] transition-transform duration-500 ease-out group-hover:scale-110">
                    {p.emoji}
                  </span>
                  <span
                    className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 font-heading text-[11.5px] font-semibold ${
                      STATUS_STYLES[p.tone]
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {p.status}
                  </span>
                </div>
                <div className="px-4 pb-4 pt-3">
                  <div className="font-heading text-[15.5px] font-semibold text-ink">{p.name}</div>
                  <div className="mt-0.5 text-xs text-ink-muted">
                    {[p.variety, p.location].filter(Boolean).join(" · ")}
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-pill bg-neutral-150">
                    <div
                      className="h-full rounded-pill bg-gradient-leaf"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
