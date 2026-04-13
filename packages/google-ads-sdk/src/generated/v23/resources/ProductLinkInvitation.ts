import type { AdvertisingPartnerLinkInvitationIdentifier, AdvertisingPartnerLinkInvitationProperties, HotelCenterLinkInvitationIdentifier, LinkedProductType, MerchantCenterLinkInvitationIdentifier, ProductLinkInvitationStatus } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ProductLinkInvitation. Do not edit by hand.
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
