import type { GenerateAdGroupThemesRequest, GenerateAdGroupThemesResponse, GenerateKeywordForecastMetricsRequest, GenerateKeywordForecastMetricsResponse, GenerateKeywordHistoricalMetricsRequest, GenerateKeywordHistoricalMetricsResponse, GenerateKeywordIdeaResponse, GenerateKeywordIdeasRequest } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.KeywordPlanIdeaService. Do not edit by hand.
export const keywordPlanIdeaService = {
  generateKeywordIdeas(client: HttpClient, customerId: string, body: Omit<GenerateKeywordIdeasRequest, "customerId">): Promise<GenerateKeywordIdeaResponse> {
    return client.post<GenerateKeywordIdeaResponse>(`/v25/customers/${customerId}:generateKeywordIdeas`, body);
  },

  generateKeywordHistoricalMetrics(client: HttpClient, customerId: string, body: Omit<GenerateKeywordHistoricalMetricsRequest, "customerId">): Promise<GenerateKeywordHistoricalMetricsResponse> {
    return client.post<GenerateKeywordHistoricalMetricsResponse>(`/v25/customers/${customerId}:generateKeywordHistoricalMetrics`, body);
  },

  generateAdGroupThemes(client: HttpClient, customerId: string, body: Omit<GenerateAdGroupThemesRequest, "customerId">): Promise<GenerateAdGroupThemesResponse> {
    return client.post<GenerateAdGroupThemesResponse>(`/v25/customers/${customerId}:generateAdGroupThemes`, body);
  },

  generateKeywordForecastMetrics(client: HttpClient, customerId: string, body: Omit<GenerateKeywordForecastMetricsRequest, "customerId">): Promise<GenerateKeywordForecastMetricsResponse> {
    return client.post<GenerateKeywordForecastMetricsResponse>(`/v25/customers/${customerId}:generateKeywordForecastMetrics`, body);
  }
};
