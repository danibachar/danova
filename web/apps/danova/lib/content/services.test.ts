import { describe, it, expect } from "vitest";
import { SERVICE_DETAILS } from "./services";
import { ALL_SERVICES } from "@/lib/constants";

describe("SERVICE_DETAILS", () => {
  it("has a detail entry for every service in ALL_SERVICES", () => {
    for (const svc of ALL_SERVICES) {
      expect(SERVICE_DETAILS[svc.slug]).toBeDefined();
    }
  });

  it("each entry has required fields", () => {
    for (const [slug, detail] of Object.entries(SERVICE_DETAILS)) {
      expect(detail.slug).toBe(slug);
      expect(detail.name).toBeTruthy();
      expect(detail.metaTitle).toBeTruthy();
      expect(detail.metaDescription).toBeTruthy();
      expect(detail.heroTitle).toBeTruthy();
      expect(detail.overview).toBeTruthy();
    }
  });
});
