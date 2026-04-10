import type { AdRuleExecutionOptionsOperator } from "../enums.ts";

export interface AdRuleExecutionOptionsFields {
  field: string;
  operator: AdRuleExecutionOptionsOperator;
  value: Record<string, unknown>;
}

