import { tiktokRequest } from "./request.ts";
import type {
  DiscoveryDateRange,
  DiscoveryOptions,
  HashtagDetail,
  HashtagVideo,
  MusicDateRange,
  TikTokClientOptions,
  TrendingHashtag,
  TrendingMusicTrack,
} from "./types.ts";

/**
 * Discovery API — advertiser-scoped endpoints for trending hashtags.
 * Uses advertiser_id (from Marketing API auth).
 */
export function createDiscovery(clientOpts: DiscoveryOptions) {
  const { advertiserId } = clientOpts;

  return {
    /** Get popular trending hashtags. */
    async getTrendingHashtags(options?: {
      countryCode?: string;
      categoryName?: string;
      dateRange?: DiscoveryDateRange;
    }): Promise<{ filterInfo: Record<string, string>; list: TrendingHashtag[] }> {
      const data = await tiktokRequest<{
        filter_info: Record<string, string>;
        list: TrendingHashtag[];
      }>(clientOpts, {
        method: "GET",
        path: "/discovery/trending_list/",
        query: {
          advertiser_id: advertiserId,
          discovery_type: "HASHTAG",
          country_code: options?.countryCode,
          category_name: options?.categoryName,
          date_range: options?.dateRange,
        },
      });
      return { filterInfo: data.filter_info, list: data.list ?? [] };
    },

    /** Get details of a specific popular hashtag. */
    async getHashtagDetail(
      hashtagId: string,
      options: { countryCode: string; dateRange: DiscoveryDateRange },
    ): Promise<HashtagDetail> {
      return tiktokRequest<HashtagDetail>(clientOpts, {
        method: "GET",
        path: "/discovery/detail/",
        query: {
          advertiser_id: advertiserId,
          discovery_type: "HASHTAG",
          hashtag_id: hashtagId,
          country_code: options.countryCode,
          date_range: options.dateRange,
        },
      });
    },

    /** Get trending videos related to hashtags. Max 10 hashtag IDs. */
    async getHashtagVideos(
      hashtagIds: string[],
      options?: { countryCode?: string; dateRange?: DiscoveryDateRange },
    ): Promise<{ hashtag_id: string; hashtag_name: string; top_video_list: HashtagVideo[] }[]> {
      const data = await tiktokRequest<{
        list: { hashtag_id: string; hashtag_name: string; top_video_list: HashtagVideo[] }[];
      }>(clientOpts, {
        method: "GET",
        path: "/discovery/video_list/",
        query: {
          advertiser_id: advertiserId,
          discovery_type: "HASHTAG",
          hashtag_ids: JSON.stringify(hashtagIds),
          country_code: options?.countryCode,
          date_range: options?.dateRange,
        },
      });
      return data.list ?? [];
    },
  };
}

/**
 * Discovery API — business-scoped endpoints for commercial music and search keywords.
 * Uses business_id (from Organic API auth).
 */
export function createDiscoveryMusic(clientOpts: TikTokClientOptions) {
  const { businessId } = clientOpts;

  return {
    /** Get popular tracks from the commercial music library. */
    async getTrendingMusic(options?: {
      genre?: string;
      countryCode?: string;
      dateRange?: MusicDateRange;
    }): Promise<TrendingMusicTrack[]> {
      const data = await tiktokRequest<{ list: TrendingMusicTrack[] }>(clientOpts, {
        method: "GET",
        path: "/discovery/cml/trending_list/",
        query: {
          business_id: businessId,
          genre: options?.genre,
          country_code: options?.countryCode,
          date_range: options?.dateRange,
        },
      });
      return data.list ?? [];
    },

    /** Get trending videos that use a specific commercial music track. */
    async getMusicVideos(
      commercialMusicId: string,
      countryCode?: string,
    ): Promise<{
      commercial_music_id: string;
      commercial_music_name: string;
      top_video_list: HashtagVideo[];
    }> {
      return tiktokRequest<{
        commercial_music_id: string;
        commercial_music_name: string;
        top_video_list: HashtagVideo[];
      }>(clientOpts, {
        method: "GET",
        path: "/discovery/cml/video_list/",
        query: {
          business_id: businessId,
          commercial_music_id: commercialMusicId,
          country_code: countryCode,
        },
      });
    },

    /** Get trending search keywords (top 20). */
    async getTrendingSearchKeywords(isPersonalized?: boolean): Promise<string[]> {
      const data = await tiktokRequest<{ search_keywords: string[] }>(clientOpts, {
        method: "GET",
        path: "/discovery/trending/search/",
        query: { business_id: businessId, is_personalized: isPersonalized },
      });
      return data.search_keywords ?? [];
    },

    /** Get recommended search keywords for a query (top 20). */
    async getRecommendedSearchKeywords(query: string, isPersonalized?: boolean): Promise<string[]> {
      const data = await tiktokRequest<{ search_keywords: string[] }>(clientOpts, {
        method: "GET",
        path: "/discovery/trending/search/keyword/",
        query: { business_id: businessId, query, is_personalized: isPersonalized },
      });
      return data.search_keywords ?? [];
    },
  };
}
