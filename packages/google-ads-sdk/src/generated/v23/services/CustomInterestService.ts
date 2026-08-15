// @generated
// fingerprint: sha256:49b93168da2ef6aa3c5325ed40ab3afc914c17dab6d89765876cbbb5406d8e7f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateCustomInterestsRequest, MutateCustomInterestsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.CustomInterestService. Do not edit by hand.
export const customInterestService = {
  mutateCustomInterests(client: HttpClient, customerId: string, body: Omit<MutateCustomInterestsRequest, "customerId">): Promise<MutateCustomInterestsResponse> {
    return client.post<MutateCustomInterestsResponse>(`/v23/customers/${customerId}/customInterests:mutate`, body);
  }
};
