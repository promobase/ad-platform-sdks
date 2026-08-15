import { Effect } from "effect";

import type { createContainers } from "./containers.ts";
import { instagramContainerWaitErrorToError, waitForContainerEffect } from "./polling.ts";
import type {
  IGMediaFields,
  InstagramInsightsResultFields,
  PollingConfig,
  PublishCarouselOptions,
  PublishPhotoOptions,
  PublishResult,
  PublishVideoOptions,
} from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;
type IGUserNode = ReturnType<CreateClientReturn["iGUser"]>;
type Containers = ReturnType<typeof createContainers>;

type InstagramMediaPublishError = Error | import("./polling.ts").InstagramContainerWaitError;

function unknownToError(cause: unknown): Error {
  return cause instanceof Error ? cause : new Error(String(cause));
}

function publishErrorToError(error: InstagramMediaPublishError): Error {
  if ("_tag" in error) return instagramContainerWaitErrorToError(error);
  return error;
}

export function createMedia(
  api: CreateClientReturn,
  containers: Containers,
  igUser: IGUserNode,
  pollingConfig: PollingConfig,
) {
  function publishPhotoEffect(
    opts: PublishPhotoOptions,
  ): Effect.Effect<PublishResult, InstagramMediaPublishError> {
    return Effect.gen(function* () {
      const container = yield* Effect.tryPromise({
        try: () =>
          containers.create({
            image_url: opts.imageUrl,
            caption: opts.caption,
            collaborators: opts.collaborators,
            location_id: opts.locationId,
          }),
        catch: unknownToError,
      });

      yield* waitForContainerEffect({
        containerId: container.id,
        isVideo: false,
        polling: pollingConfig,
        getStatus: containers.getStatus,
        label: "photo",
      });

      return yield* Effect.tryPromise({
        try: () => containers.publish(container.id),
        catch: unknownToError,
      });
    });
  }

  function publishVideoEffect(
    opts: PublishVideoOptions,
  ): Effect.Effect<PublishResult, InstagramMediaPublishError> {
    return Effect.gen(function* () {
      const container = yield* Effect.tryPromise({
        try: () =>
          containers.create({
            video_url: opts.videoUrl,
            caption: opts.caption,
            media_type: "REELS",
            collaborators: opts.collaborators,
            cover_url: opts.coverUrl,
            location_id: opts.locationId,
          }),
        catch: unknownToError,
      });

      yield* waitForContainerEffect({
        containerId: container.id,
        isVideo: true,
        polling: pollingConfig,
        getStatus: containers.getStatus,
        label: "video",
      });

      return yield* Effect.tryPromise({
        try: () => containers.publish(container.id),
        catch: unknownToError,
      });
    });
  }

  function publishCarouselEffect(
    opts: PublishCarouselOptions,
  ): Effect.Effect<PublishResult, InstagramMediaPublishError> {
    return Effect.gen(function* () {
      if (opts.items.length > 10) {
        return yield* Effect.fail(
          new Error(`Carousel supports max 10 items, got ${opts.items.length}`),
        );
      }
      if (opts.items.length < 2) {
        return yield* Effect.fail(
          new Error(`Carousel requires at least 2 items, got ${opts.items.length}`),
        );
      }

      const childIds: string[] = [];
      for (let i = 0; i < opts.items.length; i++) {
        const item = opts.items[i]!;
        const isVideo = item.type === "video";
        const child = yield* Effect.tryPromise({
          try: () =>
            containers.create({
              image_url: isVideo ? undefined : item.url,
              video_url: isVideo ? item.url : undefined,
              media_type: isVideo ? "VIDEO" : undefined,
              is_carousel_item: true,
            }),
          catch: unknownToError,
        });

        yield* waitForContainerEffect({
          containerId: child.id,
          isVideo,
          polling: pollingConfig,
          getStatus: containers.getStatus,
          label: `carousel item ${i + 1}/${opts.items.length}`,
        });

        childIds.push(child.id);
      }

      const parent = yield* Effect.tryPromise({
        try: () =>
          containers.create({
            media_type: "CAROUSEL",
            children: childIds,
            caption: opts.caption,
            collaborators: opts.collaborators,
            location_id: opts.locationId,
          }),
        catch: unknownToError,
      });

      yield* waitForContainerEffect({
        containerId: parent.id,
        isVideo: false,
        polling: pollingConfig,
        getStatus: containers.getStatus,
        label: "carousel parent",
      });

      return yield* Effect.tryPromise({
        try: () => containers.publish(parent.id),
        catch: unknownToError,
      });
    });
  }

  async function runPublish(effect: Effect.Effect<PublishResult, InstagramMediaPublishError>) {
    const result = await Effect.runPromise(Effect.either(effect));
    if (result._tag === "Left") throw publishErrorToError(result.left);
    return result.right;
  }

  const client = {
    /** Effect variant of publishPhoto for orchestration-heavy callers. */
    publishPhotoEffect,

    /** Publish a single photo to the feed. */
    async publishPhoto(opts: PublishPhotoOptions): Promise<PublishResult> {
      return runPublish(publishPhotoEffect(opts));
    },

    /** Effect variant of publishVideo for orchestration-heavy callers. */
    publishVideoEffect,

    /**
     * Publish a video to the feed. All feed videos are reels on Instagram.
     * Polls provider video processing status automatically.
     */
    async publishVideo(opts: PublishVideoOptions): Promise<PublishResult> {
      return runPublish(publishVideoEffect(opts));
    },

    /** Effect variant of publishCarousel for orchestration-heavy callers. */
    publishCarouselEffect,

    /**
     * Publish a carousel (2-10 photos and/or videos) to the feed.
     * Each item is uploaded and polled individually, then combined.
     */
    async publishCarousel(opts: PublishCarouselOptions): Promise<PublishResult> {
      return runPublish(publishCarouselEffect(opts));
    },

    /** List media using the generated IGUser media edge. */
    async list(opts?: { fields?: (keyof IGMediaFields)[]; limit?: number }) {
      const cursor = igUser.media.list({
        fields:
          opts?.fields ??
          (["id", "caption", "media_type", "timestamp", "permalink"] as (keyof IGMediaFields)[]),
        params: opts?.limit ? { limit: opts.limit } : undefined,
      });
      return cursor.toArray();
    },

    /** Get insights for a media item using the generated IGMedia.insights edge. */
    async getInsights(mediaId: string, metrics: string[]) {
      const cursor = api.iGMedia(mediaId).insights({
        fields: [
          "name",
          "period",
          "values",
          "total_value",
        ] as (keyof InstagramInsightsResultFields)[],
        params: { metric: metrics },
      });
      return cursor.toArray();
    },

    /** Get permalink for a media item using the generated IGMedia node. */
    async getPermalink(mediaId: string): Promise<string | undefined> {
      const result = await api.iGMedia(mediaId).get({ fields: ["permalink"] });
      return result.permalink;
    },

    /** Fetch full media details using the generated IGMedia node. */
    async fetchMedia(mediaId: string, fields?: (keyof IGMediaFields)[]) {
      return api.iGMedia(mediaId).get({
        fields:
          fields ??
          ([
            "id",
            "media_type",
            "media_url",
            "thumbnail_url",
            "permalink",
            "caption",
            "timestamp",
          ] as (keyof IGMediaFields)[]),
      });
    },
  };

  return client;
}
