"use client";

import { useState, useCallback } from "react";
import { Progress } from "@/components/Progress";
import { StepProjectType } from "@/components/StepProjectType";
import {
  StepAddress,
  isValidZip,
} from "@/components/StepAddress";
import { StepPersonal } from "@/components/StepPersonal";
import { StepScope } from "@/components/StepScope";
import type { FormState, LeadPayload, UtmParams } from "./types";
import { TOTAL_STEPS } from "./types";

const MAIN_SITE_URL = "https://danovarenovations.com";

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
    step: 1,
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

export default function LeadPage() {
  const [form, setForm] = useState<FormState>(getInitialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [addressError, setAddressError] = useState<string>("");
  const [personalErrors, setPersonalErrors] = useState<{
    name?: string;
    phone?: string;
  }>({});
  const [scopeError, setScopeError] = useState<string>("");

  const update = useCallback(<K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const goNext = useCallback(() => {
    setAddressError("");
    setPersonalErrors({});
    setScopeError("");
    setForm((prev) => ({ ...prev, step: Math.min(prev.step + 1, TOTAL_STEPS) }));
  }, []);

  const goBack = useCallback(() => {
    setForm((prev) => ({ ...prev, step: Math.max(prev.step - 1, 1) }));
  }, []);

  const handleStep1Next = useCallback(() => {
    if (!form.projectType) return;
    goNext();
  }, [form.projectType, goNext]);

  const handleStep2Next = useCallback(() => {
    if (!isValidZip(form.zip)) {
      setAddressError("Please enter a valid 5-digit zip code.");
      return;
    }
    setAddressError("");
    goNext();
  }, [form.zip, goNext]);

  const handleStep3Next = useCallback(() => {
    const name = form.name.trim();
    const phone = form.phone.trim().replace(/\D/g, "");
    const err: { name?: string; phone?: string } = {};
    if (!name) err.name = "Name is required.";
    if (phone.length < 10) err.phone = "Please enter a valid phone number.";
    setPersonalErrors(err);
    if (Object.keys(err).length > 0) return;
    goNext();
  }, [form.name, form.phone, goNext]);

  const buildPayload = useCallback((): LeadPayload => {
    const payload: LeadPayload = {
      projectType: form.projectType as "paint" | "floor",
      zip: form.zip.trim(),
      name: form.name.trim(),
      phone: form.phone.trim(),
      scope: form.scope.trim(),
    };
    if (form.addressOptional.trim())
      payload.addressOptional = form.addressOptional.trim();
    if (form.email.trim()) payload.email = form.email.trim();
    if (
      form.utm &&
      (form.utm.utm_source || form.utm.utm_medium || form.utm.utm_campaign)
    )
      payload.utm = form.utm;
    return payload;
  }, [form]);

  const handleSubmit = useCallback(() => {
    if (!form.scope.trim()) {
      setScopeError("Please describe your project.");
      return;
    }
    setScopeError("");
    setStatus("sending");
    const payload = buildPayload();
    console.log("Lead payload:", payload);
    setTimeout(() => {
      setStatus("sent");
    }, 600);
  }, [form.scope, buildPayload]);

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

  const stepTitles = [
    "What type of project?",
    "Where are you located?",
    "How can we reach you?",
    "Tell us about your project",
  ];

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

      <div className="mb-8">
        <Progress current={form.step} />
      </div>

      <section className="rounded-lg border border-border bg-background p-6">
        <h2 className="mb-4 text-lg font-medium">
          {stepTitles[form.step - 1]}
        </h2>

        {form.step === 1 && (
          <StepProjectType
            value={form.projectType}
            onChange={(v) => update("projectType", v)}
            onNext={handleStep1Next}
          />
        )}

        {form.step === 2 && (
          <StepAddress
            zip={form.zip}
            addressOptional={form.addressOptional}
            onZipChange={(v) => update("zip", v)}
            onAddressOptionalChange={(v) => update("addressOptional", v)}
            onNext={handleStep2Next}
            onBack={goBack}
            error={addressError || undefined}
            hint={
              isValidZip(form.zip) && !isFloridaZip(form.zip)
                ? "We primarily serve South Florida. We'll still get in touch if we can help."
                : undefined
            }
          />
        )}

        {form.step === 3 && (
          <StepPersonal
            name={form.name}
            phone={form.phone}
            email={form.email}
            onNameChange={(v) => update("name", v)}
            onPhoneChange={(v) => update("phone", v)}
            onEmailChange={(v) => update("email", v)}
            onNext={handleStep3Next}
            onBack={goBack}
            errors={personalErrors}
          />
        )}

        {form.step === 4 && (
          <StepScope
            scope={form.scope}
            onChange={(v) => update("scope", v)}
            onSubmit={handleSubmit}
            onBack={goBack}
            isSubmitting={status === "sending"}
            error={scopeError || undefined}
          />
        )}
      </section>
    </main>
  );
}
