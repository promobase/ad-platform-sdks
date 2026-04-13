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
