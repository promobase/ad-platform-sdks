// Auto-generated client for conversion_deletion_requests — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { ConversionDeletionRequestListResponse, ConversionDeletionRequestCreateResponse, ConversionDeletionRequestGetResponse, ConversionDeletionRequestDeleteResponse } from "../types.ts";
import type { ListConversionDeletionRequestParams, CreateConversionDeletionRequestParams, GetConversionDeletionRequestParams, DeleteConversionDeletionRequestParams } from "../params.ts";

/** conversion_deletion_requests — 4 endpoints */
export function createConversionDeletionRequestsClient(api: PinterestApiClient) {
  return {
    /** List conversion deletion requests
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listConversionDeletionRequest(params: ListConversionDeletionRequestParams): Promise<ConversionDeletionRequestListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<ConversionDeletionRequestListResponse>(`/ad_accounts/${adAccountId}/conversion_deletion_requests`, query);
      return envelope;
    },

    /** Create a conversion deletion request
   * Requires pinterest_oauth2: ads:write; client_credentials: ads:write. */
    async createConversionDeletionRequest(params: CreateConversionDeletionRequestParams): Promise<ConversionDeletionRequestCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<ConversionDeletionRequestCreateResponse>(`/ad_accounts/${adAccountId}/conversion_deletion_requests`, rest);
      return envelope;
    },

    /** Get a single conversion deletion request
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getConversionDeletionRequest(params: GetConversionDeletionRequestParams): Promise<ConversionDeletionRequestGetResponse> {
      const { requestId, adAccountId, ...query } = params;
      const envelope = await api.get<ConversionDeletionRequestGetResponse>(`/ad_accounts/${adAccountId}/conversion_deletion_requests/${requestId}`, query);
      return envelope;
    },

    /** Delete a conversion deletion request
   * Requires pinterest_oauth2: ads:write; client_credentials: ads:write. */
    async deleteConversionDeletionRequest(params: DeleteConversionDeletionRequestParams): Promise<ConversionDeletionRequestDeleteResponse> {
      const { requestId, adAccountId } = params;
      const envelope = await api.delete<ConversionDeletionRequestDeleteResponse>(`/ad_accounts/${adAccountId}/conversion_deletion_requests/${requestId}`);
      return envelope;
    },
  };
}
