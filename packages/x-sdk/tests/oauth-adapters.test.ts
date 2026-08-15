import { expect, test } from "bun:test";

import { createXOAuthAdapter } from "../src/oauth-adapters.ts";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

test("generates PKCE and discovers the authenticated user", async () => {
  const adapter = createXOAuthAdapter({
    clientId: "client",
    redirectUri: "https://example.test/callback",
    fetch: (async () =>
      jsonResponse({
        data: {
          id: "user-1",
          name: "User",
          username: "user",
          profile_image_url: "https://img.example/user.jpg",
        },
      })) as unknown as typeof fetch,
  });

  const authorization = await adapter.authorize({
    scopes: ["users.read"],
    state: "state",
    pkce: "auto",
  });
  const user = await adapter.getUserInfo({ accessToken: "access" });

  expect(authorization.codeVerifier).toBeDefined();
  expect(authorization.url.includes("code_challenge=")).toBe(true);
  expect(user.id).toBe("user-1");
  expect(user.profileImageUrl).toBe("https://img.example/user.jpg");
});
