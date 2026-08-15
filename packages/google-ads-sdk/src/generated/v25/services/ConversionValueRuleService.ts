// @generated
// fingerprint: sha256:ed75339477f662251cbf92a56c03f306606c4074dbf0f481a59acdd40f796b93
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateConversionValueRulesRequest, MutateConversionValueRulesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionValueRuleService. Do not edit by hand.
export const conversionValueRuleService = {
  mutateConversionValueRules(client: HttpClient, customerId: string, body: Omit<MutateConversionValueRulesRequest, "customerId">): Promise<MutateConversionValueRulesResponse> {
    return client.post<MutateConversionValueRulesResponse>(`/v25/customers/${customerId}/conversionValueRules:mutate`, body);
  }
};
