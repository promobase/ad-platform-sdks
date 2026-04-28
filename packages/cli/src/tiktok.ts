import {
  createTikTokClient,
  createTikTokDiscovery,
  createTikTokOAuth,
  createTikTokWebhooks,
} from "@openpromo/tiktok";
import type { Command } from "commander";
import { z } from "zod";
import { createGroup, defineCommand, option } from "./command.ts";
import { booleanFromCli, optionalJsonObjectFromCli, optionalStringArray } from "./schemas.ts";

const ttAuth = z.object({
  accessToken: z.string().optional(),
  businessId: z.string().optional(),
});

const authOptions = [
  option("--access-token <token>", "TikTok access token, defaults to TIKTOK_ACCESS_TOKEN"),
  option("--business-id <id>", "TikTok business id, defaults to TIKTOK_BUSINESS_ID"),
];

const ttOAuthConfig = z.object({
  clientKey: z.string().optional(),
  clientSecret: z.string().optional(),
  redirectUri: z.string().optional(),
});

export function registerTikTokCommands(program: Command): void {
  const tiktok = program.command("tiktok").description("TikTok Business API operations");

  registerAccount(tiktok);
  registerVideos(tiktok);
  registerPhotos(tiktok);
  registerComments(tiktok);
  registerDiscovery(tiktok);
  registerWebhooks(tiktok);
  registerOAuth(tiktok);
  registerRaw(tiktok);
}

function registerAccount(parent: Command): void {
  const account = createGroup(parent, "account", "TikTok account operations");

  defineCommand(account, {
    name: "get",
    description: "Get TikTok business account profile info",
    schema: ttAuth.extend({
      fields: optionalStringArray,
      startDate: z.string().optional(),
      endDate: z.string().optional(),
    }),
    options: [
      ...authOptions,
      option("--fields <fields>", "Comma-separated fields"),
      option("--start-date <date>", "Start date"),
      option("--end-date <date>", "End date"),
    ],
    action: (input) => createTikTok(input).account.get(input),
  });

  defineCommand(account, {
    name: "video-settings",
    description: "Get video privacy settings and constraints",
    schema: ttAuth,
    options: authOptions,
    action: (input) => createTikTok(input).account.getVideoSettings(),
  });

  defineCommand(account, {
    name: "hashtag-suggestions",
    description: "Get recommended hashtags for a keyword",
    schema: ttAuth.extend({ keyword: z.string(), language: z.string().optional() }),
    options: [
      ...authOptions,
      option("--keyword <keyword>", "Keyword"),
      option("--language <language>", "Language"),
    ],
    action: (input) =>
      createTikTok(input).account.getHashtagSuggestions(input.keyword, input.language),
  });
}

function registerVideos(parent: Command): void {
  const videos = createGroup(parent, "videos", "TikTok video publishing operations");

  defineCommand(videos, {
    name: "publish",
    description: "Publish a video from a public URL",
    schema: ttAuth.extend({
      videoUrl: z.string().url(),
      caption: z.string().optional(),
      privacyLevel: z.string().optional(),
      disableComment: booleanFromCli.optional(),
      disableDuet: booleanFromCli.optional(),
      disableStitch: booleanFromCli.optional(),
      uploadToDraft: booleanFromCli.optional(),
      isAdsOnly: booleanFromCli.optional(),
      isAiGenerated: booleanFromCli.optional(),
    }),
    options: [
      ...authOptions,
      option("--video-url <url>", "Public video URL"),
      option("--caption <text>", "Caption"),
      option("--privacy-level <level>", "Privacy level"),
      option("--disable-comment <boolean>", "Disable comments"),
      option("--disable-duet <boolean>", "Disable duet"),
      option("--disable-stitch <boolean>", "Disable stitch"),
      option("--upload-to-draft <boolean>", "Upload to draft"),
      option("--is-ads-only <boolean>", "Ads-only post"),
      option("--is-ai-generated <boolean>", "AI-generated disclosure"),
    ],
    action: (input) => createTikTok(input).videos.publish(input),
  });

  defineCommand(videos, {
    name: "status",
    description: "Get video/photo publish status",
    schema: ttAuth.extend({ publishId: z.string() }),
    options: [...authOptions, option("--publish-id <id>", "Publish id")],
    action: (input) => createTikTok(input).videos.getPublishStatus(input.publishId),
  });

  defineCommand(videos, {
    name: "wait",
    description: "Wait for a video publish task to complete",
    schema: ttAuth.extend({
      publishId: z.string(),
      intervalMs: z.coerce.number().optional(),
      maxAttempts: z.coerce.number().optional(),
    }),
    options: [
      ...authOptions,
      option("--publish-id <id>", "Publish id"),
      option("--interval-ms <ms>", "Poll interval"),
      option("--max-attempts <n>", "Max attempts"),
    ],
    action: (input) => createTikTok(input).videos.waitForPublish(input.publishId, input),
  });

  defineCommand(videos, {
    name: "list",
    description: "List TikTok videos/posts",
    schema: ttAuth.extend({
      fields: optionalStringArray,
      cursor: z.coerce.number().optional(),
      maxCount: z.coerce.number().optional(),
      videoIds: optionalStringArray,
      adPostOnly: booleanFromCli.optional(),
    }),
    options: [
      ...authOptions,
      option("--fields <fields>", "Comma-separated fields"),
      option("--cursor <cursor>", "Cursor"),
      option("--max-count <n>", "Page size"),
      option("--video-ids <ids>", "Comma-separated video ids"),
      option("--ad-post-only <boolean>", "Only ad posts"),
    ],
    action: (input) => createTikTok(input).videos.list(input),
  });
}

function registerPhotos(parent: Command): void {
  const photos = createGroup(parent, "photos", "TikTok photo publishing operations");

  defineCommand(photos, {
    name: "publish",
    description: "Publish a photo post from public image URLs",
    schema: ttAuth.extend({
      photoUrls: optionalStringArray,
      title: z.string().optional(),
      caption: z.string().optional(),
      privacyLevel: z.string(),
      disableComment: booleanFromCli.optional(),
      autoAddMusic: booleanFromCli.optional(),
      isDraft: booleanFromCli.optional(),
      photoCoverIndex: z.coerce.number().optional(),
    }),
    options: [
      ...authOptions,
      option("--photo-urls <urls>", "Comma-separated public image URLs"),
      option("--title <title>", "Photo title"),
      option("--caption <text>", "Caption"),
      option("--privacy-level <level>", "Privacy level"),
      option("--disable-comment <boolean>", "Disable comments"),
      option("--auto-add-music <boolean>", "Auto add music"),
      option("--is-draft <boolean>", "Create draft"),
      option("--photo-cover-index <n>", "Cover image index"),
    ],
    action: (input) =>
      createTikTok(input).photos.publish({ ...input, photoUrls: input.photoUrls ?? [] }),
  });

  defineCommand(photos, {
    name: "status",
    description: "Get photo publish status",
    schema: ttAuth.extend({ publishId: z.string() }),
    options: [...authOptions, option("--publish-id <id>", "Publish id")],
    action: (input) => createTikTok(input).photos.getPublishStatus(input.publishId),
  });
}

function registerComments(parent: Command): void {
  const comments = createGroup(parent, "comments", "TikTok comment operations");

  defineCommand(comments, {
    name: "list",
    description: "List comments on a video",
    schema: ttAuth.extend({
      videoId: z.string(),
      commentIds: optionalStringArray,
      includeReplies: booleanFromCli.optional(),
      status: z.string().optional(),
      cursor: z.coerce.number().optional(),
      maxCount: z.coerce.number().optional(),
    }),
    options: [
      ...authOptions,
      option("--video-id <id>", "Video id"),
      option("--comment-ids <ids>", "Comma-separated comment ids"),
      option("--include-replies <boolean>", "Include replies"),
      option("--status <status>", "Comment status"),
      option("--cursor <cursor>", "Cursor"),
      option("--max-count <n>", "Page size"),
    ],
    action: (input) => createTikTok(input).comments.list(input),
  });

  defineCommand(comments, {
    name: "create",
    description: "Create a comment on a video",
    schema: ttAuth.extend({
      videoId: z.string(),
      text: z.string().optional(),
      imageUri: z.string().optional(),
    }),
    options: [
      ...authOptions,
      option("--video-id <id>", "Video id"),
      option("--text <text>", "Comment text"),
      option("--image-uri <uri>", "Uploaded image URI"),
    ],
    action: (input) => createTikTok(input).comments.create(input),
  });

  defineCommand(comments, {
    name: "reply",
    description: "Reply to a comment",
    schema: ttAuth.extend({
      videoId: z.string(),
      commentId: z.string(),
      text: z.string().optional(),
      imageUri: z.string().optional(),
    }),
    options: [
      ...authOptions,
      option("--video-id <id>", "Video id"),
      option("--comment-id <id>", "Comment id"),
      option("--text <text>", "Reply text"),
      option("--image-uri <uri>", "Uploaded image URI"),
    ],
    action: (input) => createTikTok(input).comments.reply(input),
  });

  defineCommand(comments, {
    name: "delete",
    description: "Delete a comment",
    schema: ttAuth.extend({ commentId: z.string() }),
    options: [...authOptions, option("--comment-id <id>", "Comment id")],
    action: async (input) => {
      await createTikTok(input).comments.delete(input.commentId);
    },
  });
}

function registerDiscovery(parent: Command): void {
  const discovery = createGroup(parent, "discovery", "TikTok discovery operations");

  defineCommand(discovery, {
    name: "trending-music",
    description: "Get trending commercial music",
    schema: ttAuth.extend({
      genre: z.string().optional(),
      countryCode: z.string().optional(),
      dateRange: z.string().optional(),
    }),
    options: [
      ...authOptions,
      option("--genre <genre>", "Music genre"),
      option("--country-code <code>", "Country code"),
      option("--date-range <range>", "Date range"),
    ],
    action: (input) => createTikTok(input).discovery.getTrendingMusic(input),
  });

  defineCommand(discovery, {
    name: "trending-hashtags",
    description: "Get advertiser-scoped trending hashtags",
    schema: z.object({
      accessToken: z.string().optional(),
      advertiserId: z.string().optional(),
      countryCode: z.string().optional(),
      categoryName: z.string().optional(),
      dateRange: z.string().optional(),
    }),
    options: [
      option("--access-token <token>", "Access token, defaults to TIKTOK_ACCESS_TOKEN"),
      option("--advertiser-id <id>", "Advertiser id, defaults to TIKTOK_ADVERTISER_ID"),
      option("--country-code <code>", "Country code"),
      option("--category-name <name>", "Category name"),
      option("--date-range <range>", "Date range"),
    ],
    action: (input) =>
      createTikTokDiscovery({
        accessToken: input.accessToken ?? requireEnv("TIKTOK_ACCESS_TOKEN"),
        advertiserId: input.advertiserId ?? requireEnv("TIKTOK_ADVERTISER_ID"),
      }).getTrendingHashtags(input as never),
  });
}

function registerWebhooks(parent: Command): void {
  const webhooks = createGroup(parent, "webhooks", "TikTok webhook management");
  const schema = z.object({
    appId: z.string().optional(),
    appSecret: z.string().optional(),
    eventType: z.string(),
  });
  const opts = [
    option("--app-id <id>", "App id, defaults to TIKTOK_APP_ID"),
    option("--app-secret <secret>", "App secret, defaults to TIKTOK_APP_SECRET"),
    option("--event-type <type>", "Event type"),
  ];

  defineCommand(webhooks, {
    name: "get",
    description: "Get webhook configuration",
    schema,
    options: opts,
    action: (input) => createTikTokWebhookClient(input).get(input.eventType),
  });

  defineCommand(webhooks, {
    name: "update",
    description: "Register or update a webhook",
    schema: schema.extend({ callbackUrl: z.string().url(), itemList: optionalStringArray }),
    options: [
      ...opts,
      option("--callback-url <url>", "Callback URL"),
      option("--item-list <items>", "Comma-separated item list"),
    ],
    action: async (input) => {
      await createTikTokWebhookClient(input).update(
        input.eventType,
        input.callbackUrl,
        input.itemList,
      );
    },
  });

  defineCommand(webhooks, {
    name: "delete",
    description: "Delete webhook configuration",
    schema,
    options: opts,
    action: async (input) => {
      await createTikTokWebhookClient(input).delete(input.eventType);
    },
  });
}

function registerOAuth(parent: Command): void {
  const oauth = createGroup(parent, "oauth", "TikTok OAuth operations");
  const opts = [
    option("--client-key <key>", "Client key, defaults to TIKTOK_CLIENT_KEY"),
    option("--client-secret <secret>", "Client secret, defaults to TIKTOK_CLIENT_SECRET"),
    option("--redirect-uri <uri>", "Redirect URI, defaults to TIKTOK_REDIRECT_URI"),
  ];

  defineCommand(oauth, {
    name: "authorization-url",
    description: "Build a TikTok OAuth authorization URL",
    schema: ttOAuthConfig.extend({
      scopes: optionalStringArray,
      state: z.string().optional(),
      disableAutoAuth: booleanFromCli.optional(),
    }),
    options: [
      ...opts,
      option("--scopes <scopes>", "Comma-separated scopes"),
      option("--state <state>", "State"),
      option("--disable-auto-auth <boolean>", "Disable auto auth"),
    ],
    action: (input) => ({ url: createTikTokOAuthClient(input).getAuthorizationUrl(input) }),
  });

  defineCommand(oauth, {
    name: "exchange-code",
    description: "Exchange OAuth code",
    schema: ttOAuthConfig.extend({ code: z.string() }),
    options: [...opts, option("--code <code>", "OAuth code")],
    action: (input) => createTikTokOAuthClient(input).exchangeCode(input.code),
  });

  defineCommand(oauth, {
    name: "refresh-token",
    description: "Refresh OAuth token",
    schema: ttOAuthConfig.extend({ refreshToken: z.string() }),
    options: [...opts, option("--refresh-token <token>", "Refresh token")],
    action: (input) => createTikTokOAuthClient(input).refreshToken(input.refreshToken),
  });
}

function registerRaw(parent: Command): void {
  const raw = createGroup(parent, "raw", "Call any method on the TikTok domain client");

  defineCommand(raw, {
    name: "call",
    description: "Call a TikTok domain method using a JSON argument object",
    schema: ttAuth.extend({
      domain: z.string(),
      operation: z.string(),
      args: optionalJsonObjectFromCli,
    }),
    options: [
      ...authOptions,
      option("--domain <name>", "Domain, e.g. videos, photos, comments"),
      option("--operation <name>", "Operation name"),
      option("--args <json>", "Single JSON argument object"),
    ],
    action: (input) => {
      const client = createTikTok(input);
      const domain = client[input.domain];
      if (!domain || typeof domain !== "object")
        throw new Error(`Unknown TikTok domain: ${input.domain}`);
      const operation = domain[input.operation];
      if (typeof operation !== "function") {
        throw new Error(`Unknown TikTok operation: ${input.domain}.${input.operation}`);
      }
      return operation.call(domain, input.args ?? {});
    },
  });
}

function createTikTok(input: z.output<typeof ttAuth>): any {
  return createTikTokClient({
    accessToken: input.accessToken ?? requireEnv("TIKTOK_ACCESS_TOKEN"),
    businessId: input.businessId ?? requireEnv("TIKTOK_BUSINESS_ID"),
  });
}

function createTikTokOAuthClient(input: z.output<typeof ttOAuthConfig>): any {
  return createTikTokOAuth({
    clientKey: input.clientKey ?? requireEnv("TIKTOK_CLIENT_KEY"),
    clientSecret: input.clientSecret ?? requireEnv("TIKTOK_CLIENT_SECRET"),
    redirectUri: input.redirectUri ?? requireEnv("TIKTOK_REDIRECT_URI"),
  });
}

function createTikTokWebhookClient(input: { appId?: string; appSecret?: string }): any {
  return createTikTokWebhooks({
    appId: input.appId ?? requireEnv("TIKTOK_APP_ID"),
    appSecret: input.appSecret ?? requireEnv("TIKTOK_APP_SECRET"),
  });
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}
