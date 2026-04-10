// Auto-generated client for Media Mix Modeling — do not edit
import type { MmmApiCreateParams, MmmApiCreateResponse, MmmApiCheckParams, MmmApiCheckResponse, MmmApiDownloadParams, MmmApiDownloadResponse, MmmApiHistoryParams, MmmApiHistoryResponse } from "../types/media-mix-modeling.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createMediaMixModeling(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create an MMM data request */
    async createApi(params: MmmApiCreateParams): Promise<MmmApiCreateResponse> {
      return post<MmmApiCreateResponse>("/open_api/v1.3/mmm/api/create/", params as unknown as Record<string, unknown>);
    },

    /** Check the status of an MMM data request */
    async apiCheck(params: MmmApiCheckParams): Promise<MmmApiCheckResponse> {
      return get<MmmApiCheckResponse>("/open_api/v1.3/mmm/api/check/", params as unknown as Record<string, unknown>);
    },

    /** Obtain the download URL for MMM data */
    async apiDownload(params: MmmApiDownloadParams): Promise<MmmApiDownloadResponse> {
      return get<MmmApiDownloadResponse>("/open_api/v1.3/mmm/api/download/", params as unknown as Record<string, unknown>);
    },

    /** Get the MMM data request history */
    async apiHistory(params: MmmApiHistoryParams): Promise<MmmApiHistoryResponse> {
      return get<MmmApiHistoryResponse>("/open_api/v1.3/mmm/api/history/", params as unknown as Record<string, unknown>);
    },
  };
}
