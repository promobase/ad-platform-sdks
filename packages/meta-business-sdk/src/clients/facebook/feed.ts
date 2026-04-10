import type {
  PublishTextPostOptions, PublishPhotoPostOptions, PublishVideoPostOptions,
  PagePostFields, PhotoFields, AdVideoFields,
} from "./types.ts";
import type { PageCreateFeedParams } from "../../generated/objects/page.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;
type PageNode = ReturnType<CreateClientReturn["page"]>;

export function createFeed(api: CreateClientReturn, page: PageNode, pageId: string) {
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

    /** List Page feed posts using the generated Page.feed edge. */
    async list(opts?: { fields?: (keyof PagePostFields)[]; limit?: number }) {
      const cursor = page.feed.list({
        fields: opts?.fields ?? ["id", "message", "created_time", "permalink_url", "full_picture"] as (keyof PagePostFields)[],
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
