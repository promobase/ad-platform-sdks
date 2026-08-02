import type { LinkedInMemberPostMetric } from "@openpromo/linkedin";
import { LinkedIn } from "@openpromo/linkedin";
import {
  createClient as createMetaClient,
  createFacebookPageClient,
  createInstagramClient,
  createThreadsClient,
} from "@openpromo/meta";
import { createTikTokClient } from "@openpromo/tiktok";
import { X } from "@openpromo/x";
import { YouTubeClient } from "@openpromo/youtube";
import { z } from "zod";

import { createOperationCatalog, defineOperation, type OperationMiddleware } from "./core.ts";

export const commonPostMetricsSchema = z.object({
  views: z.number().optional(),
  reach: z.number().optional(),
  likes: z.number().optional(),
  comments: z.number().optional(),
  shares: z.number().optional(),
  saves: z.number().optional(),
  quotes: z.number().optional(),
  reposts: z.number().optional(),
  replies: z.number().optional(),
  bookmarks: z.number().optional(),
  watchTimeSeconds: z.number().optional(),
  averageWatchTimeSeconds: z.number().optional(),
});

export const postMetricsResultSchema = z.object({
  platform: z.enum(["facebook", "instagram", "linkedin", "threads", "tiktok", "x", "youtube"]),
  postId: z.string(),
  fetchedAt: z.string(),
  common: commonPostMetricsSchema,
  provider: z.record(z.string(), z.unknown()),
});

export type CommonPostMetrics = z.infer<typeof commonPostMetricsSchema>;
export type PostMetricsResult = z.infer<typeof postMetricsResultSchema>;

const postIdSchema = z.object({
  postId: z.string().min(1).describe("Provider post, media, or video identifier"),
});

const requestedMetricsSchema = postIdSchema.extend({
  metrics: z.array(z.string().min(1)).min(1).optional(),
});

const linkedInMetricSchema = z.enum([
  "IMPRESSION",
  "MEMBERS_REACHED",
  "RESHARE",
  "REACTION",
  "COMMENT",
  "POST_SAVE",
  "POST_SEND",
  "LINK_CLICKS",
  "PREMIUM_CTA_CLICKS",
  "FOLLOWER_GAINED_FROM_CONTENT",
  "PROFILE_VIEW_FROM_CONTENT",
]);

const linkedInInputSchema = postIdSchema.extend({
  metrics: z.array(linkedInMetricSchema).min(1).default(["IMPRESSION", "REACTION", "COMMENT"]),
  aggregation: z.enum(["DAILY", "TOTAL"]).default("TOTAL"),
});

const xInputSchema = postIdSchema.extend({
  includeOwnerMetrics: z.boolean().default(false),
});

export interface PostMetricsConnections {
  instagram?: ReturnType<typeof createInstagramClient>;
  facebook?: {
    api: ReturnType<typeof createMetaClient>;
  };
  threads?: ReturnType<typeof createThreadsClient>;
  tiktok?: ReturnType<typeof createTikTokClient>;
  linkedin?: ReturnType<typeof LinkedIn.createClient>;
  x?: ReturnType<typeof X.createClient>;
  youtube?: YouTubeClient;
}

export interface CreatePostMetricsCatalogOptions {
  middleware?: OperationMiddleware;
  now?: () => Date;
}

export interface CreateAdPlatformsOptions<
  Connections extends PostMetricsConnections,
> extends CreatePostMetricsCatalogOptions {
  connections: Connections;
}

type PostMetricsInputFor<Platform extends keyof PostMetricsConnections> = Platform extends
  | "instagram"
  | "facebook"
  | "threads"
  ? z.input<typeof requestedMetricsSchema>
  : Platform extends "linkedin"
    ? z.input<typeof linkedInInputSchema>
    : Platform extends "x"
      ? z.input<typeof xInputSchema>
      : z.input<typeof postIdSchema>;

export type PostMetricsClient<Connections extends PostMetricsConnections> = {
  operations: ReturnType<typeof createPostMetricsCatalog>;
  raw: Connections;
} & {
  [Platform in keyof Connections & keyof PostMetricsConnections]-?: {
    posts: {
      getMetrics: (input: PostMetricsInputFor<Platform>) => Promise<PostMetricsResult>;
    };
  };
};

export function createPostMetricsCatalog(
  connections: PostMetricsConnections,
  options: CreatePostMetricsCatalogOptions = {},
) {
  const now = options.now ?? (() => new Date());
  const operations = [];

  if (connections.instagram) {
    const client = connections.instagram;
    operations.push(
      defineOperation({
        id: "instagram.posts.metrics.get",
        platform: "instagram",
        summary: "Get metrics for an Instagram media post",
        tags: ["posts", "metrics", "insights", "organic"],
        inputSchema: requestedMetricsSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        requiredScopes: ["instagram_business_manage_insights"],
        execute: async ({ postId, metrics }) => {
          const requested = metrics ?? ["views", "reach", "likes", "comments", "shares", "saved"];
          const provider = await client.media.getInsights(postId, requested);
          return metricResult(
            "instagram",
            postId,
            normalizeInsights(provider),
            { data: provider },
            now,
          );
        },
      }),
    );
  }

  if (connections.facebook) {
    const { api } = connections.facebook;
    operations.push(
      defineOperation({
        id: "facebook.posts.metrics.get",
        platform: "facebook",
        summary: "Get insights for a Facebook Page post",
        tags: ["posts", "metrics", "insights", "organic"],
        inputSchema: requestedMetricsSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        requiredScopes: ["read_insights", "pages_read_engagement"],
        execute: async ({ postId, metrics }) => {
          const requested = metrics ?? ["post_impressions", "post_impressions_unique"];
          const provider = await api
            .pagePost(postId)
            .insights({
              fields: ["name", "period", "values"],
              params: { metric: requested as never },
            })
            .toArray();
          return metricResult(
            "facebook",
            postId,
            normalizeInsights(provider),
            { data: provider },
            now,
          );
        },
      }),
    );
  }

  if (connections.threads) {
    const client = connections.threads;
    operations.push(
      defineOperation({
        id: "threads.posts.metrics.get",
        platform: "threads",
        summary: "Get metrics for a Threads post",
        tags: ["posts", "metrics", "insights", "organic"],
        inputSchema: requestedMetricsSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        requiredScopes: ["threads_manage_insights"],
        execute: async ({ postId, metrics }) => {
          const provider = await client.posts.getInsights(postId, metrics);
          return metricResult(
            "threads",
            postId,
            normalizeInsights(provider),
            { data: provider },
            now,
          );
        },
      }),
    );
  }

  if (connections.tiktok) {
    const client = connections.tiktok;
    operations.push(
      defineOperation({
        id: "tiktok.posts.metrics.get",
        platform: "tiktok",
        summary: "Get metrics for a TikTok Business post",
        tags: ["posts", "metrics", "insights", "organic"],
        inputSchema: postIdSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        execute: async ({ postId }) => {
          const response = await client.videos.list({
            videoIds: [postId],
            fields: [
              "item_id",
              "likes",
              "comments",
              "shares",
              "favorites",
              "reach",
              "video_views",
              "total_time_watched",
              "average_time_watched",
            ],
            maxCount: 1,
          });
          const video = response.videos[0];
          if (!video) throw new Error(`TikTok post not found: ${postId}`);
          return metricResult(
            "tiktok",
            postId,
            compactMetrics({
              views: numberValue(video.video_views),
              reach: numberValue(video.reach),
              likes: numberValue(video.likes),
              comments: numberValue(video.comments),
              shares: numberValue(video.shares),
              saves: numberValue(video.favorites),
              watchTimeSeconds: numberValue(video.total_time_watched),
              averageWatchTimeSeconds: numberValue(video.average_time_watched),
            }),
            { video, cursor: response.cursor, hasMore: response.has_more },
            now,
          );
        },
      }),
    );
  }

  if (connections.linkedin) {
    const client = connections.linkedin;
    operations.push(
      defineOperation({
        id: "linkedin.posts.metrics.get",
        platform: "linkedin",
        summary: "Get authenticated-member metrics for a LinkedIn post",
        tags: ["posts", "metrics", "insights", "organic"],
        inputSchema: linkedInInputSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        requiredScopes: ["r_member_postAnalytics"],
        execute: async ({ postId, metrics, aggregation }) => {
          const responses = await Promise.all(
            metrics.map((queryType) =>
              client.analytics.getMemberPostAnalytics({
                entity: postId,
                queryType: queryType as LinkedInMemberPostMetric,
                aggregation,
              }),
            ),
          );
          const points = responses.flatMap((response) => response.elements ?? []);
          return metricResult("linkedin", postId, normalizeLinkedIn(points), { data: points }, now);
        },
      }),
    );
  }

  if (connections.x) {
    const client = connections.x;
    operations.push(
      defineOperation({
        id: "x.posts.metrics.get",
        platform: "x",
        summary: "Get public and optional owner-only metrics for an X post",
        tags: ["posts", "metrics", "insights", "organic", "promoted"],
        inputSchema: xInputSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        execute: async ({ postId, includeOwnerMetrics }) => {
          const fields = ["public_metrics"] as (
            | "public_metrics"
            | "non_public_metrics"
            | "organic_metrics"
            | "promoted_metrics"
          )[];
          if (includeOwnerMetrics) {
            fields.push("non_public_metrics", "organic_metrics", "promoted_metrics");
          }
          const response = await client.posts.getPostsById({ id: postId, "post.fields": fields });
          const post = response.data;
          if (!post) throw new Error(`X post not found: ${postId}`);
          const metrics = post.public_metrics;
          return metricResult(
            "x",
            postId,
            compactMetrics({
              views: numberValue(metrics?.impression_count),
              likes: numberValue(metrics?.like_count),
              replies: numberValue(metrics?.reply_count),
              reposts: numberValue(metrics?.repost_count),
              quotes: numberValue(metrics?.quote_count),
              bookmarks: numberValue(metrics?.bookmark_count),
            }),
            {
              public: metrics ?? {},
              nonPublic: post.non_public_metrics ?? {},
              organic: post.organic_metrics ?? {},
              promoted: post.promoted_metrics ?? {},
            },
            now,
          );
        },
      }),
    );
  }

  if (connections.youtube) {
    const client = connections.youtube;
    operations.push(
      defineOperation({
        id: "youtube.posts.metrics.get",
        platform: "youtube",
        summary: "Get statistics for a YouTube video",
        tags: ["posts", "video", "metrics", "statistics", "organic"],
        inputSchema: postIdSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        execute: async ({ postId }) => {
          const response = await client.resources.videos.list({
            id: [postId],
            part: ["statistics"],
          });
          const video = response.items?.[0];
          if (!video) throw new Error(`YouTube video not found: ${postId}`);
          const metrics = video.statistics;
          return metricResult(
            "youtube",
            postId,
            compactMetrics({
              views: numberValue(metrics?.viewCount),
              likes: numberValue(metrics?.likeCount),
              comments: numberValue(metrics?.commentCount),
            }),
            { statistics: metrics ?? {} },
            now,
          );
        },
      }),
    );
  }

  return createOperationCatalog(operations, { middleware: options.middleware });
}

export function createPostMetricsClient<const Connections extends PostMetricsConnections>(
  connections: Connections,
  options: CreatePostMetricsCatalogOptions = {},
): PostMetricsClient<Connections> {
  const operations = createPostMetricsCatalog(connections, options);
  const getMetrics = async (
    platform: keyof PostMetricsConnections,
    input: unknown,
  ): Promise<PostMetricsResult> =>
    postMetricsResultSchema.parse(await operations.invoke(`${platform}.posts.metrics.get`, input));

  return {
    operations,
    raw: connections,
    instagram: connections.instagram
      ? {
          posts: {
            getMetrics: (input: z.input<typeof requestedMetricsSchema>) =>
              getMetrics("instagram", input),
          },
        }
      : undefined,
    facebook: connections.facebook
      ? {
          posts: {
            getMetrics: (input: z.input<typeof requestedMetricsSchema>) =>
              getMetrics("facebook", input),
          },
        }
      : undefined,
    threads: connections.threads
      ? {
          posts: {
            getMetrics: (input: z.input<typeof requestedMetricsSchema>) =>
              getMetrics("threads", input),
          },
        }
      : undefined,
    tiktok: connections.tiktok
      ? {
          posts: {
            getMetrics: (input: z.input<typeof postIdSchema>) => getMetrics("tiktok", input),
          },
        }
      : undefined,
    linkedin: connections.linkedin
      ? {
          posts: {
            getMetrics: (input: z.input<typeof linkedInInputSchema>) =>
              getMetrics("linkedin", input),
          },
        }
      : undefined,
    x: connections.x
      ? { posts: { getMetrics: (input: z.input<typeof xInputSchema>) => getMetrics("x", input) } }
      : undefined,
    youtube: connections.youtube
      ? {
          posts: {
            getMetrics: (input: z.input<typeof postIdSchema>) => getMetrics("youtube", input),
          },
        }
      : undefined,
  } as PostMetricsClient<Connections>;
}

/** Recommended consumer entry point for the canonical cross-platform operation layer. */
export function createAdPlatforms<const Connections extends PostMetricsConnections>(
  options: CreateAdPlatformsOptions<Connections>,
): PostMetricsClient<Connections> {
  return createPostMetricsClient(options.connections, options);
}

function metricResult(
  platform: PostMetricsResult["platform"],
  postId: string,
  common: CommonPostMetrics,
  provider: Record<string, unknown>,
  now: () => Date,
): PostMetricsResult {
  return { platform, postId, fetchedAt: now().toISOString(), common, provider };
}

function normalizeInsights(values: readonly unknown[]): CommonPostMetrics {
  const metrics: Record<string, number> = {};
  for (const value of values) {
    if (!isRecord(value) || typeof value.name !== "string") continue;
    const number = insightValue(value);
    if (number !== undefined) metrics[value.name] = number;
  }
  return compactMetrics({
    views: firstMetric(metrics, ["views", "post_impressions", "impressions"]),
    reach: firstMetric(metrics, ["reach", "post_impressions_unique"]),
    likes: firstMetric(metrics, ["likes", "like_count"]),
    comments: firstMetric(metrics, ["comments", "comment_count", "replies"]),
    shares: firstMetric(metrics, ["shares", "share_count", "reposts"]),
    saves: firstMetric(metrics, ["saved", "saves"]),
    replies: firstMetric(metrics, ["replies"]),
    reposts: firstMetric(metrics, ["reposts"]),
    quotes: firstMetric(metrics, ["quotes"]),
  });
}

function normalizeLinkedIn(
  points: readonly { metricType: LinkedInMemberPostMetric; count: number }[],
): CommonPostMetrics {
  const metrics = Object.fromEntries(points.map((point) => [point.metricType, point.count]));
  return compactMetrics({
    views: metrics.IMPRESSION,
    reach: metrics.MEMBERS_REACHED,
    likes: metrics.REACTION,
    comments: metrics.COMMENT,
    shares: metrics.RESHARE,
    saves: metrics.POST_SAVE,
  });
}

function insightValue(value: Record<string, unknown>): number | undefined {
  if (isRecord(value.total_value)) {
    const total = numberValue(value.total_value.value);
    if (total !== undefined) return total;
  }
  if (Array.isArray(value.values)) {
    const last = value.values.at(-1);
    if (isRecord(last)) return numberValue(last.value);
  }
  return undefined;
}

function compactMetrics(metrics: CommonPostMetrics): CommonPostMetrics {
  return Object.fromEntries(
    Object.entries(metrics).filter((entry): entry is [string, number] => entry[1] !== undefined),
  );
}

function firstMetric(
  metrics: Record<string, number>,
  names: readonly string[],
): number | undefined {
  for (const name of names) {
    if (metrics[name] !== undefined) return metrics[name];
  }
  return undefined;
}

function numberValue(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export type FacebookPageClient = ReturnType<typeof createFacebookPageClient>;
