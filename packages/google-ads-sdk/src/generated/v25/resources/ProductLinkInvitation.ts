// @generated
// fingerprint: sha256:5354bbedb819eff8a4599d2a9112d1a12907c0c54cd2799568c6359d452616a6
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdvertisingPartnerLinkInvitationIdentifier, AdvertisingPartnerLinkInvitationProperties, HotelCenterLinkInvitationIdentifier, LinkedProductType, MerchantCenterLinkInvitationIdentifier, ProductLinkInvitationStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ProductLinkInvitation. Do not edit by hand.
export interface ProductLinkInvitation {
  resourceName?: string;
  productLinkInvitationId?: string;
  status?: ProductLinkInvitationStatus;
  type?: LinkedProductType;
  hotelCenter?: HotelCenterLinkInvitationIdentifier;
  merchantCenter?: MerchantCenterLinkInvitationIdentifier;
  advertisingPartner?: AdvertisingPartnerLinkInvitationIdentifier;
  advertisingPartnerProperties?: AdvertisingPartnerLinkInvitationProperties;
}
