import { describe, it, expect } from "vitest";
import { analytics, AnalyticsService, GoogleAnalyticsProvider } from "./index";

describe("@danova/analytics", () => {
  it("exports analytics singleton", () => {
    expect(analytics).toBeDefined();
    expect(typeof analytics.trackEvent).toBe("function");
    expect(typeof analytics.trackPageView).toBe("function");
    expect(typeof analytics.setConsent).toBe("function");
  });

  it("exports AnalyticsService", () => {
    expect(AnalyticsService).toBeDefined();
    expect(typeof AnalyticsService.getInstance).toBe("function");
  });

  it("exports GoogleAnalyticsProvider", () => {
    expect(GoogleAnalyticsProvider).toBeDefined();
  });
});
