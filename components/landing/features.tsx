"use client";

import { ShoppingBasket, Camera, BookOpen, Droplets, Leaf, Sun, Sprout } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";
import { FEATURE_TILES, TONE_STYLES } from "@/lib/constants";

/**
 * "Everything your garden needs" — six-tile feature overview that sets up
 * the deeper feature stories below.
 */
export function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:py-28">
        <Reveal className="mx-auto mb-14 max-w-[640px] text-center" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-sprout-50 text-sprout-700">
            <Sprout className="h-4 w-4" strokeWidth={2.2} />
            Built for the way you actually garden
          </span>
          <h2
            data-reveal
            className="mt-5 font-heading text-[36px] leading-[1.08] tracking-tighter text-ink sm:text-[44px]"
          >
            Everything your garden needs.
          </h2>
          <p data-reveal className="mt-4 text-lg leading-relaxed text-ink-body">
            One calm, beautiful home for every plant, task, and harvest. No spreadsheets,
            no streaks, no shouting — just gentle attention to what's growing.
          </p>
        </Reveal>

        <Reveal
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger="[data-tile]"
        >
          {FEATURE_TILES.map((tile) => {
            const Icon = tile.icon;
            const styles = TONE_STYLES[tile.tone];
            return (
              <div
                data-tile
                key={tile.title}
                className="group rounded-xl border border-stone bg-cream p-6 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-md ${styles.soft} transition-transform duration-300 ease-out group-hover:scale-110`}
                >
                  <Icon className="h-[22px] w-[22px]" strokeWidth={2.1} />
                </span>
                <div className="mt-5 font-heading text-[18.5px] font-semibold text-ink">
                  {tile.title}
                </div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">{tile.body}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
