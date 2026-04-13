import type { CustomInterestMember, CustomInterestStatus, CustomInterestType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomInterest. Do not edit by hand.
export interface CustomInterest {
  resourceName?: string;
  id?: string;
  status?: CustomInterestStatus;
  name?: string;
  type?: CustomInterestType;
  description?: string;
  members?: CustomInterestMember[];
}
