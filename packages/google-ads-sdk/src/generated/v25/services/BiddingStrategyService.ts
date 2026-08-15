// @generated
// fingerprint: sha256:956df37718e8abdf07490901cabe756281248dbeb503e3636aa4e186a37308b8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateBiddingStrategiesRequest, MutateBiddingStrategiesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.BiddingStrategyService. Do not edit by hand.
export const biddingStrategyService = {
  mutateBiddingStrategies(client: HttpClient, customerId: string, body: Omit<MutateBiddingStrategiesRequest, "customerId">): Promise<MutateBiddingStrategiesResponse> {
    return client.post<MutateBiddingStrategiesResponse>(`/v25/customers/${customerId}/biddingStrategies:mutate`, body);
  }
};
