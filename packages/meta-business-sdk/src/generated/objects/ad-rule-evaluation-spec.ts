import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdRuleFiltersFields } from "./ad-rule-filters.ts";
import type { AdRuleTriggerFields } from "./ad-rule-trigger.ts";

export interface AdRuleEvaluationSpecFields {
  evaluation_type: string;
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

