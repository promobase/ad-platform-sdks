import type { MutateConversionValueRulesRequest, MutateConversionValueRulesResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionValueRuleService. Do not edit by hand.
export const conversionValueRuleService = {
  mutateConversionValueRules(client: HttpClient, customerId: string, body: Omit<MutateConversionValueRulesRequest, "customerId">): Promise<MutateConversionValueRulesResponse> {
    return client.post<MutateConversionValueRulesResponse>(`/v23/customers/${customerId}/conversionValueRules:mutate`, body);
  }
};
