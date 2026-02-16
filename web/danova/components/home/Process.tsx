import { PROCESS_STEPS, TRUST_BADGES } from "@/lib/constants";
import { Check } from "lucide-react";

export function Process() {
  return (
    <section className="bg-muted/30 px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          A Clean, Predictable Experience
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Our proven process ensures quality results from consultation to final
          walkthrough.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative">
              <div className="text-4xl font-bold text-primary/30">
                {step.step}
              </div>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm"
            >
              <Check className="h-4 w-4 text-primary" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
