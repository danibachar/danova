export type ProjectType = "paint" | "floor" | "other" | "";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export interface LeadPayload {
  projectType: ProjectType;
  zip: string;
  addressOptional?: string;
  name: string;
  phone: string;
  email?: string;
  scope?: string;
  utm?: UtmParams;
}

export interface FormState {
  projectType: ProjectType;
  zip: string;
  addressOptional: string;
  name: string;
  phone: string;
  email: string;
  scope: string;
  utm: UtmParams;
}
