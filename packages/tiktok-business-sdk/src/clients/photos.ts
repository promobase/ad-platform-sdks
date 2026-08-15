import { Data, Effect } from "effect";

import {
  TikTokPublishResultSchema,
  TikTokPublishStatusSchema,
  type TikTokRequestError,
  type TikTokResponseDataSchema,
  tiktokRequest,
  tiktokRequestEffect,
  tiktokRequestErrorToError,
} from "./request.ts";
import type { PublishPhotoOptions, PublishStatusResponse, TikTokClientOptions } from "./types.ts";

export class TikTokPhotoPublishFailedError extends Data.TaggedError(
  "TikTokPhotoPublishFailedError",
)<{
  readonly publishId: string;
  readonly reason?: string;
  readonly status: PublishStatusResponse;
}> {}

export class TikTokPhotoPublishTimeoutError extends Data.TaggedError(
  "TikTokPhotoPublishTimeoutError",
)<{
  readonly publishId: string;
  readonly maxAttempts: number;
}> {}

type TikTokPhotoWaitForPublishError =
  | TikTokRequestError
  | TikTokPhotoPublishFailedError
  | TikTokPhotoPublishTimeoutError;

function waitForPublishErrorToError(error: TikTokPhotoWaitForPublishError): Error {
  if (error instanceof TikTokPhotoPublishFailedError) {
    return new Error(`Photo publish failed: ${error.reason ?? "unknown reason"}`);
  }
  if (error instanceof TikTokPhotoPublishTimeoutError) {
    return new Error(`Photo publish did not complete after ${error.maxAttempts} attempts`);
  }
  return tiktokRequestErrorToError(error);
}

export function createPhotos(opts: TikTokClientOptions) {
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
  ): Effect.Effect<PublishStatusResponse, TikTokPhotoWaitForPublishError> {
    const intervalMs = waitOpts?.intervalMs ?? 5_000;
    const maxAttempts = waitOpts?.maxAttempts ?? 60;

    const poll = (
      attempt: number,
    ): Effect.Effect<PublishStatusResponse, TikTokPhotoWaitForPublishError> =>
      getPublishStatusEffect(publishId).pipe(
        Effect.flatMap((status) => {
          switch (status.status) {
            case "PUBLISH_COMPLETE":
            case "SEND_TO_USER_INBOX":
              return Effect.succeed(status);
            case "FAILED":
              return Effect.fail(
                new TikTokPhotoPublishFailedError({
                  publishId,
                  reason: status.reason,
                  status,
                }),
              );
            case "PROCESSING_DOWNLOAD":
              if (attempt >= maxAttempts - 1) {
                return Effect.fail(new TikTokPhotoPublishTimeoutError({ publishId, maxAttempts }));
              }
              return Effect.sleep(`${intervalMs} millis`).pipe(
                Effect.flatMap(() => poll(attempt + 1)),
              );
            default:
              return Effect.fail(
                new TikTokPhotoPublishFailedError({
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

  const client = {
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

      const result = await request(
        "POST",
        "/business/photo/publish/",
        body,
        undefined,
        TikTokPublishResultSchema,
      );
      return { shareId: result.share_id };
    },

    /** Effect variant of getPublishStatus for orchestration-heavy callers. */
    getPublishStatusEffect,

    /** Check the publishing status of a photo post. Reuses the shared publish status endpoint. */
    async getPublishStatus(publishId: string): Promise<PublishStatusResponse> {
      const result = await Effect.runPromise(Effect.either(getPublishStatusEffect(publishId)));
      if (result._tag === "Left") throw tiktokRequestErrorToError(result.left);
      return result.right;
    },

    /** Effect variant of waitForPublish for typed polling and composition. */
    waitForPublishEffect,

    /** Wait for a photo publish task to complete. */
    async waitForPublish(
      publishId: string,
      opts?: { intervalMs?: number; maxAttempts?: number },
    ): Promise<PublishStatusResponse> {
      const result = await Effect.runPromise(Effect.either(waitForPublishEffect(publishId, opts)));
      if (result._tag === "Left") throw waitForPublishErrorToError(result.left);
      return result.right;
    },
  };

  return client;
}
