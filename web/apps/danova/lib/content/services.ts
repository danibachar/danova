export interface ServiceDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  benefits: string[];
  processSteps?: { title: string; description: string }[];
  rooms?: string[];
  pricing?: { scope: string; range: string; included: string }[];
  faqs?: { question: string; answer: string }[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "interior-painting": {
    slug: "interior-painting",
    name: "Interior Painting",
    metaTitle: "Interior Painting Service | Fort Lauderdale & Miami",
    metaDescription:
      "Professional interior painting in Fort Lauderdale and Miami. Washable mattes, crisp lines, low-odor coatings. Living rooms, bedrooms, kitchens. Free estimate.",
    heroTitle: "Refresh Your Home, Office with Professional Interior Painters",
    heroSubtitle:
      "Give every space a clean, modern look with our detail-focused interior painting service. From prep to final walkthrough, we protect your space, respect your time, and deliver smooth, long-lasting finishes.",
    overview:
      "We make it easy to refresh your space with clean lines, smooth finishes, and careful protection of your furniture and floors. From quiet bedrooms to busy family rooms, our interior painting crews handle the details.",
    benefits: [
      "Living rooms, bedrooms, kitchens, hallways, offices",
      "Neat, respectful crews that protect floors & furniture",
      "Color help, low-odor paints & precise, clean lines",
    ],
    processSteps: [
      { title: "Walk-through & color conversation", description: "We review each room, talk through colors and sheen choices, and confirm your priorities." },
      { title: "Prep & protection", description: "Furniture is moved or covered, floors protected, nail holes patched, surfaces caulked." },
      { title: "Interior painting", description: "We apply high-quality paints with even coverage and clean lines." },
      { title: "Room-by-room cleanup", description: "Each room is reassembled, floors swept or vacuumed." },
      { title: "Final walk-through", description: "We walk the home with you, handle touch-ups, and review care tips." },
    ],
    rooms: [
      "Living rooms & family rooms",
      "Bedrooms & nurseries",
      "Kitchens & breakfast nooks",
      "Hallways & stairwells",
      "Home offices",
      "Trim, doors & baseboards",
    ],
    pricing: [
      { scope: "Single Room (up to 150 sq ft)", range: "$350 – $650", included: "Walls only, light drywall touch-ups, 2 coats" },
      { scope: "Living Room / Family Room", range: "$650 – $1,200", included: "Walls + minor repairs, furniture & floor protection" },
      { scope: "3-Room Package", range: "$1,450 – $2,600", included: "Any 3 main living spaces, patching, 2 coats" },
      { scope: "Whole-Home (up to 2,000 sq ft)", range: "$3,800 – $7,500", included: "Walls throughout, standard prep, daily cleanup" },
    ],
    faqs: [
      { question: "How long does a typical interior painting project take?", answer: "Single room: 1 day. Full-home repaint: 2–5 days depending on square footage and prep." },
      { question: "Do you move furniture and protect our floors?", answer: "Yes. We move or float furniture, cover with plastic, and protect floors with drop cloths." },
      { question: "Can we stay in the home while you're painting?", answer: "In most cases, yes. We use low-odor, low-VOC paints and work room by room." },
    ],
  },
  "exterior-painting": {
    slug: "exterior-painting",
    name: "Exterior Painting",
    metaTitle: "Exterior Painting Service | Fort Lauderdale & Miami",
    metaDescription:
      "Professional exterior painting in Fort Lauderdale and Miami. Storm-ready prep, elastomeric caulking, premium finishes for Florida weather. Free estimate.",
    heroTitle: "Protect & Beautify Your Home's Exterior",
    heroSubtitle:
      "Storm-ready prep, elastomeric caulking, and premium finishes that resist Florida weather. Our exterior painting service ensures your home looks great and stays protected.",
    overview:
      "Florida's climate demands durable exterior finishes. We prepare surfaces thoroughly, use quality materials, and apply finishes that withstand humidity, sun, and storms.",
    benefits: [
      "Storm-ready surface preparation",
      "Elastomeric caulking for joints and gaps",
      "Premium finishes resistant to humidity and UV",
    ],
    processSteps: [
      { title: "Inspection & assessment", description: "We inspect siding, trim, and surfaces for damage or repair needs." },
      { title: "Prep & protection", description: "Power wash, scrape, prime, and mask windows and landscaping." },
      { title: "Exterior painting", description: "We apply premium exterior paint with even coverage." },
      { title: "Final inspection", description: "Walk-through and warranty activation." },
    ],
    rooms: [
      "Siding",
      "Trim & fascia",
      "Doors & shutters",
      "Decks & porches",
    ],
    pricing: [
      { scope: "Small home (1,000–1,500 sq ft)", range: "$2,500 – $4,500", included: "Siding, trim, standard prep" },
      { scope: "Medium home (1,500–2,500 sq ft)", range: "$4,500 – $7,500", included: "Full exterior, caulking, 2 coats" },
      { scope: "Large home (2,500+ sq ft)", range: "$7,500 – $15,000+", included: "Full exterior, repairs, premium materials" },
    ],
    faqs: [
      { question: "How do you schedule around Florida weather?", answer: "We monitor forecasts and measure surface moisture after rain. Spring and fall are ideal." },
      { question: "What's included in exterior prep?", answer: "Power washing, scraping loose paint, caulking, priming, and masking." },
    ],
  },
  "commercial-painting": {
    slug: "commercial-painting",
    name: "Commercial Painting",
    metaTitle: "Commercial Painting Service | Fort Lauderdale & Miami",
    metaDescription:
      "Commercial painting in Fort Lauderdale and Miami. After-hours scheduling, dust control, rapid-cure coatings. Minimal downtime. Free estimate.",
    heroTitle: "Professional Commercial Painting for Your Business",
    heroSubtitle:
      "After-hours scheduling, dust control, and rapid-cure coatings to minimize downtime. We keep your business running while we transform your space.",
    overview:
      "We understand that commercial projects require minimal disruption. Our crews work around your schedule and use low-odor, fast-drying products when you need quick turnaround.",
    benefits: [
      "After-hours and weekend scheduling",
      "Dust control and containment",
      "Rapid-cure, low-odor coatings",
    ],
    processSteps: [
      { title: "Site visit & scope", description: "We assess the space and discuss timeline and access." },
      { title: "Prep & protection", description: "Furniture covered, floors protected, dust containment as needed." },
      { title: "Commercial painting", description: "Efficient application with pro tools and quality materials." },
      { title: "Cleanup & handoff", description: "Site left clean and ready for business." },
    ],
    faqs: [
      { question: "Will you work after hours?", answer: "Yes. Evenings and weekends available. We use fast-dry, low-odor coatings." },
      { question: "How long until we can re-enter the space?", answer: "Most spaces are re-enterable the same day with our rapid-cure products." },
    ],
  },
  flooring: {
    slug: "flooring",
    name: "Flooring Installation",
    metaTitle: "Flooring Installation | Hardwood, Tile, Laminate | Fort Lauderdale & Miami",
    metaDescription:
      "Professional flooring installation in Fort Lauderdale and Miami. Hardwood, tile, laminate, luxury vinyl. Expert installation and removal. Free estimate.",
    heroTitle: "Transform Your Floors with Expert Installation",
    heroSubtitle:
      "Hardwood, tile, laminate, and luxury vinyl plank—we install it all with precision and care. From removal to finishing, we handle every step.",
    overview:
      "Your floors set the tone for your home. We help you choose the right material for your space, traffic, and budget, then install it flawlessly.",
    benefits: [
      "Hardwood, engineered hardwood, LVP, tile, laminate",
      "Expert removal of existing flooring",
      "Subfloor prep and moisture barriers when needed",
    ],
    processSteps: [
      { title: "Consultation & material selection", description: "We help you choose the right flooring for your needs." },
      { title: "Removal & prep", description: "Remove old flooring, repair subfloor, install underlayment." },
      { title: "Installation", description: "Precise installation with proper expansion and alignment." },
      { title: "Finishing & cleanup", description: "Trim, transitions, and final cleanup." },
    ],
    rooms: [
      "Living areas",
      "Bedrooms",
      "Kitchens",
      "Bathrooms",
      "Entryways & hallways",
    ],
    pricing: [
      { scope: "Laminate / LVP", range: "$3 – $8 / sq ft", included: "Material + installation" },
      { scope: "Tile", range: "$8 – $18 / sq ft", included: "Material + installation + thinset" },
      { scope: "Hardwood", range: "$10 – $25 / sq ft", included: "Material + installation + finishing" },
    ],
    faqs: [
      { question: "What flooring options do you offer?", answer: "Hardwood, engineered hardwood, luxury vinyl plank, tile, and laminate." },
      { question: "Do you remove existing flooring?", answer: "Yes. We handle removal and disposal as part of the project." },
    ],
  },
  "popcorn-ceiling-removal": {
    slug: "popcorn-ceiling-removal",
    name: "Popcorn Ceiling Removal",
    metaTitle: "Popcorn Ceiling Removal | Fort Lauderdale & Miami",
    metaDescription:
      "Professional popcorn ceiling removal in Fort Lauderdale and Miami. Safe removal, re-skim, flawless texture matching. Lead/asbestos testing. Free estimate.",
    heroTitle: "Cleaner, Brighter Rooms with Popcorn Ceiling Removal",
    heroSubtitle:
      "Safe removal, re-skim, and flawless texture matching. We protect your space, test for lead/asbestos where required, and leave you with smooth, modern ceilings.",
    overview:
      "Popcorn ceilings are outdated and can harbor dust and allergens. We remove them safely, patch and skim the surface, and finish to match your desired look.",
    benefits: [
      "Safe wet-scrape or skim-coat removal",
      "Lead/asbestos testing when required",
      "Smooth, modern ceiling finish",
    ],
    processSteps: [
      { title: "Assessment & testing", description: "We assess the ceiling and test for lead/asbestos if needed." },
      { title: "Protection & removal", description: "Protect floors and furniture, wet-scrape or skim-coat." },
      { title: "Sand, prime & finish", description: "Smooth the surface, prime, and apply finish texture." },
    ],
    faqs: [
      { question: "Do you test for asbestos?", answer: "Yes. For homes built before 1980, we recommend testing before removal." },
      { question: "How long does it take?", answer: "Typically 1–3 days depending on room size and ceiling condition." },
    ],
  },
  "wallpaper-removal": {
    slug: "wallpaper-removal",
    name: "Wallpaper Removal",
    metaTitle: "Wallpaper Removal Service | Fort Lauderdale & Miami",
    metaDescription:
      "Professional wallpaper removal in Fort Lauderdale and Miami. Safe removal, surface smoothing, wall prep for paint. Free estimate.",
    heroTitle: "Safely Remove Old Wallpaper, Prep for a Fresh Start",
    heroSubtitle:
      "We safely remove old wallpaper, smooth the surface, and prep your walls for a flawless new finish—whether you're painting or applying new wallpaper.",
    overview:
      "Wallpaper removal can be tedious and damaging if done wrong. We use the right techniques to strip paper without damaging drywall, then prep for your next finish.",
    benefits: [
      "Safe, efficient removal techniques",
      "Wall repair and smoothing as needed",
      "Ready for paint or new wallpaper",
    ],
    processSteps: [
      { title: "Assessment", description: "We identify paper type and adhesion." },
      { title: "Removal", description: "Steam or solution-based removal depending on paper." },
      { title: "Surface prep", description: "Scrape adhesive, sand, prime for paint." },
    ],
    faqs: [
      { question: "Will removal damage my walls?", answer: "We use techniques to minimize damage. Minor repairs are included when needed." },
    ],
  },
  "drywall-repair": {
    slug: "drywall-repair",
    name: "Drywall Repair",
    metaTitle: "Drywall Repair Service | Fort Lauderdale & Miami",
    metaDescription:
      "Professional drywall repair in Fort Lauderdale and Miami. Cracks, water damage, texture blending. Expert prep before paint. Free estimate.",
    heroTitle: "Cracks, Holes & Water Damage—We Fix It All",
    heroSubtitle:
      "Cracks, water damage, and texture blending handled before the first coat of paint. We make your walls smooth and ready for a flawless finish.",
    overview:
      "Drywall issues can ruin a paint job. We patch holes, repair water damage, blend texture, and prime so your walls look perfect when we're done.",
    benefits: [
      "Patch nail holes, cracks, dents",
      "Water damage repair",
      "Texture blending to match existing",
    ],
    processSteps: [
      { title: "Assessment", description: "We identify all areas needing repair." },
      { title: "Patch & repair", description: "Fill holes, fix cracks, replace damaged sections." },
      { title: "Texture & prime", description: "Blend texture, sand smooth, prime for paint." },
    ],
    faqs: [
      { question: "Do you repair water damage?", answer: "Yes. We patch and repair water-damaged drywall. Extensive damage may require a separate assessment." },
      { question: "Will the texture match?", answer: "We do our best to blend texture. For large areas, we can re-texture entire walls for consistency." },
    ],
  },
};
