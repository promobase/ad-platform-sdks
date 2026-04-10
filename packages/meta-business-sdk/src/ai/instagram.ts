import { tool } from "ai";
import { z } from "zod";
import { createInstagramClient } from "../clients/instagram/index.ts";
import type { MetaClient } from "./common.ts";
import type { InstagramClientOptions } from "../clients/instagram/types.ts";

export function createInstagramTools(opts: { api: MetaClient; igAccountId: string; polling?: InstagramClientOptions["polling"] }) {
  const ig = createInstagramClient({ api: opts.api, igAccountId: opts.igAccountId, polling: opts.polling });

  return {
    ig_publish_photo: tool({
      description: "Publish a photo to the Instagram feed. Handles container creation and polling automatically.",
      inputSchema: z.object({
        imageUrl: z.string().describe("Public URL of the image to publish"),
        caption: z.string().optional().describe("Post caption text"),
        collaborators: z.array(z.string()).optional().describe("Instagram usernames to tag as collaborators (max 5)"),
        locationId: z.string().optional().describe("Location ID to tag"),
      }),
      execute: async (params) => ig.media.publishPhoto(params),
    }),

    ig_publish_video: tool({
      description: "Publish a video (reel) to the Instagram feed. All feed videos are reels. Handles transcoding polling automatically.",
      inputSchema: z.object({
        videoUrl: z.string().describe("Public URL of the video to publish"),
        caption: z.string().optional().describe("Post caption text"),
        collaborators: z.array(z.string()).optional().describe("Instagram usernames to tag as collaborators (max 5)"),
        coverUrl: z.string().optional().describe("Custom cover image URL"),
        locationId: z.string().optional().describe("Location ID to tag"),
      }),
      execute: async (params) => ig.media.publishVideo(params),
    }),

    ig_publish_carousel: tool({
      description: "Publish a carousel (2-10 photos/videos) to the Instagram feed. Handles per-item container creation and polling.",
      inputSchema: z.object({
        items: z.array(z.object({
          type: z.enum(["photo", "video"]).describe("Media type"),
          url: z.string().describe("Public URL of the media"),
        })).min(2).max(10).describe("Carousel items (2-10)"),
        caption: z.string().optional().describe("Post caption text"),
        collaborators: z.array(z.string()).optional().describe("Instagram usernames to tag as collaborators"),
        locationId: z.string().optional().describe("Location ID to tag"),
      }),
      execute: async (params) => ig.media.publishCarousel(params),
    }),

    ig_publish_story: tool({
      description: "Publish a story to Instagram. Stories expire after 24 hours.",
      inputSchema: z.object({
        imageUrl: z.string().optional().describe("Public URL of the image (provide either imageUrl or videoUrl)"),
        videoUrl: z.string().optional().describe("Public URL of the video (provide either imageUrl or videoUrl)"),
      }),
      execute: async (params) => ig.stories.publish(params),
    }),

    ig_list_media: tool({
      description: "List recent media posts from the Instagram account.",
      inputSchema: z.object({
        limit: z.number().optional().describe("Maximum number of posts to return"),
      }),
      execute: async (params) => ig.media.list({ limit: params.limit }),
    }),

    ig_get_media_insights: tool({
      description: "Get performance insights for a specific Instagram media post.",
      inputSchema: z.object({
        mediaId: z.string().describe("Instagram media ID"),
        metrics: z.array(z.string()).optional().describe("Metrics to fetch (default: impressions, reach, engagement)"),
      }),
      execute: async ({ mediaId, metrics }) => ig.media.getInsights(mediaId, metrics ?? ["impressions", "reach", "engagement"]),
    }),

    ig_get_permalink: tool({
      description: "Get the permanent URL for an Instagram media post.",
      inputSchema: z.object({
        mediaId: z.string().describe("Instagram media ID"),
      }),
      execute: async ({ mediaId }) => ig.media.getPermalink(mediaId),
    }),

    ig_comment_create: tool({
      description: "Post a comment on an Instagram media post.",
      inputSchema: z.object({
        mediaId: z.string().describe("Instagram media ID to comment on"),
        message: z.string().describe("Comment text"),
      }),
      execute: async ({ mediaId, message }) => ig.comments.create(mediaId, message),
    }),

    ig_comment_reply: tool({
      description: "Reply to an existing Instagram comment.",
      inputSchema: z.object({
        commentId: z.string().describe("Comment ID to reply to"),
        message: z.string().describe("Reply text"),
      }),
      execute: async ({ commentId, message }) => ig.comments.reply(commentId, message),
    }),

    ig_comment_list: tool({
      description: "List comments on an Instagram media post.",
      inputSchema: z.object({
        mediaId: z.string().describe("Instagram media ID"),
        limit: z.number().optional().describe("Maximum number of comments"),
      }),
      execute: async ({ mediaId, limit }) => ig.comments.list(mediaId, { limit }),
    }),

    ig_comment_hide: tool({
      description: "Hide or unhide a comment on Instagram.",
      inputSchema: z.object({
        commentId: z.string().describe("Comment ID"),
        hidden: z.boolean().describe("true to hide, false to unhide"),
      }),
      execute: async ({ commentId, hidden }) => ig.comments.hide(commentId, hidden),
    }),

    ig_comment_delete: tool({
      description: "Delete a comment on Instagram.",
      inputSchema: z.object({
        commentId: z.string().describe("Comment ID to delete"),
      }),
      execute: async ({ commentId }) => ig.comments.delete(commentId),
    }),

    ig_send_dm: tool({
      description: "Send a direct message to an Instagram user.",
      inputSchema: z.object({
        recipientId: z.string().describe("Instagram-scoped user ID (IGSID)"),
        text: z.string().optional().describe("Message text"),
        attachmentUrl: z.string().optional().describe("URL of attachment to send"),
      }),
      execute: async ({ recipientId, ...message }) => ig.messaging.send(recipientId, message),
    }),

    ig_reply_dm: tool({
      description: "Reply to a specific Instagram DM message.",
      inputSchema: z.object({
        recipientId: z.string().describe("Instagram-scoped user ID"),
        replyToMid: z.string().describe("Message ID to reply to"),
        text: z.string().describe("Reply text"),
      }),
      execute: async ({ recipientId, replyToMid, text }) => ig.messaging.reply(recipientId, replyToMid, text),
    }),

    ig_private_reply: tool({
      description: "Send a private DM reply to a public Instagram comment. Limited to 7-day window, 1 per comment, 1000 chars.",
      inputSchema: z.object({
        commentId: z.string().describe("Comment ID to privately reply to"),
        text: z.string().max(1000).describe("Private reply text (max 1000 characters)"),
      }),
      execute: async ({ commentId, text }) => ig.messaging.privateReply(commentId, text),
    }),

    ig_get_account: tool({
      description: "Get Instagram account profile information.",
      inputSchema: z.object({}),
      execute: async () => ig.account.get(),
    }),

    ig_webhook_subscribe: tool({
      description: "Subscribe to Instagram webhook events.",
      inputSchema: z.object({
        fields: z.array(z.string()).optional().describe("Event fields to subscribe to (default: comments, messages, message_edit)"),
      }),
      execute: async ({ fields }) => ig.webhooks.subscribe(fields),
    }),
  };
}
