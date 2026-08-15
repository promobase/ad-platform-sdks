// @generated
// fingerprint: sha256:bcd4024f18beafd270147647e5b5e12880c7f3372d29daab9efafaac1a84a08f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomAudienceMember, CustomAudienceStatus, CustomAudienceType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CustomAudience. Do not edit by hand.
export interface CustomAudience {
  resourceName?: string;
  id?: string;
  status?: CustomAudienceStatus;
  name?: string;
  type?: CustomAudienceType;
  description?: string;
  members?: CustomAudienceMember[];
}
