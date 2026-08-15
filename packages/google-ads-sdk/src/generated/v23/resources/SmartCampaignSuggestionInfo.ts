// @generated
// fingerprint: sha256:3a311bbd1a3fb69b8784663080b9ae50474a6a77595f5c281e33aaa1b20d0d99
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdScheduleInfo, BusinessContext, KeywordThemeInfo, LocationList, ProximityInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.services.SmartCampaignSuggestionInfo. Do not edit by hand.
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
