import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ApplicationFields } from "./application.ts";
import type { CommentFields } from "./comment.ts";
import type { EventFields } from "./event.ts";
import type { InsightsResultFields } from "./insights-result.ts";
import type { PageFields } from "./page.ts";
import type { PlaceFields } from "./place.ts";
import type { PrivacyFields } from "./privacy.ts";
import type { ProfileFields } from "./profile.ts";
import type { RTBDynamicPostFields } from "./rtb-dynamic-post.ts";

export interface PostFields {
  actions: unknown[];
  admin_creator: Record<string, unknown>;
  allowed_advertising_objectives: string[];
  application: ApplicationFields;
  backdated_time: string;
  call_to_action: Record<string, unknown>;
  can_reply_privately: boolean;
  caption: string;
  child_attachments: unknown[];
  comments_mirroring_domain: string;
  coordinates: Record<string, unknown>;
  created_time: string;
  description: string;
  event: EventFields;
  expanded_height: number;
  expanded_width: number;
  feed_targeting: Record<string, unknown>;
  from: Record<string, unknown>;
  full_picture: string;
  height: number;
  icon: string;
  id: string;
  instagram_eligibility: string;
  is_app_share: boolean;
  is_eligible_for_dark_post: boolean;
  is_eligible_for_promotion: boolean;
  is_expired: boolean;
  is_hidden: boolean;
  is_inline_created: boolean;
  is_instagram_eligible: boolean;
  is_popular: boolean;
  is_published: boolean;
  is_spherical: boolean;
  link: string;
  message: string;
  message_tags: unknown[];
  multi_share_end_card: boolean;
  multi_share_optimized: boolean;
  name: string;
  object_id: string;
  parent_id: string;
  permalink_url: string;
  picture: string;
  place: PlaceFields;
  privacy: PrivacyFields;
  promotable_id: string;
  promotion_status: string;
  properties: unknown[];
  scheduled_publish_time: number;
  shares: Record<string, unknown>;
  source: string;
  status_type: string;
  story: string;
  story_tags: unknown[];
  subscribed: boolean;
  target: ProfileFields;
  targeting: Record<string, unknown>;
  timeline_visibility: string;
  type: string;
  updated_time: string;
  via: Record<string, unknown>;
  video_buying_eligibility: string[];
  width: number;
}

export interface PostListCommentsParams {
  filter?: string;
  live_filter?: string;
  order?: string;
  since?: string;
  [key: string]: unknown;
}

export interface PostCreateCommentsParams {
  attachment_id?: string;
  attachment_share_url?: string;
  attachment_url?: string;
  comment?: string;
  comment_privacy_value?: string;
  feedback_source?: string;
  message?: string;
  nectar_module?: string;
  parent_comment_id?: Record<string, unknown>;
  post_id?: string;
  tracking?: string;
  [key: string]: unknown;
}

export interface PostListInsightsParams {
  date_preset?: string;
  metric?: Record<string, unknown>[];
  period?: string;
  since?: string;
  until?: string;
  [key: string]: unknown;
}

export interface PostDeleteLikesParams {
  nectar_module?: string;
  tracking?: string;
  [key: string]: unknown;
}

export interface PostCreateLikesParams {
  feedback_source?: string;
  nectar_module?: string;
  tracking?: string;
  [key: string]: unknown;
}

export interface PostListReactionsParams {
  type?: string;
  [key: string]: unknown;
}

export interface PostUpdateParams {
  attached_media?: Record<string, unknown>[];
  backdated_time?: string;
  backdated_time_granularity?: string;
  composer_session_id?: string;
  direct_share_status?: number;
  explicitly_added_mentionee_ids?: number[];
  feed_story_visibility?: string;
  is_explicit_location?: boolean;
  is_hidden?: boolean;
  is_pinned?: boolean;
  is_published?: boolean;
  message?: string;
  og_action_type_id?: string;
  og_hide_object_attachment?: boolean;
  og_icon_id?: string;
  og_object_id?: string;
  og_phrase?: string;
  og_set_profile_badge?: boolean;
  og_suggestion_mechanism?: string;
  place?: Record<string, unknown>;
  privacy?: string;
  product_item?: Record<string, unknown>;
  scheduled_publish_time?: number;
  should_sync_product_edit?: boolean;
  source_type?: string;
  sponsor_id?: string;
  sponsor_relationship?: number;
  tags?: number[];
  text_format_preset_id?: string;
  timeline_visibility?: string;
  tracking?: string;
  [key: string]: unknown;
}

export function postNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PostFields,
    get: <F extends (keyof PostFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PostFields, F[number]>>(`${id}`, opts),
    update: (params: PostUpdateParams) =>
      client.post<PostFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    attachments: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/attachments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    comments: {
      __path: `${id}/comments`,
      __brand: undefined as unknown as CommentFields,
      list: <F extends (keyof CommentFields)[]>(opts: { fields: F; params?: PostListCommentsParams }) =>
        new Cursor<Pick<CommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: PostCreateCommentsParams) =>
        client.post<CommentFields>(`${id}/comments`, params as Record<string, unknown>),
    },
    dynamicPosts: <F extends (keyof RTBDynamicPostFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<RTBDynamicPostFields, F[number]>>(client, `${id}/dynamic_posts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    insights: <F extends (keyof InsightsResultFields)[]>(opts: { fields: F; params?: PostListInsightsParams }) =>
      new Cursor<Pick<InsightsResultFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    likes: {
      __path: `${id}/likes`,
      __brand: undefined as unknown as PostFields,
      create: (params: PostCreateLikesParams) =>
        client.post<PostFields>(`${id}/likes`, params as Record<string, unknown>),
      delete: (params: PostDeleteLikesParams) =>
        client.delete(`${id}/likes`, params as Record<string, unknown> ?? {}),
    },
    reactions: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: PostListReactionsParams }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/reactions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    sharedposts: <F extends (keyof PostFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PostFields, F[number]>>(client, `${id}/sharedposts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    sponsorTags: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/sponsor_tags`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    to: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/to`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

