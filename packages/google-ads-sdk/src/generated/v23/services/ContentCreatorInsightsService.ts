// @generated
// fingerprint: sha256:c5706be698af891cd487b691f0c5d51c6f2790a6dd46e12701d9ef5f02b6c85e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GenerateCreatorInsightsRequest, GenerateCreatorInsightsResponse, GenerateTrendingInsightsRequest, GenerateTrendingInsightsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ContentCreatorInsightsService. Do not edit by hand.
export const contentCreatorInsightsService = {
  generateCreatorInsights(client: HttpClient, customerId: string, body: Omit<GenerateCreatorInsightsRequest, "customerId">): Promise<GenerateCreatorInsightsResponse> {
    return client.post<GenerateCreatorInsightsResponse>(`/v23/customers/${customerId}:generateCreatorInsights`, body);
  },

  generateTrendingInsights(client: HttpClient, customerId: string, body: Omit<GenerateTrendingInsightsRequest, "customerId">): Promise<GenerateTrendingInsightsResponse> {
    return client.post<GenerateTrendingInsightsResponse>(`/v23/customers/${customerId}:generateTrendingInsights`, body);
  }
};
