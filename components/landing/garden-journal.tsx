"use client";

import { BookOpen, Camera, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

const entries = [
  {
    title: "First true leaves",
    date: "Saturday · Week 6",
    body: "First true leaves on the Sungolds today. The morning light is hitting Bed 2 just right.",
    emoji: "🪴",
    gradient: "bg-gradient-dawn",
  },
  {
    title: "Mint, suddenly everywhere",
    date: "Tuesday · Week 7",
    body: "The mint has decided it owns the herb planter now. Repotted into its own container.",
    emoji: "🌿",
    gradient: "bg-gradient-meadow",
  },
  {
    title: "Lavender opening up",
    date: "Friday · Week 9",
    body: "Lavender along the border started opening this afternoon. The bees found it within an hour.",
    emoji: "💜",
    gradient: "bg-gradient-sun",
  },
] as const;

export function GardenJournal() {
  return (
    <section id="journal" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal className="flex flex-col justify-center" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-sage-50 text-sage-700 self-start">
            <BookOpen className="h-3.5 w-3.5" strokeWidth={2.2} />
            Garden journal
          </span>
          <h2
            data-reveal
            className="mt-5 font-heading text-[34px] leading-[1.08] tracking-tighter text-ink sm:text-[40px]"
          >
            A nature journal that writes itself.
          </h2>
          <p data-reveal className="mt-5 max-w-[460px] text-[17px] leading-relaxed text-ink-body">
            Capture growth photos and quiet notes as the season unfolds. Look back and watch
            your garden — and your hands — grow more confident.
          </p>
          <div
            data-reveal
            className="mt-7 grid max-w-[460px] grid-cols-3 gap-3 rounded-lg bg-cream p-4"
          >
            {[
              { v: "184", l: "Photos this year" },
              { v: "12", l: "Weeks tracked" },
              { v: "37", l: "Notes & moments" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-heading text-[22px] font-bold text-ink">{s.v}</div>
                <div className="mt-0.5 text-[11.5px] text-ink-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2" stagger="[data-card]">
          {entries.map((entry, i) => (
            <article
              data-card
              key={entry.title}
              className={`group overflow-hidden rounded-xl border border-stone bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`flex h-[140px] items-center justify-center ${entry.gradient}`}
              >
                <span className="text-[58px] transition-transform duration-500 group-hover:scale-110">
                  {entry.emoji}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[12.5px] text-ink-subtle">
                  <Camera className="h-3.5 w-3.5" />
                  {entry.date}
                </div>
                <h3 className="mt-2 font-heading text-[18px] font-semibold text-ink">
                  {entry.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-body">{entry.body}</p>
              </div>
            </article>
          ))}
          <div
            data-card
            className="flex items-center gap-3 rounded-xl bg-sprout-50 p-5 text-sprout-800 sm:col-span-2"
          >
            <Sparkles className="h-5 w-5 flex-none" strokeWidth={2.2} />
            <p className="text-[14.5px] leading-relaxed">
              Sprout writes a quiet weekly recap from your photos and notes — like a friend
              looking over the garden with you on Sunday morning.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
