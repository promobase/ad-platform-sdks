import { tool } from "ai";
import { z } from "zod";
import { createThreadsClient } from "../clients/threads/index.ts";

export function createThreadsTools(opts: { accessToken: string; threadsUserId: string }) {
  const threads = createThreadsClient(opts);

  return {
    threads_publish_text: tool({
      description: "Publish a text post on Threads.",
      inputSchema: z.object({
        text: z.string().describe("Post text"),
        replyControl: z.enum(["everyone", "accounts_you_follow", "mentioned_only"]).optional().describe("Who can reply"),
      }),
      execute: async (params) => threads.posts.publishText(params),
    }),

    threads_publish_image: tool({
      description: "Publish an image post on Threads.",
      inputSchema: z.object({
        imageUrl: z.string().describe("Public URL of the image"),
        text: z.string().optional().describe("Post text"),
      }),
      execute: async (params) => threads.posts.publishImage(params),
    }),

    threads_publish_video: tool({
      description: "Publish a video post on Threads.",
      inputSchema: z.object({
        videoUrl: z.string().describe("Public URL of the video"),
        text: z.string().optional().describe("Post text"),
      }),
      execute: async (params) => threads.posts.publishVideo(params),
    }),

    threads_publish_carousel: tool({
      description: "Publish a carousel (2-10 items) on Threads.",
      inputSchema: z.object({
        items: z.array(z.object({
          type: z.enum(["image", "video"]),
          url: z.string(),
        })).min(2).max(10),
        text: z.string().optional(),
      }),
      execute: async (params) => threads.posts.publishCarousel(params),
    }),

    threads_reply: tool({
      description: "Reply to a Threads post.",
      inputSchema: z.object({
        text: z.string().max(500).describe("Reply text (max 500 characters)"),
        replyToId: z.string().describe("Post ID to reply to"),
      }),
      execute: async (params) => threads.posts.reply(params),
    }),

    threads_delete: tool({
      description: "Delete a Threads post.",
      inputSchema: z.object({
        postId: z.string().describe("Post ID to delete"),
      }),
      execute: async ({ postId }) => threads.posts.delete(postId),
    }),

    threads_get_permalink: tool({
      description: "Get the permanent URL for a Threads post.",
      inputSchema: z.object({
        postId: z.string().describe("Post ID"),
      }),
      execute: async ({ postId }) => threads.posts.getPermalink(postId),
    }),

    threads_get_insights: tool({
      description: "Get performance insights for a Threads post.",
      inputSchema: z.object({
        postId: z.string().describe("Post ID"),
        metrics: z.array(z.string()).optional().describe("Metrics (default: views, likes, replies, reposts, quotes)"),
      }),
      execute: async ({ postId, metrics }) => threads.posts.getInsights(postId, metrics),
    }),

    threads_list_posts: tool({
      description: "List recent Threads posts.",
      inputSchema: z.object({
        limit: z.number().optional().describe("Maximum number of posts"),
      }),
      execute: async ({ limit }) => threads.posts.list({ limit }),
    }),

    threads_list_replies: tool({
      description: "List replies to a Threads post.",
      inputSchema: z.object({
        postId: z.string().describe("Post ID"),
        limit: z.number().optional(),
      }),
      execute: async ({ postId, limit }) => threads.replies.list(postId, { limit }),
    }),

    threads_hide_reply: tool({
      description: "Hide or unhide a reply on Threads.",
      inputSchema: z.object({
        replyId: z.string().describe("Reply ID"),
        hidden: z.boolean().describe("true to hide, false to unhide"),
      }),
      execute: async ({ replyId, hidden }) => threads.replies.hide(replyId, hidden),
    }),

    threads_get_account: tool({
      description: "Get Threads account profile information.",
      inputSchema: z.object({}),
      execute: async () => threads.account.get(),
    }),
  };
}
