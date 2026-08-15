import { describe, expect, test } from "bun:test";

import { createLinkedInOAuthAdapter } from "../src/oauth-adapters.ts";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("LinkedIn OAuth adapter", () => {
  test("normalizes grants and discovers the member and organizations", async () => {
    let call = 0;
    const adapter = createLinkedInOAuthAdapter({
      clientId: "client",
      clientSecret: "secret",
      redirectUri: "https://example.test/callback",
      fetch: (async (input: RequestInfo | URL) => {
        call += 1;
        const url = String(input);
        if (url.includes("accessToken")) {
          return jsonResponse({
            access_token: "access",
            refresh_token: "refresh",
            expires_in: 5_184_000,
            refresh_token_expires_in: 31_536_000,
            scope: "openid w_member_social",
            token_type: "Bearer",
          });
        }
        if (url.includes("userinfo")) {
          return jsonResponse({ sub: "member-1", name: "Member", email: "member@example.test" });
        }
        if (url.includes("organizationAcls")) {
          return jsonResponse({
            elements: [{ organization: "urn:li:organization:42" }],
          });
        }
        return jsonResponse({
          id: 42,
          localizedName: "Company",
          vanityName: "company",
          localizedWebsite: "https://company.example",
        });
      }) as unknown as typeof fetch,
    });

    const grant = await adapter.exchangeCode({ code: "code", state: "state" });
    const member = await adapter.getUserInfo({ accessToken: grant.accessToken });
    const organizations = await adapter.listOrganizations({ accessToken: grant.accessToken });

    expect(call).toBe(4);
    expect(grant.refreshToken).toBe("refresh");
    expect(member.sub).toBe("member-1");
    expect(organizations[0]?.localizedName).toBe("Company");
  });
});
