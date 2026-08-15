// @generated
// fingerprint: sha256:1a34aa129c7299c36febb853921fca6912503469032790a880928ad8fe429e11
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CallAssetParameters, CallExtensionParameters, CalloutAssetParameters, CalloutExtensionParameters, CampaignBudgetParameters, ForecastingSetTargetCpaParameters, ForecastingSetTargetRoasParameters, KeywordParameters, LeadFormAssetParameters, LowerTargetRoasParameters, MoveUnusedBudgetParameters, RaiseTargetCpaBidTooLowParameters, RaiseTargetCpaParameters, ResponsiveSearchAdAssetParameters, ResponsiveSearchAdImproveAdStrengthParameters, ResponsiveSearchAdParameters, SitelinkAssetParameters, SitelinkExtensionParameters, TargetCpaOptInParameters, TargetRoasOptInParameters, TextAdParameters, UseBroadMatchKeywordParameters } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ApplyRecommendationOperation. Do not edit by hand.
export interface ApplyRecommendationOperation {
  resourceName?: string;
  campaignBudget?: CampaignBudgetParameters;
  textAd?: TextAdParameters;
  keyword?: KeywordParameters;
  targetCpaOptIn?: TargetCpaOptInParameters;
  targetRoasOptIn?: TargetRoasOptInParameters;
  calloutExtension?: CalloutExtensionParameters;
  callExtension?: CallExtensionParameters;
  sitelinkExtension?: SitelinkExtensionParameters;
  moveUnusedBudget?: MoveUnusedBudgetParameters;
  responsiveSearchAd?: ResponsiveSearchAdParameters;
  useBroadMatchKeyword?: UseBroadMatchKeywordParameters;
  responsiveSearchAdAsset?: ResponsiveSearchAdAssetParameters;
  responsiveSearchAdImproveAdStrength?: ResponsiveSearchAdImproveAdStrengthParameters;
  raiseTargetCpaBidTooLow?: RaiseTargetCpaBidTooLowParameters;
  forecastingSetTargetRoas?: ForecastingSetTargetRoasParameters;
  calloutAsset?: CalloutAssetParameters;
  callAsset?: CallAssetParameters;
  sitelinkAsset?: SitelinkAssetParameters;
  raiseTargetCpa?: RaiseTargetCpaParameters;
  lowerTargetRoas?: LowerTargetRoasParameters;
  forecastingSetTargetCpa?: ForecastingSetTargetCpaParameters;
  setTargetCpa?: ForecastingSetTargetCpaParameters;
  setTargetRoas?: ForecastingSetTargetRoasParameters;
  leadFormAsset?: LeadFormAssetParameters;
}
