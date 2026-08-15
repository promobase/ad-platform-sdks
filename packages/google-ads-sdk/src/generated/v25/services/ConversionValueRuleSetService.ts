// @generated
// fingerprint: sha256:e21d3293c49a08463dc45fc77b768cf211fce93b4112eac005485c072a24e4c2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateConversionValueRuleSetsRequest, MutateConversionValueRuleSetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.ConversionValueRuleSetService. Do not edit by hand.
export const conversionValueRuleSetService = {
  mutateConversionValueRuleSets(client: HttpClient, customerId: string, body: Omit<MutateConversionValueRuleSetsRequest, "customerId">): Promise<MutateConversionValueRuleSetsResponse> {
    return client.post<MutateConversionValueRuleSetsResponse>(`/v25/customers/${customerId}/conversionValueRuleSets:mutate`, body);
  }
};
