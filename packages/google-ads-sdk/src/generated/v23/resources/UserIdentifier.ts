// @generated
// fingerprint: sha256:a527385130b6d78693777525535d60e75e73c21ada490c9788fd8edcd9fb5e0e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { OfflineUserAddressInfo, UserIdentifierSource } from "../index.ts";

// Generated from google.ads.googleads.v23.common.UserIdentifier. Do not edit by hand.
export interface UserIdentifier {
  userIdentifierSource?: UserIdentifierSource;
  hashedEmail?: string;
  hashedPhoneNumber?: string;
  mobileId?: string;
  thirdPartyUserId?: string;
  addressInfo?: OfflineUserAddressInfo;
}
