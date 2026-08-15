import { ApiClient } from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { FacebookApiError } from "../../errors.ts";
import type {
  PublishPhotoStoryOptions,
  PublishVideoStoryOptions,
  VideoUploadInput,
  VideoUploadResult,
  VideoUploadSession,
} from "./types.ts";

const VideoStoryStartSchema = v.object({
  video_id: v.string(),
  upload_url: v.string(),
});

const VideoStoryFinishSchema = v.object({
  success: v.optional(v.boolean()),
  post_id: v.optional(v.string()),
  id: v.optional(v.string()),
});

export function createStories(
  pageId: string,
  accessToken: string,
  fetchImpl: typeof fetch = fetch,
  signal?: AbortSignal,
) {
  const client = new ApiClient({
    accessToken,
    baseUrl: "https://graph.facebook.com",
    onError: FacebookApiError.fromResponse,
    fetch: fetchImpl,
    signal,
  });

  const startVideoUpload = async (): Promise<VideoUploadSession> => {
    const result = v.parse(
      VideoStoryStartSchema,
      await client.post<unknown>(`${pageId}/video_stories`, { upload_phase: "start" }),
    );
    return { videoId: result.video_id, uploadUrl: result.upload_url };
  };

  const uploadVideo = async (input: VideoUploadInput): Promise<VideoUploadResult> => {
    const response = await fetchImpl(input.uploadUrl, {
      method: "POST",
      signal,
      headers: {
        Authorization: `OAuth ${accessToken}`,
        file_url: input.videoUrl,
      },
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(`Story video upload failed: ${JSON.stringify(error)}`);
    }
    const result = (await response.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };
    return { success: result.success ?? true, message: result.message };
  };

  const finishVideoUpload = async (opts: {
    videoId: string;
    description?: string;
  }): Promise<{ id: string; postId: string; videoId: string }> => {
    const params: Record<string, unknown> = {
      upload_phase: "finish",
      video_id: opts.videoId,
      video_state: "PUBLISHED",
    };
    if (opts.description) params.description = opts.description;
    const result = v.parse(
      VideoStoryFinishSchema,
      await client.post<unknown>(`${pageId}/video_stories`, params),
    );
    const postId = result.post_id ?? result.id;
    if (!postId || result.success === false) {
      throw new Error("Facebook video story response missing a successful post ID");
    }
    return { id: result.id ?? postId, postId, videoId: opts.videoId };
  };

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
      const startResult = await startVideoUpload();
      await uploadVideo({ uploadUrl: startResult.uploadUrl, videoUrl: opts.videoUrl });
      return finishVideoUpload({
        videoId: startResult.videoId,
        description: opts.description,
      });
    },

    /** Durable 3-phase video story operations for Cloudflare Workflow steps. */
    video: {
      start: startVideoUpload,
      upload: uploadVideo,
      finish: finishVideoUpload,
    },
  };
}
