import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CITIES } from "@/lib/constants";
import { ALL_SERVICES } from "@/lib/constants";

export async function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = CITIES.find((c) => c.slug === city);
  if (!cityData) return {};
  return {
    title: `Best Paint & Flooring in ${cityData.name} | Danova Renovations`,
    description: `Professional paint, flooring, and renovation services in ${cityData.name}, Florida. Interior, exterior, commercial painting. Flooring installation. Licensed & insured.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = CITIES.find((c) => c.slug === city);
  if (!cityData) notFound();

  return (
    <div className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          Best Paint & Flooring in {cityData.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Danova Renovations proudly serves {cityData.name} and the surrounding
          South Florida area. We bring designer-grade paint, flooring, and
          renovation services to homes and commercial spaces throughout the
          region.
        </p>

        <section className="mt-12">
          <h2 className="font-serif text-xl font-semibold">
            Our Services in {cityData.name}
          </h2>
          <p className="mt-2 text-muted-foreground">
            From interior and exterior painting to flooring installation and
            drywall repair—we offer full-service renovation solutions.
          </p>
          <ul className="mt-6 space-y-3">
            {ALL_SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="font-medium text-primary hover:underline"
                >
                  {service.name}
                </Link>
                <p className="mt-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-lg bg-muted/50 p-8">
          <h2 className="font-serif text-xl font-semibold">
            Why Choose Danova Renovations in {cityData.name}?
          </h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Licensed and insured for your protection</li>
            <li>• Local crews familiar with South Florida homes</li>
            <li>• Premium materials and workmanship warranty</li>
            <li>• Transparent pricing with no hidden fees</li>
          </ul>
        </section>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/estimate">Get a Free Estimate</Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Serving {cityData.name} and all of South Florida
          </p>
        </div>
      </div>
    </div>
  );
}
