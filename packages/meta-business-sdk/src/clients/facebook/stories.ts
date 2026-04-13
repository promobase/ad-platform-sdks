import { ApiClient } from "@promobase/sdk-runtime";
import { FacebookApiError } from "../../errors.ts";
import type { PublishPhotoStoryOptions, PublishVideoStoryOptions } from "./types.ts";

export function createStories(pageId: string, accessToken: string) {
  const client = new ApiClient({
    accessToken,
    baseUrl: "https://graph.facebook.com",
    onError: FacebookApiError.fromResponse,
  });

  return {
    /** Publish a photo story. */
    async publishPhoto(opts: PublishPhotoStoryOptions): Promise<{ id: string; postId: string }> {
      const result = await client.post<{ id: string; post_id: string }>(`${pageId}/photo_stories`, {
        photo_url: opts.photoUrl,
      });
      return { id: result.id, postId: result.post_id };
    },

    /** Publish a video story using the 3-phase upload flow. */
    async publishVideo(
      opts: PublishVideoStoryOptions,
    ): Promise<{ id: string; postId: string; videoId: string }> {
      // Phase 1: Start
      const startResult = await client.post<{ video_id: string; upload_url: string }>(
        `${pageId}/video_stories`,
        { upload_phase: "start" },
      );

      // Phase 2: Upload
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
        throw new Error(`Story video upload failed: ${JSON.stringify(error)}`);
      }

      // Phase 3: Finish
      const finishParams: Record<string, unknown> = {
        upload_phase: "finish",
        video_id: startResult.video_id,
        video_state: "PUBLISHED",
      };
      if (opts.description) finishParams.description = opts.description;

      const finishResult = await client.post<{ success: boolean; post_id: string; id: string }>(
        `${pageId}/video_stories`,
        finishParams,
      );

      return { id: finishResult.id, postId: finishResult.post_id, videoId: startResult.video_id };
    },
  };
}
