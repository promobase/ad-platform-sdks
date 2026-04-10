// Auto-generated client for Change Log — do not edit
import type { ChangelogTaskCreateParams, ChangelogTaskCreateResponse, ChangelogTaskCheckParams, ChangelogTaskCheckResponse, ChangelogTaskDownloadParams, ChangelogTaskDownloadResponse } from "../types/change-log.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createChangeLog(opts: { accessToken: string; advertiserId: string }) {
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
    /** Create a change log download task */
    async createTask(params: ChangelogTaskCreateParams): Promise<ChangelogTaskCreateResponse> {
      return post<ChangelogTaskCreateResponse>("/open_api/v1.3/changelog/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Check the status of a download task */
    async taskCheck(params: ChangelogTaskCheckParams): Promise<ChangelogTaskCheckResponse> {
      return get<ChangelogTaskCheckResponse>("/open_api/v1.3/changelog/task/check/", params as unknown as Record<string, unknown>);
    },

    /** Get the downloaded file */
    async taskDownload(params: ChangelogTaskDownloadParams): Promise<ChangelogTaskDownloadResponse> {
      return get<ChangelogTaskDownloadResponse>("/open_api/v1.3/changelog/task/download/", params as unknown as Record<string, unknown>);
    },
  };
}
