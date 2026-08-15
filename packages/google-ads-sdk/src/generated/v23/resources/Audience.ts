// @generated
// fingerprint: sha256:4d9fe13ff759f4e4a9edfeb6b8d1ecdea5cfb3bac30c709d195d78bf4583cd50
// DO NOT EDIT: generated file; changes will be overwritten.
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
