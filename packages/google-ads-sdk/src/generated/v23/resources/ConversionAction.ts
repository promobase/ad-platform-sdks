// @generated
// fingerprint: sha256:1c62a84ca3e6c651c9e1438046847522d0d69af472913345eccdbb9a6ab997c0
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AttributionModelSettings, ConversionActionCategory, ConversionActionCountingType, ConversionActionStatus, ConversionActionType, ConversionOrigin, FirebaseSettings, GoogleAnalytics4Settings, MobileAppVendor, TagSnippet, ThirdPartyAppAnalyticsSettings, ValueSettings } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ConversionAction. Do not edit by hand.
export interface ConversionAction {
  resourceName?: string;
  id?: string;
  name?: string;
  status?: ConversionActionStatus;
  type?: ConversionActionType;
  origin?: ConversionOrigin;
  primaryForGoal?: boolean;
  category?: ConversionActionCategory;
  ownerCustomer?: string;
  includeInConversionsMetric?: boolean;
  clickThroughLookbackWindowDays?: string;
  viewThroughLookbackWindowDays?: string;
  valueSettings?: ValueSettings;
  countingType?: ConversionActionCountingType;
  attributionModelSettings?: AttributionModelSettings;
  tagSnippets?: TagSnippet[];
  phoneCallDurationSeconds?: string;
  appId?: string;
  mobileAppVendor?: MobileAppVendor;
  firebaseSettings?: FirebaseSettings;
  thirdPartyAppAnalyticsSettings?: ThirdPartyAppAnalyticsSettings;
  googleAnalytics_4Settings?: GoogleAnalytics4Settings;
}
