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
