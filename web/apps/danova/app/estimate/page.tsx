"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ALL_SERVICES } from "@/lib/constants";

export default function EstimatePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ESTIMATE_ID;
    if (!formId) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          Get a Free Estimate
        </h1>
        <p className="mt-4 text-muted-foreground">
          Tell us about your project and we&apos;ll provide a transparent,
          itemized quote—usually within 24 hours.
        </p>

        {status === "sent" ? (
          <div className="mt-12 rounded-lg border bg-muted/30 p-8 text-center">
            <h2 className="font-serif text-xl font-semibold">Thank you!</h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;ve received your request and will be in touch within 24
              hours with a detailed estimate.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <Label htmlFor="service">Project Type</Label>
              <select
                id="service"
                name="service"
                required
                className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Select a service...</option>
                {ALL_SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="scope">Project Scope</Label>
              <Textarea
                id="scope"
                name="scope"
                placeholder="e.g., 3 bedrooms, living room, hallway..."
                rows={3}
                className="mt-2"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="mt-2"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(555) 555-5555"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="address">Address / City</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Fort Lauderdale, FL"
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Timeline, special requests, etc."
                rows={3}
                className="mt-2"
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again.
              </p>
            )}
            <Button type="submit" disabled={status === "sending"} size="lg">
              {status === "sending" ? "Submitting..." : "Get Free Quote"}
            </Button>
          </form>
        )}

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Or call us directly:{" "}
          <a
            href="tel:9545550123"
            className="font-medium text-primary hover:underline"
          >
            (954) 555-0123
          </a>
        </p>
      </div>
    </div>
  );
}
