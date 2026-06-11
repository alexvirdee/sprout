"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Leaf, Droplets, Sun } from "lucide-react";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Three.js scene lazily — keeps initial JS small and avoids SSR issues
const GardenScene = dynamic(
  () => import("./garden-scene").then((m) => m.GardenScene),
  { ssr: false, loading: () => <HeroFallbackBlob /> }
);

function HeroFallbackBlob() {
  return (
    <div
      aria-hidden
      className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-meadow"
    >
      <div className="absolute -top-12 right-6 h-48 w-48 blob bg-sprout-100/70 blur-xl" />
      <div className="absolute bottom-6 left-6 h-40 w-40 blob bg-gold-100/60 blur-xl" />
      <div className="flex h-full items-center justify-center">
        <span className="animate-float text-7xl">🌱</span>
      </div>
    </div>
  );
}

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero='eyebrow']", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          "[data-hero='title'] .hero-line",
          { y: 28, opacity: 0, duration: 0.8, stagger: 0.08 },
          "-=0.35"
        )
        .from(
          "[data-hero='subtitle']",
          { y: 18, opacity: 0, duration: 0.7 },
          "-=0.5"
        )
        .from(
          "[data-hero='ctas'] > *",
          { y: 14, opacity: 0, duration: 0.55, stagger: 0.08 },
          "-=0.4"
        )
        .from(
          "[data-hero='meta']",
          { y: 10, opacity: 0, duration: 0.5 },
          "-=0.4"
        )
        .from(
          "[data-hero='scene']",
          { scale: 0.94, opacity: 0, duration: 1.1, ease: "power3.out" },
          "-=0.95"
        )
        .from(
          "[data-hero='float']",
          { y: 14, opacity: 0, duration: 0.6, stagger: 0.12 },
          "-=0.5"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden bg-gradient-meadow pt-[120px] pb-16 lg:pt-[152px] lg:pb-28"
    >
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] blob bg-sage-200/45 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[380px] w-[380px] blob bg-gold-100/55 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Copy */}
        <div>
          <span
            data-hero="eyebrow"
            className="eyebrow bg-white text-sprout-700 shadow-xs"
          >
            <Sun className="h-4 w-4" strokeWidth={2.2} />
            Watching your garden thrive
          </span>

          <h1
            data-hero="title"
            className="mt-5 font-heading text-[44px] leading-[1.02] tracking-tightest text-ink sm:text-[58px] lg:text-[68px]"
          >
            <span className="hero-line block">Grow something</span>
            <span className="hero-line block">
              <span className="bg-gradient-to-r from-sprout-700 via-sprout-500 to-sage-600 bg-clip-text text-transparent">
                beautiful.
              </span>
            </span>
          </h1>

          <p
            data-hero="subtitle"
            className="mt-6 max-w-[480px] text-[17.5px] leading-relaxed text-ink-body sm:text-lg"
          >
            Sprout helps gardeners track plants, watering, harvests, tasks, and
            seasonal progress in one peaceful place — a calm little ritual you'll
            actually look forward to.
          </p>

          <div data-hero="ctas" className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button size="lg" asChild>
              <a href="#waitlist">
                <Leaf className="h-[18px] w-[18px]" strokeWidth={2.2} />
                Join the beta
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#features">
                Explore features
                <ArrowRight className="h-[17px] w-[17px]" strokeWidth={2.2} />
              </a>
            </Button>
          </div>

          <div
            data-hero="meta"
            className="mt-7 flex flex-wrap items-center gap-3 text-sm text-ink-muted"
          >
            <Badge tone="sage" dot>
              Free to start
            </Badge>
            <span className="text-ink-subtle">·</span>
            <span>Joining 12,400+ gardeners on the waitlist</span>
          </div>
        </div>

        {/* Three.js scene + floating product cards */}
        <div className="relative h-[440px] sm:h-[520px] lg:h-[560px]">
          <div
            data-hero="scene"
            className="absolute inset-0"
            style={{ willChange: "transform, opacity" }}
          >
            <GardenScene />
          </div>

          {/* Floating product cards layered over scene */}
          <div
            data-hero="float"
            className="absolute left-2 top-4 w-[230px] rounded-xl border border-stone bg-white p-4 shadow-xl sm:w-[252px]"
          >
            <div className="flex items-center gap-3">
              <ProgressRing value={72} label="72%" sublabel="grown" tone="green" size={70} />
              <div>
                <div className="font-heading text-[15px] font-semibold text-ink">
                  Summer garden
                </div>
                <div className="text-xs text-ink-muted">12 beds · on track</div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <MiniStat icon={<Leaf className="h-4 w-4" />} value="24" label="Growing" tone="green" />
              <MiniStat icon={<Droplets className="h-4 w-4" />} value="6" label="To water" tone="terra" />
            </div>
          </div>

          <div
            data-hero="float"
            className="absolute bottom-6 right-2 w-[240px] rounded-xl border border-stone bg-white p-4 shadow-xl sm:w-[250px]"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-terra-50 text-terra-500">
                <Droplets className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="font-heading text-[14.5px] font-semibold text-ink">
                  Water the basil
                </div>
                <div className="text-xs text-ink-muted">This morning · Herb planter</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-md bg-sprout-50 px-3 py-2 font-heading text-[12.5px] font-semibold text-sprout-700">
              <Sun className="h-4 w-4" />
              Best before the heat of the day
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Tiny inline progress ring used by the hero floating card. */
function ProgressRing({
  value,
  size = 70,
  thickness = 8,
  tone = "green",
  label,
  sublabel,
}: {
  value: number;
  size?: number;
  thickness?: number;
  tone?: "green" | "gold" | "terra";
  label: string;
  sublabel?: string;
}) {
  const pct = Math.max(0, Math.min(1, value / 100));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const colors = {
    green: "#4CAF50",
    gold: "#F4B942",
    terra: "#C86B3C",
  };
  return (
    <div className="relative flex-none" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#ECE6D9" strokeWidth={thickness} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={colors[tone]}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <div className="font-heading text-[15px] font-bold text-ink">{label}</div>
        {sublabel && <div className="mt-0.5 text-[10px] text-ink-muted">{sublabel}</div>}
      </div>
    </div>
  );
}

function MiniStat({
  icon,
  value,
  label,
  tone,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  tone: "green" | "terra";
}) {
  const palette = {
    green: "bg-sprout-50 text-sprout-700",
    terra: "bg-terra-50 text-terra-600",
  } as const;
  return (
    <div className="flex items-center gap-2 rounded-md border border-stone/70 bg-cream/70 p-2.5">
      <span className={`flex h-8 w-8 items-center justify-center rounded-md ${palette[tone]}`}>
        {icon}
      </span>
      <div className="leading-tight">
        <div className="font-heading text-[13.5px] font-bold text-ink">{value}</div>
        <div className="text-[11px] text-ink-muted">{label}</div>
      </div>
    </div>
  );
}
