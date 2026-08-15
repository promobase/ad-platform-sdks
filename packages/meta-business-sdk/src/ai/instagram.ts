import { tool, type Tool } from "ai";
import * as v from "valibot";

import { createInstagramClient } from "../clients/instagram/index.ts";
import type { InstagramClientOptions } from "../clients/instagram/types.ts";
import type { MetaClient } from "./common.ts";

export function createInstagramTools(opts: {
  api: MetaClient;
  igAccountId: string;
  polling?: InstagramClientOptions["polling"];
}): Record<
  | "ig_publish_photo"
  | "ig_publish_video"
  | "ig_publish_carousel"
  | "ig_publish_story"
  | "ig_list_media"
  | "ig_get_media_insights"
  | "ig_get_permalink"
  | "ig_comment_create"
  | "ig_comment_reply"
  | "ig_comment_list"
  | "ig_comment_hide"
  | "ig_comment_delete"
  | "ig_send_dm"
  | "ig_reply_dm"
  | "ig_private_reply"
  | "ig_get_account"
  | "ig_webhook_subscribe",
  Tool
> {
  const ig = createInstagramClient({
    api: opts.api,
    igAccountId: opts.igAccountId,
    polling: opts.polling,
  });

  return {
    ig_publish_photo: tool({
      description:
        "Publish a photo to the Instagram feed. Handles container creation and polling automatically.",
      inputSchema: v.object({
        imageUrl: v.string(),
        caption: v.optional(v.string()),
        collaborators: v.optional(v.array(v.string())),
        locationId: v.optional(v.string()),
      }),
      execute: async (params) => ig.media.publishPhoto(params),
    }),

    ig_publish_video: tool({
      description:
        "Publish a video (reel) to the Instagram feed. All feed videos are reels. Polls Meta processing status automatically.",
      inputSchema: v.object({
        videoUrl: v.string(),
        caption: v.optional(v.string()),
        collaborators: v.optional(v.array(v.string())),
        coverUrl: v.optional(v.string()),
        locationId: v.optional(v.string()),
      }),
      execute: async (params) => ig.media.publishVideo(params),
    }),

    ig_publish_carousel: tool({
      description:
        "Publish a carousel (2-10 photos/videos) to the Instagram feed. Handles per-item container creation and polling.",
      inputSchema: v.object({
        items: v.pipe(
          v.pipe(
            v.array(
              v.object({
                type: v.picklist(["photo", "video"]),
                url: v.string(),
              }),
            ),
            v.minLength(2),
          ),
          v.maxLength(10),
        ),
        caption: v.optional(v.string()),
        collaborators: v.optional(v.array(v.string())),
        locationId: v.optional(v.string()),
      }),
      execute: async (params) => ig.media.publishCarousel(params),
    }),

    ig_publish_story: tool({
      description: "Publish a story to Instagram. Stories expire after 24 hours.",
      inputSchema: v.object({
        imageUrl: v.optional(v.string()),
        videoUrl: v.optional(v.string()),
      }),
      execute: async (params) => ig.stories.publish(params),
    }),

    ig_list_media: tool({
      description: "List recent media posts from the Instagram account.",
      inputSchema: v.object({
        limit: v.optional(v.number()),
      }),
      execute: async (params) => ig.media.list({ limit: params.limit }),
    }),

    ig_get_media_insights: tool({
      description: "Get performance insights for a specific Instagram media post.",
      inputSchema: v.object({
        mediaId: v.string(),
        metrics: v.optional(v.array(v.string())),
      }),
      execute: async ({ mediaId, metrics }) =>
        ig.media.getInsights(mediaId, metrics ?? ["impressions", "reach", "engagement"]),
    }),

    ig_get_permalink: tool({
      description: "Get the permanent URL for an Instagram media post.",
      inputSchema: v.object({
        mediaId: v.string(),
      }),
      execute: async ({ mediaId }) => ig.media.getPermalink(mediaId),
    }),

    ig_comment_create: tool({
      description: "Post a comment on an Instagram media post.",
      inputSchema: v.object({
        mediaId: v.string(),
        message: v.string(),
      }),
      execute: async ({ mediaId, message }) => ig.comments.create(mediaId, message),
    }),

    ig_comment_reply: tool({
      description: "Reply to an existing Instagram comment.",
      inputSchema: v.object({
        commentId: v.string(),
        message: v.string(),
      }),
      execute: async ({ commentId, message }) => ig.comments.reply(commentId, message),
    }),

    ig_comment_list: tool({
      description: "List comments on an Instagram media post.",
      inputSchema: v.object({
        mediaId: v.string(),
        limit: v.optional(v.number()),
      }),
      execute: async ({ mediaId, limit }) => ig.comments.list(mediaId, { limit }),
    }),

    ig_comment_hide: tool({
      description: "Hide or unhide a comment on Instagram.",
      inputSchema: v.object({
        commentId: v.string(),
        hidden: v.boolean(),
      }),
      execute: async ({ commentId, hidden }) => ig.comments.hide(commentId, hidden),
    }),

    ig_comment_delete: tool({
      description: "Delete a comment on Instagram.",
      inputSchema: v.object({
        commentId: v.string(),
      }),
      execute: async ({ commentId }) => ig.comments.delete(commentId),
    }),

    ig_send_dm: tool({
      description: "Send a direct message to an Instagram user.",
      inputSchema: v.object({
        recipientId: v.string(),
        text: v.optional(v.string()),
        attachmentUrl: v.optional(v.string()),
      }),
      execute: async ({ recipientId, ...message }) => ig.messaging.send(recipientId, message),
    }),

    ig_reply_dm: tool({
      description: "Reply to a specific Instagram DM message.",
      inputSchema: v.object({
        recipientId: v.string(),
        replyToMid: v.string(),
        text: v.string(),
      }),
      execute: async ({ recipientId, replyToMid, text }) =>
        ig.messaging.reply(recipientId, replyToMid, text),
    }),

    ig_private_reply: tool({
      description:
        "Send a private DM reply to a public Instagram comment. Limited to 7-day window, 1 per comment, 1000 chars.",
      inputSchema: v.object({
        commentId: v.string(),
        text: v.pipe(v.string(), v.maxLength(1000)),
      }),
      execute: async ({ commentId, text }) => ig.messaging.privateReply(commentId, text),
    }),

    ig_get_account: tool({
      description: "Get Instagram account profile information.",
      inputSchema: v.object({}),
      execute: async () => ig.account.get(),
    }),

    ig_webhook_subscribe: tool({
      description: "Subscribe to Instagram webhook events.",
      inputSchema: v.object({
        fields: v.optional(v.array(v.string())),
      }),
      execute: async ({ fields }) => ig.webhooks.subscribe(fields),
    }),
  };
}
