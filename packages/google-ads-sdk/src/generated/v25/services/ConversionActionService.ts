import type { MutateConversionActionsRequest, MutateConversionActionsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionActionService. Do not edit by hand.
export const conversionActionService = {
  mutateConversionActions(client: HttpClient, customerId: string, body: Omit<MutateConversionActionsRequest, "customerId">): Promise<MutateConversionActionsResponse> {
    return client.post<MutateConversionActionsResponse>(`/v25/customers/${customerId}/conversionActions:mutate`, body);
  }
};
