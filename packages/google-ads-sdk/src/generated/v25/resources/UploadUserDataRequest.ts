import type { CustomerMatchUserListMetadata, UserDataOperation } from "../index.ts";

// Generated from google.ads.googleads.v25.services.UploadUserDataRequest. Do not edit by hand.
export interface UploadUserDataRequest {
  customerId?: string;
  operations?: UserDataOperation[];
  customerMatchUserListMetadata?: CustomerMatchUserListMetadata;
}
