// @generated
// fingerprint: sha256:a0cf155f5891b5dc3251787d6980162c6da36b901a7be163864e78e854a81c76
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Forecast — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { PostSBCampaignPerformanceForecastsParams } from "../params.ts";

/** Forecast — 1 endpoints */
export function createForecastClient(api: AmazonAdsApiClient) {
  return {
    /** SBCampaignPerformanceForecasts */
    async postSBCampaignPerformanceForecasts(params: PostSBCampaignPerformanceForecastsParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/sb/forecasts`, rest);
      return envelope;
    },
  };
}
