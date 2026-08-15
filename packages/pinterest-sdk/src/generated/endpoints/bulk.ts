// @generated
// fingerprint: sha256:23ec25b256e14bf7915b0f9ed189551481487d6d90c38143381c24c78593365e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for bulk — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { BulkRequestGetResponse, BulkDownloadCreateResponse, BulkUpsertCreateResponse } from "../types.ts";
import type { GetBulkRequestParams, CreateBulkDownloadParams, CreateBulkUpsertParams } from "../params.ts";

/** bulk — 3 endpoints */
export function createBulkClient(api: PinterestApiClient) {
  return {
    /** Download advertiser entities in bulk
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getBulkRequest(params: GetBulkRequestParams): Promise<BulkRequestGetResponse> {
      const { adAccountId, bulkRequestId, ...query } = params;
      const envelope = await api.get<BulkRequestGetResponse>(`/ad_accounts/${adAccountId}/bulk/${bulkRequestId}`, query);
      return envelope;
    },

    /** Get advertiser entities in bulk
   * Requires pinterest_oauth2: ads:read. */
    async createBulkDownload(params: CreateBulkDownloadParams): Promise<BulkDownloadCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<BulkDownloadCreateResponse>(`/ad_accounts/${adAccountId}/bulk/download`, rest);
      return envelope;
    },

    /** Create/update ad entities in bulk
   * Requires pinterest_oauth2: ads:write. */
    async createBulkUpsert(params: CreateBulkUpsertParams): Promise<BulkUpsertCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<BulkUpsertCreateResponse>(`/ad_accounts/${adAccountId}/bulk/upsert`, rest);
      return envelope;
    },
  };
}
