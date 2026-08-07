// Auto-generated client for Snapshot APIs — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { CreateSnapshotResponse, GetSnapshotByIdResponse, DownloadSnapshotByIdResponse } from "../types.ts";
import type { CreateSnapshotParams, GetSnapshotByIdParams, GetDownloadSnapshotByIdParams } from "../params.ts";

/** Snapshot APIs — 3 endpoints */
export function createSnapshotApisClient(api: AmazonAdsApiClient) {
  return {
    /** createSnapshot */
    async createSnapshot(params: CreateSnapshotParams): Promise<CreateSnapshotResponse> {
      const { recordType, ...rest } = params;
      const envelope = await api.post<CreateSnapshotResponse>(`/sd/${recordType}/snapshot`, rest);
      return envelope;
    },

    /** getSnapshotById */
    async getSnapshotById(params: GetSnapshotByIdParams): Promise<GetSnapshotByIdResponse> {
      const { snapshotId, ...query } = params;
      const envelope = await api.get<GetSnapshotByIdResponse>(`/sd/snapshots/${snapshotId}`, query);
      return envelope;
    },

    /** downloadSnapshotById */
    async getDownloadSnapshotById(params: GetDownloadSnapshotByIdParams): Promise<DownloadSnapshotByIdResponse> {
      const { snapshotId, ...query } = params;
      const envelope = await api.get<DownloadSnapshotByIdResponse>(`/sd/snapshots/${snapshotId}/download`, query);
      return envelope;
    },
  };
}
