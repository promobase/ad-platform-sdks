import type {
  PublishTextOptions, PublishImageOptions, PublishVideoOptions,
  PublishCarouselOptions, ReplyOptions, PublishResult,
  ThreadsPollingConfig, ThreadsPost, ThreadsInsight,
} from "./types.ts";
import type { ApiClient } from "@promobase/sdk-runtime";
import { createContainers } from "./containers.ts";
import { waitForContainer } from "./polling.ts";

export function createPosts(client: ApiClient, threadsUserId: string, pollingConfig: ThreadsPollingConfig) {
  const containers = createContainers(client, threadsUserId);

  return {
    async publishText(opts: PublishTextOptions): Promise<PublishResult> {
      const container = await containers.create({
        mediaType: "TEXT",
        text: opts.text,
        replyControl: opts.replyControl,
        allowlistedCountryCodes: opts.allowlistedCountryCodes,
      });
      await waitForContainer({
        containerId: container.id, isVideo: false, polling: pollingConfig,
        getStatus: containers.getStatus, label: "text",
      });
      return containers.publish(container.id);
    },

    async publishImage(opts: PublishImageOptions): Promise<PublishResult> {
      const container = await containers.create({
        mediaType: "IMAGE",
        imageUrl: opts.imageUrl,
        text: opts.text,
        replyControl: opts.replyControl,
      });
      await waitForContainer({
        containerId: container.id, isVideo: false, polling: pollingConfig,
        getStatus: containers.getStatus, label: "image",
      });
      return containers.publish(container.id);
    },

    async publishVideo(opts: PublishVideoOptions): Promise<PublishResult> {
      const container = await containers.create({
        mediaType: "VIDEO",
        videoUrl: opts.videoUrl,
        text: opts.text,
        replyControl: opts.replyControl,
      });
      await waitForContainer({
        containerId: container.id, isVideo: true, polling: pollingConfig,
        getStatus: containers.getStatus, label: "video",
      });
      return containers.publish(container.id);
    },

    async publishCarousel(opts: PublishCarouselOptions): Promise<PublishResult> {
      if (opts.items.length > 10) throw new Error(`Carousel max 10 items, got ${opts.items.length}`);
      if (opts.items.length < 2) throw new Error(`Carousel requires at least 2 items, got ${opts.items.length}`);

      const childIds: string[] = [];
      for (let i = 0; i < opts.items.length; i++) {
        const item = opts.items[i]!;
        const isVideo = item.type === "video";
        const child = await containers.create({
          mediaType: isVideo ? "VIDEO" : "IMAGE",
          imageUrl: isVideo ? undefined : item.url,
          videoUrl: isVideo ? item.url : undefined,
          isCarouselItem: true,
        });
        await waitForContainer({
          containerId: child.id, isVideo, polling: pollingConfig,
          getStatus: containers.getStatus, label: `carousel item ${i + 1}/${opts.items.length}`,
        });
        childIds.push(child.id);
      }

      const parent = await containers.create({
        mediaType: "CAROUSEL",
        children: childIds,
        text: opts.text,
        replyControl: opts.replyControl,
      });
      await waitForContainer({
        containerId: parent.id, isVideo: false, polling: pollingConfig,
        getStatus: containers.getStatus, label: "carousel parent",
      });
      return containers.publish(parent.id);
    },

    async reply(opts: ReplyOptions): Promise<PublishResult> {
      const container = await containers.create({
        mediaType: "TEXT",
        text: opts.text,
        replyToId: opts.replyToId,
      });
      await waitForContainer({
        containerId: container.id, isVideo: false, polling: pollingConfig,
        getStatus: containers.getStatus, label: "reply",
      });
      return containers.publish(container.id);
    },

    async delete(postId: string): Promise<void> {
      await client.delete(postId);
    },

    async getPermalink(postId: string): Promise<string | undefined> {
      const result = await client.get<{ permalink?: string }>(postId, { fields: ["permalink"] });
      return result.permalink;
    },

    async list(opts?: { limit?: number; after?: string }) {
      const params: Record<string, unknown> = {};
      if (opts?.limit) params.limit = opts.limit;
      if (opts?.after) params.after = opts.after;
      return client.getEdge<ThreadsPost>(`${threadsUserId}/threads`, {
        fields: ["id", "text", "media_type", "media_url", "thumbnail_url", "timestamp", "permalink"],
        params,
      });
    },

    async getInsights(postId: string, metrics?: string[]): Promise<ThreadsInsight[]> {
      const result = await client.get<{ data: ThreadsInsight[] }>(
        `${postId}/insights`,
        { fields: [], params: { metric: (metrics ?? ["views", "likes", "replies", "reposts", "quotes"]).join(",") } },
      );
      return result.data;
    },
  };
}
