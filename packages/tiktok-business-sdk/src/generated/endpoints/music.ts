// Auto-generated client for Music — do not edit
import type { FileMusicUploadParams, FileMusicUploadResponse, FileMusicGetParams, FileMusicGetResponse } from "../types/music.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createMusic(opts: { accessToken: string; advertiserId: string }) {
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
    /** Upload a piece of music */
    async musicUpload(params: FileMusicUploadParams): Promise<FileMusicUploadResponse> {
      return post<FileMusicUploadResponse>("/open_api/v1.3/file/music/upload/", params as unknown as Record<string, unknown>);
    },

    /** Get the music list */
    async getMusic(params: FileMusicGetParams): Promise<FileMusicGetResponse> {
      return get<FileMusicGetResponse>("/open_api/v1.3/file/music/get/", params as unknown as Record<string, unknown>);
    },
  };
}
