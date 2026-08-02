import type { MutateConversionValueRulesRequest, MutateConversionValueRulesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionValueRuleService. Do not edit by hand.
export const conversionValueRuleService = {
  mutateConversionValueRules(client: HttpClient, customerId: string, body: Omit<MutateConversionValueRulesRequest, "customerId">): Promise<MutateConversionValueRulesResponse> {
    return client.post<MutateConversionValueRulesResponse>(`/v25/customers/${customerId}/conversionValueRules:mutate`, body);
  }
};
