// Auto-generated client for Discovery — do not edit
import type { DiscoveryTrendingListParams, DiscoveryTrendingListResponse, DiscoveryDetailParams, DiscoveryDetailResponse, DiscoveryVideoListParams, DiscoveryVideoListResponse, DiscoveryCmlTrendingListParams, DiscoveryCmlTrendingListResponse, DiscoveryCmlVideoListParams, DiscoveryCmlVideoListResponse, DiscoveryTrendingSearchParams, DiscoveryTrendingSearchResponse, DiscoveryTrendingSearchKeywordParams, DiscoveryTrendingSearchKeywordResponse } from "../types/discovery.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createDiscovery(opts: { accessToken: string; advertiserId: string }) {
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
    /** Get popular hashtags */
    async discoveryTrendingList(params: DiscoveryTrendingListParams): Promise<DiscoveryTrendingListResponse> {
      return get<DiscoveryTrendingListResponse>("/open_api/v1.3/discovery/trending_list/", params as unknown as Record<string, unknown>);
    },

    /** Get details of a popular hashtag */
    async discoveryDetail(params: DiscoveryDetailParams): Promise<DiscoveryDetailResponse> {
      return get<DiscoveryDetailResponse>("/open_api/v1.3/discovery/detail/", params as unknown as Record<string, unknown>);
    },

    /** Get trending videos related to hashtags */
    async discoveryVideoList(params: DiscoveryVideoListParams): Promise<DiscoveryVideoListResponse> {
      return get<DiscoveryVideoListResponse>("/open_api/v1.3/discovery/video_list/", params as unknown as Record<string, unknown>);
    },

    /** Get popular tracks from the Commercial Music Library */
    async cmlTrendingList(params: DiscoveryCmlTrendingListParams): Promise<DiscoveryCmlTrendingListResponse> {
      return get<DiscoveryCmlTrendingListResponse>("/open_api/v1.3/discovery/cml/trending_list/", params as unknown as Record<string, unknown>);
    },

    /** Get trending videos related to tracks */
    async cmlVideoList(params: DiscoveryCmlVideoListParams): Promise<DiscoveryCmlVideoListResponse> {
      return get<DiscoveryCmlVideoListResponse>("/open_api/v1.3/discovery/cml/video_list/", params as unknown as Record<string, unknown>);
    },

    /** Get trending search keywords */
    async trendingSearch(params: DiscoveryTrendingSearchParams): Promise<DiscoveryTrendingSearchResponse> {
      return get<DiscoveryTrendingSearchResponse>("/open_api/v1.3/discovery/trending/search/", params as unknown as Record<string, unknown>);
    },

    /** Get recommended search keywords */
    async searchKeyword(params: DiscoveryTrendingSearchKeywordParams): Promise<DiscoveryTrendingSearchKeywordResponse> {
      return get<DiscoveryTrendingSearchKeywordResponse>("/open_api/v1.3/discovery/trending/search/keyword/", params as unknown as Record<string, unknown>);
    },
  };
}
