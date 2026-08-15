import { tool, type Tool } from "ai";
import * as v from "valibot";

import { createThreadsClient } from "../clients/threads/index.ts";

export function createThreadsTools(opts: {
  accessToken: string;
  threadsUserId: string;
}): Record<
  | "threads_publish_text"
  | "threads_publish_image"
  | "threads_publish_video"
  | "threads_publish_carousel"
  | "threads_reply"
  | "threads_delete"
  | "threads_get_permalink"
  | "threads_get_insights"
  | "threads_list_posts"
  | "threads_list_replies"
  | "threads_hide_reply"
  | "threads_get_account",
  Tool
> {
  const threads = createThreadsClient(opts);

  return {
    threads_publish_text: tool({
      description: "Publish a text post on Threads.",
      inputSchema: v.object({
        text: v.string(),
        replyControl: v.optional(v.picklist(["everyone", "accounts_you_follow", "mentioned_only"])),
      }),
      execute: async (params) => threads.posts.publishText(params),
    }),

    threads_publish_image: tool({
      description: "Publish an image post on Threads.",
      inputSchema: v.object({
        imageUrl: v.string(),
        text: v.optional(v.string()),
      }),
      execute: async (params) => threads.posts.publishImage(params),
    }),

    threads_publish_video: tool({
      description: "Publish a video post on Threads.",
      inputSchema: v.object({
        videoUrl: v.string(),
        text: v.optional(v.string()),
      }),
      execute: async (params) => threads.posts.publishVideo(params),
    }),

    threads_publish_carousel: tool({
      description: "Publish a carousel (2-10 items) on Threads.",
      inputSchema: v.object({
        items: v.pipe(
          v.pipe(
            v.array(
              v.object({
                type: v.picklist(["image", "video"]),
                url: v.string(),
              }),
            ),
            v.minLength(2),
          ),
          v.maxLength(10),
        ),
        text: v.optional(v.string()),
      }),
      execute: async (params) => threads.posts.publishCarousel(params),
    }),

    threads_reply: tool({
      description: "Reply to a Threads post.",
      inputSchema: v.object({
        text: v.pipe(v.string(), v.maxLength(500)),
        replyToId: v.string(),
      }),
      execute: async (params) => threads.posts.reply(params),
    }),

    threads_delete: tool({
      description: "Delete a Threads post.",
      inputSchema: v.object({
        postId: v.string(),
      }),
      execute: async ({ postId }) => threads.posts.delete(postId),
    }),

    threads_get_permalink: tool({
      description: "Get the permanent URL for a Threads post.",
      inputSchema: v.object({
        postId: v.string(),
      }),
      execute: async ({ postId }) => threads.posts.getPermalink(postId),
    }),

    threads_get_insights: tool({
      description: "Get performance insights for a Threads post.",
      inputSchema: v.object({
        postId: v.string(),
        metrics: v.optional(v.array(v.string())),
      }),
      execute: async ({ postId, metrics }) => threads.posts.getInsights(postId, metrics),
    }),

    threads_list_posts: tool({
      description: "List recent Threads posts.",
      inputSchema: v.object({
        limit: v.optional(v.number()),
      }),
      execute: async ({ limit }) => threads.posts.list({ limit }),
    }),

    threads_list_replies: tool({
      description: "List replies to a Threads post.",
      inputSchema: v.object({
        postId: v.string(),
        limit: v.optional(v.number()),
      }),
      execute: async ({ postId, limit }) => threads.replies.list(postId, { limit }),
    }),

    threads_hide_reply: tool({
      description: "Hide or unhide a reply on Threads.",
      inputSchema: v.object({
        replyId: v.string(),
        hidden: v.boolean(),
      }),
      execute: async ({ replyId, hidden }) => threads.replies.hide(replyId, hidden),
    }),

    threads_get_account: tool({
      description: "Get Threads account profile information.",
      inputSchema: v.object({}),
      execute: async () => threads.account.get(),
    }),
  };
}
