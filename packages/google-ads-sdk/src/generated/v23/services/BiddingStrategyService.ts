import type { MutateBiddingStrategiesRequest, MutateBiddingStrategiesResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BiddingStrategyService. Do not edit by hand.
export const biddingStrategyService = {
  mutateBiddingStrategies(client: HttpClient, customerId: string, body: Omit<MutateBiddingStrategiesRequest, "customerId">): Promise<MutateBiddingStrategiesResponse> {
    return client.post<MutateBiddingStrategiesResponse>(`/v23/customers/${customerId}/biddingStrategies:mutate`, body);
  }
};
