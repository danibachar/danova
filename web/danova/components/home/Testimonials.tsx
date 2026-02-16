"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          What Our Customers Say
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Real feedback from homeowners and business owners across Fort
          Lauderdale and Miami.
        </p>
        <div className="mt-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto max-w-3xl"
          >
            <CarouselContent>
              {TESTIMONIALS.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="rounded-lg border bg-card p-6 md:p-8">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                    <p className="mt-4 font-medium">— {t.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 hidden md:flex" />
            <CarouselNext className="-right-4 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
