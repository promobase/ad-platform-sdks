import { expect, test } from "bun:test";

import { Bluesky } from "../src/index.ts";

test("Bluesky namespace is accessible", () => {
  expect(Bluesky.createClient).toBeDefined();
  expect(typeof Bluesky.createClient).toBe("function");
  expect(Bluesky.ApiError).toBeDefined();
  expect(Bluesky.ApiClient).toBeDefined();
});

test("Bluesky.createClient returns a client with platform sections", () => {
  const client = Bluesky.createClient({
    handle: "user.bsky.social",
    appPassword: "abcd-efgh-ijkl-mnop",
  });
  expect(client.feed).toBeDefined();
  expect(client.actor).toBeDefined();
  expect(client.graph).toBeDefined();
  expect(client.repo).toBeDefined();
  expect(client.server).toBeDefined();
  expect(client.notification).toBeDefined();
  expect(client.posts).toBeDefined();
  expect(typeof client.feed.getTimeline).toBe("function");
  expect(typeof client.posts.createPost).toBe("function");
});

test("createClient requires credentials", () => {
  expect(() => Bluesky.createClient({} as never)).toThrow(/requires/);
});

test("BlueskyApiError is exported", () => {
  const { BlueskyApiError } = require("../src/index.ts");
  expect(BlueskyApiError).toBeDefined();
  expect(typeof BlueskyApiError).toBe("function");
});
