"use client";

import { useState } from "react";
import { Check, Mail, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";
import { PRICING_PLANS } from "@/lib/constants";

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream">
      <div className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 lg:py-28">
        <Reveal className="mx-auto mb-14 max-w-[640px] text-center" stagger="[data-reveal]">
          <span data-reveal className="eyebrow bg-sprout-50 text-sprout-700">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
            Beta access · early-bird pricing
          </span>
          <h2
            data-reveal
            className="mt-5 font-heading text-[36px] leading-[1.08] tracking-tighter text-ink sm:text-[44px]"
          >
            Simple, friendly pricing.
          </h2>
          <p data-reveal className="mt-4 text-lg leading-relaxed text-ink-body">
            Start free. Grow into more whenever you're ready. Beta members keep these prices for life.
          </p>
        </Reveal>

        <Reveal
          className="grid grid-cols-1 items-start gap-5 md:grid-cols-3"
          stagger="[data-plan]"
        >
          {PRICING_PLANS.map((plan) => (
            <div
              data-plan
              key={plan.name}
              className={`relative rounded-2xl p-7 transition-shadow duration-300 ${
                plan.featured
                  ? "bg-earth text-white shadow-xl ring-1 ring-earth -translate-y-2"
                  : "bg-white text-ink-body border border-stone shadow-sm hover:shadow-md"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-5 top-5">
                  <Badge tone="gold" solid size="sm">
                    Most loved
                  </Badge>
                </div>
              )}
              <div
                className={`font-heading text-[15px] font-semibold ${
                  plan.featured ? "text-gold-300" : "text-sprout-700"
                }`}
              >
                {plan.name}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className={`font-heading text-[44px] font-bold leading-none tracking-tightest ${
                    plan.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.featured ? "text-white/60" : "text-ink-muted"
                  }`}
                >
                  {plan.cadence}
                </span>
              </div>
              <p
                className={`mt-2 text-sm ${
                  plan.featured ? "text-white/75" : "text-ink-muted"
                }`}
              >
                {plan.desc}
              </p>
              <div className="my-6">
                <Button
                  variant={plan.featured ? "gold" : "secondary"}
                  fullWidth
                  asChild
                >
                  <a href="#waitlist">{plan.cta}</a>
                </Button>
              </div>
              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-[14.5px] ${
                      plan.featured ? "text-white/90" : "text-ink-body"
                    }`}
                  >
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-gold-300/20 text-gold-300"
                          : "bg-sprout-100 text-sprout-700"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-16" stagger="[data-reveal]">
          <Waitlist />
        </Reveal>
      </div>
    </section>
  );
}

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      id="waitlist"
      data-reveal
      className="relative overflow-hidden rounded-3xl bg-white border border-stone p-8 shadow-md sm:p-10"
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 blob bg-sprout-100/70 blur-xl" />
      <div className="absolute -bottom-24 -left-16 h-56 w-56 blob bg-gold-100/60 blur-xl" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Badge tone="sage" dot>
            Beta — limited spots
          </Badge>
          <h3 className="mt-3 font-heading text-[28px] leading-tight tracking-tighter text-ink">
            Join the Sprout beta.
          </h3>
          <p className="mt-3 max-w-[440px] text-[15.5px] leading-relaxed text-ink-body">
            We send a calm, monthly note — early invites, new plant guides, and seasonal
            inspiration. No spam, no streaks.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="relative"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <Input
              id="waitlist-email"
              type="email"
              required
              placeholder="your.email@garden.so"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitted}
              className="flex-1"
            />
            <Button size="lg" type="submit" disabled={submitted}>
              <Mail className="h-[18px] w-[18px]" />
              {submitted ? "Sent" : "Join the beta"}
            </Button>
          </div>
          {submitted && (
            <p className="mt-3 text-sm text-sprout-700">
              You're on the list. We'll send your beta invite soon.
            </p>
          )}
          <p className="mt-3 text-[12.5px] text-ink-muted">
            By joining you'll get occasional emails from Sprout. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
}
