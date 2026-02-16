export type ProjectType = "paint" | "floor" | "";

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
  scope: string;
  utm?: UtmParams;
}

export interface FormState {
  step: number;
  projectType: ProjectType;
  zip: string;
  addressOptional: string;
  name: string;
  phone: string;
  email: string;
  scope: string;
  utm: UtmParams;
}

export const TOTAL_STEPS = 4;
