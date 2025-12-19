export type ServicePackage = {
  id: string;
  name: string;
  priceTHB: number;
  pageLimitLabel: string;
  bestFor: string;
  highlights: string[];
};

export const site = {
  brand: "Reon",
  ownerName: "Lin Myat Phyo (Reon)",
  locationLabel: "Thailand (remote-friendly)",
  primaryCta: "Free Consultation",
  contactEmail: "linmyatphyo03@gmail.com",
  booking: {
    label: "Free Consultation",
    url: "https://calendar.app.google/VEX5MHq6u7kSFhoXA",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/lin-myat-phyo-b872b1217/",
    facebook: "https://www.facebook.com/lin.myat.phyo.724510",
  },
  services: [
    {
      id: "landing",
      name: "Landing Page",
      priceTHB: 3500,
      pageLimitLabel: "1 page",
      bestFor: "A simple, focused offer page.",
      highlights: [
        "Responsive design",
        "Fast loading + SEO basics",
        "Contact buttons (LINE/phone/email) + map embed",
        "1 round of revisions",
      ],
    },
    {
      id: "starter",
      name: "Multi‑page (Starter)",
      priceTHB: 5000,
      pageLimitLabel: "Up to 3 pages",
      bestFor: "Home + About + Contact (or similar).",
      highlights: [
        "Consistent design across pages",
        "Clear navigation + calls-to-action",
        "On‑page SEO basics (titles, descriptions)",
        "1–2 rounds of revisions",
      ],
    },
    {
      id: "growth",
      name: "Multi‑page (Growth)",
      priceTHB: 7500,
      pageLimitLabel: "Up to 6 pages",
      bestFor: "Service pages + trust-building content.",
      highlights: [
        "Stronger structure for SEO and clarity",
        "Sections designed for clarity and trust",
        "Performance-focused build",
        "2 rounds of revisions",
      ],
    },
  ] satisfies ServicePackage[],
  addOns: [
    {
      name: "Hosting setup",
      description:
        "Connect your domain, configure SSL, and deploy to a reliable host.",
    },
    {
      name: "Maintenance",
      description:
        "Small content updates, bug fixes, and performance checks (monthly).",
    },
  ],
  frameworks: ["Astro", "Next.js", "TailwindCSS"],
  faqs: [
    {
      q: "How fast can you deliver?",
      a: "First prototype in about 1 week once content is ready. Most projects then launch in 1–2 weeks depending on pages and feedback rounds.",
    },
    {
      q: "Do you provide the domain and hosting?",
      a: "I can set everything up, but the hosting and domain fees are paid directly by you (so you fully own them).",
    },
    {
      q: "Can you write the content for me?",
      a: "Yes. If you give me a rough outline (services, prices, contact details), I can help shape the copy for clarity and results.",
    },
    {
      q: "Will it work on mobile?",
      a: "Yes — everything is responsive and tested on common screen sizes.",
    },
  ],
} as const;
