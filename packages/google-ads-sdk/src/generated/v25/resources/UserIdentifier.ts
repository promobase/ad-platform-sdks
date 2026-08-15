// @generated
// fingerprint: sha256:53d5e1b993b57f1d906d26a9abe4bb6ce72bf20dc4ae96b26d6bce2611bc96f5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { OfflineUserAddressInfo, UserIdentifierSource } from "../index.ts";

// Generated from google.ads.googleads.v25.common.UserIdentifier. Do not edit by hand.
export interface UserIdentifier {
  userIdentifierSource?: UserIdentifierSource;
  hashedEmail?: string;
  hashedPhoneNumber?: string;
  mobileId?: string;
  thirdPartyUserId?: string;
  addressInfo?: OfflineUserAddressInfo;
}
