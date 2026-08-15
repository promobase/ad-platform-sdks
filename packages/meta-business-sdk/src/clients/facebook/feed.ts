import { ApiClient } from "@openpromo/sdk-runtime";
import * as v from "valibot";

import { FacebookApiError } from "../../errors.ts";
import type {
  PageCreateFeedParams,
  PageCreatePhotosParams,
  PageCreateVideosParams,
} from "../../generated/objects/page.ts";
import type {
  PagePostFields,
  PostAttachment,
  FacebookVideoDetails,
  PublishMultiPhotoOptions,
  PublishPhotoPostOptions,
  PublishTextPostOptions,
  PublishVideoPostOptions,
  PublishVideoReelOptions,
  VideoUploadInput,
  VideoUploadResult,
  VideoUploadSession,
  VideoStatus,
} from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;
type PageNode = ReturnType<CreateClientReturn["page"]>;

const VideoUploadStartSchema = v.object({
  video_id: v.string(),
  upload_url: v.string(),
});

const VideoUploadFinishSchema = v.object({
  success: v.optional(v.boolean()),
  post_id: v.optional(v.string()),
  id: v.optional(v.string()),
});

const VideoUploadResultSchema = v.object({
  success: v.optional(v.boolean()),
  message: v.optional(v.string()),
});

const VideoStatusSchema = v.object({
  status: v.optional(
    v.object({
      uploading_phase: v.optional(v.object({ status: v.string() })),
      processing_phase: v.optional(v.object({ status: v.string() })),
      publishing_phase: v.optional(
        v.object({ status: v.string(), errors: v.optional(v.array(v.unknown())) }),
      ),
    }),
  ),
});

const FacebookVideoDetailsSchema = v.object({
  id: v.string(),
  source: v.optional(v.string()),
  thumbnails: v.optional(v.object({ data: v.array(v.object({ uri: v.string() })) })),
});

const IdSchema = v.object({ id: v.string() });

function requirePostId(result: v.InferOutput<typeof VideoUploadFinishSchema>): string {
  const postId = result.post_id ?? result.id;
  if (!postId || result.success === false) {
    throw new Error("Facebook video upload response missing a successful post ID");
  }
  return postId;
}

export function createFeed(
  api: CreateClientReturn,
  page: PageNode,
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

  const startVideoReelUpload = async (): Promise<VideoUploadSession> => {
    const result = await client.post<unknown>(`${pageId}/video_reels`, {
      upload_phase: "start",
    });
    const parsed = v.parse(VideoUploadStartSchema, result);
    return { videoId: parsed.video_id, uploadUrl: parsed.upload_url };
  };

  const uploadVideoReel = async (input: VideoUploadInput): Promise<VideoUploadResult> => {
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
      throw new Error(`Video upload failed: ${JSON.stringify(error)}`);
    }
    const result = v.parse(VideoUploadResultSchema, await response.json().catch(() => ({})));
    return { success: result.success ?? true, message: result.message };
  };

  const finishVideoReelUpload = async (opts: {
    videoId: string;
    description?: string;
    videoState?: "PUBLISHED" | "DRAFT";
  }): Promise<{ id: string; videoId: string }> => {
    const params: Record<string, unknown> = {
      upload_phase: "finish",
      video_id: opts.videoId,
      video_state: opts.videoState ?? "PUBLISHED",
    };
    if (opts.description) params.description = opts.description;
    const result = v.parse(
      VideoUploadFinishSchema,
      await client.post<unknown>(`${pageId}/video_reels`, params),
    );
    return { id: requirePostId(result), videoId: opts.videoId };
  };

  const getVideoStatus = async (videoId: string): Promise<VideoStatus> => {
    const result = v.parse(
      VideoStatusSchema,
      await client.get<unknown>(videoId, {
        fields: ["status"],
      }),
    );
    const status = result.status ?? {};
    return {
      uploadingPhase: status.uploading_phase,
      processingPhase: status.processing_phase,
      publishingPhase: status.publishing_phase,
    };
  };

  return {
    /** Publish a text post (optionally with a link) to the Page feed. */
    async publishPost(opts: PublishTextPostOptions): Promise<{ id: string }> {
      const params: PageCreateFeedParams = {
        message: opts.message,
        link: opts.link,
        published: opts.published !== false,
      };
      const extendedParams = params as PageCreateFeedParams & Record<string, unknown>;
      if (opts.attachedMedia) {
        for (const [index, media] of opts.attachedMedia.entries()) {
          extendedParams[`attached_media[${index}]`] = JSON.stringify({
            media_fbid: media.mediaFbid,
          });
        }
      }
      if (opts.callToAction) {
        (extendedParams as Record<string, unknown>).call_to_action = JSON.stringify(
          opts.callToAction,
        );
      }
      if (opts.scheduledPublishTime) {
        extendedParams.published = false;
        extendedParams.scheduled_publish_time = String(opts.scheduledPublishTime);
      }
      const result = v.parse(
        IdSchema,
        await page.feed.create(extendedParams as PageCreateFeedParams),
      );
      return { id: result.id };
    },

    /** Upload a photo without publishing it, for a later attached-media post. */
    async uploadPhoto(url: string): Promise<{ id: string }> {
      const params: PageCreatePhotosParams = { url, published: false };
      const result = v.parse(IdSchema, await page.photos.create(params));
      return { id: result.id };
    },

    /** Publish a photo post to the Page. */
    async publishPhoto(opts: PublishPhotoPostOptions): Promise<{ id: string; post_id?: string }> {
      const params: Record<string, unknown> = { url: opts.url };
      if (opts.caption) params.caption = opts.caption;
      if (opts.published !== undefined) params.published = opts.published;
      if (opts.scheduledPublishTime) {
        params.published = false;
        params.scheduled_publish_time = Number(opts.scheduledPublishTime);
      }
      const result = v.parse(IdSchema, await page.photos.create(params as PageCreatePhotosParams));
      return { id: result.id };
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
      const result = v.parse(IdSchema, await page.videos.create(params as PageCreateVideosParams));
      return { id: result.id };
    },

    /** Publish a multi-photo post (upload each photo, then create feed with attached_media[]). */
    async publishMultiPhoto(opts: PublishMultiPhotoOptions): Promise<{ id: string }> {
      // 1. Upload each photo with published=false
      const photoIds: string[] = [];
      for (const photo of opts.photos) {
        const result = v.parse(
          IdSchema,
          await page.photos.create({ url: photo.url, published: false }),
        );
        photoIds.push(result.id);
      }

      // 2. Create feed post with attached_media array
      const params: Record<string, unknown> = {};
      if (opts.message) params.message = opts.message;
      params.published = opts.published !== false;
      if (opts.scheduledPublishTime) {
        params.published = false;
        params.scheduled_publish_time = String(opts.scheduledPublishTime);
      }
      // attached_media format: attached_media[0]={media_fbid:ID}, attached_media[1]={media_fbid:ID}
      for (let i = 0; i < photoIds.length; i++) {
        params[`attached_media[${i}]`] = JSON.stringify({ media_fbid: photoIds[i] });
      }
      const result = v.parse(IdSchema, await page.feed.create(params as PageCreateFeedParams));
      return { id: result.id };
    },

    /** Publish a video reel using the 3-phase upload flow. */
    async publishVideoReel(
      opts: PublishVideoReelOptions,
    ): Promise<{ id: string; videoId: string }> {
      const startResult = await startVideoReelUpload();
      await uploadVideoReel({ uploadUrl: startResult.uploadUrl, videoUrl: opts.videoUrl });
      return finishVideoReelUpload({
        videoId: startResult.videoId,
        description: opts.description,
        videoState: opts.videoState,
      });
    },

    /** Get video processing status. */
    getVideoStatus,

    /** Durable 3-phase video reel operations for Cloudflare Workflow steps. */
    videoReels: {
      start: startVideoReelUpload,
      upload: uploadVideoReel,
      finish: finishVideoReelUpload,
      getStatus: getVideoStatus,
    },

    /** Fetch post attachments (images + subattachments for multi-photo). */
    async fetchAttachments(postId: string): Promise<PostAttachment[]> {
      const result = await client.get<{ attachments?: { data: PostAttachment[] } }>(postId, {
        fields: ["attachments{media{image{src}},subattachments{data{media{image{src}}}}}"],
      });
      return result.attachments?.data ?? [];
    },

    /** Fetch video details (source URL + thumbnails). */
    async fetchVideo(videoId: string) {
      return v.parse(
        FacebookVideoDetailsSchema,
        await client.get<unknown>(videoId, {
          fields: ["id", "source", "thumbnails{uri}"],
        }),
      ) satisfies FacebookVideoDetails;
    },

    /** Get permalink for a post. */
    async getPermalink(postId: string): Promise<string | undefined> {
      const result = await client.get<{ permalink_url?: string }>(postId, {
        fields: ["permalink_url"],
      });
      return result.permalink_url;
    },

    /** List Page feed posts using the generated Page.feed edge. */
    async list(opts?: { fields?: (keyof PagePostFields)[]; limit?: number }) {
      const cursor = page.feed.list({
        fields:
          opts?.fields ??
          ([
            "id",
            "message",
            "created_time",
            "permalink_url",
            "full_picture",
          ] as (keyof PagePostFields)[]),
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
