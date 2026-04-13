import type { AdvertisingPartnerIdentifier, AdvertisingPartnerProperties, DataPartnerIdentifier, GoogleAdsIdentifier, LinkedProductType, MerchantCenterIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ProductLink. Do not edit by hand.
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
