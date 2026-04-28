import type { Command } from "commander";
import { z } from "zod";
import { createGroup, defineCommand, option } from "../command.ts";
import {
  fieldsLimit,
  graphAuth,
  jsonFromCli,
  oauthConfig,
  optionalBooleanFromCli,
  optionalStringArray,
  polling,
} from "../schemas.ts";
import { createInstagram, createInstagramOAuthClient } from "./client.ts";
import { instagramOptions, instagramPollingOptions, listOptions, oauthOptions } from "./common.ts";

const igBase = graphAuth.extend({
  igAccountId: z.string().optional(),
});

const igPollingBase = igBase.merge(polling);

export function registerInstagramCommands(meta: Command): void {
  const instagram = createGroup(
    meta,
    "instagram",
    "Instagram publishing, comments, messaging, OAuth",
  );

  registerInstagramAccount(instagram);
  registerInstagramMedia(instagram);
  registerInstagramStories(instagram);
  registerInstagramComments(instagram);
  registerInstagramMessaging(instagram);
  registerInstagramContainers(instagram);
  registerInstagramWebhooks(instagram);
  registerInstagramOAuth(instagram);
}

function registerInstagramAccount(parent: Command): void {
  const account = createGroup(parent, "account", "Instagram account operations");

  defineCommand(account, {
    name: "get",
    description: "Get Instagram business account profile",
    schema: igBase.extend({ fields: optionalStringArray }),
    options: [...instagramOptions, option("--fields <fields>", "Comma-separated fields")],
    action: (input) => createInstagram(input).account.get(input.fields as never),
  });
}

function registerInstagramMedia(parent: Command): void {
  const media = createGroup(parent, "media", "Instagram feed media operations");

  defineCommand(media, {
    name: "publish-photo",
    description: "Publish a photo feed post from a public image URL",
    schema: igPollingBase.extend({
      imageUrl: z.string().url(),
      caption: z.string().optional(),
      collaborators: optionalStringArray,
      locationId: z.string().optional(),
    }),
    options: [
      ...instagramOptions,
      ...instagramPollingOptions,
      option("--image-url <url>", "Public image URL"),
      option("--caption <text>", "Caption"),
      option("--collaborators <ids>", "Comma-separated collaborator IDs"),
      option("--location-id <id>", "Meta location ID"),
    ],
    action: (input) => createInstagram(input).media.publishPhoto(input),
  });

  defineCommand(media, {
    name: "publish-video",
    description: "Publish an Instagram reel/feed video from a public video URL",
    schema: igPollingBase.extend({
      videoUrl: z.string().url(),
      caption: z.string().optional(),
      coverUrl: z.string().url().optional(),
      collaborators: optionalStringArray,
      locationId: z.string().optional(),
    }),
    options: [
      ...instagramOptions,
      ...instagramPollingOptions,
      option("--video-url <url>", "Public video URL"),
      option("--caption <text>", "Caption"),
      option("--cover-url <url>", "Public cover image URL"),
      option("--collaborators <ids>", "Comma-separated collaborator IDs"),
      option("--location-id <id>", "Meta location ID"),
    ],
    action: (input) => createInstagram(input).media.publishVideo(input),
  });

  defineCommand(media, {
    name: "publish-carousel",
    description: 'Publish a carousel from JSON items: [{"type":"photo","url":"https://..."}]',
    schema: igPollingBase.extend({
      items: jsonFromCli(
        z.array(z.object({ type: z.enum(["photo", "video"]), url: z.string().url() })),
      ),
      caption: z.string().optional(),
      collaborators: optionalStringArray,
      locationId: z.string().optional(),
    }),
    options: [
      ...instagramOptions,
      ...instagramPollingOptions,
      option("--items <json>", "Carousel item JSON array"),
      option("--caption <text>", "Caption"),
      option("--collaborators <ids>", "Comma-separated collaborator IDs"),
      option("--location-id <id>", "Meta location ID"),
    ],
    action: (input) => createInstagram(input).media.publishCarousel(input),
  });

  defineCommand(media, {
    name: "list",
    description: "List Instagram media",
    schema: igBase.merge(fieldsLimit),
    options: [...instagramOptions, ...listOptions],
    action: (input) => createInstagram(input).media.list(input as never),
  });

  defineCommand(media, {
    name: "get",
    description: "Fetch Instagram media details",
    schema: igBase.extend({ mediaId: z.string(), fields: optionalStringArray }),
    options: [
      ...instagramOptions,
      option("--media-id <id>", "Instagram media ID"),
      option("--fields <fields>", "Comma-separated fields"),
    ],
    action: (input) =>
      createInstagram(input).media.fetchMedia(input.mediaId, input.fields as never),
  });

  defineCommand(media, {
    name: "permalink",
    description: "Get Instagram media permalink",
    schema: igBase.extend({ mediaId: z.string() }),
    options: [...instagramOptions, option("--media-id <id>", "Instagram media ID")],
    action: async (input) => ({
      permalink: await createInstagram(input).media.getPermalink(input.mediaId),
    }),
  });

  defineCommand(media, {
    name: "insights",
    description: "Get Instagram media insights",
    schema: igBase.extend({ mediaId: z.string(), metrics: optionalStringArray }),
    options: [
      ...instagramOptions,
      option("--media-id <id>", "Instagram media ID"),
      option("--metrics <metrics>", "Comma-separated metrics"),
    ],
    action: (input) =>
      createInstagram(input).media.getInsights(
        input.mediaId,
        input.metrics ?? ["impressions", "reach"],
      ),
  });
}

function registerInstagramStories(parent: Command): void {
  const stories = createGroup(parent, "stories", "Instagram Story operations");

  defineCommand(stories, {
    name: "publish",
    description: "Publish a photo or video story",
    schema: igPollingBase.extend({
      imageUrl: z.string().url().optional(),
      videoUrl: z.string().url().optional(),
    }),
    options: [
      ...instagramOptions,
      ...instagramPollingOptions,
      option("--image-url <url>", "Public image URL"),
      option("--video-url <url>", "Public video URL"),
    ],
    action: (input) => createInstagram(input).stories.publish(input),
  });
}

function registerInstagramComments(parent: Command): void {
  const comments = createGroup(parent, "comments", "Instagram comment operations");

  defineCommand(comments, {
    name: "list",
    description: "List comments on an Instagram media item",
    schema: igBase.merge(fieldsLimit).extend({ mediaId: z.string() }),
    options: [...instagramOptions, ...listOptions, option("--media-id <id>", "Instagram media ID")],
    action: (input) => createInstagram(input).comments.list(input.mediaId, input as never),
  });

  defineCommand(comments, {
    name: "create",
    description: "Create a comment on an Instagram media item",
    schema: igBase.extend({ mediaId: z.string(), message: z.string() }),
    options: [
      ...instagramOptions,
      option("--media-id <id>", "Instagram media ID"),
      option("--message <text>", "Comment text"),
    ],
    action: (input) => createInstagram(input).comments.create(input.mediaId, input.message),
  });

  defineCommand(comments, {
    name: "reply",
    description: "Reply to an Instagram comment",
    schema: igBase.extend({ commentId: z.string(), message: z.string() }),
    options: [
      ...instagramOptions,
      option("--comment-id <id>", "Instagram comment ID"),
      option("--message <text>", "Reply text"),
    ],
    action: (input) => createInstagram(input).comments.reply(input.commentId, input.message),
  });

  defineCommand(comments, {
    name: "hide",
    description: "Hide or unhide an Instagram comment",
    schema: igBase.extend({ commentId: z.string(), hidden: optionalBooleanFromCli.default(true) }),
    options: [
      ...instagramOptions,
      option("--comment-id <id>", "Instagram comment ID"),
      option("--hidden <boolean>", "true to hide, false to unhide", true),
    ],
    action: (input) => createInstagram(input).comments.hide(input.commentId, input.hidden),
  });

  defineCommand(comments, {
    name: "delete",
    description: "Delete an Instagram comment",
    schema: igBase.extend({ commentId: z.string() }),
    options: [...instagramOptions, option("--comment-id <id>", "Instagram comment ID")],
    action: (input) => createInstagram(input).comments.delete(input.commentId),
  });
}

function registerInstagramMessaging(parent: Command): void {
  const messaging = createGroup(parent, "messaging", "Instagram DM operations");

  defineCommand(messaging, {
    name: "send",
    description: "Send an Instagram DM",
    schema: igBase.extend({
      recipientId: z.string(),
      text: z.string().optional(),
      attachmentUrl: z.string().url().optional(),
    }),
    options: [
      ...instagramOptions,
      option("--recipient-id <id>", "Recipient Instagram-scoped user ID"),
      option("--text <text>", "Message text"),
      option("--attachment-url <url>", "Public image attachment URL"),
    ],
    action: (input) =>
      createInstagram(input).messaging.send(input.recipientId, {
        text: input.text,
        attachmentUrl: input.attachmentUrl,
      }),
  });

  defineCommand(messaging, {
    name: "reply",
    description: "Reply to a specific Instagram DM",
    schema: igBase.extend({ recipientId: z.string(), replyToMid: z.string(), text: z.string() }),
    options: [
      ...instagramOptions,
      option("--recipient-id <id>", "Recipient Instagram-scoped user ID"),
      option("--reply-to-mid <mid>", "Message ID to reply to"),
      option("--text <text>", "Reply text"),
    ],
    action: (input) =>
      createInstagram(input).messaging.reply(input.recipientId, input.replyToMid, input.text),
  });

  defineCommand(messaging, {
    name: "private-reply",
    description: "Send a private reply to a public Instagram comment",
    schema: igBase.extend({ commentId: z.string(), text: z.string() }),
    options: [
      ...instagramOptions,
      option("--comment-id <id>", "Instagram comment ID"),
      option("--text <text>", "Reply text"),
    ],
    action: (input) => createInstagram(input).messaging.privateReply(input.commentId, input.text),
  });
}

function registerInstagramContainers(parent: Command): void {
  const containers = createGroup(parent, "containers", "Low-level Instagram media containers");

  defineCommand(containers, {
    name: "create",
    description: "Create an Instagram media container from raw Graph params",
    schema: igBase.extend({ params: jsonFromCli(z.record(z.string(), z.unknown())) }),
    options: [...instagramOptions, option("--params <json>", "Raw media container params JSON")],
    action: (input) => createInstagram(input).containers.create(input.params as never),
  });

  defineCommand(containers, {
    name: "status",
    description: "Get Instagram container processing status",
    schema: igBase.extend({ containerId: z.string() }),
    options: [...instagramOptions, option("--container-id <id>", "Container ID")],
    action: async (input) => ({
      status: await createInstagram(input).containers.getStatus(input.containerId),
    }),
  });

  defineCommand(containers, {
    name: "publish",
    description: "Publish a finished Instagram container",
    schema: igBase.extend({ containerId: z.string() }),
    options: [...instagramOptions, option("--container-id <id>", "Container ID")],
    action: (input) => createInstagram(input).containers.publish(input.containerId),
  });

  defineCommand(containers, {
    name: "publishing-limit",
    description: "Get Instagram account publishing limit usage",
    schema: igBase,
    options: instagramOptions,
    action: (input) => createInstagram(input).containers.getPublishingLimit(),
  });
}

function registerInstagramWebhooks(parent: Command): void {
  const webhooks = createGroup(parent, "webhooks", "Instagram webhook subscription operations");

  defineCommand(webhooks, {
    name: "subscribe",
    description: "Subscribe the Instagram account to webhook fields",
    schema: igBase.extend({ fields: optionalStringArray }),
    options: [
      ...instagramOptions,
      option("--fields <fields>", "Comma-separated subscribed fields"),
    ],
    action: (input) => createInstagram(input).webhooks.subscribe(input.fields),
  });
}

function registerInstagramOAuth(parent: Command): void {
  const oauth = createGroup(parent, "oauth", "Instagram OAuth operations");

  defineCommand(oauth, {
    name: "authorization-url",
    description: "Create an Instagram OAuth authorization URL",
    schema: oauthConfig.extend({ scopes: optionalStringArray, state: z.string().optional() }),
    options: [
      ...oauthOptions,
      option("--scopes <scopes>", "Comma-separated OAuth scopes"),
      option("--state <state>", "OAuth state"),
    ],
    action: (input) => ({
      url: createInstagramOAuthClient(input).getAuthorizationUrl({
        scopes: input.scopes,
        state: input.state,
      }),
    }),
  });

  defineCommand(oauth, {
    name: "exchange-code",
    description: "Exchange an Instagram OAuth code for a short-lived token",
    schema: oauthConfig.extend({ code: z.string() }),
    options: [...oauthOptions, option("--code <code>", "OAuth code")],
    action: (input) => createInstagramOAuthClient(input).exchangeCode(input.code),
  });

  defineCommand(oauth, {
    name: "exchange-long-lived",
    description: "Exchange a short-lived Instagram token for a long-lived token",
    schema: oauthConfig.extend({ shortLivedToken: z.string() }),
    options: [...oauthOptions, option("--short-lived-token <token>", "Short-lived token")],
    action: (input) =>
      createInstagramOAuthClient(input).exchangeForLongLived(input.shortLivedToken),
  });

  defineCommand(oauth, {
    name: "refresh",
    description: "Refresh a long-lived Instagram token",
    schema: oauthConfig.extend({ longLivedToken: z.string() }),
    options: [...oauthOptions, option("--long-lived-token <token>", "Long-lived token")],
    action: (input) => createInstagramOAuthClient(input).refreshToken(input.longLivedToken),
  });

  defineCommand(oauth, {
    name: "complete",
    description: "Run Instagram OAuth code exchange and long-lived token exchange",
    schema: oauthConfig.extend({ code: z.string() }),
    options: [...oauthOptions, option("--code <code>", "OAuth code")],
    action: (input) => createInstagramOAuthClient(input).completeOAuth(input.code),
  });
}
