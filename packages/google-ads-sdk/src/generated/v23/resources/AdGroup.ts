import type { AdGroupAdRotationMode, AdGroupPrimaryStatus, AdGroupPrimaryStatusReason, AdGroupStatus, AdGroupType, AiMaxAdGroupSetting, AssetFieldType, AssetSetType, AudienceSetting, BiddingSource, CustomParameter, DemandGenAdGroupSettings, TargetingDimension, TargetingSetting, VerticalAdsFormatSetting, VideoAdGroupSettings } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroup. Do not edit by hand.
export interface AdGroup {
  resourceName?: string;
  id?: string;
  name?: string;
  status?: AdGroupStatus;
  type?: AdGroupType;
  adRotationMode?: AdGroupAdRotationMode;
  baseAdGroup?: string;
  trackingUrlTemplate?: string;
  urlCustomParameters?: CustomParameter[];
  campaign?: string;
  cpcBidMicros?: string;
  effectiveCpcBidMicros?: string;
  cpmBidMicros?: string;
  targetCpaMicros?: string;
  cpvBidMicros?: string;
  targetCpmMicros?: string;
  targetRoas?: number;
  percentCpcBidMicros?: string;
  fixedCpmMicros?: string;
  targetCpvMicros?: string;
  targetCpcMicros?: string;
  optimizedTargetingEnabled?: boolean;
  excludeDemographicExpansion?: boolean;
  displayCustomBidDimension?: TargetingDimension;
  finalUrlSuffix?: string;
  targetingSetting?: TargetingSetting;
  audienceSetting?: AudienceSetting;
  effectiveTargetCpaMicros?: string;
  effectiveTargetCpaSource?: BiddingSource;
  effectiveTargetRoas?: number;
  effectiveTargetRoasSource?: BiddingSource;
  effectiveTargetCpc?: string;
  effectiveTargetCpcSource?: BiddingSource;
  labels?: string[];
  excludedParentAssetFieldTypes?: AssetFieldType[];
  excludedParentAssetSetTypes?: AssetSetType[];
  primaryStatus?: AdGroupPrimaryStatus;
  primaryStatusReasons?: AdGroupPrimaryStatusReason[];
  demandGenAdGroupSettings?: DemandGenAdGroupSettings;
  videoAdGroupSettings?: VideoAdGroupSettings;
  aiMaxAdGroupSetting?: AiMaxAdGroupSetting;
  verticalAdsFormatSetting?: VerticalAdsFormatSetting;
}
