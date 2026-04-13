import type { AudienceDimension, AudienceExclusionDimension, AudienceScope, AudienceStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Audience. Do not edit by hand.
export interface Audience {
  resourceName?: string;
  id?: string;
  status?: AudienceStatus;
  name?: string;
  description?: string;
  dimensions?: AudienceDimension[];
  exclusionDimension?: AudienceExclusionDimension;
  scope?: AudienceScope;
  assetGroup?: string;
}
