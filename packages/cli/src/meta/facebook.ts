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
} from "../schemas.ts";
import { createFacebook, createFacebookOAuthClient } from "./client.ts";
import { facebookOptions, listOptions, oauthOptions } from "./common.ts";

const fbBase = graphAuth.extend({
  pageId: z.string().optional(),
});

export function registerFacebookCommands(meta: Command): void {
  const facebook = createGroup(
    meta,
    "facebook",
    "Facebook Page publishing, comments, messaging, OAuth",
  );

  registerFacebookAccount(facebook);
  registerFacebookFeed(facebook);
  registerFacebookStories(facebook);
  registerFacebookComments(facebook);
  registerFacebookMessaging(facebook);
  registerFacebookWebhooks(facebook);
  registerFacebookOAuth(facebook);
}

function registerFacebookAccount(parent: Command): void {
  const account = createGroup(parent, "account", "Facebook Page account operations");

  defineCommand(account, {
    name: "get",
    description: "Get Facebook Page profile",
    schema: fbBase.extend({ fields: optionalStringArray }),
    options: [...facebookOptions, option("--fields <fields>", "Comma-separated fields")],
    action: (input) => createFacebook(input).account.get(input.fields as never),
  });

  defineCommand(account, {
    name: "instagram-accounts",
    description: "List Instagram accounts connected to the Page",
    schema: fbBase,
    options: facebookOptions,
    action: (input) => createFacebook(input).account.getInstagramAccounts(),
  });
}

function registerFacebookFeed(parent: Command): void {
  const feed = createGroup(parent, "feed", "Facebook Page feed operations");

  defineCommand(feed, {
    name: "publish-post",
    description: "Publish a text/link post to the Page feed",
    schema: fbBase.extend({
      message: z.string(),
      link: z.string().url().optional(),
      published: optionalBooleanFromCli,
      scheduledPublishTime: z.string().optional(),
    }),
    options: [
      ...facebookOptions,
      option("--message <text>", "Post message"),
      option("--link <url>", "Link URL"),
      option("--published <boolean>", "Whether to publish immediately"),
      option("--scheduled-publish-time <unix>", "Unix timestamp for scheduled publishing"),
    ],
    action: (input) => createFacebook(input).feed.publishPost(input),
  });

  defineCommand(feed, {
    name: "publish-photo",
    description: "Publish a Page photo post from a public URL",
    schema: fbBase.extend({
      url: z.string().url(),
      caption: z.string().optional(),
      published: optionalBooleanFromCli,
      scheduledPublishTime: z.string().optional(),
    }),
    options: [
      ...facebookOptions,
      option("--url <url>", "Public photo URL"),
      option("--caption <text>", "Photo caption"),
      option("--published <boolean>", "Whether to publish immediately"),
      option("--scheduled-publish-time <unix>", "Unix timestamp for scheduled publishing"),
    ],
    action: (input) => createFacebook(input).feed.publishPhoto(input),
  });

  defineCommand(feed, {
    name: "publish-video",
    description: "Publish a Page video post from a public URL",
    schema: fbBase.extend({
      url: z.string().url(),
      title: z.string().optional(),
      description: z.string().optional(),
    }),
    options: [
      ...facebookOptions,
      option("--url <url>", "Public video URL"),
      option("--title <text>", "Video title"),
      option("--description <text>", "Video description"),
    ],
    action: (input) => createFacebook(input).feed.publishVideo(input),
  });

  defineCommand(feed, {
    name: "publish-multi-photo",
    description: 'Publish a multi-photo Page post from JSON photos: [{"url":"https://..."}]',
    schema: fbBase.extend({
      photos: jsonFromCli(z.array(z.object({ url: z.string().url() }))),
      message: z.string().optional(),
      published: optionalBooleanFromCli,
      scheduledPublishTime: z.string().optional(),
    }),
    options: [
      ...facebookOptions,
      option("--photos <json>", "Photo JSON array"),
      option("--message <text>", "Post message"),
      option("--published <boolean>", "Whether to publish immediately"),
      option("--scheduled-publish-time <unix>", "Unix timestamp for scheduled publishing"),
    ],
    action: (input) => createFacebook(input).feed.publishMultiPhoto(input),
  });

  defineCommand(feed, {
    name: "publish-video-reel",
    description: "Publish a Facebook video reel with the three-phase upload flow",
    schema: fbBase.extend({
      videoUrl: z.string().url(),
      description: z.string().optional(),
      videoState: z.enum(["PUBLISHED", "DRAFT"]).optional(),
    }),
    options: [
      ...facebookOptions,
      option("--video-url <url>", "Public video URL"),
      option("--description <text>", "Reel description"),
      option("--video-state <state>", "PUBLISHED or DRAFT"),
    ],
    action: (input) => createFacebook(input).feed.publishVideoReel(input),
  });

  defineCommand(feed, {
    name: "list",
    description: "List Page feed posts",
    schema: fbBase.merge(fieldsLimit),
    options: [...facebookOptions, ...listOptions],
    action: (input) => createFacebook(input).feed.list(input as never),
  });

  defineCommand(feed, {
    name: "update",
    description: "Update a Page post message",
    schema: fbBase.extend({ postId: z.string(), message: z.string() }),
    options: [
      ...facebookOptions,
      option("--post-id <id>", "Page post ID"),
      option("--message <text>", "New message"),
    ],
    action: (input) =>
      createFacebook(input).feed.updatePost(input.postId, { message: input.message }),
  });

  defineCommand(feed, {
    name: "delete",
    description: "Delete a Page post",
    schema: fbBase.extend({ postId: z.string() }),
    options: [...facebookOptions, option("--post-id <id>", "Page post ID")],
    action: (input) => createFacebook(input).feed.deletePost(input.postId),
  });

  defineCommand(feed, {
    name: "permalink",
    description: "Get a Page post permalink",
    schema: fbBase.extend({ postId: z.string() }),
    options: [...facebookOptions, option("--post-id <id>", "Page post ID")],
    action: async (input) => ({
      permalink: await createFacebook(input).feed.getPermalink(input.postId),
    }),
  });

  defineCommand(feed, {
    name: "attachments",
    description: "Fetch Page post attachments",
    schema: fbBase.extend({ postId: z.string() }),
    options: [...facebookOptions, option("--post-id <id>", "Page post ID")],
    action: (input) => createFacebook(input).feed.fetchAttachments(input.postId),
  });

  defineCommand(feed, {
    name: "video",
    description: "Fetch Page video details",
    schema: fbBase.extend({ videoId: z.string() }),
    options: [...facebookOptions, option("--video-id <id>", "Video ID")],
    action: (input) => createFacebook(input).feed.fetchVideo(input.videoId),
  });

  defineCommand(feed, {
    name: "video-status",
    description: "Get Page video processing/publishing status",
    schema: fbBase.extend({ videoId: z.string() }),
    options: [...facebookOptions, option("--video-id <id>", "Video ID")],
    action: (input) => createFacebook(input).feed.getVideoStatus(input.videoId),
  });
}

function registerFacebookStories(parent: Command): void {
  const stories = createGroup(parent, "stories", "Facebook Page Story operations");

  defineCommand(stories, {
    name: "publish-photo",
    description: "Publish a Facebook photo story",
    schema: fbBase.extend({ photoUrl: z.string().url() }),
    options: [...facebookOptions, option("--photo-url <url>", "Public photo URL")],
    action: (input) => createFacebook(input).stories.publishPhoto(input),
  });

  defineCommand(stories, {
    name: "publish-video",
    description: "Publish a Facebook video story",
    schema: fbBase.extend({ videoUrl: z.string().url(), description: z.string().optional() }),
    options: [
      ...facebookOptions,
      option("--video-url <url>", "Public video URL"),
      option("--description <text>", "Story description"),
    ],
    action: (input) => createFacebook(input).stories.publishVideo(input),
  });
}

function registerFacebookComments(parent: Command): void {
  const comments = createGroup(parent, "comments", "Facebook comment operations");

  defineCommand(comments, {
    name: "list",
    description: "List comments on a Page post",
    schema: fbBase.merge(fieldsLimit).extend({ postId: z.string() }),
    options: [...facebookOptions, ...listOptions, option("--post-id <id>", "Page post ID")],
    action: (input) => createFacebook(input).comments.list(input.postId, input as never),
  });

  defineCommand(comments, {
    name: "create",
    description: "Create a comment on a Page post",
    schema: fbBase.extend({ postId: z.string(), message: z.string() }),
    options: [
      ...facebookOptions,
      option("--post-id <id>", "Page post ID"),
      option("--message <text>", "Comment text"),
    ],
    action: (input) => createFacebook(input).comments.create(input.postId, input.message),
  });

  defineCommand(comments, {
    name: "reply",
    description: "Reply to a Facebook comment",
    schema: fbBase.extend({ commentId: z.string(), message: z.string() }),
    options: [
      ...facebookOptions,
      option("--comment-id <id>", "Comment ID"),
      option("--message <text>", "Reply text"),
    ],
    action: (input) => createFacebook(input).comments.reply(input.commentId, input.message),
  });

  defineCommand(comments, {
    name: "hide",
    description: "Hide or unhide a Facebook comment",
    schema: fbBase.extend({ commentId: z.string(), hidden: optionalBooleanFromCli.default(true) }),
    options: [
      ...facebookOptions,
      option("--comment-id <id>", "Comment ID"),
      option("--hidden <boolean>", "true to hide, false to unhide", true),
    ],
    action: (input) => createFacebook(input).comments.hide(input.commentId, input.hidden),
  });

  defineCommand(comments, {
    name: "delete",
    description: "Delete a Facebook comment",
    schema: fbBase.extend({ commentId: z.string() }),
    options: [...facebookOptions, option("--comment-id <id>", "Comment ID")],
    action: (input) => createFacebook(input).comments.delete(input.commentId),
  });
}

function registerFacebookMessaging(parent: Command): void {
  const messaging = createGroup(parent, "messaging", "Facebook Messenger operations");

  defineCommand(messaging, {
    name: "send",
    description: "Send a Messenger DM",
    schema: fbBase.extend({
      recipientPsid: z.string(),
      text: z.string().optional(),
      attachmentUrl: z.string().url().optional(),
      attachmentType: z.string().optional(),
    }),
    options: [
      ...facebookOptions,
      option("--recipient-psid <id>", "Recipient PSID"),
      option("--text <text>", "Message text"),
      option("--attachment-url <url>", "Public attachment URL"),
      option("--attachment-type <type>", "Attachment type, default image"),
    ],
    action: (input) =>
      createFacebook(input).messaging.send(input.recipientPsid, {
        text: input.text,
        attachmentUrl: input.attachmentUrl,
        attachmentType: input.attachmentType,
      }),
  });

  defineCommand(messaging, {
    name: "reply",
    description: "Reply to a specific Messenger message",
    schema: fbBase.extend({ recipientPsid: z.string(), replyToMid: z.string(), text: z.string() }),
    options: [
      ...facebookOptions,
      option("--recipient-psid <id>", "Recipient PSID"),
      option("--reply-to-mid <mid>", "Message ID to reply to"),
      option("--text <text>", "Reply text"),
    ],
    action: (input) =>
      createFacebook(input).messaging.reply(input.recipientPsid, input.replyToMid, input.text),
  });
}

function registerFacebookWebhooks(parent: Command): void {
  const webhooks = createGroup(parent, "webhooks", "Facebook webhook subscription operations");

  defineCommand(webhooks, {
    name: "subscribe",
    description: "Subscribe the Page to webhook fields",
    schema: fbBase.extend({ fields: optionalStringArray }),
    options: [...facebookOptions, option("--fields <fields>", "Comma-separated subscribed fields")],
    action: (input) => createFacebook(input).webhooks.subscribe(input.fields),
  });
}

function registerFacebookOAuth(parent: Command): void {
  const oauth = createGroup(parent, "oauth", "Facebook OAuth operations");

  defineCommand(oauth, {
    name: "authorization-url",
    description: "Create a Facebook OAuth authorization URL",
    schema: oauthConfig.extend({ scopes: optionalStringArray, state: z.string().optional() }),
    options: [
      ...oauthOptions,
      option("--scopes <scopes>", "Comma-separated OAuth scopes"),
      option("--state <state>", "OAuth state"),
    ],
    action: (input) => ({
      url: createFacebookOAuthClient(input).getAuthorizationUrl({
        scopes: input.scopes,
        state: input.state,
      }),
    }),
  });

  defineCommand(oauth, {
    name: "exchange-code",
    description: "Exchange a Facebook OAuth code for a short-lived user token",
    schema: oauthConfig.extend({ code: z.string() }),
    options: [...oauthOptions, option("--code <code>", "OAuth code")],
    action: (input) => createFacebookOAuthClient(input).exchangeCode(input.code),
  });

  defineCommand(oauth, {
    name: "exchange-long-lived",
    description: "Exchange a short-lived Facebook user token for a long-lived token",
    schema: oauthConfig.extend({ shortLivedToken: z.string() }),
    options: [...oauthOptions, option("--short-lived-token <token>", "Short-lived token")],
    action: (input) => createFacebookOAuthClient(input).exchangeForLongLived(input.shortLivedToken),
  });

  defineCommand(oauth, {
    name: "page-tokens",
    description: "Get Page tokens for a user access token",
    schema: oauthConfig.extend({ userAccessToken: z.string() }),
    options: [...oauthOptions, option("--user-access-token <token>", "User access token")],
    action: (input) => createFacebookOAuthClient(input).getPageTokens(input.userAccessToken),
  });

  defineCommand(oauth, {
    name: "complete",
    description:
      "Run Facebook OAuth code exchange, long-lived token exchange, and Page token lookup",
    schema: oauthConfig.extend({ code: z.string() }),
    options: [...oauthOptions, option("--code <code>", "OAuth code")],
    action: (input) => createFacebookOAuthClient(input).completeOAuth(input.code),
  });
}
