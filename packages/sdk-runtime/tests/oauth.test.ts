import { describe, expect, test } from "bun:test";

import { AllPlatforms, Result } from "../src/index.ts";
import {
  OAuthAdapterError,
  assertOAuthState,
  createPkcePair,
  secondsFromNow,
  withOAuthResults,
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

  test("adds a typed Result façade without changing the throwing adapter API", async () => {
    const adapter = withOAuthResults({
      provider: AllPlatforms.FACEBOOK,
      async authorize(input) {
        return { url: "https://provider.test/authorize", state: input.state };
      },
      async exchangeCode() {
        throw new Error("provider rejected code");
      },
    });

    const authorization = await adapter.result.authorize({
      scopes: ["pages_show_list"],
      state: "state-1",
    });
    expect(Result.isOk(authorization)).toBe(true);
    if (Result.isOk(authorization)) {
      expect(authorization.value.state).toBe("state-1");
    }

    const exchange = await adapter.result.exchangeCode({ code: "bad-code" });
    expect(Result.isError(exchange)).toBe(true);
    if (Result.isError(exchange)) {
      expect(exchange.error).toBeInstanceOf(OAuthAdapterError);
      expect(exchange.error._tag).toBe("OAuthAdapterError");
      expect(exchange.error.details).toEqual({
        provider: AllPlatforms.FACEBOOK,
        phase: "exchange",
      });
    }
  });
});
