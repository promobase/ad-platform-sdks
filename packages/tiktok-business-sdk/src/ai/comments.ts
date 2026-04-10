import { tool } from "ai";
import { z } from "zod";
import { createTikTokClient } from "../clients/index.ts";
import type { TikTokClientOptions } from "../clients/types.ts";

export function createTikTokCommentTools(opts: TikTokClientOptions) {
  const tt = createTikTokClient(opts);

  return {
    tt_comment_list: tool({
      description: "List comments on a TikTok video. Supports pagination and sorting.",
      inputSchema: z.object({
        videoId: z.string().describe("Video ID"),
        includeReplies: z.boolean().optional().describe("Include up to 3 replies per comment"),
        sortField: z.enum(["likes", "replies", "create_time"]).optional().describe("Sort by field"),
        sortOrder: z.enum(["asc", "desc", "smart"]).optional().describe("Sort direction"),
        maxCount: z.number().min(1).max(30).optional().describe("Results per page (max 30)"),
        cursor: z.number().optional().describe("Pagination cursor"),
      }),
      execute: async (params) => tt.comments.list(params),
    }),

    tt_comment_create: tool({
      description: "Post a comment on an owned TikTok video. Max 150 characters.",
      inputSchema: z.object({
        videoId: z.string().describe("Video ID to comment on"),
        text: z.string().max(150).describe("Comment text (max 150 chars)"),
      }),
      execute: async (params) => tt.comments.create(params),
    }),

    tt_comment_reply: tool({
      description: "Reply to a comment on a TikTok video. Max 150 characters.",
      inputSchema: z.object({
        videoId: z.string().describe("Video ID"),
        commentId: z.string().describe("Comment ID to reply to"),
        text: z.string().max(150).describe("Reply text (max 150 chars)"),
      }),
      execute: async (params) => tt.comments.reply(params),
    }),

    tt_comment_like: tool({
      description: "Like or unlike a comment on TikTok.",
      inputSchema: z.object({
        commentId: z.string().describe("Comment ID"),
        action: z.enum(["LIKE", "UNLIKE"]).describe("Action to perform"),
      }),
      execute: async ({ commentId, action }) => tt.comments.like(commentId, action),
    }),

    tt_comment_hide: tool({
      description: "Hide or unhide a comment on TikTok.",
      inputSchema: z.object({
        videoId: z.string().describe("Video ID"),
        commentId: z.string().describe("Comment ID"),
        action: z.enum(["HIDE", "UNHIDE"]).describe("Action to perform"),
      }),
      execute: async (params) => tt.comments.hide(params),
    }),

    tt_comment_delete: tool({
      description: "Delete an owned comment on TikTok.",
      inputSchema: z.object({
        commentId: z.string().describe("Comment ID to delete"),
      }),
      execute: async ({ commentId }) => tt.comments.delete(commentId),
    }),

    tt_comment_list_replies: tool({
      description: "List all replies to a specific comment.",
      inputSchema: z.object({
        videoId: z.string().describe("Video ID"),
        commentId: z.string().describe("Comment ID"),
        maxCount: z.number().min(1).max(30).optional().describe("Results per page"),
        cursor: z.number().optional().describe("Pagination cursor"),
      }),
      execute: async (params) => tt.comments.listReplies(params),
    }),
  };
}
