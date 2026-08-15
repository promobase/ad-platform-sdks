// @generated
// fingerprint: sha256:acd58a3ed0a3fbab32a1b8cf3b439cfe78d44311a0bf93f20d3d651cd31dcd97
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApplyIncentiveRequest, ApplyIncentiveResponse, FetchIncentiveRequest, FetchIncentiveResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.IncentiveService. Do not edit by hand.
export const incentiveService = {
  fetchIncentive(client: HttpClient, query: FetchIncentiveRequest = {} as FetchIncentiveRequest): Promise<FetchIncentiveResponse> {
    return client.get<FetchIncentiveResponse>(`/v25/incentives:fetchIncentive`, { query: query as Record<string, string | number | boolean | undefined> });
  },

  applyIncentive(client: HttpClient, customerId: string, selectedIncentiveId: string, body: Omit<ApplyIncentiveRequest, "customerId" | "selectedIncentiveId">): Promise<ApplyIncentiveResponse> {
    return client.post<ApplyIncentiveResponse>(`/v25/customers/${customerId}/incentives/${selectedIncentiveId}:applyIncentive`, body);
  }
};
