import type { ResolveMultiPartyAuthReviewRequest, ResolveMultiPartyAuthReviewResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.MultiPartyAuthReviewService. Do not edit by hand.
export const multiPartyAuthReviewService = {
  resolveMultiPartyAuthReview(client: HttpClient, customerId: string, body: Omit<ResolveMultiPartyAuthReviewRequest, "customerId">): Promise<ResolveMultiPartyAuthReviewResponse> {
    return client.post<ResolveMultiPartyAuthReviewResponse>(`/v25/customers/${customerId}/multiPartyAuthReview:resolve`, body);
  }
};
