// @generated
// fingerprint: sha256:95be1f255c3af3896e6c70de1af0afff6d3452af4fd45a91260ad186e069c5de
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ResolveMultiPartyAuthReviewRequest, ResolveMultiPartyAuthReviewResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.MultiPartyAuthReviewService. Do not edit by hand.
export const multiPartyAuthReviewService = {
  resolveMultiPartyAuthReview(client: HttpClient, customerId: string, body: Omit<ResolveMultiPartyAuthReviewRequest, "customerId">): Promise<ResolveMultiPartyAuthReviewResponse> {
    return client.post<ResolveMultiPartyAuthReviewResponse>(`/v25/customers/${customerId}/multiPartyAuthReview:resolve`, body);
  }
};
