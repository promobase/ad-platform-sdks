import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { BrandedContentShadowIGMediaIDFields } from "./branded-content-shadow-ig-media-id.ts";
import type { BrandedContentShadowIGUserIDFields } from "./branded-content-shadow-ig-user-id.ts";
import type { BusinessFields } from "./business.ts";
import type { CommentFields } from "./comment.ts";
import type { ContentPublishingLimitResponseFields } from "./content-publishing-limit-response.ts";
import type { DatasetFields } from "./dataset.ts";
import type { IGBCAdsPermissionFields } from "./igbc-ads-permission.ts";
import type { IGCommentFields } from "./ig-comment.ts";
import type { IGMediaFields } from "./ig-media.ts";
import type { IGShoppingProductAppealFields } from "./ig-shopping-product-appeal.ts";
import type { IGUpcomingEventFields } from "./ig-upcoming-event.ts";
import type { IGUserExportForCAMFields } from "./ig-user-export-for-cam.ts";
import type { InstagramInsightsResultFields } from "./instagram-insights-result.ts";
import type { ShadowIGHashtagFields } from "./shadow-ig-hashtag.ts";
import type { ShadowIGScheduledMediaFields } from "./shadow-ig-scheduled-media.ts";
import type { ShadowIGUserCTXPartnerAppWelcomeMessageFlowFields } from "./shadow-ig-user-ctx-partner-app-welcome-message-flow.ts";
import type { ShadowIGUserCatalogProductSearchFields } from "./shadow-ig-user-catalog-product-search.ts";
import type { ShadowIGUserCollaborationInvitesFields } from "./shadow-ig-user-collaboration-invites.ts";
import type { ShadowIGUserCollaborativeMediaFields } from "./shadow-ig-user-collaborative-media.ts";
import type { ThreadsUserFields } from "./threads-user.ts";
import type { UserFields } from "./user.ts";
import type { UserAvailableCatalogsFields } from "./user-available-catalogs.ts";
import type { UserPageOneTimeOptInTokenSettingsFields } from "./user-page-one-time-opt-in-token-settings.ts";

export interface IGUserFields {
  biography: string;
  business_discovery: IGUserFields;
  followers_count: number;
  follows_count: number;
  has_profile_pic: boolean;
  id: string;
  ig_id: number;
  is_published: boolean;
  legacy_instagram_user_id: string;
  media_count: number;
  mentioned_comment: IGCommentFields;
  mentioned_media: IGMediaFields;
  name: string;
  owner_business: BusinessFields;
  profile_picture_url: string;
  shopping_product_tag_eligibility: boolean;
  shopping_review_status: string;
  username: string;
  website: string;
}

export interface IGUserListAuthorizedAdaccountsParams {
  business: string;
  [key: string]: unknown;
}

export interface IGUserCreateAuthorizedAdaccountsParams {
  account_id: string;
  business: string;
  [key: string]: unknown;
}

export interface IGUserListBrandedContentAdPermissionsParams {
  creator_username?: string;
  [key: string]: unknown;
}

export interface IGUserCreateBrandedContentAdPermissionsParams {
  creator_instagram_account?: string;
  creator_instagram_username?: string;
  revoke?: boolean;
  [key: string]: unknown;
}

export interface IGUserListBrandedContentAdvertisableMediasParams {
  ad_code?: string;
  creator_username?: string;
  media_relationship?: string[];
  only_fetch_allowlisted?: boolean;
  only_fetch_recommended_content?: boolean;
  permalinks?: string[];
  [key: string]: unknown;
}

export interface IGUserDeleteBrandedContentTagApprovalParams {
  user_ids: number[];
  [key: string]: unknown;
}

export interface IGUserListBrandedContentTagApprovalParams {
  user_ids: number[];
  [key: string]: unknown;
}

export interface IGUserCreateBrandedContentTagApprovalParams {
  user_ids: number[];
  [key: string]: unknown;
}

export interface IGUserCreateBusinessMessagingFeatureStatusParams {
  features: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface IGUserListCatalogProductSearchParams {
  catalog_id: string;
  q?: string;
  [key: string]: unknown;
}

export interface IGUserCreateCollaborationInvitesParams {
  accept: boolean;
  media_id: string;
  [key: string]: unknown;
}

export interface IGUserListContentPublishingLimitParams {
  since?: string;
  [key: string]: unknown;
}

export interface IGUserListCreatorMarketplaceCreatorsParams {
  creator_age_bucket?: Record<string, unknown>[];
  creator_countries?: string[];
  creator_follower_growth?: Record<string, unknown>;
  creator_gender?: string[];
  creator_interests?: Record<string, unknown>[];
  creator_latest_post_activity?: Record<string, unknown>;
  creator_max_engaged_accounts?: number;
  creator_max_followers?: number;
  creator_min_engaged_accounts?: number;
  creator_min_followers?: number;
  has_public_contact_email?: boolean;
  major_audience_age_bucket?: Record<string, unknown>[];
  major_audience_countries?: string[];
  major_audience_device_type?: Record<string, unknown>[];
  major_audience_gender?: string[];
  query?: string;
  reels_interaction_rate?: Record<string, unknown>;
  show_onboarded_creators_only?: boolean;
  similar_to_creators?: string[];
  username?: string;
  usernames?: string[];
  [key: string]: unknown;
}

export interface IGUserCreateDatasetParams {
  dataset_name?: string;
  [key: string]: unknown;
}

export interface IGUserListInsightsParams {
  breakdown?: string[];
  metric: string[];
  metric_type?: string;
  period: string[];
  since?: string;
  timeframe?: string;
  until?: string;
  [key: string]: unknown;
}

export interface IGUserListLiveMediaParams {
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface IGUserListMediaParams {
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface IGUserCreateMediaParams {
  alt_text?: string;
  audio_name?: string;
  caption?: string;
  children?: string[];
  collaborators?: string[];
  cover_url?: string;
  image_url?: string;
  is_carousel_item?: boolean;
  location_id?: string;
  media_type?: string;
  product_tags?: Record<string, unknown>[];
  share_to_feed?: boolean;
  thumb_offset?: string;
  trial_params?: Record<string, unknown>;
  upload_type?: string;
  user_tags?: Record<string, unknown>[];
  video_url?: string;
  [key: string]: unknown;
}

export interface IGUserCreateMediaPublishParams {
  creation_id: number;
  [key: string]: unknown;
}

export interface IGUserCreateMentionsParams {
  comment_id?: string;
  media_id: string;
  message: string;
  [key: string]: unknown;
}

export interface IGUserCreateModerateConversationsParams {
  actions: string[];
  user_ids: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface IGUserListProductAppealParams {
  product_id: string;
  [key: string]: unknown;
}

export interface IGUserCreateProductAppealParams {
  appeal_reason: string;
  product_id: string;
  [key: string]: unknown;
}

export interface IGUserCreateUpcomingEventsParams {
  end_time?: string;
  notification_subtypes?: string[];
  start_time: string;
  title: string;
  [key: string]: unknown;
}

export interface IGUserListWelcomeMessageFlowsParams {
  app_id?: string;
  flow_id?: string;
  [key: string]: unknown;
}

export function iGUserNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGUserFields, F[number]>>(`${id}`, opts),
    agencies: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/agencies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    authorizedAdaccounts: {
      list: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: IGUserListAuthorizedAdaccountsParams }) =>
        new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/authorized_adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserCreateAuthorizedAdaccountsParams) =>
        client.post<IGUserFields>(`${id}/authorized_adaccounts`, params as Record<string, unknown>),
    },
    availableCatalogs: <F extends (keyof UserAvailableCatalogsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<UserAvailableCatalogsFields, F[number]>>(client, `${id}/available_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    brandedContentAdPermissions: {
      list: <F extends (keyof IGBCAdsPermissionFields)[]>(opts: { fields: F; params?: IGUserListBrandedContentAdPermissionsParams }) =>
        new Cursor<Pick<IGBCAdsPermissionFields, F[number]>>(client, `${id}/branded_content_ad_permissions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserCreateBrandedContentAdPermissionsParams) =>
        client.post<IGBCAdsPermissionFields>(`${id}/branded_content_ad_permissions`, params as Record<string, unknown>),
    },
    brandedContentAdvertisableMedias: <F extends (keyof BrandedContentShadowIGMediaIDFields)[]>(opts: { fields: F; params?: IGUserListBrandedContentAdvertisableMediasParams }) =>
      new Cursor<Pick<BrandedContentShadowIGMediaIDFields, F[number]>>(client, `${id}/branded_content_advertisable_medias`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    brandedContentTagApproval: {
      list: <F extends (keyof BrandedContentShadowIGUserIDFields)[]>(opts: { fields: F; params?: IGUserListBrandedContentTagApprovalParams }) =>
        new Cursor<Pick<BrandedContentShadowIGUserIDFields, F[number]>>(client, `${id}/branded_content_tag_approval`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserCreateBrandedContentTagApprovalParams) =>
        client.post<BrandedContentShadowIGUserIDFields>(`${id}/branded_content_tag_approval`, params as Record<string, unknown>),
      delete: (params: IGUserDeleteBrandedContentTagApprovalParams) =>
        client.delete(`${id}/branded_content_tag_approval`, params as Record<string, unknown> ?? {}),
    },
    createBusinessMessagingFeatureStatu: (params: IGUserCreateBusinessMessagingFeatureStatusParams) =>
      client.post<IGUserFields>(`${id}/business_messaging_feature_status`, params as Record<string, unknown>),
    catalogProductSearch: <F extends (keyof ShadowIGUserCatalogProductSearchFields)[]>(opts: { fields: F; params?: IGUserListCatalogProductSearchParams }) =>
      new Cursor<Pick<ShadowIGUserCatalogProductSearchFields, F[number]>>(client, `${id}/catalog_product_search`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    collaborationInvites: {
      list: <F extends (keyof ShadowIGUserCollaborationInvitesFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ShadowIGUserCollaborationInvitesFields, F[number]>>(client, `${id}/collaboration_invites`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserCreateCollaborationInvitesParams) =>
        client.post<ShadowIGUserCollaborationInvitesFields>(`${id}/collaboration_invites`, params as Record<string, unknown>),
    },
    collaborativeMedia: <F extends (keyof ShadowIGUserCollaborativeMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ShadowIGUserCollaborativeMediaFields, F[number]>>(client, `${id}/collaborative_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    connectedThreadsUser: <F extends (keyof ThreadsUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ThreadsUserFields, F[number]>>(client, `${id}/connected_threads_user`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    contentPublishingLimit: <F extends (keyof ContentPublishingLimitResponseFields)[]>(opts: { fields: F; params?: IGUserListContentPublishingLimitParams }) =>
      new Cursor<Pick<ContentPublishingLimitResponseFields, F[number]>>(client, `${id}/content_publishing_limit`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    creatorMarketplaceCreators: <F extends (keyof IGUserExportForCAMFields)[]>(opts: { fields: F; params?: IGUserListCreatorMarketplaceCreatorsParams }) =>
      new Cursor<Pick<IGUserExportForCAMFields, F[number]>>(client, `${id}/creator_marketplace_creators`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    dataset: {
      list: <F extends (keyof DatasetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<DatasetFields, F[number]>>(client, `${id}/dataset`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserCreateDatasetParams) =>
        client.post<DatasetFields>(`${id}/dataset`, params as Record<string, unknown>),
    },
    insights: <F extends (keyof InstagramInsightsResultFields)[]>(opts: { fields: F; params?: IGUserListInsightsParams }) =>
      new Cursor<Pick<InstagramInsightsResultFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    instagramBackedThreadsUser: {
      list: <F extends (keyof ThreadsUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ThreadsUserFields, F[number]>>(client, `${id}/instagram_backed_threads_user`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: Record<string, unknown>) =>
        client.post<ThreadsUserFields>(`${id}/instagram_backed_threads_user`, params as Record<string, unknown>),
    },
    liveMedia: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: IGUserListLiveMediaParams }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/live_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    media: {
      list: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: IGUserListMediaParams }) =>
        new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserCreateMediaParams) =>
        client.post<IGMediaFields>(`${id}/media`, params as Record<string, unknown>),
    },
    createMediaPublish: (params: IGUserCreateMediaPublishParams) =>
      client.post<IGMediaFields>(`${id}/media_publish`, params as Record<string, unknown>),
    createMention: (params: IGUserCreateMentionsParams) =>
      client.post<Record<string, unknown>>(`${id}/mentions`, params as Record<string, unknown>),
    createModerateConversation: (params: IGUserCreateModerateConversationsParams) =>
      client.post<Record<string, unknown>>(`${id}/moderate_conversations`, params as Record<string, unknown>),
    notificationMessageTokens: <F extends (keyof UserPageOneTimeOptInTokenSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<UserPageOneTimeOptInTokenSettingsFields, F[number]>>(client, `${id}/notification_message_tokens`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    productAppeal: {
      list: <F extends (keyof IGShoppingProductAppealFields)[]>(opts: { fields: F; params?: IGUserListProductAppealParams }) =>
        new Cursor<Pick<IGShoppingProductAppealFields, F[number]>>(client, `${id}/product_appeal`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserCreateProductAppealParams) =>
        client.post<IGShoppingProductAppealFields>(`${id}/product_appeal`, params as Record<string, unknown>),
    },
    recentlySearchedHashtags: <F extends (keyof ShadowIGHashtagFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ShadowIGHashtagFields, F[number]>>(client, `${id}/recently_searched_hashtags`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    scheduledMedia: <F extends (keyof ShadowIGScheduledMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ShadowIGScheduledMediaFields, F[number]>>(client, `${id}/scheduled_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    stories: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/stories`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    tags: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/tags`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    upcomingEvents: {
      list: <F extends (keyof IGUpcomingEventFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<IGUpcomingEventFields, F[number]>>(client, `${id}/upcoming_events`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserCreateUpcomingEventsParams) =>
        client.post<Record<string, unknown>>(`${id}/upcoming_events`, params as Record<string, unknown>),
    },
    welcomeMessageFlows: <F extends (keyof ShadowIGUserCTXPartnerAppWelcomeMessageFlowFields)[]>(opts: { fields: F; params?: IGUserListWelcomeMessageFlowsParams }) =>
      new Cursor<Pick<ShadowIGUserCTXPartnerAppWelcomeMessageFlowFields, F[number]>>(client, `${id}/welcome_message_flows`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

