import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-renovation.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {SITE.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Danova Renovations delivers designer-grade paint, flooring, and
          renovation services for homes and commercial spaces across Fort
          Lauderdale and Miami. Interior, exterior, commercial painting,
          flooring installation, and more—all in one trusted team.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/estimate">Get a Free Estimate</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
