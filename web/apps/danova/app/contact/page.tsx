"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/constants";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;
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
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We would be happy to answer your questions and set up a meeting with
          you. Feel free to contact us anytime.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-xl font-semibold">Contact Details</h2>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Phone
                </p>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="text-lg font-medium hover:text-primary"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-lg font-medium hover:text-primary"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Address
                </p>
                <p className="text-lg">{CONTACT.address.full}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Working Hours
                </p>
                <p className="text-lg">{CONTACT.hours}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold">Leave us a message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="mt-2"
                />
              </div>
              {status === "sent" && (
                <p className="text-sm text-green-600">
                  Thank you! We&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again.
                </p>
              )}
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-muted/50 p-8 text-center">
          <h3 className="font-semibold">Prefer to book a consultation?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Schedule a free in-home or virtual estimate at your convenience.
          </p>
          <Button asChild className="mt-4">
            <a href="/estimate">Get a Free Estimate</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
