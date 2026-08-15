// @generated
// fingerprint: sha256:7b32b034a1b4b7d637936456a21d7707c0c0c55d3e38f54f494343dd5c8da2c1
// DO NOT EDIT: generated file; changes will be overwritten.
import type { PlannableUserListMetadata, ReachPlanPlannableUserListStatus, UserListInfo, UserListType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.PlannableUserList. Do not edit by hand.
export interface PlannableUserList {
  userListInfo?: UserListInfo;
  displayName?: string;
  userListType?: UserListType;
  plannableStatus?: ReachPlanPlannableUserListStatus;
  plannableUserListMetadata?: PlannableUserListMetadata;
}
