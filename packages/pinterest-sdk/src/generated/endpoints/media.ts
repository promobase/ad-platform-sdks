// @generated
// fingerprint: sha256:b1873a776797a1081de770f56927e45f3fc15482f196562b74347d7a50bc92ec
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for media — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { MediaListResponse, MediaCreateResponse, MediaGetResponse } from "../types.ts";
import type { ListMediaParams, CreateMediaParams, GetMediaParams } from "../params.ts";

/** media — 3 endpoints */
export function createMediaClient(api: PinterestApiClient) {
  return {
    /** List media uploads
   * Requires pinterest_oauth2: pins:read. */
    async listMedia(params: ListMediaParams): Promise<MediaListResponse> {
      const query = params;
      const envelope = await api.get<MediaListResponse>(`/media`, query);
      return envelope;
    },

    /** Register media upload
   * Requires pinterest_oauth2: pins:read, pins:write. */
    async createMedia(params: CreateMediaParams): Promise<MediaCreateResponse> {
      const rest = params;
      const envelope = await api.post<MediaCreateResponse>(`/media`, rest);
      return envelope;
    },

    /** Get media upload details
   * Requires pinterest_oauth2: pins:read. */
    async getMedia(params: GetMediaParams): Promise<MediaGetResponse> {
      const { mediaId, ...query } = params;
      const envelope = await api.get<MediaGetResponse>(`/media/${mediaId}`, query);
      return envelope;
    },
  };
}
