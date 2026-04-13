import type {
  BrandHashtagInfo,
  ListBrandHashtagVideosOptions,
  ListMentionedCommentsOptions,
  ListMentionedVideosOptions,
  MentionComment,
  MentionCommentField,
  MentionVideo,
  MentionVideoField,
  TikTokClientOptions,
  TikTokResponse,
} from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

/**
 * Mentions API — brand mention monitoring for videos, comments, and hashtags.
 * Requires `biz.brand.insights` scope.
 */
export function createMentions(opts: TikTokClientOptions) {
  const { accessToken, businessId } = opts;

  async function get<T>(path: string, query: Record<string, unknown>): Promise<T> {
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
      throw new Error(
        `TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`,
      );
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(
        `TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`,
      );
    }
    return responseBody.data;
  }

  return {
    // -- Video Mentions --

    /** List top 1000 videos that mention the brand. Cursor-based pagination. */
    async listMentionedVideos(
      opts?: ListMentionedVideosOptions,
    ): Promise<{ videos: MentionVideo[]; cursor: number; has_more: boolean }> {
      const query: Record<string, unknown> = { business_id: businessId };
      if (opts?.fields) query.fields = JSON.stringify(opts.fields);
      if (opts?.sortField) query.sort_field = opts.sortField;
      if (opts?.sortType) query.sort_type = opts.sortType;
      if (opts?.numberOfDays !== undefined) query.number_of_days = opts.numberOfDays;
      if (opts?.regions) query.regions = JSON.stringify(opts.regions);
      if (opts?.cursor !== undefined) query.cursor = opts.cursor;
      if (opts?.maxCount !== undefined) query.max_count = opts.maxCount;
      return get<{ videos: MentionVideo[]; cursor: number; has_more: boolean }>(
        "/business/mention/video/list/",
        query,
      );
    },

    /** Get details of a specific mentioned video (from webhook). Must retrieve within 48h. */
    async getMentionedVideo(itemId: string, fields?: MentionVideoField[]): Promise<MentionVideo[]> {
      const query: Record<string, unknown> = { business_id: businessId, item_id: itemId };
      if (fields) query.fields = JSON.stringify(fields);
      const data = await get<{ video: MentionVideo[] }>("/business/mention/video/get/", query);
      return data.video ?? [];
    },

    // -- Comment Mentions --

    /** List top 1000 comment mentions on posts. Cursor-based pagination. */
    async listMentionedComments(
      opts?: ListMentionedCommentsOptions,
    ): Promise<{ comments: MentionComment[]; cursor: number; has_more: boolean }> {
      const query: Record<string, unknown> = { business_id: businessId };
      if (opts?.fields) query.fields = JSON.stringify(opts.fields);
      if (opts?.sortField) query.sort_field = opts.sortField;
      if (opts?.sortType) query.sort_type = opts.sortType;
      if (opts?.numberOfDays !== undefined) query.number_of_days = opts.numberOfDays;
      if (opts?.regions) query.regions = JSON.stringify(opts.regions);
      if (opts?.cursor !== undefined) query.cursor = opts.cursor;
      if (opts?.maxCount !== undefined) query.max_count = opts.maxCount;
      return get<{ comments: MentionComment[]; cursor: number; has_more: boolean }>(
        "/business/mention/comment/list/",
        query,
      );
    },

    /** Get details of a specific comment mention (from webhook). */
    async getMentionedComment(
      commentId: string,
      itemId: string,
      fields?: MentionCommentField[],
    ): Promise<MentionComment> {
      const query: Record<string, unknown> = {
        business_id: businessId,
        comment_id: commentId,
        item_id: itemId,
      };
      if (fields) query.fields = JSON.stringify(fields);
      const data = await get<{ comment: MentionComment }>("/business/mention/comment/get/", query);
      return data.comment;
    },

    // -- Mention Analytics --

    /** Get frequent hashtags in top 1000 mentioned posts. */
    async getTopHashtags(regions?: string[]): Promise<{ hashtag: string; count: number }[]> {
      const query: Record<string, unknown> = { business_id: businessId };
      if (regions) query.regions = JSON.stringify(regions);
      const data = await get<{ results: { hashtag: string; count: number }[] }>(
        "/business/mention/top_hashtag/list/",
        query,
      );
      return data.results ?? [];
    },

    /** Get frequent keywords in top 1000 mentioned posts. */
    async getTopKeywords(regions?: string[]): Promise<{ word: string; count: number }[]> {
      const query: Record<string, unknown> = { business_id: businessId };
      if (regions) query.regions = JSON.stringify(regions);
      const data = await get<{ results: { word: string; count: number }[] }>(
        "/business/mention/top_word/list/",
        query,
      );
      return data.results ?? [];
    },

    // -- Brand Hashtags --

    /** Get valid brand mention hashtags that can be enabled. */
    async verifyBrandHashtags(username: string): Promise<BrandHashtagInfo[]> {
      const data = await get<{ hashtag_list: BrandHashtagInfo[] }>(
        "/business/mention/hashtag/verify/list/",
        {
          business_id: businessId,
          username,
        },
      );
      return data.hashtag_list ?? [];
    },

    /** Enable brand hashtags for mention tracking. Max 10 per request, 50 total. */
    async enableBrandHashtags(
      username: string,
      hashtags: string[],
    ): Promise<{ hashtag: string; create_date: string }[]> {
      const data = await post<{ hashtag_list: { hashtag: string; create_date: string }[] }>(
        "/business/mention/hashtag/add/",
        {
          business_id: businessId,
          username,
          hashtags,
        },
      );
      return data.hashtag_list ?? [];
    },

    /** List all currently enabled brand hashtags. */
    async listBrandHashtags(username: string): Promise<{ hashtag: string; create_date: string }[]> {
      const data = await get<{ hashtag_list: { hashtag: string; create_date: string }[] }>(
        "/business/mention/hashtag/manage/list/",
        {
          business_id: businessId,
          username,
        },
      );
      return data.hashtag_list ?? [];
    },

    /** Get top 1000 videos matching enabled brand hashtags. */
    async getBrandHashtagVideos(opts?: ListBrandHashtagVideosOptions): Promise<{
      videos: (MentionVideo & { matched_hashtags?: string[] })[];
      cursor: number;
      has_more: boolean;
    }> {
      const query: Record<string, unknown> = { business_id: businessId };
      if (opts?.hashtag) query.hashtag = opts.hashtag;
      if (opts?.fields) query.fields = JSON.stringify(opts.fields);
      if (opts?.sortField) query.sort_field = opts.sortField;
      if (opts?.sortOrder) query.sort_order = opts.sortOrder;
      if (opts?.numberOfDays !== undefined) query.number_of_days = opts.numberOfDays;
      if (opts?.regions) query.regions = JSON.stringify(opts.regions);
      if (opts?.cursor !== undefined) query.cursor = opts.cursor;
      if (opts?.maxCount !== undefined) query.max_count = opts.maxCount;
      return get<{
        videos: (MentionVideo & { matched_hashtags?: string[] })[];
        cursor: number;
        has_more: boolean;
      }>("/business/mention/hashtag/video/list/", query);
    },

    /** Remove an enabled brand hashtag. Must have been enabled for at least 7 days. */
    async removeBrandHashtag(username: string, hashtag: string): Promise<void> {
      await post<Record<string, never>>("/business/mention/hashtag/remove/", {
        business_id: businessId,
        username,
        hashtag,
      });
    },
  };
}
