import type { AdRuleHistoryResultActionFields } from "./ad-rule-history-result-action.ts";
import type { AdRuleHistoryResultObjectType } from "../enums.ts";

export interface AdRuleHistoryResultFields {
  actions: AdRuleHistoryResultActionFields[];
  object_id: string;
  object_type: AdRuleHistoryResultObjectType;
}

