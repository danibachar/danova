import { describe, it, expect } from "vitest";
import { BLOG_POSTS } from "./blog";

describe("BLOG_POSTS", () => {
  it("has at least one post", () => {
    expect(BLOG_POSTS.length).toBeGreaterThan(0);
  });

  it("each post has required fields", () => {
    for (const post of BLOG_POSTS) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.author).toBeTruthy();
    }
  });

  it("slugs are URL-safe", () => {
    for (const post of BLOG_POSTS) {
      expect(post.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
