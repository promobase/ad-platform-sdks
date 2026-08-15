// @generated
// fingerprint: sha256:e2590971ff509f0e6494a54d96d764f2e460d6521ea137a0deb7e2f5f528e97a
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Discovery — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { DiscoveryTrendingListParams, DiscoveryTrendingListResponse, DiscoveryDetailParams, DiscoveryDetailResponse, DiscoveryVideoListParams, DiscoveryVideoListResponse, DiscoveryCmlTrendingListParams, DiscoveryCmlTrendingListResponse, DiscoveryCmlVideoListParams, DiscoveryCmlVideoListResponse, DiscoveryTrendingSearchParams, DiscoveryTrendingSearchResponse, DiscoveryTrendingSearchKeywordParams, DiscoveryTrendingSearchKeywordResponse } from "../types/discovery.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createDiscovery(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
