"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-[760px] px-5 py-24 sm:px-8 lg:py-28">
        <Reveal className="mb-12 text-center" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-sage-50 text-sage-700">
            FAQ
          </span>
          <h2
            data-reveal
            className="mt-4 font-heading text-[36px] leading-[1.08] tracking-tighter text-ink sm:text-[40px]"
          >
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal stagger="[data-faq]">
          <Accordion type="single" collapsible defaultValue="0">
            <div className="flex flex-col gap-3">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={item.q} value={String(i)} data-faq>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
