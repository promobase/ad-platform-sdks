import { expect, test } from "bun:test";

import { createPkcePair, X, XApiClient } from "../src/index.ts";

test("creates X API clients through generated and ergonomic entries", () => {
  const fromNamespace = X.createClient({ token: "token" });
  const generated = new XApiClient({ token: "token" });

  expect(fromNamespace.tweets.createPosts).toBeDefined();
  expect(fromNamespace.posts.createPosts).toBeDefined();
  expect(fromNamespace.tweets).toBe(fromNamespace.posts);
  expect(fromNamespace.directMessages.list).toBeDefined();
  expect(generated.posts.createPosts).toBeDefined();
  expect(generated.users.getUsersMe).toBeDefined();
});

test("builds PKCE OAuth URLs and refreshes tokens", async () => {
  let body = "";
  const fetchMock = (async (_input: RequestInfo | URL, init?: RequestInit) => {
    body = String(init?.body);
    return Response.json({
      token_type: "bearer",
      expires_in: 7200,
      access_token: "next",
      refresh_token: "refresh-next",
    });
  }) as unknown as typeof fetch;
  const oauth = X.OAuth({
    clientId: "client",
    redirectUri: "https://app.example.com/callback",
    fetch: fetchMock,
  });
  const pkce = await createPkcePair();
  const url = new URL(oauth.getAuthorizationUrl({ state: "state", codeChallenge: pkce.challenge }));

  expect(pkce.challenge !== pkce.verifier).toBe(true);
  expect(url.searchParams.get("code_challenge_method")).toBe("S256");
  expect(url.searchParams.get("scope")?.includes("dm.write")).toBe(true);
  expect((await oauth.refreshToken("refresh")).access_token).toBe("next");
  expect(body.includes("client_id=client")).toBe(true);
});

test("lists and sends direct messages with the configured transport", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const fetchMock = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ url: String(input), init });
    return Response.json(
      init?.method === "POST"
        ? { data: { dm_event_id: "event-1", dm_conversation_id: "conversation-1" } }
        : { data: [], meta: { result_count: 0 } },
    );
  }) as unknown as typeof fetch;
  const client = X.createClient({ token: "token", fetch: fetchMock, maxRetries: 0 });

  await client.directMessages.list({ conversationId: "conversation-1", maxResults: 25 });
  const sent = await client.directMessages.sendToParticipant("user-2", { text: "Hello" });

  expect(calls[0]?.url.includes("/2/dm_conversations/conversation-1/dm_events")).toBe(true);
  expect(calls[0]?.url.includes("max_results=25")).toBe(true);
  expect(calls[1]?.url.includes("/2/dm_conversations/with/user-2/messages")).toBe(true);
  expect(JSON.stringify(JSON.parse(String(calls[1]?.init?.body)))).toBe(
    JSON.stringify({ text: "Hello" }),
  );
  expect(sent.data.dm_event_id).toBe("event-1");
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
