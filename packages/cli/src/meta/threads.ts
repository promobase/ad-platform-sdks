import type { Command } from "commander";
import { z } from "zod";
import { createGroup, defineCommand, option } from "../command.ts";
import {
  fieldsLimit,
  jsonFromCli,
  oauthConfig,
  optionalBooleanFromCli,
  optionalStringArray,
  polling,
} from "../schemas.ts";
import { createThreads, createThreadsOAuthClient } from "./client.ts";
import { listOptions, oauthOptions, threadsOptions, threadsPollingOptions } from "./common.ts";

const threadsBase = z.object({
  accessToken: z.string().optional(),
  threadsUserId: z.string().optional(),
  apiVersion: z.string().optional(),
});

const threadsPollingBase = threadsBase.merge(polling);

export function registerThreadsCommands(meta: Command): void {
  const threads = createGroup(meta, "threads", "Threads publishing, replies, OAuth");

  registerThreadsAccount(threads);
  registerThreadsPosts(threads);
  registerThreadsReplies(threads);
  registerThreadsContainers(threads);
  registerThreadsOAuth(threads);
}

function registerThreadsAccount(parent: Command): void {
  const account = createGroup(parent, "account", "Threads account operations");

  defineCommand(account, {
    name: "get",
    description: "Get Threads account profile",
    schema: threadsBase.extend({ fields: optionalStringArray }),
    options: [...threadsOptions, option("--fields <fields>", "Comma-separated fields")],
    action: (input) => createThreads(input).account.get(input.fields),
  });
}

function registerThreadsPosts(parent: Command): void {
  const posts = createGroup(parent, "posts", "Threads post operations");

  defineCommand(posts, {
    name: "publish-text",
    description: "Publish a text post",
    schema: threadsPollingBase.extend({
      text: z.string(),
      replyControl: z.enum(["everyone", "accounts_you_follow", "mentioned_only"]).optional(),
      allowlistedCountryCodes: optionalStringArray,
    }),
    options: [
      ...threadsOptions,
      ...threadsPollingOptions,
      option("--text <text>", "Post text"),
      option("--reply-control <mode>", "everyone, accounts_you_follow, or mentioned_only"),
      option("--allowlisted-country-codes <codes>", "Comma-separated country codes"),
    ],
    action: (input) => createThreads(input).posts.publishText(input),
  });

  defineCommand(posts, {
    name: "publish-image",
    description: "Publish an image post",
    schema: threadsPollingBase.extend({
      imageUrl: z.string().url(),
      text: z.string().optional(),
      replyControl: z.enum(["everyone", "accounts_you_follow", "mentioned_only"]).optional(),
    }),
    options: [
      ...threadsOptions,
      ...threadsPollingOptions,
      option("--image-url <url>", "Public image URL"),
      option("--text <text>", "Post text"),
      option("--reply-control <mode>", "everyone, accounts_you_follow, or mentioned_only"),
    ],
    action: (input) => createThreads(input).posts.publishImage(input),
  });

  defineCommand(posts, {
    name: "publish-video",
    description: "Publish a video post",
    schema: threadsPollingBase.extend({
      videoUrl: z.string().url(),
      text: z.string().optional(),
      replyControl: z.enum(["everyone", "accounts_you_follow", "mentioned_only"]).optional(),
    }),
    options: [
      ...threadsOptions,
      ...threadsPollingOptions,
      option("--video-url <url>", "Public video URL"),
      option("--text <text>", "Post text"),
      option("--reply-control <mode>", "everyone, accounts_you_follow, or mentioned_only"),
    ],
    action: (input) => createThreads(input).posts.publishVideo(input),
  });

  defineCommand(posts, {
    name: "publish-carousel",
    description: 'Publish a carousel from JSON items: [{"type":"image","url":"https://..."}]',
    schema: threadsPollingBase.extend({
      items: jsonFromCli(
        z.array(z.object({ type: z.enum(["image", "video"]), url: z.string().url() })),
      ),
      text: z.string().optional(),
      replyControl: z.enum(["everyone", "accounts_you_follow", "mentioned_only"]).optional(),
    }),
    options: [
      ...threadsOptions,
      ...threadsPollingOptions,
      option("--items <json>", "Carousel item JSON array"),
      option("--text <text>", "Post text"),
      option("--reply-control <mode>", "everyone, accounts_you_follow, or mentioned_only"),
    ],
    action: (input) => createThreads(input).posts.publishCarousel(input),
  });

  defineCommand(posts, {
    name: "reply",
    description: "Reply to a Threads post",
    schema: threadsPollingBase.extend({ replyToId: z.string(), text: z.string() }),
    options: [
      ...threadsOptions,
      ...threadsPollingOptions,
      option("--reply-to-id <id>", "Post ID to reply to"),
      option("--text <text>", "Reply text"),
    ],
    action: (input) => createThreads(input).posts.reply(input),
  });

  defineCommand(posts, {
    name: "list",
    description: "List Threads posts",
    schema: threadsBase.extend({ limit: fieldsLimit.shape.limit, after: z.string().optional() }),
    options: [
      ...threadsOptions,
      option("--limit <number>", "Max results to fetch"),
      option("--after <cursor>", "Pagination cursor"),
    ],
    action: (input) => createThreads(input).posts.list(input),
  });

  defineCommand(posts, {
    name: "delete",
    description: "Delete a Threads post",
    schema: threadsBase.extend({ postId: z.string() }),
    options: [...threadsOptions, option("--post-id <id>", "Threads post ID")],
    action: (input) => createThreads(input).posts.delete(input.postId),
  });

  defineCommand(posts, {
    name: "permalink",
    description: "Get a Threads post permalink",
    schema: threadsBase.extend({ postId: z.string() }),
    options: [...threadsOptions, option("--post-id <id>", "Threads post ID")],
    action: async (input) => ({
      permalink: await createThreads(input).posts.getPermalink(input.postId),
    }),
  });

  defineCommand(posts, {
    name: "insights",
    description: "Get Threads post insights",
    schema: threadsBase.extend({ postId: z.string(), metrics: optionalStringArray }),
    options: [
      ...threadsOptions,
      option("--post-id <id>", "Threads post ID"),
      option("--metrics <metrics>", "Comma-separated metrics"),
    ],
    action: (input) => createThreads(input).posts.getInsights(input.postId, input.metrics),
  });
}

function registerThreadsReplies(parent: Command): void {
  const replies = createGroup(parent, "replies", "Threads reply moderation and reads");

  defineCommand(replies, {
    name: "list",
    description: "List replies for a Threads post",
    schema: threadsBase.extend({
      postId: z.string(),
      limit: fieldsLimit.shape.limit,
      after: z.string().optional(),
      reverse: optionalBooleanFromCli,
    }),
    options: [
      ...threadsOptions,
      ...listOptions,
      option("--post-id <id>", "Threads post ID"),
      option("--after <cursor>", "Pagination cursor"),
      option("--reverse <boolean>", "Reverse order"),
    ],
    action: (input) => createThreads(input).replies.list(input.postId, input),
  });

  defineCommand(replies, {
    name: "conversation",
    description: "Get a Threads reply conversation",
    schema: threadsBase.extend({
      postId: z.string(),
      limit: fieldsLimit.shape.limit,
      after: z.string().optional(),
      reverse: optionalBooleanFromCli,
    }),
    options: [
      ...threadsOptions,
      ...listOptions,
      option("--post-id <id>", "Threads post ID"),
      option("--after <cursor>", "Pagination cursor"),
      option("--reverse <boolean>", "Reverse order"),
    ],
    action: (input) => createThreads(input).replies.getConversation(input.postId, input),
  });

  defineCommand(replies, {
    name: "hide",
    description: "Hide or unhide a Threads reply",
    schema: threadsBase.extend({
      replyId: z.string(),
      hidden: optionalBooleanFromCli.default(true),
    }),
    options: [
      ...threadsOptions,
      option("--reply-id <id>", "Threads reply ID"),
      option("--hidden <boolean>", "true to hide, false to unhide", true),
    ],
    action: (input) => createThreads(input).replies.hide(input.replyId, input.hidden),
  });
}

function registerThreadsContainers(parent: Command): void {
  const containers = createGroup(parent, "containers", "Low-level Threads containers");

  defineCommand(containers, {
    name: "create",
    description: "Create a Threads container from raw params",
    schema: threadsBase.extend({ params: jsonFromCli(z.record(z.string(), z.unknown())) }),
    options: [...threadsOptions, option("--params <json>", "Raw container params JSON")],
    action: (input) => createThreads(input).containers.create(input.params as never),
  });

  defineCommand(containers, {
    name: "status",
    description: "Get Threads container status",
    schema: threadsBase.extend({ containerId: z.string() }),
    options: [...threadsOptions, option("--container-id <id>", "Container ID")],
    action: (input) => createThreads(input).containers.getStatus(input.containerId),
  });

  defineCommand(containers, {
    name: "publish",
    description: "Publish a finished Threads container",
    schema: threadsBase.extend({ containerId: z.string() }),
    options: [...threadsOptions, option("--container-id <id>", "Container ID")],
    action: (input) => createThreads(input).containers.publish(input.containerId),
  });
}

function registerThreadsOAuth(parent: Command): void {
  const oauth = createGroup(parent, "oauth", "Threads OAuth operations");

  defineCommand(oauth, {
    name: "authorization-url",
    description: "Create a Threads OAuth authorization URL",
    schema: oauthConfig.extend({ scopes: optionalStringArray, state: z.string().optional() }),
    options: [
      ...oauthOptions,
      option("--scopes <scopes>", "Comma-separated OAuth scopes"),
      option("--state <state>", "OAuth state"),
    ],
    action: (input) => ({
      url: createThreadsOAuthClient(input).getAuthorizationUrl({
        scopes: input.scopes,
        state: input.state,
      }),
    }),
  });

  defineCommand(oauth, {
    name: "exchange-code",
    description: "Exchange a Threads OAuth code for a short-lived token",
    schema: oauthConfig.extend({ code: z.string() }),
    options: [...oauthOptions, option("--code <code>", "OAuth code")],
    action: (input) => createThreadsOAuthClient(input).exchangeCode(input.code),
  });

  defineCommand(oauth, {
    name: "exchange-long-lived",
    description: "Exchange a short-lived Threads token for a long-lived token",
    schema: oauthConfig.extend({ shortLivedToken: z.string() }),
    options: [...oauthOptions, option("--short-lived-token <token>", "Short-lived token")],
    action: (input) => createThreadsOAuthClient(input).exchangeForLongLived(input.shortLivedToken),
  });

  defineCommand(oauth, {
    name: "refresh",
    description: "Refresh a long-lived Threads token",
    schema: oauthConfig.extend({ longLivedToken: z.string() }),
    options: [...oauthOptions, option("--long-lived-token <token>", "Long-lived token")],
    action: (input) => createThreadsOAuthClient(input).refreshToken(input.longLivedToken),
  });

  defineCommand(oauth, {
    name: "complete",
    description: "Run Threads OAuth code exchange and long-lived token exchange",
    schema: oauthConfig.extend({ code: z.string() }),
    options: [...oauthOptions, option("--code <code>", "OAuth code")],
    action: (input) => createThreadsOAuthClient(input).completeOAuth(input.code),
  });
}
