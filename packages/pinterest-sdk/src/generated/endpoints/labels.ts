// Auto-generated client for labels — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { LabelsListResponse, LabelsCreateResponse, LabelsUpdateResponse, LabelsApplyResponse, LabelsRemoveResponse } from "../types.ts";
import type { ListLabelsParams, CreateLabelParams, UpdateLabelParams, PostLabelsApplyParams, DeleteLabelParams } from "../params.ts";

/** labels — 5 endpoints */
export function createLabelsClient(api: PinterestApiClient) {
  return {
    /** List labels
   * Requires pinterest_oauth2: ads:read. */
    async listLabels(params: ListLabelsParams): Promise<LabelsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<LabelsListResponse>(`/ad_accounts/${adAccountId}/labels`, query);
      return envelope;
    },

    /** Create labels
   * Requires pinterest_oauth2: ads:write. */
    async createLabel(params: CreateLabelParams): Promise<LabelsCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<LabelsCreateResponse>(`/ad_accounts/${adAccountId}/labels`, rest);
      return envelope;
    },

    /** Update labels
   * Requires pinterest_oauth2: ads:write. */
    async updateLabel(params: UpdateLabelParams): Promise<LabelsUpdateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.patch<LabelsUpdateResponse>(`/ad_accounts/${adAccountId}/labels`, rest);
      return envelope;
    },

    /** Apply label to entity
   * Requires pinterest_oauth2: ads:write. */
    async postLabelsApply(params: PostLabelsApplyParams): Promise<LabelsApplyResponse> {
      const { adAccountId, labelId, ...rest } = params;
      const envelope = await api.post<LabelsApplyResponse>(`/ad_accounts/${adAccountId}/labels/${labelId}/apply`, rest);
      return envelope;
    },

    /** Remove label from entities
   * Requires pinterest_oauth2: ads:write. */
    async deleteLabel(params: DeleteLabelParams): Promise<LabelsRemoveResponse> {
      const { adAccountId, labelId, ...rest } = params;
      const envelope = await api.post<LabelsRemoveResponse>(`/ad_accounts/${adAccountId}/labels/${labelId}/remove`, rest);
      return envelope;
    },
  };
}
