import { describe, expect, test } from "bun:test";

import {
  AllPlatforms,
  redactOAuthTokenSet,
  type OAuthAdapter,
  type OAuthTokenSet,
} from "../src/index.ts";

type ProviderToken = { readonly remoteId: string };
type FacebookScope = "pages_show_list" | "pages_manage_posts";

describe("OAuth to connection and workflow contract", () => {
  test("keeps requested scopes isolated to the adapter's catalog", async () => {
    const adapter = {
      provider: AllPlatforms.FACEBOOK,
      async authorize(input: {
        readonly scopes: readonly FacebookScope[];
        readonly state: string;
      }) {
        return { url: "https://provider.test/authorize", state: input.state };
      },
      async exchangeCode(_input): Promise<OAuthTokenSet<ProviderToken>> {
        return {
          accessToken: "access-secret",
          scopes: ["pages_show_list"],
          providerData: { remoteId: "page-1" },
        };
      },
    } satisfies OAuthAdapter<ProviderToken, FacebookScope>;

    await adapter.authorize({ scopes: ["pages_show_list"], state: "state-1" });
    // @ts-expect-error Instagram scopes must not be accepted by a Facebook adapter.
    await adapter.authorize({ scopes: ["instagram_business_basic"], state: "state-1" });
  });

  test("keeps provider transport, account mapping, and workflow steps separate", async () => {
    const calls: string[] = [];
    const adapter = {
      provider: AllPlatforms.FACEBOOK,
      async authorize(input) {
        return { url: "https://provider.test/authorize", state: input.state };
      },
      async exchangeCode(_input): Promise<OAuthTokenSet<ProviderToken>> {
        return {
          accessToken: "access-secret",
          refreshToken: "refresh-secret",
          scopes: ["pages_manage_posts"],
          providerData: { remoteId: "page-1" },
        };
      },
      async refresh(_input): Promise<OAuthTokenSet<ProviderToken>> {
        return {
          accessToken: "rotated-access-secret",
          refreshToken: "rotated-refresh-secret",
          scopes: ["pages_manage_posts"],
          providerData: { remoteId: "page-1" },
        };
      },
    } satisfies OAuthAdapter<ProviderToken>;

    const grant = await adapter.exchangeCode({ code: "code" });
    const account = {
      platform: adapter.provider,
      externalId: grant.providerData.remoteId,
      credentials: grant,
    };
    const connection = {
      async publish(message: string) {
        calls.push(`publish:${account.externalId}:${message}`);
        return { id: "post-1" };
      },
    };

    for (const step of ["prepare", "publish", "receipt"]) {
      calls.push(step);
      if (step === "publish") await connection.publish("hello");
    }

    const refreshed = await adapter.refresh({ refreshToken: grant.refreshToken });
    const publicMetadata = redactOAuthTokenSet(adapter.provider, refreshed);

    expect(calls).toEqual(["prepare", "publish", "publish:page-1:hello", "receipt"]);
    expect(refreshed.accessToken).toBe("rotated-access-secret");
    expect(publicMetadata).toEqual({
      provider: AllPlatforms.FACEBOOK,
      scopes: ["pages_manage_posts"],
      hasRefreshToken: true,
    });
    expect(JSON.stringify(publicMetadata)).not.toContain("secret");
  });
});
