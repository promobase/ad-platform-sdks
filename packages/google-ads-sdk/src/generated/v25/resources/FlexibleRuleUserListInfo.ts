import type { FlexibleRuleOperandInfo, UserListFlexibleRuleOperator } from "../index.ts";

// Generated from google.ads.googleads.v25.common.FlexibleRuleUserListInfo. Do not edit by hand.
export interface FlexibleRuleUserListInfo {
  inclusiveRuleOperator?: UserListFlexibleRuleOperator;
  inclusiveOperands?: FlexibleRuleOperandInfo[];
  exclusiveOperands?: FlexibleRuleOperandInfo[];
}
