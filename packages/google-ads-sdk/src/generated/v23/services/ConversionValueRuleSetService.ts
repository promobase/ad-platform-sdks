import type { MutateConversionValueRuleSetsRequest, MutateConversionValueRuleSetsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionValueRuleSetService. Do not edit by hand.
export const conversionValueRuleSetService = {
  mutateConversionValueRuleSets(client: HttpClient, customerId: string, body: Omit<MutateConversionValueRuleSetsRequest, "customerId">): Promise<MutateConversionValueRuleSetsResponse> {
    return client.post<MutateConversionValueRuleSetsResponse>(`/v23/customers/${customerId}/conversionValueRuleSets:mutate`, body);
  }
};
