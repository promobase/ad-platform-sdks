import type { MutateRecommendationSubscriptionRequest, MutateRecommendationSubscriptionResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.RecommendationSubscriptionService. Do not edit by hand.
export const recommendationSubscriptionService = {
  mutateRecommendationSubscription(client: HttpClient, customerId: string, body: Omit<MutateRecommendationSubscriptionRequest, "customerId">): Promise<MutateRecommendationSubscriptionResponse> {
    return client.post<MutateRecommendationSubscriptionResponse>(`/v23/customers/${customerId}/recommendationSubscriptions:mutateRecommendationSubscription`, body);
  }
};
