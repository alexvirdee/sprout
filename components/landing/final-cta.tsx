"use client";

import { Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function FinalCTA() {
  return (
    <section className="bg-cream pb-24 pt-8">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-leaf p-12 text-center shadow-brand sm:p-16">
          {/* Soft decorative blobs */}
          <div
            aria-hidden
            className="absolute -right-16 -top-24 h-72 w-72 blob bg-white/15"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-12 h-64 w-64 blob bg-white/10"
          />
          <div
            aria-hidden
            className="absolute right-12 top-12 hidden h-24 w-24 animate-sway text-6xl opacity-50 sm:block"
          >
            🌿
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-[640px] font-heading text-[40px] leading-[1.05] tracking-tighter text-white sm:text-[54px]">
              Watch your garden thrive.
            </h2>
            <p className="mx-auto mt-5 max-w-[460px] text-[18px] leading-relaxed text-white/85">
              Start free today. Your first sprout is waiting — and we'll be there to help you
              tend it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="gold" asChild>
                <a href="#waitlist">
                  <Leaf className="h-[18px] w-[18px]" />
                  Join the beta
                </a>
              </Button>
              <Button size="lg" variant="cream" asChild>
                <a href="#features">
                  Explore features
                  <ArrowRight className="h-[17px] w-[17px]" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
