// @generated
// fingerprint: sha256:e6b8f19544771ffded056767047b26477be870ce61c71412d76bc2c20d946140
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Playable Ads — do not edit
import type { PlayableUploadParams, PlayableUploadResponse, PlayableValidateParams, PlayableValidateResponse, PlayableSaveParams, PlayableSaveResponse, PlayableGetParams, PlayableGetResponse, PlayableDeleteParams, PlayableDeleteResponse } from "../types/playable-ads.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createPlayableAds(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {
  const apiBase = (opts.baseUrl ?? TT_API_BASE).replace(/\/$/, "");
  const fetchImpl = opts.fetch ?? fetch;

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetchImpl(`${apiBase}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetchImpl(`${apiBase}${path}`, {
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
    /** Upload a playable asset */
    async playableUpload(params: PlayableUploadParams): Promise<PlayableUploadResponse> {
      return post<PlayableUploadResponse>("/open_api/v1.3/playable/upload/", params as unknown as Record<string, unknown>);
    },

    /** Check the status of a playable asset */
    async playableValidate(params: PlayableValidateParams): Promise<PlayableValidateResponse> {
      return get<PlayableValidateResponse>("/open_api/v1.3/playable/validate/", params as unknown as Record<string, unknown>);
    },

    /** Save a playable asset */
    async playableSave(params: PlayableSaveParams): Promise<PlayableSaveResponse> {
      return post<PlayableSaveResponse>("/open_api/v1.3/playable/save/", params as unknown as Record<string, unknown>);
    },

    /** Get playable assets */
    async getPlayable(params: PlayableGetParams): Promise<PlayableGetResponse> {
      return get<PlayableGetResponse>("/open_api/v1.3/playable/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete a playable asset */
    async deletePlayable(params: PlayableDeleteParams): Promise<PlayableDeleteResponse> {
      return post<PlayableDeleteResponse>("/open_api/v1.3/playable/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
