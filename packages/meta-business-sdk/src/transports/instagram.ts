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

export type InstagramContainerStatus = "IN_PROGRESS" | "FINISHED" | "ERROR" | "EXPIRED";

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
      const result = await requestJson<{
        readonly id: string;
        readonly status_code: InstagramContainerStatus;
      }>(
        opts,
        "instagram",
        "instagram.get_media_container_status",
        input.containerId + "?fields=status_code",
        {
          method: "GET",
        },
      );
      return { containerId: result.id, status: result.status_code };
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
