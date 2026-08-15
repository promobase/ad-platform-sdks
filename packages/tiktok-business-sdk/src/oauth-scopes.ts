import type { OAuthCustomScope } from "@openpromo/sdk-runtime";
import * as v from "valibot";

/** TikTok Business Login scopes. This is distinct from TikTok Developer/Login Kit. */
export const TikTokBusinessOAuthScopes = {
  UserInfoBasic: "user.info.basic",
  UserInfoUsername: "user.info.username",
  UserInfoProfile: "user.info.profile",
  UserInfoStats: "user.info.stats",
  UserAccountType: "user.account.type",
  UserInsights: "user.insights",
  VideoList: "video.list",
  VideoInsights: "video.insights",
  VideoPublish: "video.publish",
  VideoUpload: "video.upload",
  CommentList: "comment.list",
  CommentListManage: "comment.list.manage",
  BizSparkAuth: "biz.spark.auth",
} as const;

/** TikTok Developer/Login Kit scopes. */
export const TikTokDeveloperOAuthScopes = {
  UserInfoBasic: "user.info.basic",
  UserInfoProfile: "user.info.profile",
  UserInfoStats: "user.info.stats",
  VideoList: "video.list",
  VideoPublish: "video.publish",
  VideoUpload: "video.upload",
} as const;

const businessKnownScopes = [
  TikTokBusinessOAuthScopes.UserInfoBasic,
  TikTokBusinessOAuthScopes.UserInfoUsername,
  TikTokBusinessOAuthScopes.UserInfoProfile,
  TikTokBusinessOAuthScopes.UserInfoStats,
  TikTokBusinessOAuthScopes.UserAccountType,
  TikTokBusinessOAuthScopes.UserInsights,
  TikTokBusinessOAuthScopes.VideoList,
  TikTokBusinessOAuthScopes.VideoInsights,
  TikTokBusinessOAuthScopes.VideoPublish,
  TikTokBusinessOAuthScopes.VideoUpload,
  TikTokBusinessOAuthScopes.CommentList,
  TikTokBusinessOAuthScopes.CommentListManage,
  TikTokBusinessOAuthScopes.BizSparkAuth,
] as const;
const developerKnownScopes = [
  TikTokDeveloperOAuthScopes.UserInfoBasic,
  TikTokDeveloperOAuthScopes.UserInfoProfile,
  TikTokDeveloperOAuthScopes.UserInfoStats,
  TikTokDeveloperOAuthScopes.VideoList,
  TikTokDeveloperOAuthScopes.VideoPublish,
  TikTokDeveloperOAuthScopes.VideoUpload,
] as const;

export type KnownTikTokBusinessOAuthScope = (typeof businessKnownScopes)[number];
export type KnownTikTokDeveloperOAuthScope = (typeof developerKnownScopes)[number];
export type TikTokBusinessOAuthScope = KnownTikTokBusinessOAuthScope | OAuthCustomScope;
export type TikTokDeveloperOAuthScope = KnownTikTokDeveloperOAuthScope | OAuthCustomScope;

/** Validates published catalog values; use customOAuthScope for future values. */
export const TikTokBusinessOAuthScopeSchema = v.picklist(businessKnownScopes);
/** Validates published catalog values; use customOAuthScope for future values. */
export const TikTokDeveloperOAuthScopeSchema = v.picklist(developerKnownScopes);
