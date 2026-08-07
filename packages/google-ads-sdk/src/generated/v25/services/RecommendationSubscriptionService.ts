import type { MutateRecommendationSubscriptionRequest, MutateRecommendationSubscriptionResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.RecommendationSubscriptionService. Do not edit by hand.
export const recommendationSubscriptionService = {
  mutateRecommendationSubscription(client: HttpClient, customerId: string, body: Omit<MutateRecommendationSubscriptionRequest, "customerId">): Promise<MutateRecommendationSubscriptionResponse> {
    return client.post<MutateRecommendationSubscriptionResponse>(`/v25/customers/${customerId}/recommendationSubscriptions:mutateRecommendationSubscription`, body);
  }
};
