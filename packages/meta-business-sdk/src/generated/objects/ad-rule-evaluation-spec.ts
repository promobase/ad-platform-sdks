// @generated
// fingerprint: sha256:647d2bb2647070196ab66d251ccbd316dc140d6a76b60843a32e59edf542fd74
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdRuleFiltersFields } from "./ad-rule-filters.ts";
import type { AdRuleTriggerFields } from "./ad-rule-trigger.ts";
import type { AdRuleEvaluationSpecEvaluationType } from "../enums.ts";

export interface AdRuleEvaluationSpecFields {
  evaluation_type: AdRuleEvaluationSpecEvaluationType;
  filters: AdRuleFiltersFields[];
  trigger: AdRuleTriggerFields;
}

export function adRuleEvaluationSpecNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdRuleEvaluationSpecFields,
    get: <F extends (keyof AdRuleEvaluationSpecFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdRuleEvaluationSpecFields, F[number]>>(`${id}`, opts),
  };
}

