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
import { ALL_SERVICES } from "@/lib/constants";

const iconMap = {
  Paintbrush,
  Home,
  Building2,
  LayoutGrid,
  LampCeiling,
  Image,
  Hammer,
};

export function ServicesGrid() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          Everything a Premium Renovation Requires
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          From paint to flooring to drywall repair—we handle it all with
          professional quality and attention to detail.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Paintbrush;
            return (
              <Link key={service.slug} href={service.href}>
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-muted/30">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
