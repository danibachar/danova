import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description:
    "Get a free estimate for your paint, flooring, or renovation project in Fort Lauderdale and Miami. Transparent pricing, no hidden fees.",
};

export default function EstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
