// @generated
// fingerprint: sha256:2dd91655c1cdb06b2d9d8719b5a259ae38085adfd84e4737b086062ee23fcd6f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateRecommendationSubscriptionRequest, MutateRecommendationSubscriptionResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.RecommendationSubscriptionService. Do not edit by hand.
export const recommendationSubscriptionService = {
  mutateRecommendationSubscription(client: HttpClient, customerId: string, body: Omit<MutateRecommendationSubscriptionRequest, "customerId">): Promise<MutateRecommendationSubscriptionResponse> {
    return client.post<MutateRecommendationSubscriptionResponse>(`/v23/customers/${customerId}/recommendationSubscriptions:mutateRecommendationSubscription`, body);
  }
};
