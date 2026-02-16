import Link from "next/link";
import { CITIES } from "@/lib/constants";

export const metadata = {
  title: "Service Area | Fort Lauderdale, Miami & South Florida",
  description:
    "Danova Renovations serves Fort Lauderdale, Miami, Boca Raton, Coral Gables, Hollywood, and surrounding South Florida areas. Professional paint and flooring services.",
};

export default function ServiceAreaPage() {
  return (
    <div className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          Proudly Serving South Florida
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Local crews you can count on—premium paint, flooring, and renovation
          services from Danova Renovations across these cities.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/service-area/${city.slug}`}
              className="block rounded-lg border p-6 transition-colors hover:border-primary hover:bg-muted/30"
            >
              <h2 className="font-semibold">{city.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Paint, flooring & renovation services
              </p>
              <span className="mt-2 inline-block text-sm font-medium text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
