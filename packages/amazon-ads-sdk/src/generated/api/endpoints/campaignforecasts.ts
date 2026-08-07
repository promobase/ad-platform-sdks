// Auto-generated client for CampaignForecasts — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type {  } from "../types.ts";
import type { PostDSPRetrieveCampaignForecastParams } from "../params.ts";

/** CampaignForecasts — 1 endpoints */
export function createCampaignforecastsClient(api: AmazonAdsApiClient) {
  return {
    /** DSPRetrieveCampaignForecast
   * Requires OAuth2: advertising::campaign_management. */
    async postDSPRetrieveCampaignForecast(params: PostDSPRetrieveCampaignForecastParams): Promise<unknown> {
      const rest = params;
      const envelope = await api.post<unknown>(`/adsApi/v1/retrieve/campaignForecasts/dsp`, rest);
      return envelope;
    },
  };
}
