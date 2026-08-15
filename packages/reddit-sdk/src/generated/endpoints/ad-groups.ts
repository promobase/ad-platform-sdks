// @generated
// fingerprint: sha256:b8206ee094421473ea5786b3ff720e2ba09fbc75a1551328df2a6121f3297125
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Groups — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { AdGroup, AdGroupCreate, AdGroupUpdate } from "../types.ts";
import type { ListAdgroupsParams, CreateAdgroupParams, GetAdgroupParams, UpdateAdgroupParams } from "../params.ts";

/** Ad Groups — 4 endpoints */
export function createAdGroupsClient(api: RedditApiClient) {
  return {
    /** List ad groups */
    async listAdgroups(params: ListAdgroupsParams): Promise<AdGroup[]> {
      const { accountId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/ad_groups`, query);
      return envelope.data as AdGroup[];
    },

    /** Create ad group */
    async createAdgroup(params: CreateAdgroupParams): Promise<AdGroup> {
      const { accountId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/ad_groups`, rest);
      return envelope.data as AdGroup;
    },

    /** Get ad group */
    async getAdgroup(params: GetAdgroupParams): Promise<AdGroup> {
      const { accountId, adGroupId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/ad_groups/${adGroupId}`, query);
      return envelope.data as AdGroup;
    },

    /** Update ad group */
    async updateAdgroup(params: UpdateAdgroupParams): Promise<AdGroup> {
      const { accountId, adGroupId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}/ad_groups/${adGroupId}`, rest);
      return envelope.data as AdGroup;
    },
  };
}
