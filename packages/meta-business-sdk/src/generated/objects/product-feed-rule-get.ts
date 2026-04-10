import type { ProductFeedRuleGetRuleType } from "../enums.ts";

export interface ProductFeedRuleGetFields {
  attribute: string;
  id: string;
  params: Record<string, string>;
  rule_type: ProductFeedRuleGetRuleType;
}

