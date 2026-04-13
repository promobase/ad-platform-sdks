import type { PlannableUserListMetadata, ReachPlanPlannableUserListStatus, UserListInfo, UserListType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.PlannableUserList. Do not edit by hand.
export interface PlannableUserList {
  userListInfo?: UserListInfo;
  displayName?: string;
  userListType?: UserListType;
  plannableStatus?: ReachPlanPlannableUserListStatus;
  plannableUserListMetadata?: PlannableUserListMetadata;
}
