// @generated
// fingerprint: sha256:143dae19fe43e728f32dcd82cc2535c3371b737683d515b752ea61dbc18832b5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateRecommendationSubscriptionRequest, MutateRecommendationSubscriptionResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.RecommendationSubscriptionService. Do not edit by hand.
export const recommendationSubscriptionService = {
  mutateRecommendationSubscription(client: HttpClient, customerId: string, body: Omit<MutateRecommendationSubscriptionRequest, "customerId">): Promise<MutateRecommendationSubscriptionResponse> {
    return client.post<MutateRecommendationSubscriptionResponse>(`/v25/customers/${customerId}/recommendationSubscriptions:mutateRecommendationSubscription`, body);
  }
};
