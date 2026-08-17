import { describe, expect, test } from "bun:test";

import { AllPlatforms, Result } from "../src/index.ts";
import {
  OAuthAdapterError,
  createOAuthFlow,
  assertOAuthState,
  createPkcePair,
  customOAuthScope,
  secondsFromNow,
  withOAuthResults,
} from "../src/oauth.ts";
import type { OAuthExchangeInput } from "../src/oauth.ts";

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

  test("requires an explicit helper for custom OAuth scopes", () => {
    expect(String(customOAuthScope("provider.future_scope"))).toBe("provider.future_scope");
    expect(() => customOAuthScope("   ")).toThrow("OAuth custom scope cannot be empty");
    expect(() => customOAuthScope("provider future_scope")).toThrow(
      "OAuth custom scope must be a single scope token",
    );
    expect(() => customOAuthScope("provider,future_scope")).toThrow(
      "OAuth custom scope must be a single scope token",
    );
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

  test("encapsulates authorization and callback state while preserving adapter methods", async () => {
    let exchangeInput: Partial<OAuthExchangeInput> = {};
    const adapter = withOAuthResults({
      provider: AllPlatforms.X,
      async authorize(input) {
        expect(input.pkce).toBe("auto");
        return {
          url: "https://provider.test/authorize",
          state: input.state,
          codeVerifier: "verifier",
        };
      },
      async exchangeCode(input) {
        exchangeInput = input;
        return {
          accessToken: "access-token",
          scopes: input.scopes ?? [],
          providerData: { userId: "user-1" },
        };
      },
      async discover() {
        return { userId: "user-1" };
      },
    });
    const flow = createOAuthFlow(adapter, {
      scopes: ["tweet.read"],
      state: "state-1",
      pkce: "auto",
    });

    const authorization = await flow.authorize();
    const grant = await flow.complete({ code: "code-1", state: authorization.state });

    expect(grant.accessToken).toBe("access-token");
    expect(exchangeInput).toEqual({
      code: "code-1",
      state: "state-1",
      expectedState: "state-1",
      codeVerifier: "verifier",
      scopes: ["tweet.read"],
    });
    expect(await flow.adapter.discover()).toEqual({ userId: "user-1" });
  });
});
