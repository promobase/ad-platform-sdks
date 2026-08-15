import { tool, type Tool } from "ai";
import * as v from "valibot";

import { createFacebookPageClient } from "../clients/facebook/index.ts";
import type { GraphClient } from "./common.ts";

export function createFacebookTools(opts: {
  api: GraphClient;
  pageId: string;
  accessToken: string;
}): Record<
  | "fb_publish_post"
  | "fb_publish_photo"
  | "fb_publish_multi_photo"
  | "fb_publish_video_reel"
  | "fb_publish_photo_story"
  | "fb_publish_video_story"
  | "fb_list_feed"
  | "fb_update_post"
  | "fb_delete_post"
  | "fb_get_permalink"
  | "fb_comment_create"
  | "fb_comment_reply"
  | "fb_comment_list"
  | "fb_comment_hide"
  | "fb_send_dm"
  | "fb_reply_dm"
  | "fb_get_account"
  | "fb_webhook_subscribe",
  Tool
> {
  const fb = createFacebookPageClient(opts);

  return {
    fb_publish_post: tool({
      description: "Publish a text post to a Facebook Page. Can include a link.",
      inputSchema: v.object({
        message: v.string(),
        link: v.optional(v.string()),
        published: v.optional(v.boolean()),
        scheduledPublishTime: v.optional(v.number()),
      }),
      execute: async (params) => fb.feed.publishPost(params),
    }),

    fb_publish_photo: tool({
      description: "Publish a photo post to a Facebook Page.",
      inputSchema: v.object({
        url: v.string(),
        caption: v.optional(v.string()),
      }),
      execute: async (params) => fb.feed.publishPhoto(params),
    }),

    fb_publish_multi_photo: tool({
      description: "Publish a multi-photo post to a Facebook Page.",
      inputSchema: v.object({
        photos: v.array(v.object({ url: v.string() })),
        message: v.optional(v.string()),
      }),
      execute: async (params) => fb.feed.publishMultiPhoto(params),
    }),

    fb_publish_video_reel: tool({
      description: "Publish a video reel to a Facebook Page using 3-phase upload.",
      inputSchema: v.object({
        videoUrl: v.string(),
        description: v.optional(v.string()),
      }),
      execute: async (params) => fb.feed.publishVideoReel(params),
    }),

    fb_publish_photo_story: tool({
      description: "Publish a photo story to a Facebook Page.",
      inputSchema: v.object({
        photoUrl: v.string(),
      }),
      execute: async (params) => fb.stories.publishPhoto(params),
    }),

    fb_publish_video_story: tool({
      description: "Publish a video story to a Facebook Page.",
      inputSchema: v.object({
        videoUrl: v.string(),
        description: v.optional(v.string()),
      }),
      execute: async (params) => fb.stories.publishVideo(params),
    }),

    fb_list_feed: tool({
      description: "List recent posts from a Facebook Page feed.",
      inputSchema: v.object({
        limit: v.optional(v.number()),
      }),
      execute: async ({ limit }) => fb.feed.list({ limit }),
    }),

    fb_update_post: tool({
      description: "Update a Facebook Page post. Only posts created by your app can be updated.",
      inputSchema: v.object({
        postId: v.string(),
        message: v.string(),
      }),
      execute: async ({ postId, message }) => fb.feed.updatePost(postId, { message }),
    }),

    fb_delete_post: tool({
      description: "Delete a Facebook Page post.",
      inputSchema: v.object({
        postId: v.string(),
      }),
      execute: async ({ postId }) => fb.feed.deletePost(postId),
    }),

    fb_get_permalink: tool({
      description: "Get the permanent URL for a Facebook post.",
      inputSchema: v.object({
        postId: v.string(),
      }),
      execute: async ({ postId }) => fb.feed.getPermalink(postId),
    }),

    fb_comment_create: tool({
      description: "Post a comment on a Facebook Page post.",
      inputSchema: v.object({
        postId: v.string(),
        message: v.string(),
      }),
      execute: async ({ postId, message }) => fb.comments.create(postId, message),
    }),

    fb_comment_reply: tool({
      description: "Reply to a comment on Facebook.",
      inputSchema: v.object({
        commentId: v.string(),
        message: v.string(),
      }),
      execute: async ({ commentId, message }) => fb.comments.reply(commentId, message),
    }),

    fb_comment_list: tool({
      description: "List comments on a Facebook post.",
      inputSchema: v.object({
        postId: v.string(),
        limit: v.optional(v.number()),
      }),
      execute: async ({ postId, limit }) => fb.comments.list(postId, { limit }),
    }),

    fb_comment_hide: tool({
      description: "Hide or unhide a comment on Facebook.",
      inputSchema: v.object({
        commentId: v.string(),
        hidden: v.boolean(),
      }),
      execute: async ({ commentId, hidden }) => fb.comments.hide(commentId, hidden),
    }),

    fb_send_dm: tool({
      description: "Send a Messenger DM from a Facebook Page.",
      inputSchema: v.object({
        recipientPsid: v.string(),
        text: v.optional(v.string()),
        attachmentUrl: v.optional(v.string()),
        attachmentType: v.optional(v.string()),
      }),
      execute: async ({ recipientPsid, ...message }) => fb.messaging.send(recipientPsid, message),
    }),

    fb_reply_dm: tool({
      description: "Reply to a specific Messenger message.",
      inputSchema: v.object({
        recipientPsid: v.string(),
        replyToMid: v.string(),
        text: v.string(),
      }),
      execute: async ({ recipientPsid, replyToMid, text }) =>
        fb.messaging.reply(recipientPsid, replyToMid, text),
    }),

    fb_get_account: tool({
      description: "Get Facebook Page profile information.",
      inputSchema: v.object({}),
      execute: async () => fb.account.get(),
    }),

    fb_webhook_subscribe: tool({
      description: "Subscribe to Facebook Page webhook events.",
      inputSchema: v.object({
        fields: v.optional(v.array(v.string())),
      }),
      execute: async ({ fields }) => fb.webhooks.subscribe(fields),
    }),
  };
}
