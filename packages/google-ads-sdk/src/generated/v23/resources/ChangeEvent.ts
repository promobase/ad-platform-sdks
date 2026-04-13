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
