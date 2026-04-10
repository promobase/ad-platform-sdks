import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";

export interface IGUserExportForCAMFields {
  age_bucket: string;
  biography: string;
  country: string;
  email: string;
  gender: string;
  has_brand_partnership_experience: boolean;
  id: string;
  is_account_verified: boolean;
  is_paid_partnership_messages_enabled: boolean;
  messaging_id: string;
  onboarded_status: boolean;
  past_brand_partnership_partners: string[];
  portfolio_url: string;
  profile_picture_url: string;
  username: string;
}

export interface IGUserExportForCAMListInsightsParams {
  breakdown?: string;
  metrics?: string[];
  period?: string;
  time_range?: string;
  [key: string]: unknown;
}

export function iGUserExportForCAMNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as IGUserExportForCAMFields,
    brandedContentMedia: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/branded_content_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    insights: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: IGUserExportForCAMListInsightsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/insights`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    pastPartnershipAdsMedia: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/past_partnership_ads_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    recentMedia: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/recent_media`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

