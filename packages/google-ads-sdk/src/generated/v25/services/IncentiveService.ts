import type { ApplyIncentiveRequest, ApplyIncentiveResponse, FetchIncentiveRequest, FetchIncentiveResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.IncentiveService. Do not edit by hand.
export const incentiveService = {
  fetchIncentive(client: HttpClient, query: FetchIncentiveRequest = {} as FetchIncentiveRequest): Promise<FetchIncentiveResponse> {
    return client.get<FetchIncentiveResponse>(`/v25/incentives:fetchIncentive`, { query: query as Record<string, string | number | boolean | undefined> });
  },

  applyIncentive(client: HttpClient, customerId: string, selectedIncentiveId: string, body: Omit<ApplyIncentiveRequest, "customerId" | "selectedIncentiveId">): Promise<ApplyIncentiveResponse> {
    return client.post<ApplyIncentiveResponse>(`/v25/customers/${customerId}/incentives/${selectedIncentiveId}:applyIncentive`, body);
  }
};
