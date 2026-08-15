// @generated
// fingerprint: sha256:d77317b29c140e6fec13734139d140da939cb9d76ffebf903e580d24f07693fa
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateConversionValueRulesRequest, MutateConversionValueRulesResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.ConversionValueRuleService. Do not edit by hand.
export const conversionValueRuleService = {
  mutateConversionValueRules(client: HttpClient, customerId: string, body: Omit<MutateConversionValueRulesRequest, "customerId">): Promise<MutateConversionValueRulesResponse> {
    return client.post<MutateConversionValueRulesResponse>(`/v23/customers/${customerId}/conversionValueRules:mutate`, body);
  }
};
