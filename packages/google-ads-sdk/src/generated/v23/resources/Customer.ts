import type { BrandSafetySuitability, CallReportingSetting, ConversionTrackingSetting, CustomerAgreementSetting, CustomerPayPerConversionEligibilityFailureReason, CustomerStatus, EuPoliticalAdvertisingStatus, LocalServicesSettings, RemarketingSetting, VideoCustomer } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.Customer. Do not edit by hand.
export interface Customer {
  resourceName?: string;
  id?: string;
  descriptiveName?: string;
  currencyCode?: string;
  timeZone?: string;
  trackingUrlTemplate?: string;
  finalUrlSuffix?: string;
  autoTaggingEnabled?: boolean;
  hasPartnersBadge?: boolean;
  manager?: boolean;
  testAccount?: boolean;
  callReportingSetting?: CallReportingSetting;
  conversionTrackingSetting?: ConversionTrackingSetting;
  remarketingSetting?: RemarketingSetting;
  payPerConversionEligibilityFailureReasons?: CustomerPayPerConversionEligibilityFailureReason[];
  optimizationScore?: number;
  optimizationScoreWeight?: number;
  status?: CustomerStatus;
  locationAssetAutoMigrationDone?: boolean;
  imageAssetAutoMigrationDone?: boolean;
  locationAssetAutoMigrationDoneDateTime?: string;
  imageAssetAutoMigrationDoneDateTime?: string;
  customerAgreementSetting?: CustomerAgreementSetting;
  localServicesSettings?: LocalServicesSettings;
  videoBrandSafetySuitability?: BrandSafetySuitability;
  videoCustomer?: VideoCustomer;
  containsEuPoliticalAdvertising?: EuPoliticalAdvertisingStatus;
}
