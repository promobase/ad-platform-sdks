import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { CTXPartnerAppWelcomeMessageFlowFields } from "./ctx-partner-app-welcome-message-flow.ts";
import type { ContentPublishingLimitResponseFields } from "./content-publishing-limit-response.ts";
import type { InsightsResultFields } from "./insights-result.ts";
import type { UnifiedThreadFields } from "./unified-thread.ts";

export interface IGUserForIGOnlyAPIFields {
  account_type: string;
  biography: string;
  followers_count: number;
  follows_count: number;
  id: string;
  media_count: number;
  name: string;
  profile_picture_url: string;
  user_id: number;
  username: string;
  website: string;
}

export interface IGUserForIGOnlyAPIListBusinessMessagingFeatureStatusParams {
  feature: string;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPIListContentPublishingLimitParams {
  since?: string;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPIListConversationsParams {
  folder?: string;
  platform?: string;
  tags?: string[];
  user_id?: string;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPIListInsightsParams {
  breakdown?: string[];
  metric: string[];
  metric_type?: string;
  period: string[];
  since?: string;
  timeframe?: string;
  until?: string;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPIListMediaParams {
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPICreateMediaParams {
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

export interface IGUserForIGOnlyAPICreateMediapublishParams {
  creation_id: number;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPICreateMentionsParams {
  comment_id?: string;
  media_id: string;
  message: string;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPICreateMessageattachmentsParams {
  message: Record<string, unknown>;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPICreateMessagesParams {
  folder?: string;
  message?: Record<string, unknown>;
  messaging_type?: string;
  payload?: string;
  recipient?: Record<string, unknown>;
  reply_to?: Record<string, unknown>;
  sender_action?: string;
  tag?: Record<string, unknown>;
  thread_control?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPIDeleteMessengerProfileParams {
  fields: string[];
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPICreateMessengerProfileParams {
  ice_breakers?: Record<string, unknown>[];
  persistent_menu?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPICreateSubscribedAppsParams {
  subscribed_fields: string[];
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPIDeleteWelcomeMessageFlowsParams {
  flow_id?: string;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPIListWelcomeMessageFlowsParams {
  app_id?: string;
  flow_id?: string;
  [key: string]: unknown;
}

export interface IGUserForIGOnlyAPICreateWelcomeMessageFlowsParams {
  eligible_platforms?: string[];
  flow_id?: string;
  name?: string;
  welcome_message_flow?: Record<string, unknown>[];
  [key: string]: unknown;
}

export function iGUserForIGOnlyAPINode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGUserForIGOnlyAPIFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGUserForIGOnlyAPIFields, F[number]>>(`${id}`, opts),
    businessMessagingFeatureStatus: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: IGUserForIGOnlyAPIListBusinessMessagingFeatureStatusParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/business_messaging_feature_status`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    contentPublishingLimit: <F extends (keyof ContentPublishingLimitResponseFields)[]>(opts: { fields: F; params?: IGUserForIGOnlyAPIListContentPublishingLimitParams }) =>
      new Cursor<Pick<ContentPublishingLimitResponseFields, F[number]>>(client, `${id}/content_publishing_limit`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    conversations: <F extends (keyof UnifiedThreadFields)[]>(opts: { fields: F; params?: IGUserForIGOnlyAPIListConversationsParams }) =>
      new Cursor<Pick<UnifiedThreadFields, F[number]>>(client, `${id}/conversations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    insights: <F extends (keyof InsightsResultFields)[]>(opts: { fields: F; params?: IGUserForIGOnlyAPIListInsightsParams }) =>
      new Cursor<Pick<InsightsResultFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    liveMedia: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/live_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    media: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: IGUserForIGOnlyAPIListMediaParams }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserForIGOnlyAPICreateMediaParams) =>
        client.post<Record<string, unknown>>(`${id}/media`, params as Record<string, unknown>),
    },
    createMediapublish: (params: IGUserForIGOnlyAPICreateMediapublishParams) =>
      client.post<Record<string, unknown>>(`${id}/mediapublish`, params as Record<string, unknown>),
    createMention: (params: IGUserForIGOnlyAPICreateMentionsParams) =>
      client.post<Record<string, unknown>>(`${id}/mentions`, params as Record<string, unknown>),
    createMessageattachment: (params: IGUserForIGOnlyAPICreateMessageattachmentsParams) =>
      client.post<Record<string, unknown>>(`${id}/messageattachments`, params as Record<string, unknown>),
    createMessage: (params: IGUserForIGOnlyAPICreateMessagesParams) =>
      client.post<Record<string, unknown>>(`${id}/messages`, params as Record<string, unknown>),
    messengerProfile: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/messenger_profile`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserForIGOnlyAPICreateMessengerProfileParams) =>
        client.post<Record<string, unknown>>(`${id}/messenger_profile`, params as Record<string, unknown>),
      delete: (params: IGUserForIGOnlyAPIDeleteMessengerProfileParams) =>
        client.delete(`${id}/messenger_profile`, params as Record<string, unknown> ?? {}),
    },
    stories: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/stories`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    subscribedApps: {
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/subscribed_apps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserForIGOnlyAPICreateSubscribedAppsParams) =>
        client.post<Record<string, unknown>>(`${id}/subscribed_apps`, params as Record<string, unknown>),
      delete: (params?: Record<string, unknown>) =>
        client.delete(`${id}/subscribed_apps`, params as Record<string, unknown> ?? {}),
    },
    tags: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/tags`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    welcomeMessageFlows: {
      list: <F extends (keyof CTXPartnerAppWelcomeMessageFlowFields)[]>(opts: { fields: F; params?: IGUserForIGOnlyAPIListWelcomeMessageFlowsParams }) =>
        new Cursor<Pick<CTXPartnerAppWelcomeMessageFlowFields, F[number]>>(client, `${id}/welcome_message_flows`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: IGUserForIGOnlyAPICreateWelcomeMessageFlowsParams) =>
        client.post<Record<string, unknown>>(`${id}/welcome_message_flows`, params as Record<string, unknown>),
      delete: (params: IGUserForIGOnlyAPIDeleteWelcomeMessageFlowsParams) =>
        client.delete(`${id}/welcome_message_flows`, params as Record<string, unknown> ?? {}),
    },
  };
}

