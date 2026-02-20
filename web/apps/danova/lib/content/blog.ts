export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
  content?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-hiring-renovation-pros-in-winter-is-a-pro-move",
    title: "Why Hiring a Renovation Pro in Winter is a Pro Move",
    excerpt:
      "Most homeowners in South Florida circle the same dates on their calendars for home improvement: March through June. There's a common myth that once the holidays pass, renovation season is over—but that's not true.",
    date: "2025-12-15",
    author: "Danova Renovations",
    image: "/images/blog/winter-renovation.jpg",
  },
  {
    slug: "how-lighting-affects-paint-color",
    title: "How Lighting Affects Paint Color: What Homeowners Need to Know Before Hiring Quality Painters",
    excerpt:
      "Choosing a paint color is hard enough but did you know that the lighting in your space can completely change how that color appears on your walls?",
    date: "2025-11-07",
    author: "Danova Renovations",
    image: "/images/blog/lighting-paint.jpg",
  },
  {
    slug: "5-renovation-questions-customers-ask",
    title: "5 Under-the-Radar Renovation Questions Fort Lauderdale Customers Ask (That Most Blogs Don't Answer)",
    excerpt:
      "Planning a renovation shouldn't feel like guesswork. At Danova Renovations, we hear the same thoughtful, harder questions from homeowners who want beautiful results.",
    date: "2025-10-27",
    author: "Danova Renovations",
    image: "/images/blog/renovation-questions.jpg",
  },
  {
    slug: "flooring-materials-guide",
    title: "Hardwood vs. Tile vs. Laminate: Choosing the Right Flooring for Your Home",
    excerpt:
      "Your flooring choice affects comfort, durability, resale value, and daily maintenance. Here's a practical guide to help you choose.",
    date: "2025-10-10",
    author: "Danova Renovations",
    image: "/images/blog/flooring-guide.jpg",
  },
  {
    slug: "preparing-your-home-for-painters",
    title: "How to Prepare Your Home Before the Painters Arrive",
    excerpt:
      "A little prep on your end can speed up the job, protect your belongings, and ensure a smoother experience for everyone.",
    date: "2025-09-20",
    author: "Danova Renovations",
    image: "/images/blog/prep-for-painters.jpg",
  },
  {
    slug: "exterior-paint-maintenance-tips",
    title: "Exterior Paint Maintenance: 5 Tips to Extend the Life of Your South Florida Home",
    excerpt:
      "Florida's sun, rain, and humidity can take a toll on exterior paint. Here's how to keep your home looking fresh year after year.",
    date: "2025-09-05",
    author: "Danova Renovations",
    image: "/images/blog/exterior-maintenance.jpg",
  },
  {
    slug: "best-paint-colors-increase-home-value",
    title: "Best Paint Colors to Increase Your Home's Value in Fort Lauderdale",
    excerpt:
      "Planning to sell? These paint colors are proven to appeal to buyers and can help your home sell faster in the South Florida market.",
    date: "2025-08-20",
    author: "Danova Renovations",
    image: "/images/blog/paint-colors-value.jpg",
  },
  {
    slug: "popcorn-ceiling-alternatives",
    title: "Popcorn Ceiling Alternatives: Modern Options for Your South Florida Home",
    excerpt:
      "Tired of dated popcorn ceilings? Explore smooth, knockdown, and other modern texture options that add style without the upkeep.",
    date: "2025-08-05",
    author: "Danova Renovations",
    image: "/images/blog/popcorn-alternatives.jpg",
  },
];
