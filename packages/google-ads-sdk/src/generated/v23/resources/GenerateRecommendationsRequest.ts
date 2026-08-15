// @generated
// fingerprint: sha256:1281910bf732d1300152d2169fffd06747b12b7232fab2e2aa4e8e974fa2f54a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupInfo, AdvertisingChannelType, AssetGroupInfo, BiddingInfo, BudgetInfo, ConversionTrackingStatus, RecommendationType, SeedInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.GenerateRecommendationsRequest. Do not edit by hand.
export interface GenerateRecommendationsRequest {
  customerId?: string;
  recommendationTypes?: RecommendationType[];
  advertisingChannelType?: AdvertisingChannelType;
  campaignSitelinkCount?: number;
  conversionTrackingStatus?: ConversionTrackingStatus;
  biddingInfo?: BiddingInfo;
  adGroupInfo?: AdGroupInfo[];
  seedInfo?: SeedInfo;
  budgetInfo?: BudgetInfo;
  campaignImageAssetCount?: number;
  campaignCallAssetCount?: number;
  countryCodes?: string[];
  languageCodes?: string[];
  positiveLocationsIds?: string[];
  negativeLocationsIds?: string[];
  assetGroupInfo?: AssetGroupInfo[];
  targetPartnerSearchNetwork?: boolean;
  targetContentNetwork?: boolean;
  merchantCenterAccountId?: string;
  isNewCustomer?: boolean;
}
