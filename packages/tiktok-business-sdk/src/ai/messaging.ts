import { tool } from "ai";
import { z } from "zod";
import { createTikTokClient } from "../clients/index.ts";
import type { TikTokClientOptions } from "../clients/types.ts";

export function createTikTokMessagingTools(opts: TikTokClientOptions) {
  const tt = createTikTokClient(opts);

  return {
    tt_send_message: tool({
      description:
        "Send a text message in a TikTok DM conversation. Rate limit: 10 messages within 48h after receiving a user message.",
      inputSchema: z.object({
        conversationId: z.string().describe("Conversation ID"),
        text: z.string().max(6000).describe("Message text (max 6000 chars)"),
      }),
      execute: async ({ conversationId, text }) =>
        tt.messaging.sendMessage({
          conversationId,
          messageType: "TEXT",
          text: { body: text },
        }),
    }),

    tt_list_conversations: tool({
      description: "List TikTok DM conversations (past 90 days).",
      inputSchema: z.object({
        conversationType: z.enum(["STRANGER", "SINGLE"]).describe("Conversation type filter"),
        limit: z.number().min(1).max(100).optional().describe("Max results (default 100)"),
        cursor: z.number().optional().describe("Pagination cursor"),
      }),
      execute: async (params) =>
        tt.messaging.listConversations(params.conversationType, {
          limit: params.limit,
          cursor: params.cursor,
        }),
    }),

    tt_list_messages: tool({
      description: "List messages in a TikTok DM conversation (max 20 most recent).",
      inputSchema: z.object({
        conversationId: z.string().describe("Conversation ID"),
      }),
      execute: async ({ conversationId }) => tt.messaging.listMessages(conversationId),
    }),

    tt_list_mentioned_videos: tool({
      description: "List the top 1000 videos that mention the brand.",
      inputSchema: z.object({
        numberOfDays: z
          .number()
          .min(1)
          .max(90)
          .optional()
          .describe("Lookback period in days (default: 90)"),
        sortField: z.enum(["CREATE_TIME", "LIKES", "COMMENTS", "SHARES"]).optional(),
        maxCount: z.number().min(1).max(100).optional(),
        cursor: z.number().optional(),
      }),
      execute: async (params) => tt.mentions.listMentionedVideos(params),
    }),
  };
}
