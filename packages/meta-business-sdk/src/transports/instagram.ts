import * as v from "valibot";

import { requestJson, type TransportClientOptions } from "./http.ts";

export type InstagramTransportOptions = TransportClientOptions & {
  readonly instagramAccountId: string;
};

export type InstagramMediaContainerInput = {
  readonly imageUrl?: string;
  readonly videoUrl?: string;
  readonly caption?: string;
  readonly mediaType?: "IMAGE" | "VIDEO" | "REELS" | "CAROUSEL";
  readonly isCarouselItem?: boolean;
};

/**
 * Status values currently documented by Meta for an Instagram media container.
 *
 * The upstream Graph schema exposes `status_code` as a string, so this is an
 * adapter-level contract rather than a generated type. Keep the open string
 * branch in `InstagramContainerStatus` below for forward compatibility when
 * Meta adds a status before the Graph schema catches up.
 */
export const InstagramContainerStatusCodes = {
  Expired: "EXPIRED",
  Error: "ERROR",
  Finished: "FINISHED",
  InProgress: "IN_PROGRESS",
  Published: "PUBLISHED",
} as const;

export type InstagramContainerStatusCode =
  (typeof InstagramContainerStatusCodes)[keyof typeof InstagramContainerStatusCodes];

/** A provider status code, including values introduced after this SDK release. */
export type InstagramContainerStatus = InstagramContainerStatusCode | (string & {});

export const InstagramContainerStatusCodeSchema = v.picklist([
  InstagramContainerStatusCodes.Expired,
  InstagramContainerStatusCodes.Error,
  InstagramContainerStatusCodes.Finished,
  InstagramContainerStatusCodes.InProgress,
  InstagramContainerStatusCodes.Published,
]);

/** Returns true when Meta returned one of its currently documented status codes. */
export function isInstagramContainerStatusCode(
  value: string,
): value is InstagramContainerStatusCode {
  return v.is(InstagramContainerStatusCodeSchema, value);
}

/** Validate a raw Graph value without rejecting future provider status codes. */
export function parseInstagramContainerStatus(value: unknown): InstagramContainerStatus {
  return v.parse(v.string(), value);
}

export type InstagramMediaContainerResult = { readonly containerId: string };
export type InstagramMediaStatusResult = {
  readonly containerId: string;
  readonly status: InstagramContainerStatus;
};
export type InstagramPublishedMediaResult = { readonly mediaId: string };
export type InstagramPermalinkResult = { readonly mediaId: string; readonly permalink: string };

export function createInstagramTransport(opts: InstagramTransportOptions) {
  return {
    async createMediaContainer(
      input: InstagramMediaContainerInput,
    ): Promise<InstagramMediaContainerResult> {
      const result = await requestJson<{ readonly id: string }>(
        opts,
        "instagram",
        "instagram.create_media_container",
        `${opts.instagramAccountId}/media`,
        {
          method: "POST",
          body: JSON.stringify({
            ...(input.imageUrl ? { image_url: input.imageUrl } : {}),
            ...(input.videoUrl ? { video_url: input.videoUrl } : {}),
            ...(input.caption ? { caption: input.caption } : {}),
            ...(input.mediaType ? { media_type: input.mediaType } : {}),
            ...(input.isCarouselItem !== undefined
              ? { is_carousel_item: input.isCarouselItem }
              : {}),
          }),
        },
      );
      return { containerId: result.id };
    },

    async getMediaContainerStatus(input: {
      readonly containerId: string;
    }): Promise<InstagramMediaStatusResult> {
      const result = v.parse(
        v.object({ id: v.string(), status_code: v.string() }),
        await requestJson<unknown>(
          opts,
          "instagram",
          "instagram.get_media_container_status",
          input.containerId + "?fields=status_code",
          {
            method: "GET",
          },
        ),
      );
      return {
        containerId: result.id,
        status: parseInstagramContainerStatus(result.status_code),
      };
    },

    async publishMediaContainer(input: {
      readonly containerId: string;
    }): Promise<InstagramPublishedMediaResult> {
      const result = await requestJson<{ readonly id: string }>(
        opts,
        "instagram",
        "instagram.publish_media_container",
        `${opts.instagramAccountId}/media_publish`,
        { method: "POST", body: JSON.stringify({ creation_id: input.containerId }) },
      );
      return { mediaId: result.id };
    },

    async fetchPermalink(input: { readonly mediaId: string }): Promise<InstagramPermalinkResult> {
      const result = await requestJson<{ readonly id: string; readonly permalink: string }>(
        opts,
        "instagram",
        "instagram.fetch_permalink",
        `${input.mediaId}?fields=permalink`,
        { method: "GET" },
      );
      return { mediaId: result.id, permalink: result.permalink };
    },
  };
}
