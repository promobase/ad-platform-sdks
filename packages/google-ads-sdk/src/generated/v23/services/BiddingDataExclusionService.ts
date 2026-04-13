import type { MutateBiddingDataExclusionsRequest, MutateBiddingDataExclusionsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BiddingDataExclusionService. Do not edit by hand.
export const biddingDataExclusionService = {
  mutateBiddingDataExclusions(client: HttpClient, customerId: string, body: Omit<MutateBiddingDataExclusionsRequest, "customerId">): Promise<MutateBiddingDataExclusionsResponse> {
    return client.post<MutateBiddingDataExclusionsResponse>(`/v23/customers/${customerId}/biddingDataExclusions:mutate`, body);
  }
};
