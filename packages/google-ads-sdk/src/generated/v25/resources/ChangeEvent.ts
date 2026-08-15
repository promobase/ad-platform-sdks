// @generated
// fingerprint: sha256:a87c5655af371a27dc185f5765e622ccd8a73c994f53c2df7edb09c60b107bae
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ChangeClientType, ChangeEventResourceType, ChangedResource, ResourceChangeOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ChangeEvent. Do not edit by hand.
export interface ChangeEvent {
  resourceName?: string;
  changeDateTime?: string;
  changeResourceType?: ChangeEventResourceType;
  changeResourceName?: string;
  clientType?: ChangeClientType;
  userEmail?: string;
  oldResource?: ChangedResource;
  newResource?: ChangedResource;
  resourceChangeOperation?: ResourceChangeOperation;
  changedFields?: string;
  campaign?: string;
  adGroup?: string;
  asset?: string;
}
