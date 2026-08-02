import type { ProductFeedRuleGetRuleType } from "../enums.ts";

export interface ProductFeedRuleGetFields {
  attribute: string;
  id: number;
  params: unknown[];
  rule_type: ProductFeedRuleGetRuleType;
}

