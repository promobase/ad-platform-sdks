// @generated
// fingerprint: sha256:5cbc668674a2c99567f8b92288607e6ec5046aff5f60a5f8e7882bdcac01474c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdScheduleInfo, BusinessContext, KeywordThemeInfo, LocationList, ProximityInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.services.SmartCampaignSuggestionInfo. Do not edit by hand.
export interface SmartCampaignSuggestionInfo {
  finalUrl?: string;
  languageCode?: string;
  adSchedules?: AdScheduleInfo[];
  keywordThemes?: KeywordThemeInfo[];
  businessContext?: BusinessContext;
  businessProfileLocation?: string;
  locationList?: LocationList;
  proximity?: ProximityInfo;
}
