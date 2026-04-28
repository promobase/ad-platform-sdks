import { expect, test } from "bun:test";
import { X, XApiClient } from "../src/index.ts";

test("creates X API clients through generated and ergonomic entries", () => {
  const fromNamespace = X.createClient({ token: "token" });
  const generated = new XApiClient({ token: "token" });

  expect(fromNamespace.tweets.createPosts).toBeDefined();
  expect(generated.users.getUsersMe).toBeDefined();
});
