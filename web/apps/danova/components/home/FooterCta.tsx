import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FooterCta() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-2xl rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-12 md:py-16">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          How much will your project cost?
        </h2>
        <p className="mt-4 text-primary-foreground/90">
          Get a transparent, itemized quote delivered in less than 24 hours.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="mt-6"
        >
          <Link href="/estimate">Get Estimate Now</Link>
        </Button>
      </div>
    </section>
  );
}
