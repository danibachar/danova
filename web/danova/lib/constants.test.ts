import { describe, it, expect } from "vitest";
import { SITE, CITIES, ALL_SERVICES } from "./constants";

describe("constants", () => {
  it("SITE has name, tagline, url", () => {
    expect(SITE.name).toBeTruthy();
    expect(SITE.tagline).toBeTruthy();
    expect(SITE.url).toMatch(/^https:\/\//);
  });

  it("CITIES has entries with name and slug", () => {
    expect(CITIES.length).toBeGreaterThan(0);
    for (const city of CITIES) {
      expect(city.name).toBeTruthy();
      expect(city.slug).toBeTruthy();
      expect(city.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("ALL_SERVICES has entries with slug and href", () => {
    expect(ALL_SERVICES.length).toBeGreaterThan(0);
    for (const svc of ALL_SERVICES) {
      expect(svc.slug).toBeTruthy();
      expect(svc.href).toMatch(/^\/services\//);
    }
  });
});
