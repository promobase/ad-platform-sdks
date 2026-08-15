// @generated
// fingerprint: sha256:87161baacea78bdb964e980ea796c0baea79708835f0bbfc5c2bb7117662aec6
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdGroupInfo, AdvertisingChannelType, AssetGroupInfo, BiddingInfo, BudgetInfo, ConversionTrackingStatus, RecommendationType, SeedInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.services.GenerateRecommendationsRequest. Do not edit by hand.
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
