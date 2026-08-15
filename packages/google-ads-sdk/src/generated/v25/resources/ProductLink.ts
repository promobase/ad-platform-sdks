// @generated
// fingerprint: sha256:3bf7fac43980e8a6f5d91d60a77622374893cac83b8dc70484723db657a05bb9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdvertisingPartnerIdentifier, AdvertisingPartnerProperties, DataPartnerIdentifier, GoogleAdsIdentifier, LinkedProductType, MerchantCenterIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ProductLink. Do not edit by hand.
export interface ProductLink {
  resourceName?: string;
  productLinkId?: string;
  type?: LinkedProductType;
  dataPartner?: DataPartnerIdentifier;
  googleAds?: GoogleAdsIdentifier;
  merchantCenter?: MerchantCenterIdentifier;
  advertisingPartner?: AdvertisingPartnerIdentifier;
  advertisingPartnerProperties?: AdvertisingPartnerProperties;
}
