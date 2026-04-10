// Auto-generated client for Ad Comments - Blocked Words — do not edit
import type { BlockedwordCreateParams, BlockedwordCreateResponse, BlockedwordUpdateParams, BlockedwordUpdateResponse, BlockedwordCheckParams, BlockedwordCheckResponse, BlockedwordListParams, BlockedwordListResponse, BlockedwordDeleteParams, BlockedwordDeleteResponse, BlockedwordTaskCreateParams, BlockedwordTaskCreateResponse, BlockedwordTaskCheckParams, BlockedwordTaskCheckResponse, BlockedwordTaskDownloadParams, BlockedwordTaskDownloadResponse } from "../types/ad-comments-blocked-words.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAdCommentsBlockedWords(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create blocked words */
    async createBlockedword(params: BlockedwordCreateParams): Promise<BlockedwordCreateResponse> {
      return post<BlockedwordCreateResponse>("/open_api/v1.3/blockedword/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a blocked word */
    async updateBlockedword(params: BlockedwordUpdateParams): Promise<BlockedwordUpdateResponse> {
      return post<BlockedwordUpdateResponse>("/open_api/v1.3/blockedword/update/", params as unknown as Record<string, unknown>);
    },

    /** Check the statuses of words */
    async blockedwordCheck(params: BlockedwordCheckParams): Promise<BlockedwordCheckResponse> {
      return get<BlockedwordCheckResponse>("/open_api/v1.3/blockedword/check/", params as unknown as Record<string, unknown>);
    },

    /** Get blocked words */
    async listBlockedword(params: BlockedwordListParams): Promise<BlockedwordListResponse> {
      return get<BlockedwordListResponse>("/open_api/v1.3/blockedword/list/", params as unknown as Record<string, unknown>);
    },

    /** Delete blocked words */
    async deleteBlockedword(params: BlockedwordDeleteParams): Promise<BlockedwordDeleteResponse> {
      return post<BlockedwordDeleteResponse>("/open_api/v1.3/blockedword/delete/", params as unknown as Record<string, unknown>);
    },

    /** Create an export task (blocked words) */
    async createTask(params: BlockedwordTaskCreateParams): Promise<BlockedwordTaskCreateResponse> {
      return post<BlockedwordTaskCreateResponse>("/open_api/v1.3/blockedword/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Check the status of an export task (blocked words) */
    async taskCheck(params: BlockedwordTaskCheckParams): Promise<BlockedwordTaskCheckResponse> {
      return get<BlockedwordTaskCheckResponse>("/open_api/v1.3/blockedword/task/check/", params as unknown as Record<string, unknown>);
    },

    /** Download exported data */
    async taskDownload(params: BlockedwordTaskDownloadParams): Promise<BlockedwordTaskDownloadResponse> {
      return get<BlockedwordTaskDownloadResponse>("/open_api/v1.3/blockedword/task/download/", params as unknown as Record<string, unknown>);
    },
  };
}
