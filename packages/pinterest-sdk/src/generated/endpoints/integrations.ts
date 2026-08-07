// Auto-generated client for integrations — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { IntegrationsGetListResponse, IntegrationsGetByIdResponse, IntegrationsCommercePostResponse, IntegrationsCommerceGetResponse, IntegrationsCommercePatchResponse, IntegrationsCommerceDelResponse, IntegrationsLogsPostResponse } from "../types.ts";
import type { ListIntegrationsGetListParams, GetIntegrationsGetByIdParams, PostIntegrationsCommercePostParams, GetIntegrationsCommerceParams, PatchIntegrationsCommercePatchParams, DeleteIntegrationsCommerceDelParams, PostIntegrationsLogsPostParams } from "../params.ts";

/** integrations — 7 endpoints */
export function createIntegrationsClient(api: PinterestApiClient) {
  return {
    /** Get integration metadata list
   * Requires pinterest_oauth2: ads:read. */
    async listIntegrationsGetList(params: ListIntegrationsGetListParams): Promise<IntegrationsGetListResponse> {
      const query = params;
      const envelope = await api.get<IntegrationsGetListResponse>(`/integrations`, query);
      return envelope;
    },

    /** Get integration metadata
   * Requires pinterest_oauth2: ads:read. */
    async getIntegrationsGetById(params: GetIntegrationsGetByIdParams): Promise<IntegrationsGetByIdResponse> {
      const { id, ...query } = params;
      const envelope = await api.get<IntegrationsGetByIdResponse>(`/integrations/${id}`, query);
      return envelope;
    },

    /** Create commerce integration
   * Requires pinterest_oauth2: ads:write. */
    async postIntegrationsCommercePost(params: PostIntegrationsCommercePostParams): Promise<IntegrationsCommercePostResponse> {
      const rest = params;
      const envelope = await api.post<IntegrationsCommercePostResponse>(`/integrations/commerce`, rest);
      return envelope;
    },

    /** Get commerce integration
   * Requires pinterest_oauth2: ads:read. */
    async getIntegrationsCommerce(params: GetIntegrationsCommerceParams): Promise<IntegrationsCommerceGetResponse> {
      const { externalBusinessId, ...query } = params;
      const envelope = await api.get<IntegrationsCommerceGetResponse>(`/integrations/commerce/${externalBusinessId}`, query);
      return envelope;
    },

    /** Update commerce integration
   * Requires pinterest_oauth2: ads:write. */
    async patchIntegrationsCommercePatch(params: PatchIntegrationsCommercePatchParams): Promise<IntegrationsCommercePatchResponse> {
      const { externalBusinessId, ...rest } = params;
      const envelope = await api.patch<IntegrationsCommercePatchResponse>(`/integrations/commerce/${externalBusinessId}`, rest);
      return envelope;
    },

    /** Delete commerce integration
   * Requires pinterest_oauth2: ads:write. */
    async deleteIntegrationsCommerceDel(params: DeleteIntegrationsCommerceDelParams): Promise<IntegrationsCommerceDelResponse> {
      const { externalBusinessId } = params;
      const envelope = await api.delete<IntegrationsCommerceDelResponse>(`/integrations/commerce/${externalBusinessId}`);
      return envelope;
    },

    /** Receives batched logs from integration applications.
   * Requires pinterest_oauth2: ads:write. */
    async postIntegrationsLogsPost(params: PostIntegrationsLogsPostParams): Promise<IntegrationsLogsPostResponse> {
      const rest = params;
      const envelope = await api.post<IntegrationsLogsPostResponse>(`/integrations/logs`, rest);
      return envelope;
    },
  };
}
