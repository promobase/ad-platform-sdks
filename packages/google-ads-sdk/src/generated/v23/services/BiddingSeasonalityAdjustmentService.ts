import type { MutateBiddingSeasonalityAdjustmentsRequest, MutateBiddingSeasonalityAdjustmentsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BiddingSeasonalityAdjustmentService. Do not edit by hand.
export const biddingSeasonalityAdjustmentService = {
  mutateBiddingSeasonalityAdjustments(client: HttpClient, customerId: string, body: Omit<MutateBiddingSeasonalityAdjustmentsRequest, "customerId">): Promise<MutateBiddingSeasonalityAdjustmentsResponse> {
    return client.post<MutateBiddingSeasonalityAdjustmentsResponse>(`/v23/customers/${customerId}/biddingSeasonalityAdjustments:mutate`, body);
  }
};
