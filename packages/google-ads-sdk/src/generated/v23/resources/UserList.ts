// @generated
// fingerprint: sha256:07bd50d09037bcdca8d274df3ebb0e9066c11f4c824cd0a1a4b8830ea1d1d63e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccessReason, BasicUserListInfo, CrmBasedUserListInfo, LogicalUserListInfo, LookalikeUserListInfo, RuleBasedUserListInfo, SimilarUserListInfo, UserListAccessStatus, UserListClosingReason, UserListMembershipStatus, UserListSizeRange, UserListType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.UserList. Do not edit by hand.
export interface UserList {
  resourceName?: string;
  id?: string;
  readOnly?: boolean;
  name?: string;
  description?: string;
  membershipStatus?: UserListMembershipStatus;
  integrationCode?: string;
  membershipLifeSpan?: string;
  sizeForDisplay?: string;
  sizeRangeForDisplay?: UserListSizeRange;
  sizeForSearch?: string;
  sizeRangeForSearch?: UserListSizeRange;
  type?: UserListType;
  closingReason?: UserListClosingReason;
  accessReason?: AccessReason;
  accountUserListStatus?: UserListAccessStatus;
  eligibleForSearch?: boolean;
  eligibleForDisplay?: boolean;
  matchRatePercentage?: number;
  crmBasedUserList?: CrmBasedUserListInfo;
  similarUserList?: SimilarUserListInfo;
  ruleBasedUserList?: RuleBasedUserListInfo;
  logicalUserList?: LogicalUserListInfo;
  basicUserList?: BasicUserListInfo;
  lookalikeUserList?: LookalikeUserListInfo;
}
