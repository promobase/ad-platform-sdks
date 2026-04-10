import type {
  TikTokClientOptions, TikTokResponse,
  PublishPhotoOptions, PublishStatusResponse,
} from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

export function createPhotos(opts: TikTokClientOptions) {
  const { accessToken, businessId } = opts;

  async function request<T>(method: string, path: string, body?: Record<string, unknown>, query?: Record<string, unknown>): Promise<T> {
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
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }

    return responseBody.data;
  }

  return {
    /**
     * Publish a photo post to the TikTok account.
     * Supports up to 35 images per post.
     * Rate limit: 6 per minute, 15 per day per account.
     */
    async publish(opts: PublishPhotoOptions): Promise<{ shareId: string }> {
      const postInfo: Record<string, unknown> = {
        privacy_level: opts.privacyLevel,
      };
      if (opts.title !== undefined) postInfo.title = opts.title;
      if (opts.caption !== undefined) postInfo.caption = opts.caption;
      if (opts.disableComment !== undefined) postInfo.disable_comment = opts.disableComment;
      if (opts.autoAddMusic !== undefined) postInfo.auto_add_music = opts.autoAddMusic;
      if (opts.isBrandOrganic !== undefined) postInfo.is_brand_organic = opts.isBrandOrganic;
      if (opts.isBrandedContent !== undefined) postInfo.is_branded_content = opts.isBrandedContent;
      if (opts.isDraft !== undefined) postInfo.is_draft = opts.isDraft;

      if (opts.musicSoundInfo) {
        postInfo.music_sound_info = {
          music_sound_id: opts.musicSoundInfo.music_sound_id,
        };
      }

      const body: Record<string, unknown> = {
        business_id: businessId,
        photo_images: opts.photoUrls,
        post_info: postInfo,
      };
      if (opts.photoCoverIndex !== undefined) body.photo_cover_index = opts.photoCoverIndex;

      const result = await request<{ share_id: string }>("POST", "/business/photo/publish/", body);
      return { shareId: result.share_id };
    },

    /** Check the publishing status of a photo post. Reuses the shared publish status endpoint. */
    async getPublishStatus(publishId: string): Promise<PublishStatusResponse> {
      return request<PublishStatusResponse>("GET", "/business/publish/status/", undefined, {
        business_id: businessId,
        publish_id: publishId,
      });
    },
  };
}
