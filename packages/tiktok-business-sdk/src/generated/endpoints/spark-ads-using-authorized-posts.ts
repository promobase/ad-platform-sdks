// Auto-generated client for Spark Ads Using Authorized Posts — do not edit
import type { TtVideoInfoParams, TtVideoInfoResponse, TtVideoAuthorizeParams, TtVideoAuthorizeResponse, TtVideoListParams, TtVideoListResponse, TtVideoUnbindParams, TtVideoUnbindResponse } from "../types/spark-ads-using-authorized-posts.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createSparkAdsUsingAuthorizedPosts(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get info about a Spark Ad post */
    async ttVideoInfo(params: TtVideoInfoParams): Promise<TtVideoInfoResponse> {
      return get<TtVideoInfoResponse>("/open_api/v1.3/tt_video/info/", params as unknown as Record<string, unknown>);
    },

    /** Apply an authorization code */
    async ttVideoAuthorize(params: TtVideoAuthorizeParams): Promise<TtVideoAuthorizeResponse> {
      return post<TtVideoAuthorizeResponse>("/open_api/v1.3/tt_video/authorize/", params as unknown as Record<string, unknown>);
    },

    /** Get Spark Ad posts */
    async listTtVideo(params: TtVideoListParams): Promise<TtVideoListResponse> {
      return get<TtVideoListResponse>("/open_api/v1.3/tt_video/list/", params as unknown as Record<string, unknown>);
    },

    /** Unbind a Spark Ad post */
    async ttVideoUnbind(params: TtVideoUnbindParams): Promise<TtVideoUnbindResponse> {
      return post<TtVideoUnbindResponse>("/open_api/v1.3/tt_video/unbind/", params as unknown as Record<string, unknown>);
    },
  };
}
