// @generated
// fingerprint: sha256:6dd911292714bfbb07c5f97493afdaf78c1bf15a83a690b16608d1af15e54823
// DO NOT EDIT: generated file; changes will be overwritten.
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
