"use client";

import { Apple, Download, Droplets, Home, User2, Bell, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";

const PLANTS = [
  { emoji: "🍅", name: "Tomato", status: "Harvest ready", color: "text-gold-700" },
  { emoji: "🌿", name: "Basil", status: "Needs water", color: "text-terra-500" },
  { emoji: "💜", name: "Lavender", status: "Thriving", color: "text-sprout-600" },
  { emoji: "🥬", name: "Lettuce", status: "Thriving", color: "text-sprout-600" },
];

export function AppPreview() {
  return (
    <section id="app" className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] blob bg-sprout-100/55 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-12 h-[400px] w-[400px] blob bg-gold-100/45 blur-2xl"
      />
      <div className="relative mx-auto grid max-w-[1200px] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:py-28">
        <Reveal className="flex flex-col justify-center" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-white text-sprout-700 shadow-xs self-start">
            <Sprout className="h-3.5 w-3.5" strokeWidth={2.2} />
            Sprout for iPhone & Android
          </span>
          <h2
            data-reveal
            className="mt-5 font-heading text-[34px] leading-[1.05] tracking-tighter text-ink sm:text-[44px]"
          >
            Your garden, in your pocket.
          </h2>
          <p data-reveal className="mt-5 max-w-[440px] text-[17px] leading-relaxed text-ink-body">
            Snap a photo, check today's watering, log a harvest from the garden bed. Sprout
            goes wherever you grow — designed for one-hand use, even with dirty fingers.
          </p>
          <div data-reveal className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" variant="primary">
              <Apple className="h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" variant="secondary">
              <Download className="h-[18px] w-[18px]" />
              Get the Android beta
            </Button>
          </div>
          <div data-reveal className="mt-7 flex items-center gap-4 text-sm text-ink-muted">
            <div className="flex -space-x-2">
              {["bg-sprout-300", "bg-gold-300", "bg-terra-300", "bg-sage-300"].map((c) => (
                <span
                  key={c}
                  className={`inline-block h-8 w-8 rounded-full border-2 border-cream ${c}`}
                />
              ))}
            </div>
            <span>Trusted by 12,400+ beta growers · 4.9 average rating</span>
          </div>
        </Reveal>

        <Reveal className="flex justify-center" stagger="[data-phone]">
          <PhoneMock />
        </Reveal>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div
      data-phone
      className="relative w-[300px] sm:w-[320px]"
      style={{ filter: "drop-shadow(0 30px 50px rgba(90, 70, 52, 0.25))" }}
    >
      {/* Phone bezel */}
      <div className="relative aspect-[300/610] rounded-[48px] bg-neutral-900 p-3">
        <div className="absolute inset-x-0 top-2 z-10 flex justify-center">
          <div className="h-[26px] w-[110px] rounded-b-2xl bg-neutral-900" />
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-cream">
          {/* Header */}
          <div className="bg-gradient-dawn px-5 pb-4 pt-12">
            <div className="text-[12px] text-ink-muted">Good morning, Maya ☀️</div>
            <div className="mt-0.5 font-heading text-[22px] font-bold text-ink">Your garden</div>
          </div>

          {/* Today reminder */}
          <div className="px-4 pt-4">
            <div className="flex items-center gap-3 rounded-lg border border-stone bg-white p-3 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-terra-100 text-terra-600">
                <Droplets className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="font-heading text-[13.5px] font-semibold text-ink">
                  6 plants need water
                </div>
                <div className="text-[11.5px] text-ink-muted">Best before noon</div>
              </div>
              <Badge tone="terra" size="sm">
                Today
              </Badge>
            </div>
          </div>

          {/* Plant grid */}
          <div className="px-4 pt-3">
            <div className="grid grid-cols-2 gap-2.5">
              {PLANTS.map((p) => (
                <div
                  key={p.name}
                  className="overflow-hidden rounded-md border border-stone bg-white shadow-sm"
                >
                  <div className="flex h-14 items-center justify-center bg-gradient-meadow text-2xl">
                    {p.emoji}
                  </div>
                  <div className="px-2.5 pb-2 pt-1.5">
                    <div className="font-heading text-[12.5px] font-semibold text-ink">
                      {p.name}
                    </div>
                    <div className={`text-[10.5px] font-semibold ${p.color}`}>{p.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Streak banner */}
          <div className="mx-4 mt-3 flex items-center gap-2.5 rounded-md bg-sprout-50 px-3 py-2.5">
            <span className="text-lg">🌱</span>
            <div className="flex-1 text-[11.5px] text-sprout-800">
              <span className="font-heading font-semibold">7-day streak</span> · tending Bed 2
            </div>
            <Badge tone="green" size="sm">
              +2
            </Badge>
          </div>

          {/* Tab bar */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-stone bg-white py-2.5">
            <TabIcon active>
              <Home className="h-5 w-5" />
            </TabIcon>
            <TabIcon>
              <Sprout className="h-5 w-5" />
            </TabIcon>
            <TabIcon>
              <Droplets className="h-5 w-5" />
            </TabIcon>
            <TabIcon>
              <Bell className="h-5 w-5" />
            </TabIcon>
            <TabIcon>
              <User2 className="h-5 w-5" />
            </TabIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabIcon({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-md ${
        active ? "bg-sprout-50 text-sprout-700" : "text-ink-subtle"
      }`}
    >
      {children}
    </span>
  );
}
