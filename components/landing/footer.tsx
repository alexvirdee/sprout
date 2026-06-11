import Link from "next/link";

import { BrandMark } from "./brand-mark";
import { FOOTER_COLUMNS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-earth text-white/70">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_repeat(4,_1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark size={32} variant="cream" />
            <span className="font-heading text-[22px] font-bold text-white">Sprout</span>
          </div>
          <p className="mt-4 max-w-[260px] text-[14.5px] leading-relaxed">
            Watching your garden thrive — one leaf, one harvest, one season at a time.
          </p>
          <div className="mt-6 flex gap-3">
            {["Twitter", "Instagram", "TikTok"].map((s) => (
              <a
                key={s}
                href="#"
                className="rounded-md bg-white/10 px-3 py-1.5 font-heading text-[12.5px] font-medium text-white/85 transition-colors hover:bg-white/15"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="mb-4 font-heading text-[13px] font-semibold uppercase tracking-wider text-white/90">
              {col.title}
            </div>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14.5px] text-white/70 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-3 px-5 py-6 text-[13.5px] sm:flex-row sm:items-center sm:px-8">
          <span>© 2026 Sprout. Grown with care.</span>
          <span>🌱 Made for gardeners, by gardeners.</span>
        </div>
      </div>
    </footer>
  );
}
