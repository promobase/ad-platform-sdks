// @generated
// fingerprint: sha256:fff07be394e14f036a986ab95de637af69675f260797319ec72ca3d5e55630e1
// DO NOT EDIT: generated file; changes will be overwritten.
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
