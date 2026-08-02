import type { ProductAvailability, ProductChannel, ProductChannelExclusivity, ProductCondition, ProductIssue, ProductStatus } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ShoppingProduct. Do not edit by hand.
export interface ShoppingProduct {
  resourceName?: string;
  merchantCenterId?: string;
  channel?: ProductChannel;
  languageCode?: string;
  feedLabel?: string;
  itemId?: string;
  multiClientAccountId?: string;
  title?: string;
  brand?: string;
  productImageUri?: string;
  priceMicros?: string;
  currencyCode?: string;
  channelExclusivity?: ProductChannelExclusivity;
  condition?: ProductCondition;
  availability?: ProductAvailability;
  targetCountries?: string[];
  customAttribute0?: string;
  customAttribute1?: string;
  customAttribute2?: string;
  customAttribute3?: string;
  customAttribute4?: string;
  categoryLevel1?: string;
  categoryLevel2?: string;
  categoryLevel3?: string;
  categoryLevel4?: string;
  categoryLevel5?: string;
  productTypeLevel1?: string;
  productTypeLevel2?: string;
  productTypeLevel3?: string;
  productTypeLevel4?: string;
  productTypeLevel5?: string;
  effectiveMaxCpcMicros?: string;
  status?: ProductStatus;
  issues?: ProductIssue[];
  campaign?: string;
  adGroup?: string;
}
