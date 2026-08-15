// @generated
// fingerprint: sha256:a7f605bdd75a14eadc797a5c0785f05328b5a8ba9f3a01b9330715a004808cbb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomInterestsRequest, MutateCustomInterestsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.CustomInterestService. Do not edit by hand.
export const customInterestService = {
  mutateCustomInterests(client: HttpClient, customerId: string, body: Omit<MutateCustomInterestsRequest, "customerId">): Promise<MutateCustomInterestsResponse> {
    return client.post<MutateCustomInterestsResponse>(`/v25/customers/${customerId}/customInterests:mutate`, body);
  }
};
