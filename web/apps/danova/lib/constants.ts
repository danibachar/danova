export const SITE = {
  name: "Danova Renovations",
  tagline: "Premium Renovations — Paint & Flooring Done Right",
  description:
    "Danova Renovations delivers designer-grade paint, flooring, and renovation services across Fort Lauderdale and Miami. Interior, exterior, commercial painting, flooring installation, and drywall repair.",
  url: "https://danovarenovations.com",
} as const;

export const CONTACT = {
  phone: "(954) 555-0123",
  phoneRaw: "9545550123",
  email: "info@danovarenovations.com",
  address: {
    primary: "Fort Lauderdale, FL",
    full: "Serving Fort Lauderdale, Miami, and surrounding areas",
  },
  hours: "Monday – Friday: 9:00 AM – 5:00 PM",
  social: {
    instagram: "https://instagram.com/danovarenovations",
    facebook: "https://facebook.com/danovarenovations",
    pinterest: "https://pinterest.com/danovarenovations",
  },
} as const;

export const STATS = {
  projects: "16,000+",
  rating: "4.9",
  satisfaction: "100%",
} as const;

export const CITIES = [
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Miami", slug: "miami" },
  { name: "Boca Raton", slug: "boca-raton" },
  { name: "Coral Gables", slug: "coral-gables" },
  { name: "Hollywood", slug: "hollywood-fl" },
  { name: "Pompano Beach", slug: "pompano-beach" },
  { name: "Miami Beach", slug: "miami-beach" },
  { name: "Weston", slug: "weston-fl" },
] as const;

export const SERVICES = {
  painting: [
    {
      name: "Interior Painting",
      slug: "interior-painting",
      description:
        "Washable mattes, crisp lines, odor-controlled coatings. Perfect for busy homes and offices.",
      href: "/services/interior-painting",
      icon: "Paintbrush",
    },
    {
      name: "Exterior Painting",
      slug: "exterior-painting",
      description:
        "Storm-ready prep, elastomeric caulking, and premium finishes that resist Florida weather.",
      href: "/services/exterior-painting",
      icon: "Home",
    },
    {
      name: "Commercial Painting",
      slug: "commercial-painting",
      description:
        "After-hours scheduling, dust control, and rapid-cure coatings to minimize downtime.",
      href: "/services/commercial-painting",
      icon: "Building2",
    },
  ],
  flooring: [
    {
      name: "Flooring Installation",
      slug: "flooring",
      description:
        "Hardwood, tile, and laminate flooring installation for homes and commercial spaces.",
      href: "/services/flooring",
      icon: "LayoutGrid",
    },
  ],
  renovation: [
    {
      name: "Popcorn Ceiling Removal",
      slug: "popcorn-ceiling-removal",
      description:
        "Cleaner, brighter rooms with safe removal, re-skim, and flawless texture matching.",
      href: "/services/popcorn-ceiling-removal",
      icon: "LampCeiling",
    },
    {
      name: "Wallpaper Removal",
      slug: "wallpaper-removal",
      description:
        "We safely remove old wallpaper, smooth the surface, and prep your walls for a flawless new finish.",
      href: "/services/wallpaper-removal",
      icon: "Image",
    },
    {
      name: "Drywall Repair",
      slug: "drywall-repair",
      description:
        "Cracks, water damage, and texture blending handled before the first coat of paint.",
      href: "/services/drywall-repair",
      icon: "Hammer",
    },
  ],
} as const;

export const ALL_SERVICES = [
  ...SERVICES.painting,
  ...SERVICES.flooring,
  ...SERVICES.renovation,
] as const;

export const TRUST_BADGES = [
  "Licensed & Insured",
  "EPA Lead-Safe",
  "Warranty Included",
  "Flexible Scheduling",
  "Eco-friendly Options",
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    description: "Clear scope, fixed quote, and timeline.",
  },
  {
    step: "02",
    title: "Surface Preparation",
    description: "Repairs, sand, prime, and protect.",
  },
  {
    step: "03",
    title: "Expert Execution",
    description: "Pro tools, quality materials, crisp lines.",
  },
  {
    step: "04",
    title: "Final Inspection",
    description: "Walk-through and warranty activation.",
  },
] as const;
