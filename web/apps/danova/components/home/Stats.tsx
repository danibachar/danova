import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="border-y bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-bold text-primary md:text-3xl">
              {STATS.projects}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">projects</p>
          </div>
          <div>
            <p className="font-serif text-2xl font-bold text-primary md:text-3xl">
              {STATS.rating}★
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Google rating</p>
          </div>
          <div>
            <p className="font-serif text-2xl font-bold text-primary md:text-3xl">
              {STATS.satisfaction}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Satisfaction Guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
