import { expect, test } from "bun:test";
import { TikTok } from "../src/index.ts";

test("TikTok namespace is accessible", () => {
  expect(TikTok.createClient).toBeDefined();
  expect(typeof TikTok.createClient).toBe("function");
});

test("TikTok.createClient returns a client object", () => {
  const client = TikTok.createClient({
    accessToken: "test-token",
    businessId: "biz-123",
  });
  expect(client).toBeDefined();
  expect(typeof client).toBe("object");
});

test("TikTokApiError is exported", () => {
  const { TikTokApiError } = require("../src/index.ts");
  expect(TikTokApiError).toBeDefined();
  expect(typeof TikTokApiError).toBe("function");
});
