// Auto-generated client for audience_insights — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AudienceInsightsGetResponse, AudienceInsightsScopeAndTypeGetResponse } from "../types.ts";
import type { GetAudienceInsightsParams, ListAudienceInsightsScopeAndTypeParams } from "../params.ts";

/** audience_insights — 2 endpoints */
export function createAudienceInsightsClient(api: PinterestApiClient) {
  return {
    /** Get audience insights
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAudienceInsights(params: GetAudienceInsightsParams): Promise<AudienceInsightsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AudienceInsightsGetResponse>(`/ad_accounts/${adAccountId}/audience_insights`, query);
      return envelope;
    },

    /** Get audience insights scope and type
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAudienceInsightsScopeAndType(params: ListAudienceInsightsScopeAndTypeParams): Promise<AudienceInsightsScopeAndTypeGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AudienceInsightsScopeAndTypeGetResponse>(`/ad_accounts/${adAccountId}/insights/audiences`, query);
      return envelope;
    },
  };
}
