// @generated
// fingerprint: sha256:5e2ac078ca317511aa5ac5f7239e587dd309b2a7da9ce38f841bb91978e5bb0a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AttributionModelSettings, ConversionActionCategory, ConversionActionCountingType, ConversionActionStatus, ConversionActionType, ConversionOrigin, FirebaseSettings, GoogleAnalytics4Settings, MobileAppVendor, TagSnippet, ThirdPartyAppAnalyticsSettings, ValueSettings } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ConversionAction. Do not edit by hand.
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
