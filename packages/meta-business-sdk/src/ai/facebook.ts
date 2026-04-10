import { tool } from "ai";
import { z } from "zod";
import { createFacebookPageClient } from "../clients/facebook/index.ts";
import type { MetaClient } from "./common.ts";

export function createFacebookTools(opts: { api: MetaClient; pageId: string; accessToken: string }) {
  const fb = createFacebookPageClient(opts);

  return {
    fb_publish_post: tool({
      description: "Publish a text post to a Facebook Page. Can include a link.",
      inputSchema: z.object({
        message: z.string().describe("Post text"),
        link: z.string().optional().describe("URL to include in the post"),
        published: z.boolean().optional().describe("Publish immediately (default true) or schedule"),
        scheduledPublishTime: z.number().optional().describe("Unix timestamp for scheduled publish"),
      }),
      execute: async (params) => fb.feed.publishPost(params),
    }),

    fb_publish_photo: tool({
      description: "Publish a photo post to a Facebook Page.",
      inputSchema: z.object({
        url: z.string().describe("Public URL of the photo"),
        caption: z.string().optional().describe("Photo caption"),
      }),
      execute: async (params) => fb.feed.publishPhoto(params),
    }),

    fb_publish_multi_photo: tool({
      description: "Publish a multi-photo post to a Facebook Page.",
      inputSchema: z.object({
        photos: z.array(z.object({ url: z.string() })).describe("Array of photo URLs"),
        message: z.string().optional().describe("Post message"),
      }),
      execute: async (params) => fb.feed.publishMultiPhoto(params),
    }),

    fb_publish_video_reel: tool({
      description: "Publish a video reel to a Facebook Page using 3-phase upload.",
      inputSchema: z.object({
        videoUrl: z.string().describe("Public URL of the video"),
        description: z.string().optional().describe("Video description"),
      }),
      execute: async (params) => fb.feed.publishVideoReel(params),
    }),

    fb_publish_photo_story: tool({
      description: "Publish a photo story to a Facebook Page.",
      inputSchema: z.object({
        photoUrl: z.string().describe("Public URL of the photo"),
      }),
      execute: async (params) => fb.stories.publishPhoto(params),
    }),

    fb_publish_video_story: tool({
      description: "Publish a video story to a Facebook Page.",
      inputSchema: z.object({
        videoUrl: z.string().describe("Public URL of the video"),
        description: z.string().optional().describe("Video description"),
      }),
      execute: async (params) => fb.stories.publishVideo(params),
    }),

    fb_list_feed: tool({
      description: "List recent posts from a Facebook Page feed.",
      inputSchema: z.object({
        limit: z.number().optional().describe("Maximum number of posts"),
      }),
      execute: async ({ limit }) => fb.feed.list({ limit }),
    }),

    fb_update_post: tool({
      description: "Update a Facebook Page post. Only posts created by your app can be updated.",
      inputSchema: z.object({
        postId: z.string().describe("Post ID to update"),
        message: z.string().describe("New post text"),
      }),
      execute: async ({ postId, message }) => fb.feed.updatePost(postId, { message }),
    }),

    fb_delete_post: tool({
      description: "Delete a Facebook Page post.",
      inputSchema: z.object({
        postId: z.string().describe("Post ID to delete"),
      }),
      execute: async ({ postId }) => fb.feed.deletePost(postId),
    }),

    fb_get_permalink: tool({
      description: "Get the permanent URL for a Facebook post.",
      inputSchema: z.object({
        postId: z.string().describe("Post ID"),
      }),
      execute: async ({ postId }) => fb.feed.getPermalink(postId),
    }),

    fb_comment_create: tool({
      description: "Post a comment on a Facebook Page post.",
      inputSchema: z.object({
        postId: z.string().describe("Post ID to comment on"),
        message: z.string().describe("Comment text"),
      }),
      execute: async ({ postId, message }) => fb.comments.create(postId, message),
    }),

    fb_comment_reply: tool({
      description: "Reply to a comment on Facebook.",
      inputSchema: z.object({
        commentId: z.string().describe("Comment ID to reply to"),
        message: z.string().describe("Reply text"),
      }),
      execute: async ({ commentId, message }) => fb.comments.reply(commentId, message),
    }),

    fb_comment_list: tool({
      description: "List comments on a Facebook post.",
      inputSchema: z.object({
        postId: z.string().describe("Post ID"),
        limit: z.number().optional().describe("Maximum number of comments"),
      }),
      execute: async ({ postId, limit }) => fb.comments.list(postId, { limit }),
    }),

    fb_comment_hide: tool({
      description: "Hide or unhide a comment on Facebook.",
      inputSchema: z.object({
        commentId: z.string().describe("Comment ID"),
        hidden: z.boolean().describe("true to hide, false to unhide"),
      }),
      execute: async ({ commentId, hidden }) => fb.comments.hide(commentId, hidden),
    }),

    fb_send_dm: tool({
      description: "Send a Messenger DM from a Facebook Page.",
      inputSchema: z.object({
        recipientPsid: z.string().describe("Page-scoped user ID (PSID)"),
        text: z.string().optional().describe("Message text"),
        attachmentUrl: z.string().optional().describe("Attachment URL"),
        attachmentType: z.string().optional().describe("Attachment type: image, video, audio, file"),
      }),
      execute: async ({ recipientPsid, ...message }) => fb.messaging.send(recipientPsid, message),
    }),

    fb_reply_dm: tool({
      description: "Reply to a specific Messenger message.",
      inputSchema: z.object({
        recipientPsid: z.string().describe("Page-scoped user ID"),
        replyToMid: z.string().describe("Message ID to reply to"),
        text: z.string().describe("Reply text"),
      }),
      execute: async ({ recipientPsid, replyToMid, text }) => fb.messaging.reply(recipientPsid, replyToMid, text),
    }),

    fb_get_account: tool({
      description: "Get Facebook Page profile information.",
      inputSchema: z.object({}),
      execute: async () => fb.account.get(),
    }),

    fb_webhook_subscribe: tool({
      description: "Subscribe to Facebook Page webhook events.",
      inputSchema: z.object({
        fields: z.array(z.string()).optional().describe("Event fields (default: feed, messages, etc.)"),
      }),
      execute: async ({ fields }) => fb.webhooks.subscribe(fields),
    }),
  };
}
