import { expect, test } from "bun:test";

import { Effect, Schema } from "effect";

import { createEndpointClient, resolveEndpointRequest } from "../src/effect-client.ts";
import { defineEndpointDescriptor } from "../src/effect-endpoint.ts";

const descriptor = defineEndpointDescriptor({
  id: "test.posts.get",
  platform: "test",
  method: "GET",
  path: "/posts/{postId}",
  summary: "Get post metrics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["posts.read"],
  capabilities: ["posts.metrics.read"],
  parameters: [
    { name: "postId", wireName: "postId", location: "path", required: true, nullable: false },
    { name: "fields", wireName: "fields", location: "query", required: false, nullable: false },
  ],
  inputSchema: Schema.Struct({
    postId: Schema.String,
    fields: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Schema.Struct({ id: Schema.String, views: Schema.Number }),
});

test("endpoint client exposes matching Effect and Promise surfaces", async () => {
  const requests: string[] = [];
  const client = createEndpointClient([descriptor] as const, {
    baseUrl: "https://api.example.test",
    headers: { authorization: "Bearer test" },
    fetch: (async (url: string | URL | Request) => {
      requests.push(String(url));
      return new Response('{"id":"post-1","views":42}');
    }) as typeof fetch,
  });

  await expect(
    client.promise(descriptor, { postId: "post-1", fields: ["views", "likes"] }),
  ).resolves.toEqual({ id: "post-1", views: 42 });
  await expect(client.dispose()).resolves.toBeUndefined();
  expect(requests[0]).toBe("https://api.example.test/posts/post-1?fields=views&fields=likes");
});

test("endpoint catalog derives searchable agent metadata", async () => {
  const client = createEndpointClient([descriptor] as const, {
    baseUrl: "https://api.example.test",
  });
  expect(client.catalog.search("metrics")[0]).toMatchObject({
    id: "test.posts.get",
    requiresApproval: false,
  });
  expect(client.catalog.describe("test.posts.get").inputSchema).toMatchObject({ type: "object" });
  expect(Effect.isEffect(client.effect(descriptor, { postId: "post-1" }))).toBe(true);
  await client.dispose();
});

test("default resolver projects path, query, headers, and body", () => {
  expect(
    resolveEndpointRequest(
      descriptor,
      { postId: "a/b", fields: ["views"] },
      { baseUrl: "https://api.example.test", headers: { "x-test": "1" } },
    ),
  ).toEqual({
    url: "https://api.example.test/posts/a%2Fb?fields=views",
    headers: { "x-test": "1" },
    body: undefined,
    idempotencyKey: undefined,
  });
});
