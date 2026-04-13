import type { ApplyRecommendationRequest, ApplyRecommendationResponse, DismissRecommendationRequest, DismissRecommendationResponse, GenerateRecommendationsRequest, GenerateRecommendationsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.RecommendationService. Do not edit by hand.
export const recommendationService = {
  applyRecommendation(client: HttpClient, customerId: string, body: Omit<ApplyRecommendationRequest, "customerId">): Promise<ApplyRecommendationResponse> {
    return client.post<ApplyRecommendationResponse>(`/v23/customers/${customerId}/recommendations:apply`, body);
  },

  dismissRecommendation(client: HttpClient, customerId: string, body: Omit<DismissRecommendationRequest, "customerId">): Promise<DismissRecommendationResponse> {
    return client.post<DismissRecommendationResponse>(`/v23/customers/${customerId}/recommendations:dismiss`, body);
  },

  generateRecommendations(client: HttpClient, customerId: string, body: Omit<GenerateRecommendationsRequest, "customerId">): Promise<GenerateRecommendationsResponse> {
    return client.post<GenerateRecommendationsResponse>(`/v23/customers/${customerId}/recommendations:generate`, body);
  }
};
