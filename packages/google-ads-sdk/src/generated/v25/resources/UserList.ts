// @generated
// fingerprint: sha256:a6990a54c2ffbe0a951dbfebee7e570c3eff245c38f69f3fc63bb7d1524de372
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AccessReason, BasicUserListInfo, CrmBasedUserListInfo, LogicalUserListInfo, LookalikeUserListInfo, RuleBasedUserListInfo, SimilarUserListInfo, UserListAccessStatus, UserListClosingReason, UserListMembershipStatus, UserListSizeRange, UserListType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.UserList. Do not edit by hand.
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
