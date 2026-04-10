import { tool } from "ai";
import { z } from "zod";
import { createTikTokClient } from "../clients/index.ts";
import type { TikTokClientOptions } from "../clients/types.ts";

export function createTikTokContentTools(opts: TikTokClientOptions) {
  const tt = createTikTokClient(opts);

  return {
    tt_publish_video: tool({
      description: "Publish a video to TikTok. Returns a share_id for tracking publish status. Rate limit: 6/min, 15/day.",
      inputSchema: z.object({
        videoUrl: z.string().describe("Public HTTPS URL of the video (.mp4/.mov/.webm, max 1GB, 3-600s)"),
        caption: z.string().optional().describe("Video caption (max 2200 chars, supports #hashtags and @mentions)"),
        privacyLevel: z.enum(["PUBLIC_TO_EVERYONE", "MUTUAL_FOLLOW_FRIENDS", "FOLLOWER_OF_CREATOR", "SELF_ONLY"]).optional().describe("Privacy level (default: PUBLIC_TO_EVERYONE)"),
        disableComment: z.boolean().optional().describe("Disable comments"),
        disableDuet: z.boolean().optional().describe("Disable duets"),
        disableStitch: z.boolean().optional().describe("Disable stitching"),
        customThumbnailUrl: z.string().optional().describe("Custom cover image URL (JPG/PNG/WebP, max 20MB)"),
        isAiGenerated: z.boolean().optional().describe("Label as AI-generated content"),
        uploadToDraft: z.boolean().optional().describe("Upload as draft instead of publishing"),
      }),
      execute: async (params) => tt.videos.publish(params),
    }),

    tt_publish_photo: tool({
      description: "Publish a photo post to TikTok. Supports up to 35 images. Rate limit: 6/min, 15/day.",
      inputSchema: z.object({
        photoUrls: z.array(z.string()).min(1).max(35).describe("Public HTTPS URLs of photos (JPG/JPEG/WebP only, max 20MB each)"),
        privacyLevel: z.enum(["PUBLIC_TO_EVERYONE", "MUTUAL_FOLLOW_FRIENDS", "FOLLOWER_OF_CREATOR", "SELF_ONLY"]).describe("Privacy level"),
        caption: z.string().optional().describe("Post caption (max 4000 chars)"),
        title: z.string().optional().describe("Post title (max 90 chars)"),
        photoCoverIndex: z.number().optional().describe("Index of cover photo (default: 0)"),
        disableComment: z.boolean().optional().describe("Disable comments"),
      }),
      execute: async (params) => tt.photos.publish(params),
    }),

    tt_get_publish_status: tool({
      description: "Check the publishing status of a TikTok video or photo post.",
      inputSchema: z.object({
        publishId: z.string().describe("The share_id returned from publish"),
      }),
      execute: async ({ publishId }) => tt.videos.getPublishStatus(publishId),
    }),

    tt_list_videos: tool({
      description: "List videos/posts from the TikTok account with optional metrics.",
      inputSchema: z.object({
        videoIds: z.array(z.string()).optional().describe("Filter by specific post IDs"),
        maxCount: z.number().min(1).max(20).optional().describe("Results per page (max 20)"),
        cursor: z.number().optional().describe("Pagination cursor"),
      }),
      execute: async (params) => tt.videos.list(params),
    }),

    tt_get_video_settings: tool({
      description: "Get the account's video posting settings (privacy options, max duration, disabled features).",
      inputSchema: z.object({}),
      execute: async () => tt.account.getVideoSettings(),
    }),

    tt_get_hashtag_suggestions: tool({
      description: "Get recommended hashtags for a keyword. Returns up to 10 suggestions with view counts.",
      inputSchema: z.object({
        keyword: z.string().describe("Keyword to get hashtag suggestions for"),
        language: z.string().optional().describe("Language code (default: en)"),
      }),
      execute: async ({ keyword, language }) => tt.account.getHashtagSuggestions(keyword, language),
    }),
  };
}
