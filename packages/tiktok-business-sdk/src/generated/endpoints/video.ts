// Auto-generated client for Video — do not edit
import type { FileVideoAdUploadParams, FileVideoAdUploadResponse, FileVideoAdUpdateParams, FileVideoAdUpdateResponse, FileVideoAdInfoParams, FileVideoAdInfoResponse, FileVideoAdSearchParams, FileVideoAdSearchResponse, FileVideoSuggestcoverParams, FileVideoSuggestcoverResponse } from "../types/video.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createVideo(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
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
