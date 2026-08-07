import type { MutateConversionValueRuleSetsRequest, MutateConversionValueRuleSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionValueRuleSetService. Do not edit by hand.
export const conversionValueRuleSetService = {
  mutateConversionValueRuleSets(client: HttpClient, customerId: string, body: Omit<MutateConversionValueRuleSetsRequest, "customerId">): Promise<MutateConversionValueRuleSetsResponse> {
    return client.post<MutateConversionValueRuleSetsResponse>(`/v25/customers/${customerId}/conversionValueRuleSets:mutate`, body);
  }
};
