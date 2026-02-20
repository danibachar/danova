import { event, pageView, consent } from "nextjs-google-analytics";
import type { EventParams, ConsentParams } from "./types";

/**
 * Singleton service that wraps Google Analytics (gtag.js) for programmatic use.
 * SSR-safe: all methods no-op when window/gtag is unavailable.
 */
export class AnalyticsService {
  private static instance: AnalyticsService;
  private measurementId: string | undefined;

  private constructor(measurementId?: string) {
    this.measurementId = measurementId ?? this.getDefaultMeasurementId();
  }

  private getDefaultMeasurementId(): string | undefined {
    if (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    }
    return undefined;
  }

  /**
   * Get the singleton instance. Optionally pass measurementId for lazy config.
   */
  static getInstance(measurementId?: string): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService(measurementId);
    }
    return AnalyticsService.instance;
  }

  /**
   * Track a custom event.
   */
  trackEvent(eventName: string, params?: EventParams): void {
    if (typeof window === "undefined") return;
    event(eventName, params);
  }

  /**
   * Track a page view. Omit args to use current location.
   */
  trackPageView(path?: string, title?: string): void {
    if (typeof window === "undefined") return;
    const options: { path?: string; title?: string } = {};
    if (path !== undefined) options.path = path;
    if (title !== undefined) options.title = title;
    pageView(Object.keys(options).length > 0 ? options : undefined, this.measurementId);
  }

  /**
   * Update consent preferences (GDPR).
   */
  setConsent(preferences: ConsentParams, arg: "default" | "update" = "update"): void {
    if (typeof window === "undefined") return;
    consent({ arg, params: preferences });
  }

  /**
   * Set user properties (maps to gtag 'set' command).
   */
  setUserProperties(properties: Record<string, unknown>): void {
    if (typeof window === "undefined") return;
    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag !== "function") return;
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("set", properties);
  }
}

/** Pre-configured singleton for direct import. */
export const analytics = AnalyticsService.getInstance();
