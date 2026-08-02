import type { MutateBiddingDataExclusionsRequest, MutateBiddingDataExclusionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.BiddingDataExclusionService. Do not edit by hand.
export const biddingDataExclusionService = {
  mutateBiddingDataExclusions(client: HttpClient, customerId: string, body: Omit<MutateBiddingDataExclusionsRequest, "customerId">): Promise<MutateBiddingDataExclusionsResponse> {
    return client.post<MutateBiddingDataExclusionsResponse>(`/v25/customers/${customerId}/biddingDataExclusions:mutate`, body);
  }
};
