import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("returns an array of sitemap entries", () => {
    const result = sitemap();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("includes required static pages", () => {
    const result = sitemap();
    const urls = result.map((r) => r.url);
    const base = "https://danovarenovations.com";

    expect(urls.some((u) => u === base || u === `${base}/`)).toBe(true);
    expect(urls).toContain(`${base}/services`);
    expect(urls).toContain(`${base}/about`);
    expect(urls).toContain(`${base}/blog`);
    expect(urls).toContain(`${base}/contact`);
  });

  it("each entry has url, lastModified, changeFrequency, and priority", () => {
    const result = sitemap();
    for (const entry of result) {
      expect(entry).toHaveProperty("url");
      expect(entry).toHaveProperty("lastModified");
      expect(entry).toHaveProperty("changeFrequency");
      expect(entry).toHaveProperty("priority");
      expect(typeof entry.url).toBe("string");
      expect(entry.url.startsWith("https://")).toBe(true);
    }
  });
});
