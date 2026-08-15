// @generated
// fingerprint: sha256:1acbd6cd7d54ef6e89a9da26bdaf64c29bcea160db4f959ca04b73469735794a
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for audiences — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AudiencesCreateResponse, AudiencesListResponse, AudiencesUpdateResponse, AudiencesGetResponse } from "../types.ts";
import type { CreateAudienceParams, ListAudiencesParams, UpdateAudienceParams, GetAudiencesParams } from "../params.ts";

/** audiences — 4 endpoints */
export function createAudiencesClient(api: PinterestApiClient) {
  return {
    /** Create audience
   * Requires pinterest_oauth2: ads:write. */
    async createAudience(params: CreateAudienceParams): Promise<AudiencesCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<AudiencesCreateResponse>(`/ad_accounts/${adAccountId}/audiences`, rest);
      return envelope;
    },

    /** List audiences
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAudiences(params: ListAudiencesParams): Promise<AudiencesListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AudiencesListResponse>(`/ad_accounts/${adAccountId}/audiences`, query);
      return envelope;
    },

    /** Update audience
   * Requires pinterest_oauth2: ads:write. */
    async updateAudience(params: UpdateAudienceParams): Promise<AudiencesUpdateResponse> {
      const { audienceId, adAccountId, ...rest } = params;
      const envelope = await api.patch<AudiencesUpdateResponse>(`/ad_accounts/${adAccountId}/audiences/${audienceId}`, rest);
      return envelope;
    },

    /** Get audience
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAudiences(params: GetAudiencesParams): Promise<AudiencesGetResponse> {
      const { audienceId, adAccountId, ...query } = params;
      const envelope = await api.get<AudiencesGetResponse>(`/ad_accounts/${adAccountId}/audiences/${audienceId}`, query);
      return envelope;
    },
  };
}
