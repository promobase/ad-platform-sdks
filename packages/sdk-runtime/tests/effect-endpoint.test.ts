import { expect, test } from "bun:test";

import { Schema } from "effect";

import {
  defineEndpointDescriptor,
  describeEndpoint,
  executeEndpoint,
} from "../src/effect-endpoint.ts";
import { InputValidationError, ResponseDecodeError } from "../src/effect-errors.ts";
import { makeSdkRuntime } from "../src/effect-runtime.ts";

const descriptor = defineEndpointDescriptor({
  id: "test.posts.get",
  platform: "test",
  method: "GET",
  path: "/posts/:id",
  summary: "Get a post",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["posts.read"],
  capabilities: ["posts.read"],
  parameters: [
    {
      name: "id",
      wireName: "id",
      location: "path",
      required: true,
      nullable: false,
    },
  ],
  inputSchema: Schema.Struct({ id: Schema.String }),
  outputSchema: Schema.Struct({ id: Schema.String, createdAt: Schema.DateFromString }),
});

test("endpoint descriptor validates input and decodes provider output", async () => {
  const runtime = makeSdkRuntime({
    fetch: (async () =>
      new Response('{"id":"post-1","createdAt":"2026-08-02T20:00:00.000Z"}', {
        status: 200,
      })) as unknown as typeof fetch,
  });

  const output = await runtime.runPromise(
    executeEndpoint(descriptor, { id: "post-1" }, ({ id }) => ({
      url: `https://example.test/posts/${id}`,
    })),
  );

  expect(output.id).toBe("post-1");
  expect(output.createdAt).toBeInstanceOf(Date);
  await runtime.dispose();
});

test("endpoint descriptor reports typed input validation failures", async () => {
  const runtime = makeSdkRuntime();
  await expect(
    runtime.runPromise(
      executeEndpoint(descriptor, {}, ({ id }) => ({
        url: `https://example.test/posts/${id}`,
      })),
    ),
  ).rejects.toBeInstanceOf(InputValidationError);
  await runtime.dispose();
});

test("endpoint descriptor reports typed response validation failures", async () => {
  const runtime = makeSdkRuntime({
    fetch: (async () => new Response('{"id":123}', { status: 200 })) as unknown as typeof fetch,
  });

  await expect(
    runtime.runPromise(
      executeEndpoint(descriptor, { id: "post-1" }, ({ id }) => ({
        url: `https://example.test/posts/${id}`,
      })),
    ),
  ).rejects.toBeInstanceOf(ResponseDecodeError);
  await runtime.dispose();
});

test("endpoint description derives JSON Schema for agent surfaces", () => {
  const description = describeEndpoint(descriptor);
  expect(description.id).toBe("test.posts.get");
  expect(description.capabilities).toEqual(["posts.read"]);
  expect(description.inputSchema).toMatchObject({
    type: "object",
    required: ["id"],
  });
  expect(description.outputSchema).toMatchObject({ type: "object" });
});
