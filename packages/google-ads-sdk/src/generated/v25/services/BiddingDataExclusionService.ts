// @generated
// fingerprint: sha256:34bef50cca58833263d6f4eb33653308c5c01c42904dacd6e1d87982328d62b4
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateBiddingDataExclusionsRequest, MutateBiddingDataExclusionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.BiddingDataExclusionService. Do not edit by hand.
export const biddingDataExclusionService = {
  mutateBiddingDataExclusions(client: HttpClient, customerId: string, body: Omit<MutateBiddingDataExclusionsRequest, "customerId">): Promise<MutateBiddingDataExclusionsResponse> {
    return client.post<MutateBiddingDataExclusionsResponse>(`/v25/customers/${customerId}/biddingDataExclusions:mutate`, body);
  }
};
