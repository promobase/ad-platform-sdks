// Auto-generated client for Negative Keywords — do not edit
import type { SearchAdNegativeKeywordGetParams, SearchAdNegativeKeywordGetResponse, SearchAdNegativeKeywordAddParams, SearchAdNegativeKeywordAddResponse, SearchAdNegativeKeywordUpdateParams, SearchAdNegativeKeywordUpdateResponse, SearchAdNegativeKeywordDeleteParams, SearchAdNegativeKeywordDeleteResponse, SearchAdNegativeKeywordDownloadParams, SearchAdNegativeKeywordDownloadResponse } from "../types/negative-keywords.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createNegativeKeywords(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get negative keywords */
    async getNegativeKeyword(params: SearchAdNegativeKeywordGetParams): Promise<SearchAdNegativeKeywordGetResponse> {
      return get<SearchAdNegativeKeywordGetResponse>("/open_api/v1.3/search_ad/negative_keyword/get/", params as unknown as Record<string, unknown>);
    },

    /** Create negative keywords */
    async negativeKeywordAdd(params: SearchAdNegativeKeywordAddParams): Promise<SearchAdNegativeKeywordAddResponse> {
      return post<SearchAdNegativeKeywordAddResponse>("/open_api/v1.3/search_ad/negative_keyword/add/", params as unknown as Record<string, unknown>);
    },

    /** Update a negative keyword */
    async updateNegativeKeyword(params: SearchAdNegativeKeywordUpdateParams): Promise<SearchAdNegativeKeywordUpdateResponse> {
      return post<SearchAdNegativeKeywordUpdateResponse>("/open_api/v1.3/search_ad/negative_keyword/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete negative keywords */
    async deleteNegativeKeyword(params: SearchAdNegativeKeywordDeleteParams): Promise<SearchAdNegativeKeywordDeleteResponse> {
      return post<SearchAdNegativeKeywordDeleteResponse>("/open_api/v1.3/search_ad/negative_keyword/delete/", params as unknown as Record<string, unknown>);
    },

    /** Download negative keywords */
    async negativeKeywordDownload(params: SearchAdNegativeKeywordDownloadParams): Promise<SearchAdNegativeKeywordDownloadResponse> {
      return get<SearchAdNegativeKeywordDownloadResponse>("/open_api/v1.3/search_ad/negative_keyword/download/", params as unknown as Record<string, unknown>);
    },
  };
}
