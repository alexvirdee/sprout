import type { LucideIcon } from "lucide-react";
import {
  Leaf,
  Droplets,
  BookOpen,
  ShoppingBasket,
  Sun,
  Calendar,
  Camera,
  Bell,
  Map,
  CloudSun,
  Sprout as SproutIcon,
  History,
  CheckCircle2,
} from "lucide-react";

export type FeatureSection = {
  id: string;
  eyebrow: string;
  eyebrowIcon: LucideIcon;
  tone: "green" | "terra" | "sage" | "gold";
  title: string;
  body: string;
  bullets: string[];
};

export const FEATURE_SECTIONS: FeatureSection[] = [
  {
    id: "plant-tracking",
    eyebrow: "Plant tracking",
    eyebrowIcon: Leaf,
    tone: "green",
    title: "Every plant, beautifully kept.",
    body: "Build a living record of your whole garden — variety, location, planting date, and growth photos. Sprout's plant database knows the care basics so you don't have to.",
    bullets: [
      "Hundreds of plants with built-in care guides",
      "Photo timelines that show your progress",
      "Quick capture from the bed, no typing needed",
    ],
  },
  {
    id: "watering",
    eyebrow: "Watering reminders",
    eyebrowIcon: Droplets,
    tone: "terra",
    title: "Never miss a morning drink.",
    body: "Gentle, well-timed reminders tuned to each plant and the local forecast. Sprout nudges you when it matters and stays quiet when it rains.",
    bullets: [
      "Weather-aware schedules that adapt to the week",
      "One-tap done — no streak guilt",
      "Smart grouping by bed, container, or planter",
    ],
  },
  {
    id: "journal",
    eyebrow: "Garden journal",
    eyebrowIcon: BookOpen,
    tone: "sage",
    title: "A nature journal that writes itself.",
    body: "Capture growth photos and quiet notes as the season unfolds. Look back and watch your garden — and your hands — grow more confident.",
    bullets: [
      "A photo a week, automatically organized",
      "Tag plants, beds, or moments",
      "Beautiful weekly recaps that read like a story",
    ],
  },
  {
    id: "harvest",
    eyebrow: "Harvest tracking",
    eyebrowIcon: ShoppingBasket,
    tone: "gold",
    title: "Celebrate what you grew.",
    body: "Log every harvest by weight and date, tick off the day's tasks, and earn quiet badges for milestones. Your first tomato deserves a moment.",
    bullets: [
      "Weights, counts, and varieties in one tap",
      "Lifetime totals that feel rewarding",
      "Earn achievements at every milestone",
    ],
  },
  {
    id: "seasonal",
    eyebrow: "Seasonal planning",
    eyebrowIcon: Sun,
    tone: "gold",
    title: "Always in step with the season.",
    body: "Sprout maps each plant to the right window and shows your whole year at a glance — sowing, transplanting, and harvesting right on time.",
    bullets: [
      "Year-at-a-glance season strip",
      "Region-aware sow & transplant windows",
      "Quiet rollover from one season to the next",
    ],
  },
];

export type FeatureTile = {
  icon: LucideIcon;
  title: string;
  body: string;
  tone: "green" | "sage" | "terra" | "gold";
};

export const FEATURE_TILES: FeatureTile[] = [
  {
    icon: SproutIcon,
    title: "Plant database",
    body: "Care basics for hundreds of plants, built in.",
    tone: "green",
  },
  {
    icon: Map,
    title: "Garden maps",
    body: "Lay out beds and containers, see everything in place.",
    tone: "sage",
  },
  {
    icon: CloudSun,
    title: "Weather integration",
    body: "Local forecasts that adjust your watering plan.",
    tone: "terra",
  },
  {
    icon: Camera,
    title: "Growth photos",
    body: "A visual timeline for every plant you grow.",
    tone: "gold",
  },
  {
    icon: Bell,
    title: "Task reminders",
    body: "Gentle nudges for watering, feeding, and harvest.",
    tone: "green",
  },
  {
    icon: History,
    title: "Care history",
    body: "Every watering, note, and harvest, kept for good.",
    tone: "sage",
  },
  {
    icon: Calendar,
    title: "Seasonal planner",
    body: "Sow, transplant, and harvest right on time.",
    tone: "gold",
  },
  {
    icon: CheckCircle2,
    title: "Daily tasks",
    body: "A quiet, focused list — only what needs doing.",
    tone: "terra",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  tone: "green" | "terra" | "gold" | "sage";
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sprout makes me actually excited to go outside every morning. It feels less like an app and more like a calm little ritual.",
    name: "Maya Flores",
    role: "Raised-bed gardener",
    initials: "MF",
    tone: "green",
  },
  {
    quote:
      "I've killed every plant I've ever owned — until Sprout. The reminders are gentle and the journal keeps me going.",
    name: "Tom Reyes",
    role: "Urban balcony grower",
    initials: "TR",
    tone: "terra",
  },
  {
    quote:
      "The seasonal planner is genuinely beautiful. It turned my chaotic homestead into something I can actually keep up with.",
    name: "Priya Kapoor",
    role: "Homesteader",
    initials: "PK",
    tone: "gold",
  },
  {
    quote:
      "I run a community garden with twelve volunteers and Sprout finally got us all on the same page. The watering schedule alone saved our summer.",
    name: "Jordan Lim",
    role: "Community garden lead",
    initials: "JL",
    tone: "sage",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  desc: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Seedling",
    price: "$0",
    cadence: "forever",
    desc: "For your first few plants.",
    cta: "Start free",
    features: [
      "Up to 10 plants",
      "Watering reminders",
      "Garden journal",
      "1 garden",
    ],
  },
  {
    name: "Gardener",
    price: "$6",
    cadence: "/month",
    desc: "For a garden in full swing.",
    cta: "Join the beta",
    featured: true,
    features: [
      "Unlimited plants",
      "Weather-aware watering",
      "Growth photos & maps",
      "Harvest tracking",
      "Seasonal planner",
      "Unlimited gardens",
    ],
  },
  {
    name: "Homestead",
    price: "$12",
    cadence: "/month",
    desc: "For ambitious growers.",
    cta: "Join the beta",
    features: [
      "Everything in Gardener",
      "Shared family access",
      "Advanced analytics",
      "Priority support",
    ],
  },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Do I need to know anything about gardening?",
    a: "Not at all. Sprout's plant database comes with the care basics, and reminders guide you step by step. Plenty of our gardeners started with a single pot on a windowsill.",
  },
  {
    q: "How do watering reminders work?",
    a: "Sprout learns each plant's needs and checks your local forecast, then sends a gentle nudge only when watering actually helps — and stays quiet when nature handles it.",
  },
  {
    q: "Can I track more than one garden?",
    a: "Yes. Raised beds, containers, a community plot, the front border — organize them as separate gardens and map out each bed.",
  },
  {
    q: "Is there a free plan?",
    a: "Always. The Seedling plan is free forever for up to 10 plants, with reminders and the journal included.",
  },
  {
    q: "Does Sprout work offline in the garden?",
    a: "Yes. Snap photos and log harvests anywhere; Sprout syncs as soon as you're back in range.",
  },
  {
    q: "When does the mobile app launch?",
    a: "Beta builds are rolling out now. Join the waitlist and we'll send you an invite as soon as your spot opens.",
  },
];

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Features", href: "#features" },
  { label: "Mobile app", href: "#app" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const FOOTER_COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Product",
    links: ["Plant tracking", "Watering", "Garden journal", "Harvests", "Seasonal planner"],
  },
  {
    title: "Company",
    links: ["About", "Our story", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Plant guides", "Help center", "Community", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies"],
  },
];

export const TONE_STYLES: Record<
  "green" | "sage" | "terra" | "gold",
  { soft: string; ink: string; ring: string; dot: string }
> = {
  green: {
    soft: "bg-sprout-50 text-sprout-700",
    ink: "text-sprout-800",
    ring: "ring-sprout-200",
    dot: "bg-sprout-500",
  },
  sage: {
    soft: "bg-sage-50 text-sage-700",
    ink: "text-sage-800",
    ring: "ring-sage-200",
    dot: "bg-sage-500",
  },
  gold: {
    soft: "bg-gold-50 text-gold-700",
    ink: "text-gold-800",
    ring: "ring-gold-200",
    dot: "bg-gold-500",
  },
  terra: {
    soft: "bg-terra-50 text-terra-600",
    ink: "text-terra-700",
    ring: "ring-terra-200",
    dot: "bg-terra-500",
  },
};
