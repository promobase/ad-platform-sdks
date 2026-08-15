// @generated
// fingerprint: sha256:7a4e00aae7705f8787e6939e2f20977e704672af0a1b38798de8c48d8f2eb3fa
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateConversionActionsRequest, MutateConversionActionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionActionService. Do not edit by hand.
export const conversionActionService = {
  mutateConversionActions(client: HttpClient, customerId: string, body: Omit<MutateConversionActionsRequest, "customerId">): Promise<MutateConversionActionsResponse> {
    return client.post<MutateConversionActionsResponse>(`/v25/customers/${customerId}/conversionActions:mutate`, body);
  }
};
