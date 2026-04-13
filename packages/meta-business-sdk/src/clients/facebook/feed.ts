import { ApiClient } from "@promobase/sdk-runtime";
import { FacebookApiError } from "../../errors.ts";
import type { PageCreateFeedParams } from "../../generated/objects/page.ts";
import type {
  PagePostFields,
  PostAttachment,
  PublishMultiPhotoOptions,
  PublishPhotoPostOptions,
  PublishTextPostOptions,
  PublishVideoPostOptions,
  PublishVideoReelOptions,
  VideoStatus,
} from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;
type PageNode = ReturnType<CreateClientReturn["page"]>;

export function createFeed(
  api: CreateClientReturn,
  page: PageNode,
  pageId: string,
  accessToken: string,
) {
  const client = new ApiClient({
    accessToken,
    baseUrl: "https://graph.facebook.com",
    onError: FacebookApiError.fromResponse,
  });

  return {
    /** Publish a text post (optionally with a link) to the Page feed. */
    async publishPost(opts: PublishTextPostOptions): Promise<{ id: string }> {
      const params: PageCreateFeedParams = {
        message: opts.message,
        link: opts.link,
        published: opts.published !== false,
      };
      if (opts.scheduledPublishTime) {
        params.published = false;
        params.scheduled_publish_time = String(opts.scheduledPublishTime);
      }
      const result = await page.feed.create(params);
      return { id: (result as { id: string }).id };
    },

    /** Publish a photo post to the Page. */
    async publishPhoto(opts: PublishPhotoPostOptions): Promise<{ id: string; post_id?: string }> {
      const params: Record<string, unknown> = { url: opts.url };
      if (opts.caption) params.caption = opts.caption;
      if (opts.published !== undefined) params.published = opts.published;
      if (opts.scheduledPublishTime) {
        params.published = false;
        params.scheduled_publish_time = String(opts.scheduledPublishTime);
      }
      const result = await page.photos.create(params as any);
      return result as unknown as { id: string; post_id?: string };
    },

    /**
     * Publish a video post to the Page.
     * On Facebook, all feed videos and reels use the same /videos endpoint.
     */
    async publishVideo(opts: PublishVideoPostOptions): Promise<{ id: string }> {
      const params: Record<string, unknown> = {};
      if (opts.url) params.file_url = opts.url;
      if (opts.title) params.title = opts.title;
      if (opts.description) params.description = opts.description;
      const result = await page.videos.create(params as any);
      return { id: (result as { id: string }).id };
    },

    /** Publish a multi-photo post (upload each photo, then create feed with attached_media[]). */
    async publishMultiPhoto(opts: PublishMultiPhotoOptions): Promise<{ id: string }> {
      // 1. Upload each photo with published=false
      const photoIds: string[] = [];
      for (const photo of opts.photos) {
        const result = await page.photos.create({ url: photo.url, published: false } as any);
        photoIds.push((result as { id: string }).id);
      }

      // 2. Create feed post with attached_media array
      const params: Record<string, unknown> = {};
      if (opts.message) params.message = opts.message;
      params.published = opts.published !== false;
      if (opts.scheduledPublishTime) {
        params.published = false;
        params.scheduled_publish_time = String(opts.scheduledPublishTime);
      }
      // attached_media format: attached_media[0]={media_fbid:ID}, attached_media[1]={media_fbid:ID}
      for (let i = 0; i < photoIds.length; i++) {
        params[`attached_media[${i}]`] = JSON.stringify({ media_fbid: photoIds[i] });
      }
      const result = await page.feed.create(params as any);
      return { id: (result as { id: string }).id };
    },

    /** Publish a video reel using the 3-phase upload flow. */
    async publishVideoReel(
      opts: PublishVideoReelOptions,
    ): Promise<{ id: string; videoId: string }> {
      // Phase 1: Start upload
      const startResult = await client.post<{ video_id: string; upload_url: string }>(
        `${pageId}/video_reels`,
        { upload_phase: "start" },
      );

      // Phase 2: Upload video to the returned URL
      const uploadResponse = await fetch(startResult.upload_url, {
        method: "POST",
        headers: {
          Authorization: `OAuth ${accessToken}`,
          file_url: opts.videoUrl,
        },
      });
      if (!uploadResponse.ok) {
        const error = await uploadResponse
          .json()
          .catch(() => ({ message: uploadResponse.statusText }));
        throw new Error(`Video upload failed: ${JSON.stringify(error)}`);
      }

      // Phase 3: Finish upload
      const finishParams: Record<string, unknown> = {
        upload_phase: "finish",
        video_id: startResult.video_id,
        video_state: opts.videoState ?? "PUBLISHED",
      };
      if (opts.description) finishParams.description = opts.description;

      const finishResult = await client.post<{ success: boolean; post_id: string; id: string }>(
        `${pageId}/video_reels`,
        finishParams,
      );

      return { id: finishResult.post_id ?? finishResult.id, videoId: startResult.video_id };
    },

    /** Get video processing status. */
    async getVideoStatus(videoId: string): Promise<VideoStatus> {
      const result = await client.get<{ status: any }>(videoId, {
        fields: ["status"],
      });
      const status = result.status ?? {};
      return {
        uploadingPhase: status.uploading_phase,
        processingPhase: status.processing_phase,
        publishingPhase: status.publishing_phase,
      };
    },

    /** Fetch post attachments (images + subattachments for multi-photo). */
    async fetchAttachments(postId: string): Promise<PostAttachment[]> {
      const result = await client.get<{ attachments?: { data: PostAttachment[] } }>(postId, {
        fields: ["attachments{media{image{src}},subattachments{data{media{image{src}}}}}"],
      });
      return result.attachments?.data ?? [];
    },

    /** Fetch video details (source URL + thumbnails). */
    async fetchVideo(videoId: string) {
      return client.get(videoId, {
        fields: ["id", "source", "thumbnails{uri}"],
      });
    },

    /** Get permalink for a post. */
    async getPermalink(postId: string): Promise<string | undefined> {
      const result = await client.get<{ permalink_url?: string }>(postId, {
        fields: ["permalink_url"],
      });
      return result.permalink_url;
    },

    /** List Page feed posts using the generated Page.feed edge. */
    async list(opts?: { fields?: (keyof PagePostFields)[]; limit?: number }) {
      const cursor = page.feed.list({
        fields:
          opts?.fields ??
          ([
            "id",
            "message",
            "created_time",
            "permalink_url",
            "full_picture",
          ] as (keyof PagePostFields)[]),
        params: opts?.limit ? { limit: opts.limit } : undefined,
      });
      return cursor.toArray();
    },

    /** Update a Page post. Only posts created by your app can be updated. */
    async updatePost(postId: string, opts: { message?: string }) {
      return api.pagePost(postId).update(opts as any);
    },

    /** Delete a Page post. */
    async deletePost(postId: string) {
      return api.pagePost(postId).delete();
    },
  };
}
