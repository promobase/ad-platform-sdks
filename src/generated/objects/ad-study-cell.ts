import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { AdSetFields } from "./ad-set.ts";
import type { CampaignFields } from "./campaign.ts";

export interface AdStudyCellFields {
  ad_entities_count: number;
  ad_ids: string[];
  control_percentage: number;
  id: string;
  name: string;
  treatment_percentage: number;
}

export interface AdStudyCellUpdateParams {
  adaccounts?: number[];
  ads?: string[];
  adsets?: string[];
  campaigns?: string[];
  creation_template?: string;
  description?: string;
  name?: string;
  [key: string]: unknown;
}

export function adStudyCellNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdStudyCellFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdStudyCellFields, F[number]>>(`${id}`, opts),
    update: (params: AdStudyCellUpdateParams) =>
      client.post<AdStudyCellFields>(`${id}`, params as Record<string, unknown>),
    adaccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    adsets: <F extends (keyof AdSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdSetFields, F[number]>>(client, `${id}/adsets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    campaigns: <F extends (keyof CampaignFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CampaignFields, F[number]>>(client, `${id}/campaigns`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

