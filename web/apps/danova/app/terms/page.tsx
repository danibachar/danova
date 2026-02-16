import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions of use for Danova Renovations.",
};

export default function TermsPage() {
  return (
    <div className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-bold">
          Terms and Conditions of Use
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>

        <div className="prose prose-neutral mt-12 dark:prose-invert">
          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4 text-muted-foreground">
              By accessing and using this website, you accept and agree to be
              bound by these Terms and Conditions. If you do not agree, please
              do not use this website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">
              2. Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Danova Renovations provides paint, flooring, and renovation
              services. Specific terms, scope, and pricing are set forth in
              individual project agreements and estimates.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">
              3. Estimates and Quotes
            </h2>
            <p className="mt-4 text-muted-foreground">
              Estimates and quotes are provided in good faith based on
              information available at the time. Final pricing may vary based on
              project scope, site conditions, or changes requested by the
              customer.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">
              4. Intellectual Property
            </h2>
            <p className="mt-4 text-muted-foreground">
              All content on this website, including text, graphics, logos, and
              images, is the property of Danova Renovations and is protected by
              copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">
              5. Limitation of Liability
            </h2>
            <p className="mt-4 text-muted-foreground">
              Danova Renovations shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of this
              website or our services. Our liability is limited to the amount
              paid for the specific service in question.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">6. Contact</h2>
            <p className="mt-4 text-muted-foreground">
              For questions about these Terms and Conditions, contact us at
              info@danovarenovations.com or (954) 555-0123.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
