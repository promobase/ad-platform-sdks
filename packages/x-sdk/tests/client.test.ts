import { expect, test } from "bun:test";

import { X, XApiClient } from "../src/index.ts";

test("creates X API clients through generated and ergonomic entries", () => {
  const fromNamespace = X.createClient({ token: "token" });
  const generated = new XApiClient({ token: "token" });

  expect(fromNamespace.tweets.createPosts).toBeDefined();
  expect(fromNamespace.posts.createPosts).toBeDefined();
  expect(fromNamespace.tweets).toBe(fromNamespace.posts);
  expect(generated.posts.createPosts).toBeDefined();
  expect(generated.users.getUsersMe).toBeDefined();
});

test("requests generated public and owner-only post metric fields", async () => {
  let requestUrl = "";
  const fetchMock = (async (input: RequestInfo | URL) => {
    requestUrl = String(input);
    return Response.json({
      data: {
        id: "post-1",
        text: "Hello",
        public_metrics: { like_count: 4, reply_count: 2, repost_count: 1, quote_count: 0 },
        non_public_metrics: { impression_count: 30 },
        organic_metrics: { user_profile_clicks: 3 },
        promoted_metrics: { impression_count: 10 },
      },
    });
  }) as unknown as typeof fetch;

  const x = X.createClient({ token: "token", fetch: fetchMock, maxRetries: 0 });
  const result = await x.posts.getPostsById({
    id: "post-1",
    "post.fields": ["public_metrics", "non_public_metrics", "organic_metrics", "promoted_metrics"],
  });

  const url = new URL(requestUrl);
  expect(url.pathname).toBe("/2/tweets/post-1");
  expect(url.searchParams.get("post.fields")).toBe(
    "public_metrics,non_public_metrics,organic_metrics,promoted_metrics",
  );
  expect(result.data?.public_metrics?.like_count).toBe(4);
  expect(result.data?.non_public_metrics?.impression_count).toBe(30);
});
