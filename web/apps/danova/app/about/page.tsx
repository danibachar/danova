import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE, CONTACT, TRUST_BADGES } from "@/lib/constants";
import { Check } from "lucide-react";

const ABOUT_FAQ = [
  {
    question: "Why does building remodeling cost so much?",
    answer:
      "The cost of every project is based on the quality material put to use. However, despite using quality supplies, we ensure we provide affordable estimates for your project.",
  },
  {
    question: "How long will my project take?",
    answer:
      "The timeline is based on the volume of the work to be done. But we ensure timely delivery in whatever project we handle.",
  },
  {
    question: "What is the overall cost of a renovation?",
    answer:
      "Renovation projects vary. We can determine total budget when we know the project details. However, we guarantee a cost-effective approach for your renovation.",
  },
  {
    question: "How do you initiate a renovation project?",
    answer:
      "When we receive your request, we follow up by sending our representatives to your property to assess everything needed. We then provide a no-obligation quote based on our assessment.",
  },
];

export const metadata = {
  title: "About Us",
  description:
    "Danova Renovations is a family-run business providing high-quality paint, flooring, and renovation solutions in Fort Lauderdale and Miami. Learn about our commitment to excellence.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          About {SITE.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {SITE.name} is a family-run business providing high-quality paint,
          flooring, and renovation solutions. Learn about our commitment to the
          Fort Lauderdale and Miami community with professionalism, integrity,
          and service.
        </p>

        <section className="mt-12">
          <p className="text-muted-foreground">
            Our professional crews combine decades of experience in serving our
            home and business clients. We offer a dynamic and broad professional
            toolkit to address our clients&apos; individual needs in design and
            decor. Our crews stand out for our flexible range of services and
            commitment to finish the job on time. Crew members are courteous and
            well-trained, using the best quality tools and materials to achieve
            the highest standards in the industry.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-xl font-semibold">Why Choose Us</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Always Available</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;re here when you need us. Flexible scheduling for your
                convenience.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Qualified Teams</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Licensed, insured, and trained to deliver premium results.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Fair Prices</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Transparent pricing with no hidden fees. Quality that fits your
                budget.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">
            {SITE.name} is both a local family business and a high-capacity
            contractor. We execute small and large, simple and complex painting,
            flooring, and renovation projects with a personal touch. Our company
            has grown quickly over the past years due to positive customer
            feedback, organic referrals in the community, and repeat business
            from satisfied clients.
          </p>
          <p className="mt-4 text-muted-foreground">
            We look forward to serving you and the South Florida community with
            integrity, personal service, and professional precision for many
            years to come.
          </p>
        </section>

        <section className="mt-12 flex flex-wrap gap-4">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm"
            >
              <Check className="h-4 w-4 text-primary" />
              <span>{badge}</span>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-xl font-semibold">Popular Questions</h2>
          <Accordion type="single" collapsible className="mt-6">
            {ABOUT_FAQ.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mt-16 rounded-lg bg-primary p-8 text-center text-primary-foreground">
          <h2 className="font-serif text-xl font-semibold">Get in Touch</h2>
          <p className="mt-2 text-primary-foreground/90">
            Ready to start your project? Contact us for a free estimate.
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="block font-medium hover:underline"
            >
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block font-medium hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>
          <Button asChild variant="secondary" size="lg" className="mt-6">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
