import type { CustomerMatchUserListMetadata, UserDataOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.UploadUserDataRequest. Do not edit by hand.
export interface UploadUserDataRequest {
  customerId?: string;
  operations?: UserDataOperation[];
  customerMatchUserListMetadata?: CustomerMatchUserListMetadata;
}
