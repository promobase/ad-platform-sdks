import type { MutateBiddingSeasonalityAdjustmentsRequest, MutateBiddingSeasonalityAdjustmentsResponse } from "../index.ts";
import type { HttpClient } from "@mosaic/sdk-runtime";

// Generated from google.ads.googleads.v25.services.BiddingSeasonalityAdjustmentService. Do not edit by hand.
export const biddingSeasonalityAdjustmentService = {
  mutateBiddingSeasonalityAdjustments(client: HttpClient, customerId: string, body: Omit<MutateBiddingSeasonalityAdjustmentsRequest, "customerId">): Promise<MutateBiddingSeasonalityAdjustmentsResponse> {
    return client.post<MutateBiddingSeasonalityAdjustmentsResponse>(`/v25/customers/${customerId}/biddingSeasonalityAdjustments:mutate`, body);
  }
};
