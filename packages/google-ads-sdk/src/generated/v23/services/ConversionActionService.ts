// @generated
// fingerprint: sha256:3a1dc41832581e883aea70809cd845a1f9e7cfbde0e12896bdec1599a8347fdf
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateConversionActionsRequest, MutateConversionActionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionActionService. Do not edit by hand.
export const conversionActionService = {
  mutateConversionActions(client: HttpClient, customerId: string, body: Omit<MutateConversionActionsRequest, "customerId">): Promise<MutateConversionActionsResponse> {
    return client.post<MutateConversionActionsResponse>(`/v23/customers/${customerId}/conversionActions:mutate`, body);
  }
};
