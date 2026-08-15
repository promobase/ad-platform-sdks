// @generated
// fingerprint: sha256:59b5eda4c5cb2d5c44ed93c063b34c7fc441b4e42df5fe92d637cdacfb20dbbe
// DO NOT EDIT: generated file; changes will be overwritten.
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
