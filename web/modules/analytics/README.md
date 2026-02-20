# @danova/analytics

Shared analytics framework for Danova web apps. Wraps Google Analytics (gtag.js) in a typed, programmatic API.

## Setup

1. Add to your app:
   ```bash
   npm install file:../analytics   # or file:../../analytics for nested apps
   ```

2. Add to `next.config.ts`:
   ```ts
   transpilePackages: ["@danova/analytics"],
   ```

3. Add `GoogleAnalyticsProvider` to your root layout (client-safe):
   ```tsx
   import { GoogleAnalyticsProvider } from "@danova/analytics";

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           <GoogleAnalyticsProvider trackPageViews />
           {children}
         </body>
       </html>
     );
   }
   ```

4. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local` (e.g. `G-3C5TKEP0J5`).

## Usage

```ts
import { analytics } from "@danova/analytics";

// Track custom event
analytics.trackEvent("submit_form", { category: "Contact", label: "quote_request" });

// Manual page view
analytics.trackPageView("/estimate", "Estimate Request");

// Consent (GDPR)
analytics.setConsent({ analytics_storage: "granted" }, "update");
```

## API

- `analytics.trackEvent(name, params?)` – Send custom GA4 events
- `analytics.trackPageView(path?, title?)` – Track page view
- `analytics.setConsent(params, arg?)` – Update consent preferences
- `analytics.setUserProperties(props)` – Set user properties (gtag `set`)
