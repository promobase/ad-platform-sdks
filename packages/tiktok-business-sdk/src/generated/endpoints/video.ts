// @generated
// fingerprint: sha256:3bb09004205568d3a91a3f75b7b71651b995d6c7a547f0ac66aa4af124a68887
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Video — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { FileVideoAdUploadParams, FileVideoAdUploadResponse, FileVideoAdUpdateParams, FileVideoAdUpdateResponse, FileVideoAdInfoParams, FileVideoAdInfoResponse, FileVideoAdSearchParams, FileVideoAdSearchResponse, FileVideoSuggestcoverParams, FileVideoSuggestcoverResponse } from "../types/video.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createVideo(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
  }

  return {
    /** Upload a video */
    async adUpload(params: FileVideoAdUploadParams): Promise<FileVideoAdUploadResponse> {
      return post<FileVideoAdUploadResponse>("/open_api/v1.3/file/video/ad/upload/", params as unknown as Record<string, unknown>);
    },

    /** Update the name of a video */
    async updateAd(params: FileVideoAdUpdateParams): Promise<FileVideoAdUpdateResponse> {
      return post<FileVideoAdUpdateResponse>("/open_api/v1.3/file/video/ad/update/", params as unknown as Record<string, unknown>);
    },

    /** Get info about videos */
    async adInfo(params: FileVideoAdInfoParams): Promise<FileVideoAdInfoResponse> {
      return get<FileVideoAdInfoResponse>("/open_api/v1.3/file/video/ad/info/", params as unknown as Record<string, unknown>);
    },

    /** Search for videos */
    async adSearch(params: FileVideoAdSearchParams): Promise<FileVideoAdSearchResponse> {
      return get<FileVideoAdSearchResponse>("/open_api/v1.3/file/video/ad/search/", params as unknown as Record<string, unknown>);
    },

    /** Get suggested thumbnails for a video */
    async videoSuggestcover(params: FileVideoSuggestcoverParams): Promise<FileVideoSuggestcoverResponse> {
      return get<FileVideoSuggestcoverResponse>("/open_api/v1.3/file/video/suggestcover/", params as unknown as Record<string, unknown>);
    },
  };
}
