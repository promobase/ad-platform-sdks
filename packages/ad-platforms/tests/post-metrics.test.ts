import { expect, test } from "bun:test";

import {
  createAdPlatforms,
  createPostMetricsCatalog,
  createPostMetricsClient,
  type PostMetricsConnections,
} from "../src/operations/index.ts";

const fixedNow = () => new Date("2026-08-02T12:00:00.000Z");

function connections(): PostMetricsConnections {
  return {
    instagram: {
      media: {
        getInsights: async () => [
          { name: "views", values: [{ value: 100 }] },
          { name: "reach", total_value: { value: 80 } },
          { name: "likes", values: [{ value: 12 }] },
        ],
      },
    } as unknown as NonNullable<PostMetricsConnections["instagram"]>,
    facebook: {
      api: {
        pagePost: () => ({
          insights: () => ({
            toArray: async () => [
              { name: "post_media_view", values: [{ value: 200 }] },
              { name: "post_total_media_view_unique", values: [{ value: 150 }] },
            ],
          }),
        }),
      } as unknown as NonNullable<PostMetricsConnections["facebook"]>["api"],
    },
    threads: {
      posts: {
        getInsights: async () => [
          { name: "views", values: [{ value: 300 }] },
          { name: "replies", values: [{ value: 9 }] },
        ],
      },
    } as unknown as NonNullable<PostMetricsConnections["threads"]>,
    tiktok: {
      videos: {
        list: async () => ({
          videos: [
            {
              item_id: "tt-1",
              video_views: 400,
              reach: 350,
              likes: 40,
              comments: 8,
              shares: 5,
              favorites: 6,
              total_time_watched: 900,
              average_time_watched: 4.5,
            },
          ],
          cursor: 0,
          has_more: false,
        }),
      },
    } as unknown as NonNullable<PostMetricsConnections["tiktok"]>,
    linkedin: {
      analytics: {
        getSocialMetadata: async () => ({
          totalShareStatistics: { impressionCount: 500 },
          reactionSummaries: { LIKE: { reactionType: "LIKE", count: 25 } },
          commentSummary: { count: 4 },
        }),
        getMemberPostAnalytics: async ({ queryType }: { queryType: string }) => ({
          elements: [{ metricType: queryType, count: queryType === "IMPRESSION" ? 500 : 25 }],
        }),
      },
    } as unknown as NonNullable<PostMetricsConnections["linkedin"]>,
    x: {
      posts: {
        getPostsById: async () => ({
          data: {
            id: "x-1",
            public_metrics: {
              impression_count: 600,
              like_count: 60,
              reply_count: 10,
              repost_count: 7,
              quote_count: 3,
              bookmark_count: 4,
            },
          },
        }),
      },
    } as unknown as NonNullable<PostMetricsConnections["x"]>,
    youtube: {
      resources: {
        videos: {
          list: async () => ({
            items: [
              { id: "yt-1", statistics: { viewCount: "700", likeCount: "70", commentCount: "11" } },
            ],
          }),
        },
      },
    } as unknown as NonNullable<PostMetricsConnections["youtube"]>,
    googleBusinessProfile: {
      resources: {
        localPosts: {
          reportInsights: async () => ({
            localPostMetrics: [
              {
                localPostName: "accounts/1/locations/2/localPosts/3",
                metricValues: [
                  { metric: "LOCAL_POST_VIEWS_SEARCH", totalValue: { value: "800" } },
                  {
                    metric: "LOCAL_POST_ACTIONS_CALL_TO_ACTION",
                    totalValue: { value: "20" },
                  },
                ],
              },
            ],
            timeZone: "America/Los_Angeles",
          }),
        },
      },
    } as unknown as NonNullable<PostMetricsConnections["googleBusinessProfile"]>,
  };
}

test("creates discoverable post metric operations for every configured platform", () => {
  const catalog = createPostMetricsCatalog(connections(), { now: fixedNow });
  expect(catalog.list().map((operation) => operation.id)).toEqual([
    "instagram.posts.metrics.get",
    "facebook.posts.metrics.get",
    "threads.posts.metrics.get",
    "tiktok.posts.metrics.get",
    "linkedin.posts.metrics.get",
    "x.posts.metrics.get",
    "youtube.posts.metrics.get",
    "gbp.posts.metrics.get",
  ]);
  expect(catalog.search("video statistics", { platform: "youtube" })[0]?.id).toBe(
    "youtube.posts.metrics.get",
  );
  expect(catalog.list().every((operation) => operation.effect === "read")).toBe(true);
});

test("normalizes common metrics while retaining provider payloads", async () => {
  const catalog = createPostMetricsCatalog(connections(), { now: fixedNow });
  const cases = [
    [
      "instagram.posts.metrics.get",
      { postId: "ig-1", mediaType: "feed" },
      { views: 100, reach: 80, likes: 12 },
    ],
    ["facebook.posts.metrics.get", { postId: "fb-1" }, { views: 200, reach: 150 }],
    ["threads.posts.metrics.get", { postId: "th-1" }, { views: 300, comments: 9, replies: 9 }],
    ["tiktok.posts.metrics.get", { postId: "tt-1" }, { views: 400, reach: 350, likes: 40 }],
    [
      "linkedin.posts.metrics.get",
      { postId: "urn:li:ugcPost:1" },
      { views: 500, likes: 25, comments: 4 },
    ],
    ["x.posts.metrics.get", { postId: "x-1" }, { views: 600, likes: 60, replies: 10 }],
    ["youtube.posts.metrics.get", { postId: "yt-1" }, { views: 700, likes: 70, comments: 11 }],
    [
      "gbp.posts.metrics.get",
      { postId: "accounts/1/locations/2/localPosts/3" },
      { views: 800, clicks: 20 },
    ],
  ] as const;

  for (const [id, input, expected] of cases) {
    const result = (await catalog.invoke(id, input)) as {
      fetchedAt: string;
      common: Record<string, number>;
      provider: Record<string, unknown>;
    };
    expect(result.fetchedAt).toBe("2026-08-02T12:00:00.000Z");
    expect(result.common).toMatchObject(expected);
    expect(result.provider).toBeDefined();
  }
});

test("requires Instagram media type for defaults and chooses story-safe metrics", async () => {
  let requested: readonly string[] | undefined;
  const configured = connections();
  configured.instagram = {
    media: {
      getInsights: async (_postId: string, metrics: readonly string[]) => {
        requested = metrics;
        return [];
      },
    },
  } as unknown as NonNullable<PostMetricsConnections["instagram"]>;
  const catalog = createPostMetricsCatalog(configured, { now: fixedNow });

  await expect(catalog.invoke("instagram.posts.metrics.get", { postId: "ig-1" })).rejects.toThrow();
  await catalog.invoke("instagram.posts.metrics.get", { postId: "ig-1", mediaType: "story" });

  expect(requested).toEqual([
    "views",
    "reach",
    "link_clicks",
    "navigation",
    "profile_activity",
    "profile_visits",
    "replies",
  ]);
});

test("uses current Facebook media-view metric defaults", async () => {
  let requested: readonly string[] | undefined;
  const configured = connections();
  configured.facebook = {
    api: {
      pagePost: () => ({
        insights: ({ params }: { params: { metric: readonly string[] } }) => {
          requested = params.metric;
          return { toArray: async () => [] };
        },
      }),
    } as unknown as NonNullable<PostMetricsConnections["facebook"]>["api"],
  };
  const catalog = createPostMetricsCatalog(configured, { now: fixedNow });

  await catalog.invoke("facebook.posts.metrics.get", { postId: "fb-1" });

  expect(requested?.slice(0, 2)).toEqual(["post_total_media_view_unique", "post_media_view"]);
  expect(requested).not.toContain("post_impressions");
});

test("provides an ergonomic direct client over the same catalog", async () => {
  const client = createAdPlatforms({ connections: connections(), now: fixedNow });
  const result = await client.youtube.posts.getMetrics({ postId: "yt-1" });

  expect(result.platform).toBe("youtube");
  expect(result.common.views).toBe(700);
  expect(client.raw.youtube).toBeDefined();
  expect(client.operations.describe("youtube.posts.metrics.get").effect).toBe("read");
});

test("bulk metrics returns successful results and indexed failures without hiding partial data", async () => {
  const client = createAdPlatforms({
    connections: {
      youtube: {
        resources: {
          videos: {
            list: async ({ id }: { id: string[] }) => ({
              items:
                id[0] === "missing"
                  ? []
                  : [{ id: id[0], statistics: { viewCount: id[0] === "one" ? "1" : "2" } }],
            }),
          },
        },
      } as unknown as NonNullable<PostMetricsConnections["youtube"]>,
    },
    now: fixedNow,
  });

  const batch = await client.youtube.posts.getMetricsMany(
    [{ postId: "one" }, { postId: "missing" }, { postId: "two" }],
    { concurrency: 2 },
  );

  expect(batch.results.map((result) => result.postId)).toEqual(["one", "two"]);
  expect(batch.failures).toHaveLength(1);
  expect(batch.failures[0]?.postId).toBe("missing");
  expect(batch.failures[0]?.index).toBe(1);
});

test("normalizes metrics for legacy TikTok Developer OAuth accounts", async () => {
  const client = createAdPlatforms({
    connections: {
      tiktokDeveloper: {
        videos: {
          query: async () => ({
            videos: [
              {
                id: "video-1",
                view_count: 50,
                like_count: 5,
                comment_count: 2,
                share_count: 1,
              },
            ],
          }),
        },
      } as unknown as NonNullable<PostMetricsConnections["tiktokDeveloper"]>,
    },
    now: fixedNow,
  });

  const result = await client.tiktokDeveloper.posts.getMetrics({ postId: "video-1" });

  expect(result.common).toMatchObject({ views: 50, likes: 5, comments: 2, shares: 1 });
  expect(result.provider.api).toBe("developer");
  expect(client.operations.describe("tiktok.developer.posts.metrics.get").platform).toBe("tiktok");
});
