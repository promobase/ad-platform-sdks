import type { UserListDateRuleItemInfo, UserListNumberRuleItemInfo, UserListStringRuleItemInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.common.UserListRuleItemInfo. Do not edit by hand.
export interface UserListRuleItemInfo {
  name?: string;
  numberRuleItem?: UserListNumberRuleItemInfo;
  stringRuleItem?: UserListStringRuleItemInfo;
  dateRuleItem?: UserListDateRuleItemInfo;
}
