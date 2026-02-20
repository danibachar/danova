import Link from "next/link";
import { CITIES } from "@/lib/constants";

export function ServiceArea() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          Proudly Serving South Florida
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Local crews you can count on—premium finishes from Danova Renovations
          across these cities.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/service-area/${city.slug}`}
              className="rounded-full border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-primary/5"
            >
              {city.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/service-area"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all service areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
