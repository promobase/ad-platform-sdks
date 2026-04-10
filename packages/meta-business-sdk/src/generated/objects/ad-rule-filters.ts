import type { AdRuleFiltersOperator } from "../enums.ts";

export interface AdRuleFiltersFields {
  field: string;
  operator: AdRuleFiltersOperator;
  value: Record<string, unknown>;
}

