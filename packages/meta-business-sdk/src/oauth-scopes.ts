import type { OAuthCustomScope } from "@openpromo/sdk-runtime";
import * as v from "valibot";

/** Facebook Login permissions used by the normalized Facebook adapter. */
export const FacebookOAuthScopes = {
  PagesShowList: "pages_show_list",
  PagesManagePosts: "pages_manage_posts",
  PagesManageEngagement: "pages_manage_engagement",
  PagesReadEngagement: "pages_read_engagement",
  PagesReadUserEngagement: "pages_read_user_engagement",
  PublishVideo: "publish_video",
  PagesMessaging: "pages_messaging",
  ReadInsights: "read_insights",
  PagesManageMetadata: "pages_manage_metadata",
} as const;

/** Instagram permissions requested through the Facebook Login credential family. */
export const InstagramFacebookLoginOAuthScopes = {
  Basic: "instagram_basic",
  ContentPublish: "instagram_content_publish",
  ManageComments: "instagram_manage_comments",
  ManageInsights: "instagram_manage_insights",
  ManageMessages: "instagram_manage_messages",
} as const;

/** Instagram Login permissions for the Instagram Graph API. */
export const InstagramLoginOAuthScopes = {
  BusinessBasic: "instagram_business_basic",
  BusinessContentPublish: "instagram_business_content_publish",
  BusinessManageComments: "instagram_business_manage_comments",
  BusinessManageInsights: "instagram_business_manage_insights",
  BusinessManageMessages: "instagram_business_manage_messages",
} as const;

/** Threads Login permissions. */
export const ThreadsOAuthScopes = {
  Basic: "threads_basic",
  ContentPublish: "threads_content_publish",
  ManageReplies: "threads_manage_replies",
  ReadReplies: "threads_read_replies",
  ManageInsights: "threads_manage_insights",
} as const;

const facebookKnownScopes = [
  FacebookOAuthScopes.PagesShowList,
  FacebookOAuthScopes.PagesManagePosts,
  FacebookOAuthScopes.PagesManageEngagement,
  FacebookOAuthScopes.PagesReadEngagement,
  FacebookOAuthScopes.PagesReadUserEngagement,
  FacebookOAuthScopes.PublishVideo,
  FacebookOAuthScopes.PagesMessaging,
  FacebookOAuthScopes.ReadInsights,
  FacebookOAuthScopes.PagesManageMetadata,
] as const;
const instagramFacebookLoginKnownScopes = [
  InstagramFacebookLoginOAuthScopes.Basic,
  InstagramFacebookLoginOAuthScopes.ContentPublish,
  InstagramFacebookLoginOAuthScopes.ManageComments,
  InstagramFacebookLoginOAuthScopes.ManageInsights,
  InstagramFacebookLoginOAuthScopes.ManageMessages,
] as const;
const instagramLoginKnownScopes = [
  InstagramLoginOAuthScopes.BusinessBasic,
  InstagramLoginOAuthScopes.BusinessContentPublish,
  InstagramLoginOAuthScopes.BusinessManageComments,
  InstagramLoginOAuthScopes.BusinessManageInsights,
  InstagramLoginOAuthScopes.BusinessManageMessages,
] as const;
const threadsKnownScopes = [
  ThreadsOAuthScopes.Basic,
  ThreadsOAuthScopes.ContentPublish,
  ThreadsOAuthScopes.ManageReplies,
  ThreadsOAuthScopes.ReadReplies,
  ThreadsOAuthScopes.ManageInsights,
] as const;

export type KnownFacebookOAuthScope = (typeof facebookKnownScopes)[number];
export type KnownInstagramFacebookLoginOAuthScope =
  (typeof instagramFacebookLoginKnownScopes)[number];
export type KnownInstagramLoginOAuthScope = (typeof instagramLoginKnownScopes)[number];
export type KnownThreadsOAuthScope = (typeof threadsKnownScopes)[number];

/** A known Facebook permission or an explicitly opted-in future permission. */
export type FacebookOAuthScope =
  | KnownFacebookOAuthScope
  | KnownInstagramFacebookLoginOAuthScope
  | OAuthCustomScope;
/** A known Facebook-Login Instagram permission or an explicitly opted-in future permission. */
export type InstagramFacebookLoginOAuthScope =
  | KnownInstagramFacebookLoginOAuthScope
  | OAuthCustomScope;
/** A known Instagram Login permission or an explicitly opted-in future permission. */
export type InstagramLoginOAuthScope = KnownInstagramLoginOAuthScope | OAuthCustomScope;
/** A known Threads permission or an explicitly opted-in future permission. */
export type ThreadsOAuthScope = KnownThreadsOAuthScope | OAuthCustomScope;

/** Validates published catalog values; use customOAuthScope for future values. */
export const FacebookOAuthScopeSchema = v.picklist([
  ...facebookKnownScopes,
  ...instagramFacebookLoginKnownScopes,
]);
/** Validates published catalog values; use customOAuthScope for future values. */
export const InstagramFacebookLoginOAuthScopeSchema = v.picklist(instagramFacebookLoginKnownScopes);
/** Validates published catalog values; use customOAuthScope for future values. */
export const InstagramLoginOAuthScopeSchema = v.picklist(instagramLoginKnownScopes);
/** Validates published catalog values; use customOAuthScope for future values. */
export const ThreadsOAuthScopeSchema = v.picklist(threadsKnownScopes);
