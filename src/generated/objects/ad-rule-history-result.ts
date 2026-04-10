import type { AdRuleHistoryResultActionFields } from "./ad-rule-history-result-action.ts";

export interface AdRuleHistoryResultFields {
  actions: AdRuleHistoryResultActionFields[];
  object_id: string;
  object_type: string;
}

