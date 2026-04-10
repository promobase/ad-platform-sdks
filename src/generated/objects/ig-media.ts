import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { BrandedContentShadowIGUserIDFields } from "./branded-content-shadow-ig-user-id.ts";
import type { IGBoostMediaAdFields } from "./ig-boost-media-ad.ts";
import type { IGCommentFields } from "./ig-comment.ts";
import type { IGMediaBoostEligibilityInfoFields } from "./ig-media-boost-eligibility-info.ts";
import type { IGUserFields } from "./ig-user.ts";
import type { IGVideoCopyrightCheckMatchesInformationFields } from "./ig-video-copyright-check-matches-information.ts";
import type { InstagramInsightsResultFields } from "./instagram-insights-result.ts";
import type { ShadowIGMediaCollaboratorsFields } from "./shadow-ig-media-collaborators.ts";
import type { ShadowIGMediaProductTagsFields } from "./shadow-ig-media-product-tags.ts";
import type { UserFields } from "./user.ts";

export interface IGMediaFields {
  alt_text: string;
  boost_eligibility_info: IGMediaBoostEligibilityInfoFields;
  caption: string;
  comments_count: number;
  copyright_check_information: IGVideoCopyrightCheckMatchesInformationFields;
  current_live_viewer_count: number;
  has_poll: boolean;
  has_slider: boolean;
  id: string;
  ig_id: string;
  is_comment_enabled: boolean;
  is_shared_to_feed: boolean;
  legacy_instagram_media_id: string;
  like_count: number;
  media_product_type: string;
  media_type: string;
  media_url: string;
  owner: IGUserFields;
  permalink: string;
  shortcode: string;
  thumbnail_url: string;
  timestamp: string;
  username: string;
  video_title: string;
  view_count: number;
}

export interface IGMediaCreateBrandedContentPartnerPromoteParams {
  permission: boolean;
  sponsor_id: number;
  [key: string]: unknown;
}

export interface IGMediaCreateCommentsParams {
  ad_id?: string;
  message?: string;
  [key: string]: unknown;
}

export interface IGMediaListInsightsParams {
  breakdown?: string[];
  metric: string[];
  period?: string[];
  [key: string]: unknown;
}

export interface IGMediaCreateProductTagsParams {
  child_index?: number;
  updated_tags: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface IGMediaUpdateParams {
  comment_enabled?: boolean;
  [key: string]: unknown;
}

export function iGMediaNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGMediaFields, F[number]>>(`${id}`, opts),
    update: (params: IGMediaUpdateParams) =>
      client.post<IGMediaFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    boostAdsList: <F extends (keyof IGBoostMediaAdFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGBoostMediaAdFields, F[number]>>(client, `${id}/boost_ads_list`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    brandedContentPartnerPromote: {
      list: <F extends (keyof BrandedContentShadowIGUserIDFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<BrandedContentShadowIGUserIDFields, F[number]>>(client, `${id}/branded_content_partner_promote`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: IGMediaCreateBrandedContentPartnerPromoteParams) =>
        client.post<BrandedContentShadowIGUserIDFields>(`${id}/branded_content_partner_promote`, params as Record<string, unknown>),
    },
    children: <F extends (keyof IGMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGMediaFields, F[number]>>(client, `${id}/children`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    collaborators: <F extends (keyof ShadowIGMediaCollaboratorsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ShadowIGMediaCollaboratorsFields, F[number]>>(client, `${id}/collaborators`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    comments: {
      list: <F extends (keyof IGCommentFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<IGCommentFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: IGMediaCreateCommentsParams) =>
        client.post<IGCommentFields>(`${id}/comments`, params as Record<string, unknown>),
    },
    insights: <F extends (keyof InstagramInsightsResultFields)[]>(opts: { fields: F; params?: IGMediaListInsightsParams }) =>
      new Cursor<Pick<InstagramInsightsResultFields, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    partnershipAdCode: {
      create: (params: Record<string, unknown>) =>
        client.post<Record<string, unknown>>(`${id}/partnership_ad_code`, params as Record<string, unknown>),
      delete: (params?: Record<string, unknown>) =>
        client.delete(`${id}/partnership_ad_code`, params as Record<string, unknown> ?? {}),
    },
    productTags: {
      list: <F extends (keyof ShadowIGMediaProductTagsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ShadowIGMediaProductTagsFields, F[number]>>(client, `${id}/product_tags`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: IGMediaCreateProductTagsParams) =>
        client.post<ShadowIGMediaProductTagsFields>(`${id}/product_tags`, params as Record<string, unknown>),
    },
  };
}

