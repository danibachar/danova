import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServiceDetail } from "@/lib/content/services";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  return (
    <div className="px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          {service.heroTitle}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {service.heroSubtitle}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/estimate">Get a Free Estimate</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-xl font-semibold">Overview</h2>
          <p className="mt-4 text-muted-foreground">{service.overview}</p>
          <ul className="mt-6 space-y-2">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {service.processSteps && service.processSteps.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-xl font-semibold">
              Our Process
            </h2>
            <div className="mt-6 space-y-4">
              {service.processSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {service.rooms && service.rooms.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-xl font-semibold">
              Areas We Service
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {service.rooms.map((room, i) => (
                <li
                  key={i}
                  className="rounded-full border bg-background px-4 py-2 text-sm"
                >
                  {room}
                </li>
              ))}
            </ul>
          </section>
        )}

        {service.pricing && service.pricing.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-xl font-semibold">
              Pricing Guide
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Ballpark ranges—exact pricing based on your specific project.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 pr-4 text-left font-medium">Scope</th>
                    <th className="py-3 pr-4 text-left font-medium">Typical Range</th>
                    <th className="py-3 text-left font-medium">What&apos;s Included</th>
                  </tr>
                </thead>
                <tbody>
                  {service.pricing.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-3 pr-4">{row.scope}</td>
                      <td className="py-3 pr-4 font-medium">{row.range}</td>
                      <td className="py-3">{row.included}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {service.faqs && service.faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-xl font-semibold">FAQs</h2>
            <Accordion type="single" collapsible className="mt-6">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        <section className="mt-16 rounded-lg bg-primary p-8 text-center text-primary-foreground">
          <h2 className="font-serif text-xl font-semibold">
            Ready to get started?
          </h2>
          <p className="mt-2 text-primary-foreground/90">
            Get a free estimate for your {service.name.toLowerCase()} project.
          </p>
          <Button asChild variant="secondary" size="lg" className="mt-6">
            <Link href="/estimate">Get Free Quote</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
