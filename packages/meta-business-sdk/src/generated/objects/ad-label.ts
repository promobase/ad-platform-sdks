import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdFields } from "./ad.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdCreativeFields } from "./ad-creative.ts";
import type { AdSetFields } from "./ad-set.ts";
import type { CampaignFields } from "./campaign.ts";

export interface AdLabelFields {
  account: AdAccountFields;
  created_time: string;
  id: string;
  name: string;
  updated_time: string;
}

export interface AdLabelUpdateParams {
  name?: string;
  [key: string]: unknown;
}

export function adLabelNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdLabelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdLabelFields, F[number]>>(`${id}`, opts),
    update: (params: AdLabelUpdateParams) =>
      client.post<AdLabelFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    adcreatives: <F extends (keyof AdCreativeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdCreativeFields, F[number]>>(client, `${id}/adcreatives`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    ads: <F extends (keyof AdFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdFields, F[number]>>(client, `${id}/ads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    adsets: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdSetFields, F[number]>>(client, `${id}/adsets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    campaigns: <F extends (keyof CampaignFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CampaignFields, F[number]>>(client, `${id}/campaigns`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

