import type { ApplyIncentiveRequest, ApplyIncentiveResponse, FetchIncentiveRequest, FetchIncentiveResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.IncentiveService. Do not edit by hand.
export const incentiveService = {
  fetchIncentive(client: HttpClient, query: FetchIncentiveRequest = {} as FetchIncentiveRequest): Promise<FetchIncentiveResponse> {
    return client.get<FetchIncentiveResponse>(`/v23/incentives:fetchIncentive`, { query: query as Record<string, string | number | boolean | undefined> });
  },

  applyIncentive(client: HttpClient, customerId: string, selectedIncentiveId: string, body: Omit<ApplyIncentiveRequest, "customerId" | "selectedIncentiveId">): Promise<ApplyIncentiveResponse> {
    return client.post<ApplyIncentiveResponse>(`/v23/customers/${customerId}/incentives/${selectedIncentiveId}:applyIncentive`, body);
  }
};
