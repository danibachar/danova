/**
 * Event parameters for GA4 custom events.
 * Extends common GA4 event params (category, label, value, etc.)
 * @see https://developers.google.com/tag-platform/gtagjs/reference#event
 */
export interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  sendTo?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Consent preferences for GDPR compliance.
 * @see https://developers.google.com/tag-platform/gtagjs/reference#consent
 */
export interface ConsentParams {
  ad_storage?: "granted" | "denied";
  analytics_storage?: "granted" | "denied";
  ad_user_data?: "granted" | "denied";
  ad_personalization?: "granted" | "denied";
  wait_for_update?: number;
}
