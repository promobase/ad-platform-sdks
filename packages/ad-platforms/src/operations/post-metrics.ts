import { createGoogleBusinessProfileClient } from "@openpromo/google-business-profile";
import type { LinkedInMemberPostMetric } from "@openpromo/linkedin";
import { LinkedIn } from "@openpromo/linkedin";
import {
  createClient as createMetaClient,
  createFacebookPageClient,
  createInstagramClient,
  createThreadsClient,
} from "@openpromo/meta";
import { createTikTokClient, createTikTokDeveloperClient } from "@openpromo/tiktok";
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
  clicks: z.number().optional(),
  watchTimeSeconds: z.number().optional(),
  averageWatchTimeSeconds: z.number().optional(),
});

export const postMetricsResultSchema = z.object({
  platform: z.enum([
    "facebook",
    "google-business-profile",
    "instagram",
    "linkedin",
    "threads",
    "tiktok",
    "x",
    "youtube",
  ]),
  postId: z.string(),
  fetchedAt: z.string(),
  common: commonPostMetricsSchema,
  provider: z.record(z.string(), z.unknown()),
});

export type CommonPostMetrics = z.infer<typeof commonPostMetricsSchema>;
export type PostMetricsResult = z.infer<typeof postMetricsResultSchema>;

export interface PostMetricsBatchFailure {
  index: number;
  postId: string;
  error: Error;
}

export interface PostMetricsBatchResult {
  results: PostMetricsResult[];
  failures: PostMetricsBatchFailure[];
}

export interface PostMetricsBatchOptions {
  concurrency?: number;
}

const postIdSchema = z.object({
  postId: z.string().min(1).describe("Provider post, media, or video identifier"),
});

const requestedMetricsSchema = postIdSchema.extend({
  metrics: z.array(z.string().min(1)).min(1).optional(),
});

const instagramMediaTypeSchema = z.enum(["feed", "reel", "story"]);
const instagramInputSchema = z.union([
  postIdSchema.extend({
    mediaType: instagramMediaTypeSchema,
    metrics: z.array(z.string().min(1)).min(1).optional(),
  }),
  postIdSchema.extend({
    mediaType: instagramMediaTypeSchema.optional(),
    metrics: z.array(z.string().min(1)).min(1),
  }),
]);

const instagramDefaultMetrics = {
  feed: [
    "reach",
    "shares",
    "total_interactions",
    "views",
    "comments",
    "likes",
    "saved",
    "follows",
    "profile_activity",
    "profile_visits",
  ],
  reel: [
    "reach",
    "shares",
    "total_interactions",
    "views",
    "comments",
    "likes",
    "saved",
    "ig_reels_avg_watch_time",
    "ig_reels_video_view_total_time",
  ],
  story: [
    "views",
    "reach",
    "link_clicks",
    "navigation",
    "profile_activity",
    "profile_visits",
    "replies",
  ],
} as const;

const facebookDefaultMetrics = [
  "post_total_media_view_unique",
  "post_media_view",
  "post_clicks",
  "post_engaged_users",
  "post_activity_by_action_type",
  "post_reactions_like_total",
  "post_reactions_love_total",
  "post_reactions_wow_total",
  "post_reactions_haha_total",
  "post_reactions_sorry_total",
  "post_reactions_anger_total",
] as const;

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

const linkedInInputSchema = postIdSchema
  .extend({
    source: z
      .enum(["socialMetadata", "memberAnalytics", "organizationAnalytics"])
      .default("socialMetadata"),
    organizationUrn: z.string().min(1).optional(),
    metrics: z.array(linkedInMetricSchema).min(1).default(["IMPRESSION", "REACTION", "COMMENT"]),
    aggregation: z.enum(["DAILY", "TOTAL"]).default("TOTAL"),
  })
  .superRefine((input, context) => {
    if (input.source === "organizationAnalytics" && !input.organizationUrn) {
      context.addIssue({
        code: "custom",
        path: ["organizationUrn"],
        message: "organizationUrn is required for organization analytics",
      });
    }
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
  tiktokDeveloper?: ReturnType<typeof createTikTokDeveloperClient>;
  linkedin?: ReturnType<typeof LinkedIn.createClient>;
  x?: ReturnType<typeof X.createClient>;
  youtube?: YouTubeClient;
  googleBusinessProfile?: ReturnType<typeof createGoogleBusinessProfileClient>;
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

type PostMetricsInputFor<Platform extends keyof PostMetricsConnections> =
  Platform extends "instagram"
    ? z.input<typeof instagramInputSchema>
    : Platform extends "facebook" | "threads"
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
      getMetricsMany: (
        inputs: readonly PostMetricsInputFor<Platform>[],
        options?: PostMetricsBatchOptions,
      ) => Promise<PostMetricsBatchResult>;
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
        inputSchema: instagramInputSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        requiredScopes: ["instagram_business_manage_insights"],
        execute: async ({ postId, mediaType, metrics }) => {
          const requested = metrics ?? [
            ...instagramDefaultMetrics[requireInstagramMediaType(mediaType)],
          ];
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
          const requested = metrics ?? facebookDefaultMetrics;
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

  if (connections.tiktokDeveloper) {
    const client = connections.tiktokDeveloper;
    operations.push(
      defineOperation({
        id: "tiktok.developer.posts.metrics.get",
        platform: "tiktok",
        summary: "Get metrics for a TikTok Developer API video",
        tags: ["posts", "video", "metrics", "organic", "developer-api"],
        inputSchema: postIdSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        requiredScopes: ["video.list"],
        execute: async ({ postId }) => {
          const response = await client.videos.query([postId]);
          const video = response.videos[0];
          if (!video) throw new Error(`TikTok Developer post not found: ${postId}`);
          return metricResult(
            "tiktok",
            postId,
            compactMetrics({
              views: numberValue(video.view_count),
              likes: numberValue(video.like_count),
              comments: numberValue(video.comment_count),
              shares: numberValue(video.share_count),
            }),
            { video, api: "developer" },
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
        summary: "Get LinkedIn post metrics for a member, organization, or social entity",
        tags: ["posts", "metrics", "insights", "organic"],
        inputSchema: linkedInInputSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        requiredScopes: ["r_member_postAnalytics"],
        execute: async ({ postId, source, organizationUrn, metrics, aggregation }) => {
          if (source === "socialMetadata") {
            const metadata = await client.analytics.getSocialMetadata(postId);
            return metricResult(
              "linkedin",
              postId,
              normalizeLinkedInSocialMetadata(metadata),
              { data: metadata },
              now,
            );
          }

          if (source === "organizationAnalytics") {
            if (!organizationUrn) {
              throw new Error("organizationUrn is required for organization analytics");
            }
            const response = await client.analytics.getOrganizationShareStatistics({
              organizationalEntity: organizationUrn,
              ...(postId.includes(":ugcPost:") ? { ugcPosts: [postId] } : { shares: [postId] }),
            });
            const statistics = response.elements?.[0]?.totalShareStatistics;
            return metricResult(
              "linkedin",
              postId,
              compactMetrics({
                views: numberValue(statistics?.impressionCount),
                reach: numberValue(statistics?.uniqueImpressionsCount),
                likes: numberValue(statistics?.likeCount),
                comments: numberValue(statistics?.commentCount),
                shares: numberValue(statistics?.shareCount),
                clicks: numberValue(statistics?.clickCount),
              }),
              { data: response.elements ?? [] },
              now,
            );
          }

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

  if (connections.googleBusinessProfile) {
    const client = connections.googleBusinessProfile;
    operations.push(
      defineOperation({
        id: "gbp.posts.metrics.get",
        platform: "google-business-profile",
        summary: "Get views and call-to-action metrics for a Google Business Profile local post",
        tags: ["posts", "metrics", "insights", "local"],
        inputSchema: postIdSchema,
        outputSchema: postMetricsResultSchema,
        effect: "read",
        execution: "inline",
        idempotency: "safe",
        requiresApproval: false,
        requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
        execute: async ({ postId }) => {
          const locationName = postId.replace(/\/localPosts\/[^/]+$/, "");
          if (locationName === postId) {
            throw new Error(
              "Google Business Profile postId must be a full local post resource name",
            );
          }
          const response = await client.resources.localPosts.reportInsights(locationName, [postId]);
          const post = response.localPostMetrics?.[0];
          const values = Object.fromEntries(
            (post?.metricValues ?? []).map((metric) => [
              metric.metric ?? "unknown",
              Number(metric.totalValue?.value ?? 0),
            ]),
          );
          return metricResult(
            "google-business-profile",
            postId,
            compactMetrics({
              views: numberValue(values.LOCAL_POST_VIEWS_SEARCH),
              clicks: numberValue(values.LOCAL_POST_ACTIONS_CALL_TO_ACTION),
            }),
            { metrics: post ?? {}, timeZone: response.timeZone },
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
  ): Promise<PostMetricsResult> => {
    const operationPlatform = platform === "googleBusinessProfile" ? "gbp" : platform;
    return postMetricsResultSchema.parse(
      await operations.invoke(`${operationPlatform}.posts.metrics.get`, input),
    );
  };
  const getMetricsMany = <Platform extends keyof PostMetricsConnections>(
    platform: Platform,
    inputs: readonly PostMetricsInputFor<Platform>[],
    batchOptions?: PostMetricsBatchOptions,
  ) =>
    mapMetricsConcurrently(
      inputs,
      (input) => getMetrics(platform, input),
      batchOptions?.concurrency,
    );

  return {
    operations,
    raw: connections,
    instagram: connections.instagram
      ? {
          posts: {
            getMetrics: (input: z.input<typeof instagramInputSchema>) =>
              getMetrics("instagram", input),
            getMetricsMany: (inputs, batchOptions) =>
              getMetricsMany("instagram", inputs, batchOptions),
          },
        }
      : undefined,
    facebook: connections.facebook
      ? {
          posts: {
            getMetrics: (input: z.input<typeof requestedMetricsSchema>) =>
              getMetrics("facebook", input),
            getMetricsMany: (inputs, batchOptions) =>
              getMetricsMany("facebook", inputs, batchOptions),
          },
        }
      : undefined,
    threads: connections.threads
      ? {
          posts: {
            getMetrics: (input: z.input<typeof requestedMetricsSchema>) =>
              getMetrics("threads", input),
            getMetricsMany: (inputs, batchOptions) =>
              getMetricsMany("threads", inputs, batchOptions),
          },
        }
      : undefined,
    tiktok: connections.tiktok
      ? {
          posts: {
            getMetrics: (input: z.input<typeof postIdSchema>) => getMetrics("tiktok", input),
            getMetricsMany: (inputs, batchOptions) =>
              getMetricsMany("tiktok", inputs, batchOptions),
          },
        }
      : undefined,
    tiktokDeveloper: connections.tiktokDeveloper
      ? {
          posts: {
            getMetrics: async (input: z.input<typeof postIdSchema>) =>
              postMetricsResultSchema.parse(
                await operations.invoke("tiktok.developer.posts.metrics.get", input),
              ),
            getMetricsMany: (inputs, batchOptions) =>
              mapMetricsConcurrently(
                inputs,
                async (input) =>
                  postMetricsResultSchema.parse(
                    await operations.invoke("tiktok.developer.posts.metrics.get", input),
                  ),
                batchOptions?.concurrency,
              ),
          },
        }
      : undefined,
    linkedin: connections.linkedin
      ? {
          posts: {
            getMetrics: (input: z.input<typeof linkedInInputSchema>) =>
              getMetrics("linkedin", input),
            getMetricsMany: (inputs, batchOptions) =>
              getMetricsMany("linkedin", inputs, batchOptions),
          },
        }
      : undefined,
    x: connections.x
      ? {
          posts: {
            getMetrics: (input: z.input<typeof xInputSchema>) => getMetrics("x", input),
            getMetricsMany: (inputs, batchOptions) => getMetricsMany("x", inputs, batchOptions),
          },
        }
      : undefined,
    youtube: connections.youtube
      ? {
          posts: {
            getMetrics: (input: z.input<typeof postIdSchema>) => getMetrics("youtube", input),
            getMetricsMany: (inputs, batchOptions) =>
              getMetricsMany("youtube", inputs, batchOptions),
          },
        }
      : undefined,
    googleBusinessProfile: connections.googleBusinessProfile
      ? {
          posts: {
            getMetrics: (input: z.input<typeof postIdSchema>) =>
              getMetrics("googleBusinessProfile", input),
            getMetricsMany: (inputs, batchOptions) =>
              getMetricsMany("googleBusinessProfile", inputs, batchOptions),
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

function requireInstagramMediaType(
  mediaType: z.infer<typeof instagramMediaTypeSchema> | undefined,
): z.infer<typeof instagramMediaTypeSchema> {
  if (!mediaType) {
    throw new Error("Instagram mediaType is required when metrics are not provided");
  }
  return mediaType;
}

async function mapMetricsConcurrently<Input>(
  inputs: readonly Input[],
  invoke: (input: Input) => Promise<PostMetricsResult>,
  requestedConcurrency = 5,
): Promise<PostMetricsBatchResult> {
  const concurrency = Math.max(1, Math.min(Math.floor(requestedConcurrency), 20));
  const ordered = Array.from<PostMetricsResult | undefined>({ length: inputs.length });
  const failures: PostMetricsBatchFailure[] = [];
  let cursor = 0;

  await Promise.all(
    Array.from({ length: Math.min(concurrency, inputs.length) }, async () => {
      while (cursor < inputs.length) {
        const index = cursor++;
        const input = inputs[index];
        if (input === undefined) continue;
        try {
          ordered[index] = await invoke(input);
        } catch (error) {
          const postId =
            typeof input === "object" && input !== null && "postId" in input
              ? String(input.postId)
              : String(index);
          failures.push({
            index,
            postId,
            error: error instanceof Error ? error : new Error(String(error)),
          });
        }
      }
    }),
  );

  return {
    results: ordered.filter((result): result is PostMetricsResult => result !== undefined),
    failures: failures.sort((left, right) => left.index - right.index),
  };
}

function normalizeInsights(values: readonly unknown[]): CommonPostMetrics {
  const metrics: Record<string, number> = {};
  for (const value of values) {
    if (!isRecord(value) || typeof value.name !== "string") continue;
    const number = insightValue(value);
    if (number !== undefined) metrics[value.name] = number;
  }
  return compactMetrics({
    views: firstMetric(metrics, ["views", "post_media_view", "post_impressions", "impressions"]),
    reach: firstMetric(metrics, [
      "reach",
      "post_total_media_view_unique",
      "post_impressions_unique",
    ]),
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

function normalizeLinkedInSocialMetadata(metadata: {
  totalShareStatistics?: {
    impressionCount?: number;
    uniqueImpressionsCount?: number;
    likeCount?: number;
    commentCount?: number;
    shareCount?: number;
    clickCount?: number;
    reactionCount?: number;
  };
  reactionSummaries?: Record<string, { count?: number }> | Array<{ count?: number }>;
  commentSummary?: { count?: number };
  commentsSummary?: { aggregatedTotalComments?: number; totalFirstLevelComments?: number };
}): CommonPostMetrics {
  const statistics = metadata.totalShareStatistics;
  const summaries = Array.isArray(metadata.reactionSummaries)
    ? metadata.reactionSummaries
    : Object.values(metadata.reactionSummaries ?? {});
  const reactions = summaries.reduce((sum, summary) => sum + (summary.count ?? 0), 0);
  return compactMetrics({
    views: numberValue(statistics?.impressionCount),
    reach: numberValue(statistics?.uniqueImpressionsCount),
    likes: numberValue(reactions || statistics?.reactionCount || statistics?.likeCount),
    comments: numberValue(
      metadata.commentSummary?.count ??
        metadata.commentsSummary?.aggregatedTotalComments ??
        metadata.commentsSummary?.totalFirstLevelComments ??
        statistics?.commentCount,
    ),
    shares: numberValue(statistics?.shareCount),
    clicks: numberValue(statistics?.clickCount),
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
