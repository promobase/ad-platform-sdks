import type {
  TikTokClientOptions, TikTokResponse, DiscoveryOptions,
  DiscoveryDateRange, MusicDateRange,
  TrendingHashtag, HashtagDetail, HashtagVideo,
  TrendingMusicTrack,
} from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

async function get<T>(accessToken: string, path: string, query: Record<string, unknown>): Promise<T> {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null) {
      params.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
    }
  }
  const response = await fetch(`${TT_API_BASE}${path}?${params.toString()}`, {
    headers: { "Access-Token": accessToken },
  });
  const body = (await response.json()) as TikTokResponse<T>;
  if (!response.ok || body.code !== 0) {
    throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
  }
  return body.data;
}

/**
 * Discovery API — advertiser-scoped endpoints for trending hashtags.
 * Uses advertiser_id (from Marketing API auth).
 */
export function createDiscovery(opts: DiscoveryOptions) {
  const { accessToken, advertiserId } = opts;

  return {
    /** Get popular trending hashtags. */
    async getTrendingHashtags(opts?: { countryCode?: string; categoryName?: string; dateRange?: DiscoveryDateRange }): Promise<{ filterInfo: Record<string, string>; list: TrendingHashtag[] }> {
      const data = await get<{ filter_info: Record<string, string>; list: TrendingHashtag[] }>(
        accessToken, "/discovery/trending_list/",
        { advertiser_id: advertiserId, discovery_type: "HASHTAG", country_code: opts?.countryCode, category_name: opts?.categoryName, date_range: opts?.dateRange },
      );
      return { filterInfo: data.filter_info, list: data.list ?? [] };
    },

    /** Get details of a specific popular hashtag. */
    async getHashtagDetail(hashtagId: string, opts: { countryCode: string; dateRange: DiscoveryDateRange }): Promise<HashtagDetail> {
      return get<HashtagDetail>(
        accessToken, "/discovery/detail/",
        { advertiser_id: advertiserId, discovery_type: "HASHTAG", hashtag_id: hashtagId, country_code: opts.countryCode, date_range: opts.dateRange },
      );
    },

    /** Get trending videos related to hashtags. Max 10 hashtag IDs. */
    async getHashtagVideos(hashtagIds: string[], opts?: { countryCode?: string; dateRange?: DiscoveryDateRange }): Promise<{ hashtag_id: string; hashtag_name: string; top_video_list: HashtagVideo[] }[]> {
      const data = await get<{ list: { hashtag_id: string; hashtag_name: string; top_video_list: HashtagVideo[] }[] }>(
        accessToken, "/discovery/video_list/",
        { advertiser_id: advertiserId, discovery_type: "HASHTAG", hashtag_ids: JSON.stringify(hashtagIds), country_code: opts?.countryCode, date_range: opts?.dateRange },
      );
      return data.list ?? [];
    },
  };
}

/**
 * Discovery API — business-scoped endpoints for commercial music and search keywords.
 * Uses business_id (from Organic API auth).
 */
export function createDiscoveryMusic(opts: TikTokClientOptions) {
  const { accessToken, businessId } = opts;

  return {
    /** Get popular tracks from the commercial music library. */
    async getTrendingMusic(opts?: { genre?: string; countryCode?: string; dateRange?: MusicDateRange }): Promise<TrendingMusicTrack[]> {
      const data = await get<{ list: TrendingMusicTrack[] }>(
        accessToken, "/discovery/cml/trending_list/",
        { business_id: businessId, genre: opts?.genre, country_code: opts?.countryCode, date_range: opts?.dateRange },
      );
      return data.list ?? [];
    },

    /** Get trending videos that use a specific commercial music track. */
    async getMusicVideos(commercialMusicId: string, countryCode?: string): Promise<{ commercial_music_id: string; commercial_music_name: string; top_video_list: HashtagVideo[] }> {
      return get<{ commercial_music_id: string; commercial_music_name: string; top_video_list: HashtagVideo[] }>(
        accessToken, "/discovery/cml/video_list/",
        { business_id: businessId, commercial_music_id: commercialMusicId, country_code: countryCode },
      );
    },

    /** Get trending search keywords (top 20). */
    async getTrendingSearchKeywords(isPersonalized?: boolean): Promise<string[]> {
      const data = await get<{ search_keywords: string[] }>(
        accessToken, "/discovery/trending/search/",
        { business_id: businessId, is_personalized: isPersonalized },
      );
      return data.search_keywords ?? [];
    },

    /** Get recommended search keywords for a query (top 20). */
    async getRecommendedSearchKeywords(query: string, isPersonalized?: boolean): Promise<string[]> {
      const data = await get<{ search_keywords: string[] }>(
        accessToken, "/discovery/trending/search/keyword/",
        { business_id: businessId, query, is_personalized: isPersonalized },
      );
      return data.search_keywords ?? [];
    },
  };
}
