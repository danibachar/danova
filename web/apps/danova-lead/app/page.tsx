"use client";

import { useState, useCallback } from "react";
import { isValidZip } from "@/components/StepAddress";
import type { FormState, LeadPayload, ProjectType, UtmParams } from "./types";

const MAIN_SITE_URL = "https://danovarenovations.com";

const PROJECT_OPTIONS: { value: ProjectType; label: string; sublabel: string }[] = [
  { value: "paint", label: "Paint", sublabel: "Interior, exterior, commercial" },
  { value: "floor", label: "Floor", sublabel: "Hardwood, tile, laminate" },
];

function getUtmFromUrl(): UtmParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: UtmParams = {};
  const source = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  if (source) utm.utm_source = source;
  if (medium) utm.utm_medium = medium;
  if (campaign) utm.utm_campaign = campaign;
  return utm;
}

const FL_ZIP_PREFIXES = ["33", "34", "32"];

function isFloridaZip(zip: string): boolean {
  return FL_ZIP_PREFIXES.some((prefix) => zip.startsWith(prefix));
}

function getInitialState(): FormState {
  return {
    projectType: "",
    zip: "",
    addressOptional: "",
    name: "",
    phone: "",
    email: "",
    scope: "",
    utm: typeof window !== "undefined" ? getUtmFromUrl() : {},
  };
}

function isRequiredFieldsValid(form: FormState): boolean {
  if (!form.projectType) return false;
  if (!isValidZip(form.zip)) return false;
  if (!form.name.trim()) return false;
  const phoneDigits = form.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) return false;
  return true;
}

export default function LeadPage() {
  const [form, setForm] = useState<FormState>(getInitialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const update = useCallback(<K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const buildPayload = useCallback((): LeadPayload => {
    const payload: LeadPayload = {
      projectType: form.projectType as "paint" | "floor",
      zip: form.zip.trim(),
      name: form.name.trim(),
      phone: form.phone.trim(),
    };
    if (form.addressOptional.trim())
      payload.addressOptional = form.addressOptional.trim();
    if (form.email.trim()) payload.email = form.email.trim();
    if (form.scope.trim()) payload.scope = form.scope.trim();
    if (
      form.utm &&
      (form.utm.utm_source || form.utm.utm_medium || form.utm.utm_campaign)
    )
      payload.utm = form.utm;
    return payload;
  }, [form]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isRequiredFieldsValid(form)) return;
      setStatus("sending");
      const payload = buildPayload();
      console.log("Lead payload:", payload);
      setTimeout(() => setStatus("sent"), 600);
    },
    [form, buildPayload]
  );

  const canSubmit = isRequiredFieldsValid(form) && status !== "sending";

  if (status === "sent") {
    return (
      <main className="mx-auto min-h-screen max-w-lg px-4 py-16">
        <div className="rounded-lg border border-border bg-background p-8 text-center">
          <h2 className="text-xl font-semibold">Thank you!</h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;ve received your request and will be in touch within 24
            hours.
          </p>
          <a
            href={MAIN_SITE_URL}
            rel="noopener noreferrer"
            className="mt-6 inline-block font-medium text-primary underline underline-offset-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Back to Danova Renovations
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-lg px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Get a free quote
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Danova Renovations — Paint &amp; flooring done right
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 rounded-lg border border-border bg-background p-6"
      >
        {/* Project type - required */}
        <fieldset>
          <legend className="text-lg font-medium">
            Project type <span className="text-muted-foreground">(required)</span>
          </legend>
          <p className="mt-1 text-sm text-muted-foreground">
            What type of project do you have in mind?
          </p>
          <div className="mt-3 space-y-3">
            {PROJECT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => update("projectType", opt.value)}
                className="flex w-full flex-col items-start rounded-lg border border-border bg-background px-4 py-3 text-left transition-colors hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                aria-pressed={form.projectType === opt.value}
              >
                <span className="font-medium">{opt.label}</span>
                <span className="text-sm text-muted-foreground">{opt.sublabel}</span>
              </button>
            ))}
          </div>
        </fieldset>

        {/* Address - zip required */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">
            Location <span className="text-muted-foreground">(required)</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Where is your project? We serve Fort Lauderdale, Miami, and surrounding areas.
          </p>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium">
              Zip code <span className="text-muted-foreground">(required)</span>
            </label>
            <input
              id="zip"
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={form.zip}
              onChange={(e) =>
                update("zip", e.target.value.replace(/\D/g, "").slice(0, 5))
              }
              placeholder="33001"
              required
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {isValidZip(form.zip) && !isFloridaZip(form.zip) && (
              <p className="mt-1 text-sm text-muted-foreground">
                We primarily serve South Florida. We&apos;ll still get in touch if we can help.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="addressOptional" className="block text-sm font-medium">
              Full address or city <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              id="addressOptional"
              type="text"
              value={form.addressOptional}
              onChange={(e) => update("addressOptional", e.target.value)}
              placeholder="e.g. Fort Lauderdale, FL"
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Personal - name and phone required */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">
            Contact <span className="text-muted-foreground">(required)</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            How can we reach you? We&apos;ll call or email within 24 hours.
          </p>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name <span className="text-muted-foreground">(required)</span>
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              required
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone <span className="text-muted-foreground">(required)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="(555) 555-5555"
              required
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="your@email.com"
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Scope - optional */}
        <div>
          <label htmlFor="scope" className="block text-lg font-medium">
            Project details <span className="text-muted-foreground">(optional)</span>
          </label>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us about your project so we can prepare an accurate quote.
          </p>
          <textarea
            id="scope"
            value={form.scope}
            onChange={(e) => update("scope", e.target.value)}
            placeholder="e.g. 3 bedrooms, living room, hallway. Timeline or special requests."
            rows={4}
            className="mt-2 w-full resize-y rounded-lg border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {status === "sending" ? "Submitting..." : "Get my quote"}
        </button>
      </form>
    </main>
  );
}
