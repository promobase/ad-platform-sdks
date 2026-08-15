// @generated
// fingerprint: sha256:ba390ae22b379c90475bc03cb076a09e5486e60698e81b2cb20b560c150bb449
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApplyIncentiveRequest, ApplyIncentiveResponse, FetchIncentiveRequest, FetchIncentiveResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.IncentiveService. Do not edit by hand.
export const incentiveService = {
  fetchIncentive(client: HttpClient, query: FetchIncentiveRequest = {} as FetchIncentiveRequest): Promise<FetchIncentiveResponse> {
    return client.get<FetchIncentiveResponse>(`/v23/incentives:fetchIncentive`, { query: query as Record<string, string | number | boolean | undefined> });
  },

  applyIncentive(client: HttpClient, customerId: string, selectedIncentiveId: string, body: Omit<ApplyIncentiveRequest, "customerId" | "selectedIncentiveId">): Promise<ApplyIncentiveResponse> {
    return client.post<ApplyIncentiveResponse>(`/v23/customers/${customerId}/incentives/${selectedIncentiveId}:applyIncentive`, body);
  }
};
