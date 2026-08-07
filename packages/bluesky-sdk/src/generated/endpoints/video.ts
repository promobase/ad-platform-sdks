// Auto-generated client for app.bsky.video — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyVideoDefsJobStatus, GetJobStatusResponse, GetUploadLimitsResponse, UploadVideoResponse } from "../types.ts";
import type { GetJobStatusParams, GetUploadLimitsParams, UploadVideoParams } from "../params.ts";

/** app.bsky.video — 3 endpoints */
export function createVideoClient(api: BlueskyApiClient) {
  return {
    /** Get status details for a video processing job. */
    async getJobStatus(params: GetJobStatusParams): Promise<GetJobStatusResponse> {
      const envelope = await api.get<GetJobStatusResponse>("/xrpc/app.bsky.video.getJobStatus", params);
      return envelope;
    },

    /** Get video upload limits for the authenticated user. */
    async getUploadLimits(params: GetUploadLimitsParams): Promise<GetUploadLimitsResponse> {
      const envelope = await api.get<GetUploadLimitsResponse>("/xrpc/app.bsky.video.getUploadLimits", params);
      return envelope;
    },

    /** Upload a video to be processed then stored on the PDS. */
    async uploadVideo(params: UploadVideoParams): Promise<UploadVideoResponse> {
      const envelope = await api.post<UploadVideoResponse>("/xrpc/app.bsky.video.uploadVideo", params, undefined);
      return envelope;
    },
  };
}
