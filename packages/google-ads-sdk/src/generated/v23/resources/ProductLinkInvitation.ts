// @generated
// fingerprint: sha256:f01dff275fc2f09bb79f2edc4fd4d2da44ee7167c2cfe0d2e368ecec77e9c323
// DO NOT EDIT: generated file; changes will be overwritten.
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
