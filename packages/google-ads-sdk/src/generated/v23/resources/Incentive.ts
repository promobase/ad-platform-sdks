import type { IncentiveType, Requirement } from "../index.ts";

// Generated from google.ads.googleads.v23.services.Incentive. Do not edit by hand.
export interface Incentive {
  incentiveId?: string;
  requirement?: Requirement;
  incentiveTermsAndConditionsUrl?: string;
  type?: IncentiveType;
}
