import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME_FAQ } from "@/lib/content/faq";

export function FaqSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">
          Questions about renovating your space?
        </h2>
        <p className="mt-2 text-muted-foreground">
          We&apos;re Danova Renovations—experts in paint, flooring, drywall
          repair, popcorn ceiling removal, and more across Fort Lauderdale and
          Miami.
        </p>
        <Accordion type="single" collapsible className="mt-8">
          {HOME_FAQ.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
