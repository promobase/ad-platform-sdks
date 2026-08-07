import { expect, test } from "bun:test";

import { Bluesky, BlueskyApiClient, BlueskyApiError } from "../src/index.ts";

const creds = { handle: "user.bsky.social", appPassword: "abcd-efgh-ijkl-mnop" };

test("requests send app-password Basic-style bearer auth", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://bsky.social/xrpc/app.bsky.feed.getTimeline?limit=50");
    const headers = init!.headers as Record<string, string>;
    expect(headers.Authorization).toBe(`Bearer ${btoa("user.bsky.social:abcd-efgh-ijkl-mnop")}`);
    return new Response(
      JSON.stringify({
        feed: [{ post: { uri: "at://x", cid: "c1", record: { text: "hi" } } }],
        cursor: "next",
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const api = new BlueskyApiClient({ ...creds, fetch: fetchImpl });
  const result = await api.get<{ feed: unknown[]; cursor?: string }>(
    "/xrpc/app.bsky.feed.getTimeline",
    { limit: 50 },
  );
  expect(result.feed).toHaveLength(1);
  expect(result.cursor).toBe("next");
});

test("supports custom PDS service URL", () => {
  const api = new BlueskyApiClient({
    handle: "u.test",
    appPassword: "x",
    service: "https://pds.example.com",
  });
  expect((api as unknown as { service: string }).service).toBe("https://pds.example.com");
});

test("throws BlueskyApiError on XRPC error bodies", async () => {
  const fetchImpl = (async () =>
    new Response(JSON.stringify({ error: "InvalidRequest", message: "Invalid handle" }), {
      status: 400,
    })) as unknown as typeof fetch;

  const api = new BlueskyApiClient({ ...creds, fetch: fetchImpl });
  const error = await api
    .get("/xrpc/app.bsky.actor.getProfile", { actor: "bad" })
    .catch((e: unknown) => e);
  expect(error).toBeInstanceOf(BlueskyApiError);
  if (error instanceof BlueskyApiError) {
    expect(error.status).toBe(400);
    expect(error.errorCode).toBe("InvalidRequest");
    expect(error.message).toContain("Invalid handle");
  }
});

test("retries 429 responses and succeeds", async () => {
  let calls = 0;
  const fetchImpl = (async () => {
    calls++;
    if (calls === 1) {
      return new Response(JSON.stringify({ error: "RateLimit", message: "slow down" }), {
        status: 429,
      });
    }
    return new Response(JSON.stringify({ feed: [] }), { status: 200 });
  }) as unknown as typeof fetch;

  const api = new BlueskyApiClient({
    ...creds,
    fetch: fetchImpl,
    retry: { maxRetries: 2 },
    delay: () => Promise.resolve(),
  });
  const result = await api.get<{ feed: unknown[] }>("/xrpc/app.bsky.feed.getTimeline");
  expect(result.feed).toEqual([]);
  expect(calls).toBe(2);
});

// ─── Generated clients ───────────────────────────────────────────────

test("feed.getTimeline returns the typed feed", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://bsky.social/xrpc/app.bsky.feed.getTimeline?limit=10");
    return new Response(
      JSON.stringify({
        feed: [
          {
            post: {
              uri: "at://did:plc:1/app.bsky.feed.post/abc",
              cid: "c1",
              record: { $type: "app.bsky.feed.post", text: "hello" },
            },
          },
        ],
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Bluesky.createClient({ ...creds, fetch: fetchImpl });
  const timeline = await client.feed.getTimeline({ limit: 10 });
  expect(timeline.feed).toHaveLength(1);
});

test("actor.getProfile returns a profile", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe("https://bsky.social/xrpc/app.bsky.actor.getProfile?actor=bsky.app");
    return new Response(
      JSON.stringify({
        did: "did:plc:z72i7hdynmk6r22z27h6tvur",
        handle: "bsky.app",
        displayName: "Bluesky",
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Bluesky.createClient({ ...creds, fetch: fetchImpl });
  const profile = await client.actor.getProfile({ actor: "bsky.app" });
  expect(profile.displayName).toBe("Bluesky");
});

test("graph.getFollowers returns followers", async () => {
  const fetchImpl = (async (input: string | URL) => {
    expect(String(input)).toBe(
      "https://bsky.social/xrpc/app.bsky.graph.getFollowers?actor=did%3Aplc%3Aabc",
    );
    return new Response(
      JSON.stringify({
        followers: [{ did: "did:plc:1", handle: "follower.bsky.social" }],
        subject: { did: "did:plc:abc", handle: "me.bsky.social" },
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Bluesky.createClient({ ...creds, fetch: fetchImpl });
  const followers = await client.graph.getFollowers({ actor: "did:plc:abc" });
  expect(followers.followers[0]!.handle).toBe("follower.bsky.social");
});

test("server.createSession works with app passwords", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://bsky.social/xrpc/com.atproto.server.createSession");
    const body = JSON.parse(String(init?.body));
    expect(body.identifier).toBe("user.bsky.social");
    expect(body.password).toBe("abcd-efgh-ijkl-mnop");
    return new Response(
      JSON.stringify({
        accessJwt: "jwt-1",
        refreshJwt: "jwt-2",
        handle: "user.bsky.social",
        did: "did:plc:user",
      }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Bluesky.createClient({ ...creds, fetch: fetchImpl });
  const session = await client.server.createSession({
    identifier: "user.bsky.social",
    password: "abcd-efgh-ijkl-mnop",
  });
  expect(session.accessJwt).toBe("jwt-1");
  expect(session.did).toBe("did:plc:user");
});

// ─── posts.createPost convenience ────────────────────────────────────

test("posts.createPost posts a record with auto link facets", async () => {
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    expect(String(input)).toBe("https://bsky.social/xrpc/com.atproto.repo.createRecord");
    const body = JSON.parse(String(init?.body));
    expect(body.repo).toBe("user.bsky.social");
    expect(body.collection).toBe("app.bsky.feed.post");
    expect(body.record.$type).toBe("app.bsky.feed.post");
    expect(body.record.text).toBe("Check https://openpromo.app now");
    expect(body.record.facets).toHaveLength(1);
    expect(body.record.facets[0].features[0].uri).toBe("https://openpromo.app");
    expect(body.record.facets[0].index.byteStart).toBe("Check ".length);
    return new Response(
      JSON.stringify({ uri: "at://did:plc:1/app.bsky.feed.post/abc", cid: "c1" }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Bluesky.createClient({ ...creds, fetch: fetchImpl });
  const result = await client.posts.createPost({ text: "Check https://openpromo.app now" });
  expect(result.uri).toContain("app.bsky.feed.post");
});

test("posts.createPost uploads an image and embeds it", async () => {
  let uploadCalls = 0;
  const fetchImpl = (async (input: string | URL, init?: RequestInit) => {
    const url = String(input);
    if (url.includes("uploadBlob")) {
      uploadCalls++;
      expect(init?.body).toBeInstanceOf(Blob);
      return new Response(
        JSON.stringify({
          blob: { $type: "blob", ref: { $link: "ref-1" }, mimeType: "image/png", size: 3 },
        }),
        { status: 200 },
      );
    }
    const body = JSON.parse(String(init?.body));
    expect(body.record.embed.$type).toBe("app.bsky.embed.images");
    expect(body.record.embed.images[0].image.ref.$link).toBe("ref-1");
    expect(body.record.embed.images[0].alt).toBe("A photo");
    return new Response(
      JSON.stringify({ uri: "at://did:plc:1/app.bsky.feed.post/def", cid: "c2" }),
      { status: 200 },
    );
  }) as unknown as typeof fetch;

  const client = Bluesky.createClient({ ...creds, fetch: fetchImpl });
  await client.posts.createPost({
    text: "With photo",
    image: { bytes: new Uint8Array([1, 2, 3]), alt: "A photo" },
  });
  expect(uploadCalls).toBe(1);
});
