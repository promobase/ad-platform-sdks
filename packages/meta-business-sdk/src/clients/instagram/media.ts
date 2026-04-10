import type { ApiClient } from "@promobase/sdk-runtime";
import type {
  PublishPhotoOptions, PublishReelOptions, PublishCarouselOptions,
  PublishResult, PollingConfig, IGMediaFields, InstagramInsightsResultFields,
} from "./types.ts";
import { createContainers } from "./containers.ts";
import { waitForContainer } from "./polling.ts";

export function createMedia(client: ApiClient, igAccountId: string, pollingConfig: PollingConfig) {
  const containers = createContainers(client, igAccountId);

  return {
    async publishPhoto(opts: PublishPhotoOptions): Promise<PublishResult> {
      const container = await containers.create({
        imageUrl: opts.imageUrl,
        caption: opts.caption,
        collaborators: opts.collaborators,
      });

      await waitForContainer({
        containerId: container.id,
        isVideo: false,
        polling: pollingConfig,
        getStatus: containers.getStatus,
        label: "photo",
      });

      return containers.publish(container.id);
    },

    async publishReel(opts: PublishReelOptions): Promise<PublishResult> {
      const container = await containers.create({
        videoUrl: opts.videoUrl,
        caption: opts.caption,
        mediaType: "REELS",
        collaborators: opts.collaborators,
        shareToFeed: opts.shareToFeed,
      });

      await waitForContainer({
        containerId: container.id,
        isVideo: true,
        polling: pollingConfig,
        getStatus: containers.getStatus,
        label: "reel",
      });

      return containers.publish(container.id);
    },

    async publishCarousel(opts: PublishCarouselOptions): Promise<PublishResult> {
      if (opts.items.length > 10) {
        throw new Error(`Carousel supports max 10 items, got ${opts.items.length}`);
      }
      if (opts.items.length < 2) {
        throw new Error(`Carousel requires at least 2 items, got ${opts.items.length}`);
      }

      // 1. Create child containers
      const childIds: string[] = [];
      for (let i = 0; i < opts.items.length; i++) {
        const item = opts.items[i]!;
        const isVideo = item.type === "video";
        const child = await containers.create({
          imageUrl: isVideo ? undefined : item.url,
          videoUrl: isVideo ? item.url : undefined,
          mediaType: isVideo ? "VIDEO" : undefined,
          isCarouselItem: true,
        });

        // 2. Poll each child
        await waitForContainer({
          containerId: child.id,
          isVideo,
          polling: pollingConfig,
          getStatus: containers.getStatus,
          label: `carousel item ${i + 1}/${opts.items.length}`,
        });

        childIds.push(child.id);
      }

      // 3. Create parent carousel container
      const parent = await containers.create({
        mediaType: "CAROUSEL",
        children: childIds,
        caption: opts.caption,
        collaborators: opts.collaborators,
      });

      // 4. Poll parent (treated as photo timing)
      await waitForContainer({
        containerId: parent.id,
        isVideo: false,
        polling: pollingConfig,
        getStatus: containers.getStatus,
        label: "carousel parent",
      });

      // 5. Publish
      return containers.publish(parent.id);
    },

    async list(opts?: { fields?: string[]; limit?: number }): Promise<Partial<IGMediaFields>[]> {
      const fields = opts?.fields ?? ["id", "caption", "media_type", "timestamp", "permalink"];
      const params: Record<string, unknown> = {};
      if (opts?.limit) params.limit = opts.limit;
      const response = await client.getEdge<Partial<IGMediaFields>>(`${igAccountId}/media`, { fields, params });
      return response.data;
    },

    async getInsights(mediaId: string, metrics: string[]): Promise<InstagramInsightsResultFields[]> {
      const response = await client.get<{ data: InstagramInsightsResultFields[] }>(
        `${mediaId}/insights`,
        { fields: [], params: { metric: metrics.join(",") } },
      );
      return response.data;
    },

    async getPermalink(mediaId: string): Promise<string | undefined> {
      const result = await client.get<{ permalink?: string }>(mediaId, {
        fields: ["permalink"],
      });
      return result.permalink;
    },

    async fetchMedia(mediaId: string, fields?: string[]): Promise<Partial<IGMediaFields>> {
      return client.get<Partial<IGMediaFields>>(mediaId, {
        fields: fields ?? ["id", "media_type", "media_url", "thumbnail_url", "permalink", "caption", "timestamp"],
      });
    },
  };
}
