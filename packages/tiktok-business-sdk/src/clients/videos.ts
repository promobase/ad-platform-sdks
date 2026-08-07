import type { PlatformPublishResult } from "@mosaic/sdk-runtime";
import { Data, Effect } from "effect";

import {
  TikTokPublishResultSchema,
  TikTokPublishStatusSchema,
  type TikTokRequestError,
  type TikTokResponseDataSchema,
  TikTokVideoListSchema,
  tiktokRequest,
  tiktokRequestEffect,
  tiktokRequestErrorToError,
} from "./request.ts";
import type {
  ListVideosOptions,
  ListVideosResponse,
  PublishStatusResponse,
  PublishVideoOptions,
  TikTokClientOptions,
} from "./types.ts";

export class TikTokPublishFailedError extends Data.TaggedError("TikTokPublishFailedError")<{
  readonly publishId: string;
  readonly reason?: string;
  readonly status: PublishStatusResponse;
}> {}

export class TikTokPublishTimeoutError extends Data.TaggedError("TikTokPublishTimeoutError")<{
  readonly publishId: string;
  readonly maxAttempts: number;
}> {}

type TikTokWaitForPublishError =
  | TikTokRequestError
  | TikTokPublishFailedError
  | TikTokPublishTimeoutError;

function waitForPublishErrorToError(error: TikTokWaitForPublishError): Error {
  if (error instanceof TikTokPublishFailedError) {
    return new Error(`Video publish failed: ${error.reason ?? "unknown reason"}`);
  }
  if (error instanceof TikTokPublishTimeoutError) {
    return new Error(`Video publish did not complete after ${error.maxAttempts} attempts`);
  }
  return tiktokRequestErrorToError(error);
}

export function createVideos(opts: TikTokClientOptions) {
  const { businessId } = opts;

  async function request<T>(
    method: string,
    path: string,
    body?: Record<string, unknown>,
    query?: Record<string, unknown>,
    schema?: TikTokResponseDataSchema<T>,
  ): Promise<T> {
    return tiktokRequest<T>(opts, { method, path, body, query }, schema);
  }

  function getPublishStatusEffect(publishId: string) {
    return tiktokRequestEffect<PublishStatusResponse>(
      opts,
      {
        method: "GET",
        path: "/business/publish/status/",
        query: {
          business_id: businessId,
          publish_id: publishId,
        },
      },
      TikTokPublishStatusSchema,
    );
  }

  function waitForPublishEffect(
    publishId: string,
    waitOpts?: { intervalMs?: number; maxAttempts?: number },
  ): Effect.Effect<PublishStatusResponse, TikTokWaitForPublishError> {
    const intervalMs = waitOpts?.intervalMs ?? 5_000;
    const maxAttempts = waitOpts?.maxAttempts ?? 60;

    const poll = (
      attempt: number,
    ): Effect.Effect<PublishStatusResponse, TikTokWaitForPublishError> =>
      getPublishStatusEffect(publishId).pipe(
        Effect.flatMap((status) => {
          switch (status.status) {
            case "PUBLISH_COMPLETE":
            case "SEND_TO_USER_INBOX":
              return Effect.succeed(status);
            case "FAILED":
              return Effect.fail(
                new TikTokPublishFailedError({
                  publishId,
                  reason: status.reason,
                  status,
                }),
              );
            case "PROCESSING_DOWNLOAD":
              if (attempt >= maxAttempts - 1) {
                return Effect.fail(new TikTokPublishTimeoutError({ publishId, maxAttempts }));
              }
              return Effect.sleep(`${intervalMs} millis`).pipe(
                Effect.flatMap(() => poll(attempt + 1)),
              );
            default:
              return Effect.fail(
                new TikTokPublishFailedError({
                  publishId,
                  reason: `unknown status ${String(status.status)}`,
                  status,
                }),
              );
          }
        }),
      );

    return poll(0);
  }

  function normalizePublishStatus(
    publishId: string,
    status: PublishStatusResponse,
  ): PlatformPublishResult<PublishStatusResponse> {
    return {
      platform: "tiktok",
      state: status.status === "FAILED" ? "failed" : "published",
      id: publishId,
      postId: status.post_ids?.[0],
      raw: status,
    };
  }

  const client = {
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

      const result = await request(
        "POST",
        "/business/video/publish/",
        body,
        undefined,
        TikTokPublishResultSchema,
      );
      return { shareId: result.share_id };
    },

    /** Effect variant of getPublishStatus for orchestration-heavy callers. */
    getPublishStatusEffect,

    /** Check the publishing status of a video post. */
    async getPublishStatus(publishId: string): Promise<PublishStatusResponse> {
      const result = await Effect.runPromise(Effect.either(getPublishStatusEffect(publishId)));
      if (result._tag === "Left") throw tiktokRequestErrorToError(result.left);
      return result.right;
    },

    /** Effect variant of waitForPublish for typed polling and composition. */
    waitForPublishEffect,

    /**
     * Wait for a video publish task to complete.
     * Polls the status endpoint until PUBLISH_COMPLETE or FAILED.
     */
    async waitForPublish(
      publishId: string,
      opts?: { intervalMs?: number; maxAttempts?: number },
    ): Promise<PublishStatusResponse> {
      const result = await Effect.runPromise(Effect.either(waitForPublishEffect(publishId, opts)));
      if (result._tag === "Left") throw waitForPublishErrorToError(result.left);
      return result.right;
    },

    /** Wait for publish and return the shared normalized platform result shape. */
    async waitForPublishResult(
      publishId: string,
      opts?: { intervalMs?: number; maxAttempts?: number },
    ): Promise<PlatformPublishResult<PublishStatusResponse>> {
      const status = await this.waitForPublish(publishId, opts);
      return normalizePublishStatus(publishId, status);
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

      return request(
        "GET",
        "/business/video/list/",
        undefined,
        query,
        TikTokVideoListSchema as unknown as TikTokResponseDataSchema<ListVideosResponse>,
      );
    },
  };

  return client;
}
