import { expect, test } from "bun:test";

import { ResponseDecodeError } from "@openpromo/sdk-runtime/effect";
import { Effect } from "effect";

import {
  createEffectClient,
  youtube_videos_delete,
  youtube_videos_list,
} from "../src/generated/effect/index.ts";

test("generated YouTube descriptor has matching typed Effect and Promise projections", async () => {
  const urls: string[] = [];
  const client = createEffectClient({
    baseUrl: "https://www.googleapis.com/",
    fetch: (async (url: string | URL | Request) => {
      urls.push(String(url));
      return new Response('{"items":[{"id":"video-id"}]}');
    }) as unknown as typeof fetch,
  });

  const input = { part: "statistics", id: "video-id" } as const;
  expect(Effect.isEffect(client.effect(youtube_videos_list, input))).toBe(true);
  await expect(client.promise(youtube_videos_list, input)).resolves.toMatchObject({
    items: [{ id: "video-id" }],
  });
  expect(urls).toEqual([
    "https://www.googleapis.com/youtube/v3/videos?id=video-id&part=statistics",
  ]);
  await client.dispose();
});

test("generated YouTube response schema rejects provider shape drift", async () => {
  const client = createEffectClient({
    baseUrl: "https://www.googleapis.com/",
    fetch: (async () => new Response('{"items":[{"id":123}]}')) as unknown as typeof fetch,
  });
  await expect(
    client.promise(youtube_videos_list, { part: "statistics", id: "video-id" }),
  ).rejects.toBeInstanceOf(ResponseDecodeError);
  await client.dispose();
});

test("generated mutations declare the OpenPromo durable execution boundary", () => {
  expect(youtube_videos_list.execution).toBe("inline");
  expect(youtube_videos_delete.execution).toBe("durable");
  expect(youtube_videos_delete.idempotency).toBe("unsafe");
});
