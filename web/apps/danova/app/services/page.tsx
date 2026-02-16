import Link from "next/link";
import {
  Paintbrush,
  Home,
  Building2,
  LayoutGrid,
  LampCeiling,
  Image,
  Hammer,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Paintbrush,
  Home,
  Building2,
  LayoutGrid,
  LampCeiling,
  Image,
  Hammer,
};

export const metadata = {
  title: "Our Services",
  description:
    "Professional paint, flooring, and renovation services in Fort Lauderdale and Miami. Interior, exterior, commercial painting. Flooring installation. Popcorn ceiling removal, wallpaper removal, drywall repair.",
};

export default function ServicesPage() {
  return (
    <div className="px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Danova Renovations offers comprehensive paint, flooring, and renovation
          services for homes and commercial spaces across Fort Lauderdale and
          Miami.
        </p>

        <section className="mt-12">
          <h2 className="mb-6 font-serif text-xl font-semibold">Painting</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.painting.map((service) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] ?? Paintbrush;
              return (
                <Link key={service.slug} href={service.href}>
                  <Card className="h-full transition-colors hover:border-primary/50 hover:bg-muted/30">
                    <CardContent className="flex flex-col gap-3 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 font-serif text-xl font-semibold">Flooring</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.flooring.map((service) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] ?? LayoutGrid;
              return (
                <Link key={service.slug} href={service.href}>
                  <Card className="h-full transition-colors hover:border-primary/50 hover:bg-muted/30">
                    <CardContent className="flex flex-col gap-3 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 font-serif text-xl font-semibold">
            Renovation & Prep
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.renovation.map((service) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] ?? Hammer;
              return (
                <Link key={service.slug} href={service.href}>
                  <Card className="h-full transition-colors hover:border-primary/50 hover:bg-muted/30">
                    <CardContent className="flex flex-col gap-3 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="mt-12 rounded-lg bg-muted/50 p-8 text-center">
          <p className="font-medium">Ready to get started?</p>
          <Link
            href="/estimate"
            className="mt-2 inline-block text-primary hover:underline"
          >
            Get a free estimate →
          </Link>
        </div>
      </div>
    </div>
  );
}
