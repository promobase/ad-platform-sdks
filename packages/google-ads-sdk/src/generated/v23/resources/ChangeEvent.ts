// @generated
// fingerprint: sha256:da6a2d9f1a137bb0d24487b78cd9ef8eacb98345f0577bf5a54ca23b0dbe61a4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ChangeClientType, ChangeEventResourceType, ChangedResource, ResourceChangeOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ChangeEvent. Do not edit by hand.
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
