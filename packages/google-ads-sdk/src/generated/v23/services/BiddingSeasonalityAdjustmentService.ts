// @generated
// fingerprint: sha256:0bb8a98f90c41a43d70280c800c25210c6f2b0e95c4222a5dc865a3811823d42
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateBiddingSeasonalityAdjustmentsRequest, MutateBiddingSeasonalityAdjustmentsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BiddingSeasonalityAdjustmentService. Do not edit by hand.
export const biddingSeasonalityAdjustmentService = {
  mutateBiddingSeasonalityAdjustments(client: HttpClient, customerId: string, body: Omit<MutateBiddingSeasonalityAdjustmentsRequest, "customerId">): Promise<MutateBiddingSeasonalityAdjustmentsResponse> {
    return client.post<MutateBiddingSeasonalityAdjustmentsResponse>(`/v23/customers/${customerId}/biddingSeasonalityAdjustments:mutate`, body);
  }
};
