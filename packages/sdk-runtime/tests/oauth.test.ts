import { describe, expect, test } from "bun:test";

import {
  OAuthAdapterError,
  assertOAuthState,
  createPkcePair,
  secondsFromNow,
} from "../src/oauth.ts";

describe("OAuth runtime primitives", () => {
  test("rejects a mismatched callback state with a typed error", () => {
    expect(() => assertOAuthState("callback", "stored")).toThrow(OAuthAdapterError);
    try {
      assertOAuthState("callback", "stored");
    } catch (error) {
      expect(error).toBeInstanceOf(OAuthAdapterError);
      expect((error as OAuthAdapterError).details.phase).toBe("validate");
    }
  });

  test("normalizes relative expiry into a Date", () => {
    const now = Date.now();
    const expiresAt = secondsFromNow(60);
    expect(expiresAt).toBeInstanceOf(Date);
    expect(expiresAt!.getTime()).toBeGreaterThanOrEqual(now + 59_000);
    expect(expiresAt!.getTime()).toBeLessThanOrEqual(now + 61_000);
  });

  test("creates a Web Crypto PKCE pair", async () => {
    const pair = await createPkcePair();
    expect(pair.codeVerifier.length).toBeGreaterThan(20);
    expect(pair.codeChallenge).toMatch(/^[A-Za-z0-9_-]+$/);
  });
});
