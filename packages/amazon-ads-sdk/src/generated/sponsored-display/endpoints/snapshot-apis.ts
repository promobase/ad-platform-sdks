// @generated
// fingerprint: sha256:5d8b1f0c234a3bd12911e2696c22cd8f9160a26a256a6f1619d2f2a356a22286
// DO NOT EDIT: generated file; changes will be overwritten.
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
