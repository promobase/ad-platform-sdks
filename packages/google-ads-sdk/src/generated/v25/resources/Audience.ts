// @generated
// fingerprint: sha256:61a416125a849851701f225c303c3cab7a29b72299333c6b49eb9f0d084003fd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AudienceDimension, AudienceExclusionDimension, AudienceScope, AudienceStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.Audience. Do not edit by hand.
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
