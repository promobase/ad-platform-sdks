import type { AdRuleTriggerOperator, AdRuleTriggerType } from "../enums.ts";

export interface AdRuleTriggerFields {
  field: string;
  operator: AdRuleTriggerOperator;
  type: AdRuleTriggerType;
  value: Record<string, unknown>;
}

