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
