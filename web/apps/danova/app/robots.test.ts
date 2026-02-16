import { describe, it, expect } from "vitest";
import robots from "./robots";

describe("robots", () => {
  it("returns robots config with rules and sitemap", () => {
    const result = robots();
    expect(result).toHaveProperty("rules");
    expect(result).toHaveProperty("sitemap");
    expect(Array.isArray(result.rules)).toBe(true);
  });

  it("allows root path and disallows api", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const hasAllowRoot = rules.some((r) => r.allow === "/");
    const hasDisallowApi = rules.some(
      (r) => Array.isArray(r.disallow) && r.disallow.includes("/api/")
    );
    expect(hasAllowRoot).toBe(true);
    expect(hasDisallowApi).toBe(true);
  });

  it("sitemap URL points to danovarenovations.com", () => {
    const result = robots();
    expect(result.sitemap).toContain("danovarenovations.com");
    expect(result.sitemap).toContain("sitemap.xml");
  });
});
