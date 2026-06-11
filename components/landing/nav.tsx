"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandMark } from "./brand-mark";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background,border-color,box-shadow] duration-300 ease-out",
        scrolled
          ? "bg-cream/80 backdrop-blur-xl border-b border-stone/70 shadow-xs"
          : "bg-cream/0 border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sprout home">
          <BrandMark size={34} />
          <span className="font-heading text-[22px] font-bold tracking-tight text-ink">
            Sprout
          </span>
        </Link>

        <nav className="ml-4 hidden gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-[15px] font-medium text-ink-body transition-colors hover:text-sprout-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="#"
            className="hidden font-heading text-[15px] font-semibold text-ink transition-colors hover:text-sprout-700 sm:inline-flex"
          >
            Log in
          </a>
          <Button size="sm" asChild>
            <a href="#waitlist">Join the beta</a>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-xs lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto max-w-[1200px] border-t border-stone bg-cream/95 px-5 py-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-heading text-base font-medium text-ink-body hover:bg-sprout-50 hover:text-sprout-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
