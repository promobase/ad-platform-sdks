import type { GenerateCreatorInsightsRequest, GenerateCreatorInsightsResponse, GenerateTrendingInsightsRequest, GenerateTrendingInsightsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ContentCreatorInsightsService. Do not edit by hand.
export const contentCreatorInsightsService = {
  generateCreatorInsights(client: HttpClient, customerId: string, body: Omit<GenerateCreatorInsightsRequest, "customerId">): Promise<GenerateCreatorInsightsResponse> {
    return client.post<GenerateCreatorInsightsResponse>(`/v25/customers/${customerId}:generateCreatorInsights`, body);
  },

  generateTrendingInsights(client: HttpClient, customerId: string, body: Omit<GenerateTrendingInsightsRequest, "customerId">): Promise<GenerateTrendingInsightsResponse> {
    return client.post<GenerateTrendingInsightsResponse>(`/v25/customers/${customerId}:generateTrendingInsights`, body);
  }
};
