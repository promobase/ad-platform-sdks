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
              { name: "post_impressions", values: [{ value: 200 }] },
              { name: "post_impressions_unique", values: [{ value: 150 }] },
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
  ]);
  expect(catalog.search("video statistics", { platform: "youtube" })[0]?.id).toBe(
    "youtube.posts.metrics.get",
  );
  expect(catalog.list().every((operation) => operation.effect === "read")).toBe(true);
});

test("normalizes common metrics while retaining provider payloads", async () => {
  const catalog = createPostMetricsCatalog(connections(), { now: fixedNow });
  const cases = [
    ["instagram.posts.metrics.get", { postId: "ig-1" }, { views: 100, reach: 80, likes: 12 }],
    ["facebook.posts.metrics.get", { postId: "fb-1" }, { views: 200, reach: 150 }],
    ["threads.posts.metrics.get", { postId: "th-1" }, { views: 300, comments: 9, replies: 9 }],
    ["tiktok.posts.metrics.get", { postId: "tt-1" }, { views: 400, reach: 350, likes: 40 }],
    [
      "linkedin.posts.metrics.get",
      { postId: "urn:li:ugcPost:1", metrics: ["IMPRESSION", "REACTION"] },
      { views: 500, likes: 25 },
    ],
    ["x.posts.metrics.get", { postId: "x-1" }, { views: 600, likes: 60, replies: 10 }],
    ["youtube.posts.metrics.get", { postId: "yt-1" }, { views: 700, likes: 70, comments: 11 }],
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

test("provides an ergonomic direct client over the same catalog", async () => {
  const client = createAdPlatforms({ connections: connections(), now: fixedNow });
  const result = await client.youtube.posts.getMetrics({ postId: "yt-1" });

  expect(result.platform).toBe("youtube");
  expect(result.common.views).toBe(700);
  expect(client.raw.youtube).toBeDefined();
  expect(client.operations.describe("youtube.posts.metrics.get").effect).toBe("read");
});
