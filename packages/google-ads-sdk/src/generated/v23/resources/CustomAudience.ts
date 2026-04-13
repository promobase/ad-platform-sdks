import type { CustomAudienceMember, CustomAudienceStatus, CustomAudienceType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomAudience. Do not edit by hand.
export interface CustomAudience {
  resourceName?: string;
  id?: string;
  status?: CustomAudienceStatus;
  name?: string;
  type?: CustomAudienceType;
  description?: string;
  members?: CustomAudienceMember[];
}
