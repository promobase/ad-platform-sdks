import type { MutateConversionActionsRequest, MutateConversionActionsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionActionService. Do not edit by hand.
export const conversionActionService = {
  mutateConversionActions(client: HttpClient, customerId: string, body: Omit<MutateConversionActionsRequest, "customerId">): Promise<MutateConversionActionsResponse> {
    return client.post<MutateConversionActionsResponse>(`/v23/customers/${customerId}/conversionActions:mutate`, body);
  }
};
