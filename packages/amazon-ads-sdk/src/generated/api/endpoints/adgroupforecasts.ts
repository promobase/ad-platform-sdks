// Auto-generated client for AdGroupForecasts — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { PostDSPRetrieveAdGroupForecastParams } from "../params.ts";

/** AdGroupForecasts — 1 endpoints */
export function createAdgroupforecastsClient(api: AmazonAdsApiClient) {
  return {
    /** DSPRetrieveAdGroupForecast
   * Requires OAuth2: advertising::campaign_management. */
    async postDSPRetrieveAdGroupForecast(params: PostDSPRetrieveAdGroupForecastParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/adsApi/v1/retrieve/adGroupForecasts/dsp`, rest);
      return envelope;
    },
  };
}
