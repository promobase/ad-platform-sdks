import type {
  ListVideosOptions,
  ListVideosResponse,
  PublishStatusResponse,
  PublishVideoOptions,
  TikTokClientOptions,
  TikTokResponse,
} from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

export function createVideos(opts: TikTokClientOptions) {
  const { accessToken, businessId } = opts;

  async function request<T>(
    method: string,
    path: string,
    body?: Record<string, unknown>,
    query?: Record<string, unknown>,
  ): Promise<T> {
    let url = `${TT_API_BASE}${path}`;
    if (query) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null) {
          params.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
        }
      }
      url += `?${params.toString()}`;
    }

    const init: RequestInit = {
      method,
      headers: {
        "Access-Token": accessToken,
        "Content-Type": "application/json",
      },
    };
    if (body && (method === "POST" || method === "PUT")) {
      init.body = JSON.stringify(body);
    }

    const response = await fetch(url, init);
    const responseBody = (await response.json()) as TikTokResponse<T>;

    if (!response.ok || responseBody.code !== 0) {
      throw new Error(
        `TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`,
      );
    }

    return responseBody.data;
  }

  return {
    /**
     * Publish a video post to the TikTok account.
     * Rate limit: 6 per minute, 15 per day per account.
     */
    async publish(opts: PublishVideoOptions): Promise<{ shareId: string }> {
      const postInfo: Record<string, unknown> = {};
      if (opts.caption !== undefined) postInfo.caption = opts.caption;
      if (opts.disableComment !== undefined) postInfo.disable_comment = opts.disableComment;
      if (opts.disableDuet !== undefined) postInfo.disable_duet = opts.disableDuet;
      if (opts.disableStitch !== undefined) postInfo.disable_stitch = opts.disableStitch;
      if (opts.thumbnailOffset !== undefined) postInfo.thumbnail_offset = opts.thumbnailOffset;
      if (opts.isBrandOrganic !== undefined) postInfo.is_brand_organic = opts.isBrandOrganic;
      if (opts.isBrandedContent !== undefined) postInfo.is_branded_content = opts.isBrandedContent;
      if (opts.ttoInviteLink !== undefined) postInfo.tto_invite_link = opts.ttoInviteLink;
      if (opts.isAiGenerated !== undefined) postInfo.is_ai_generated = opts.isAiGenerated;
      if (opts.uploadToDraft !== undefined) postInfo.upload_to_draft = opts.uploadToDraft;
      if (opts.isAdsOnly !== undefined) postInfo.is_ads_only = opts.isAdsOnly;
      if (opts.privacyLevel !== undefined) postInfo.privacy_level = opts.privacyLevel;

      if (opts.musicSoundInfo) {
        postInfo.music_sound_info = {
          music_sound_id: opts.musicSoundInfo.music_sound_id,
          music_sound_volume: opts.musicSoundInfo.music_sound_volume,
          ...(opts.musicSoundInfo.music_sound_start !== undefined
            ? { music_sound_start: opts.musicSoundInfo.music_sound_start }
            : {}),
          ...(opts.musicSoundInfo.music_sound_end !== undefined
            ? { music_sound_end: opts.musicSoundInfo.music_sound_end }
            : {}),
          ...(opts.musicSoundInfo.video_original_sound_volume !== undefined
            ? { video_original_sound_volume: opts.musicSoundInfo.video_original_sound_volume }
            : {}),
        };
      }

      const body: Record<string, unknown> = {
        business_id: businessId,
        video_url: opts.videoUrl,
        post_info: postInfo,
      };
      if (opts.customThumbnailUrl) body.custom_thumbnail_url = opts.customThumbnailUrl;

      const result = await request<{ share_id: string }>("POST", "/business/video/publish/", body);
      return { shareId: result.share_id };
    },

    /** Check the publishing status of a video post. */
    async getPublishStatus(publishId: string): Promise<PublishStatusResponse> {
      return request<PublishStatusResponse>("GET", "/business/publish/status/", undefined, {
        business_id: businessId,
        publish_id: publishId,
      });
    },

    /**
     * Wait for a video publish task to complete.
     * Polls the status endpoint until PUBLISH_COMPLETE or FAILED.
     */
    async waitForPublish(
      publishId: string,
      opts?: { intervalMs?: number; maxAttempts?: number },
    ): Promise<PublishStatusResponse> {
      const intervalMs = opts?.intervalMs ?? 5_000;
      const maxAttempts = opts?.maxAttempts ?? 60;

      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const status = await this.getPublishStatus(publishId);

        switch (status.status) {
          case "PUBLISH_COMPLETE":
          case "SEND_TO_USER_INBOX":
            return status;
          case "FAILED":
            throw new Error(`Video publish failed: ${status.reason ?? "unknown reason"}`);
          case "PROCESSING_DOWNLOAD":
            await new Promise<void>((r) => setTimeout(r, intervalMs));
            break;
          default:
            throw new Error(`Unknown publish status: ${status.status}`);
        }
      }

      throw new Error(`Video publish did not complete after ${maxAttempts} attempts`);
    },

    /** List videos/posts for the TikTok account. Cursor-based pagination. */
    async list(opts?: ListVideosOptions): Promise<ListVideosResponse> {
      const query: Record<string, unknown> = { business_id: businessId };
      if (opts?.fields) query.fields = JSON.stringify(opts.fields);
      if (opts?.cursor !== undefined) query.cursor = opts.cursor;
      if (opts?.maxCount !== undefined) query.max_count = opts.maxCount;

      const filters: Record<string, unknown> = {};
      if (opts?.videoIds) filters.video_ids = opts.videoIds;
      if (opts?.adPostOnly !== undefined) filters.ad_post_only = opts.adPostOnly;
      if (Object.keys(filters).length > 0) query.filters = JSON.stringify(filters);

      return request<ListVideosResponse>("GET", "/business/video/list/", undefined, query);
    },
  };
}
