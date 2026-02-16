"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GoogleAnalytics, pageView } from "nextjs-google-analytics";

interface GoogleAnalyticsProviderProps {
  /** GA4 Measurement ID (e.g. G-3C5TKEP0J5). Falls back to NEXT_PUBLIC_GA_MEASUREMENT_ID. */
  measurementId?: string;
  /** Enable automatic page view tracking on route changes (App Router). */
  trackPageViews?: boolean;
}

/**
 * Client component that injects gtag.js and optionally tracks page views on route changes.
 * Renders nothing when measurement ID is missing (safe for dev/staging).
 */
export function GoogleAnalyticsProvider({
  measurementId,
  trackPageViews = true,
}: GoogleAnalyticsProviderProps) {
  const pathname = usePathname();

  // App Router: track page views on client-side navigation
  useEffect(() => {
    if (!trackPageViews || !pathname) return;
    const id = measurementId ?? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!id) return;
    pageView({ path: pathname }, id);
  }, [pathname, trackPageViews, measurementId]);

  return (
    <GoogleAnalytics
      gaMeasurementId={measurementId}
      trackPageViews={false}
    />
  );
}
