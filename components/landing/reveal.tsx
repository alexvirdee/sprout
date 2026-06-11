"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
function ensureRegistered() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  /** Stagger children selector — e.g. "> *" */
  stagger?: string;
  delay?: number;
  y?: number;
};

/**
 * Wraps a section so its children reveal on scroll. Children opt-in via the
 * `data-reveal` attribute, or we use the `stagger` selector to grab a row.
 */
export function Reveal({
  as = "div",
  children,
  className,
  stagger,
  delay = 0,
  y = 30,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ensureRegistered();
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const targets = stagger
      ? Array.from(el.querySelectorAll<HTMLElement>(stagger))
      : Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (targets.length === 0) {
      gsap.fromTo(
        el,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
      return;
    }

    gsap.set(targets, { y, opacity: 0 });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.085,
          delay,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [stagger, delay, y]);

  // ts: forward ref onto whichever element
  const Tag = as as keyof React.JSX.IntrinsicElements;
  return (
    // @ts-expect-error — ref to dynamic element
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
