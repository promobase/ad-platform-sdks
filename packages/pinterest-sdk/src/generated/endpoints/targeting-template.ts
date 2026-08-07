// Auto-generated client for targeting_template — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { TargetingTemplateListResponse, TargetingTemplateCreateResponse } from "../types.ts";
import type { ListTargetingTemplateParams, CreateTargetingTemplateParams, UpdateTargetingTemplateParams } from "../params.ts";

/** targeting_template — 3 endpoints */
export function createTargetingTemplateClient(api: PinterestApiClient) {
  return {
    /** List targeting templates
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listTargetingTemplate(params: ListTargetingTemplateParams): Promise<TargetingTemplateListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<TargetingTemplateListResponse>(`/ad_accounts/${adAccountId}/targeting_templates`, query);
      return envelope;
    },

    /** Create targeting templates
   * Requires pinterest_oauth2: ads:write. */
    async createTargetingTemplate(params: CreateTargetingTemplateParams): Promise<TargetingTemplateCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<TargetingTemplateCreateResponse>(`/ad_accounts/${adAccountId}/targeting_templates`, rest);
      return envelope;
    },

    /** Update targeting templates
   * Requires pinterest_oauth2: ads:write. */
    async updateTargetingTemplate(params: UpdateTargetingTemplateParams): Promise<unknown> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.patch<unknown>(`/ad_accounts/${adAccountId}/targeting_templates`, rest);
      return envelope;
    },
  };
}
