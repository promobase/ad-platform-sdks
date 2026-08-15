// @generated
// fingerprint: sha256:e536a02e9020503166b2af9c60225372e238c0c2a777fb7b6dbe4e6abb2f72d1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateBiddingDataExclusionsRequest, MutateBiddingDataExclusionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BiddingDataExclusionService. Do not edit by hand.
export const biddingDataExclusionService = {
  mutateBiddingDataExclusions(client: HttpClient, customerId: string, body: Omit<MutateBiddingDataExclusionsRequest, "customerId">): Promise<MutateBiddingDataExclusionsResponse> {
    return client.post<MutateBiddingDataExclusionsResponse>(`/v23/customers/${customerId}/biddingDataExclusions:mutate`, body);
  }
};
