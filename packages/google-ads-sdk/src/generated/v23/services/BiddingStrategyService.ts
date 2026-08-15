// @generated
// fingerprint: sha256:78e026141d37aafec663a7bc3dda82a4dce902a0a336b67fd95f3df23e3946c7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateBiddingStrategiesRequest, MutateBiddingStrategiesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.BiddingStrategyService. Do not edit by hand.
export const biddingStrategyService = {
  mutateBiddingStrategies(client: HttpClient, customerId: string, body: Omit<MutateBiddingStrategiesRequest, "customerId">): Promise<MutateBiddingStrategiesResponse> {
    return client.post<MutateBiddingStrategiesResponse>(`/v23/customers/${customerId}/biddingStrategies:mutate`, body);
  }
};
