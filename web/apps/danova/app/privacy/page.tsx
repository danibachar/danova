import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Danova Renovations.",
};

export default function PrivacyPage() {
  return (
    <div className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>

        <div className="prose prose-neutral mt-12 dark:prose-invert">
          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">
              1. Information We Collect
            </h2>
            <p className="mt-4 text-muted-foreground">
              We collect information you provide when contacting us, requesting
              estimates, or signing up for our services. This may include your
              name, email address, phone number, and project details.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">
              2. How We Use Your Information
            </h2>
            <p className="mt-4 text-muted-foreground">
              We use your information to respond to inquiries, provide estimates,
              deliver services, and communicate about your projects. We do not
              sell your personal information to third parties.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">
              3. Information Sharing
            </h2>
            <p className="mt-4 text-muted-foreground">
              We may share your information with service providers who assist us
              in operating our business, subject to confidentiality agreements.
              We may also disclose information when required by law.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">4. Security</h2>
            <p className="mt-4 text-muted-foreground">
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method of
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">5. Cookies</h2>
            <p className="mt-4 text-muted-foreground">
              Our website may use cookies and similar technologies to improve
              your experience, analyze traffic, and personalize content. You can
              control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold">6. Contact Us</h2>
            <p className="mt-4 text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us
              at info@danovarenovations.com or call (954) 555-0123.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
