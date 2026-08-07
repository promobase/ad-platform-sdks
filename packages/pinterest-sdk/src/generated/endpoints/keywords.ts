// Auto-generated client for keywords — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { KeywordsGetResponse, KeywordsCreateResponse, KeywordsUpdateResponse, CountryKeywordsMetricsGetResponse, TrendingKeywordsListResponse } from "../types.ts";
import type { ListKeywordsParams, CreateKeywordParams, UpdateKeywordParams, GetCountryKeywordsMetricsParams, ListTrendingKeywordsParams } from "../params.ts";

/** keywords — 5 endpoints */
export function createKeywordsClient(api: PinterestApiClient) {
  return {
    /** Get keywords
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listKeywords(params: ListKeywordsParams): Promise<KeywordsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<KeywordsGetResponse>(`/ad_accounts/${adAccountId}/keywords`, query);
      return envelope;
    },

    /** Create keywords
   * Requires pinterest_oauth2: ads:write. */
    async createKeyword(params: CreateKeywordParams): Promise<KeywordsCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<KeywordsCreateResponse>(`/ad_accounts/${adAccountId}/keywords`, rest);
      return envelope;
    },

    /** Update keywords
   * Requires pinterest_oauth2: ads:write. */
    async updateKeyword(params: UpdateKeywordParams): Promise<KeywordsUpdateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.patch<KeywordsUpdateResponse>(`/ad_accounts/${adAccountId}/keywords`, rest);
      return envelope;
    },

    /** Get country's keyword metrics
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getCountryKeywordsMetrics(params: GetCountryKeywordsMetricsParams): Promise<CountryKeywordsMetricsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<CountryKeywordsMetricsGetResponse>(`/ad_accounts/${adAccountId}/keywords/metrics`, query);
      return envelope;
    },

    /** List trending keywords
   * Requires pinterest_oauth2: user_accounts:read. */
    async listTrendingKeywords(params: ListTrendingKeywordsParams): Promise<TrendingKeywordsListResponse> {
      const { region, trendType, ...query } = params;
      const envelope = await api.get<TrendingKeywordsListResponse>(`/trends/keywords/${region}/top/${trendType}`, query);
      return envelope;
    },
  };
}
