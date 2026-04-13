import type { GenerateAdGroupThemesRequest, GenerateAdGroupThemesResponse, GenerateKeywordForecastMetricsRequest, GenerateKeywordForecastMetricsResponse, GenerateKeywordHistoricalMetricsRequest, GenerateKeywordHistoricalMetricsResponse, GenerateKeywordIdeaResponse, GenerateKeywordIdeasRequest } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordPlanIdeaService. Do not edit by hand.
export const keywordPlanIdeaService = {
  generateKeywordIdeas(client: HttpClient, customerId: string, body: Omit<GenerateKeywordIdeasRequest, "customerId">): Promise<GenerateKeywordIdeaResponse> {
    return client.post<GenerateKeywordIdeaResponse>(`/v23/customers/${customerId}:generateKeywordIdeas`, body);
  },

  generateKeywordHistoricalMetrics(client: HttpClient, customerId: string, body: Omit<GenerateKeywordHistoricalMetricsRequest, "customerId">): Promise<GenerateKeywordHistoricalMetricsResponse> {
    return client.post<GenerateKeywordHistoricalMetricsResponse>(`/v23/customers/${customerId}:generateKeywordHistoricalMetrics`, body);
  },

  generateAdGroupThemes(client: HttpClient, customerId: string, body: Omit<GenerateAdGroupThemesRequest, "customerId">): Promise<GenerateAdGroupThemesResponse> {
    return client.post<GenerateAdGroupThemesResponse>(`/v23/customers/${customerId}:generateAdGroupThemes`, body);
  },

  generateKeywordForecastMetrics(client: HttpClient, customerId: string, body: Omit<GenerateKeywordForecastMetricsRequest, "customerId">): Promise<GenerateKeywordForecastMetricsResponse> {
    return client.post<GenerateKeywordForecastMetricsResponse>(`/v23/customers/${customerId}:generateKeywordForecastMetrics`, body);
  }
};
