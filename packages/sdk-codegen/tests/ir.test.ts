import { expect, test } from "bun:test";
import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { Effect } from "effect";

import { writeEffectArtifacts } from "../src/artifacts.ts";
import {
  decodeSdkIr,
  emitEffectSchemaModule,
  emitEndpointDescriptors,
  type SdkIr,
  validateSdkIr,
  writeNimbusReference,
} from "../src/index.ts";

const fixture = {
  platform: "youtube",
  source: {
    kind: "discovery",
    location: "google-discovery/youtube-v3.json",
    revision: "20260729",
  },
  version: "v3",
  models: [
    {
      kind: "object",
      id: "Video",
      name: "Video",
      wire: "json",
      fields: [
        {
          name: "id",
          type: { kind: "primitive", name: "string" },
          required: true,
          nullable: false,
        },
        {
          name: "publishedAt",
          wireName: "published_at",
          type: { kind: "primitive", name: "string", format: "date-time" },
          required: false,
          nullable: true,
        },
      ],
    },
  ],
  capabilities: [
    {
      id: "posts.metrics.read",
      summary: "Read video metrics",
      requiredScopes: ["youtube.readonly"],
    },
  ],
  endpoints: [
    {
      id: "VideosList",
      operationId: "youtube.posts.metrics.get",
      platform: "youtube",
      method: "GET",
      path: "/youtube/v3/videos",
      parameters: [
        {
          name: "id",
          location: "query",
          type: { kind: "primitive", name: "string" },
          required: true,
          nullable: false,
        },
      ],
      output: { kind: "reference", target: "Video" },
      errors: [{ status: 403, retryable: false }],
      effect: "read",
      execution: "inline",
      idempotency: "safe",
      requiredScopes: ["youtube.readonly"],
      capabilities: ["posts.metrics.read"],
      rateLimitBucket: "youtube-data-api",
      summary: "Get video metrics",
    },
  ],
} as const;

test("canonical IR decodes with Effect Schema", async () => {
  const ir = await Effect.runPromise(decodeSdkIr(fixture));
  expect(ir.platform).toBe("youtube");
  expect(validateSdkIr(ir)).toEqual([]);
});

test("IR semantic validation catches missing capabilities and models", () => {
  const invalid = {
    ...fixture,
    capabilities: [],
    endpoints: [
      {
        ...fixture.endpoints[0],
        output: { kind: "reference", target: "Missing" },
      },
    ],
  } as unknown as SdkIr;

  expect(validateSdkIr(invalid)).toEqual([
    "Endpoint VideosList references unknown capability: posts.metrics.read",
    "VideosList references unknown model: Missing",
  ]);
});

test("Schema emitter generates decoded and encoded types from the same contract", async () => {
  const ir = await Effect.runPromise(decodeSdkIr(fixture));
  expect(emitEffectSchemaModule(ir)).toContain("export interface Video");
  expect(emitEffectSchemaModule(ir)).toContain("export interface VideoEncoded");
  expect(emitEffectSchemaModule(ir)).toContain(
    "export const Video: Schema.Schema<Video, VideoEncoded, never> = Schema.Struct",
  );
  expect(emitEffectSchemaModule(ir)).toContain(
    'Schema.optional(Schema.NullOr(Schema.DateFromString)).pipe(Schema.fromKey("published_at"))',
  );
  expect(emitEffectSchemaModule(ir)).toContain("readonly published_at?: string | null");
});

test("descriptor emitter carries operation and capability metadata", async () => {
  const ir = await Effect.runPromise(decodeSdkIr(fixture));
  const output = emitEndpointDescriptors(ir);
  expect(output).toContain('id: "youtube.posts.metrics.get"');
  expect(output).toContain('capabilities: ["posts.metrics.read"]');
  expect(output).toContain('idempotency: "safe"');
});

test("descriptor emitter sanitizes export identifiers", async () => {
  const ir = await Effect.runPromise(decodeSdkIr(fixture));
  const output = emitEndpointDescriptors({
    ...ir,
    endpoints: [{ ...ir.endpoints[0]!, operationId: "youtube.posts.metrics.get" }],
  });
  expect(output).toContain("export const youtube_posts_metrics_get =");
  expect(output).toContain("endpointDescriptors = [youtube_posts_metrics_get]");
});

test("generated entrypoint exposes the unified Effect and Promise client", async () => {
  const ir = await Effect.runPromise(decodeSdkIr(fixture));
  const outputDir = await mkdtemp(join(tmpdir(), "openpromo-codegen-"));
  const secondOutputDir = await mkdtemp(join(tmpdir(), "openpromo-codegen-"));
  await writeEffectArtifacts({ outputDir, ir });
  await writeEffectArtifacts({ outputDir: secondOutputDir, ir });
  const entrypoint = await readFile(join(outputDir, "index.ts"), "utf8");
  expect(entrypoint).toContain("createEffectClient(");
  expect(entrypoint).toContain("EndpointClient<typeof endpointDescriptors>");
  expect(entrypoint).toContain("createEndpointClient(endpointDescriptors, config)");
  for (const artifact of [
    "manifest.json",
    "schemas.ts",
    "endpoints.ts",
    "capabilities.ts",
    "index.ts",
  ]) {
    expect(await readFile(join(outputDir, artifact), "utf8")).toBe(
      await readFile(join(secondOutputDir, artifact), "utf8"),
    );
  }
});

test("Nimbus reference generation is deterministic and covers endpoints and models", async () => {
  const ir = await Effect.runPromise(decodeSdkIr(fixture));
  const outputDir = await mkdtemp(join(tmpdir(), "openpromo-docs-"));
  const secondOutputDir = await mkdtemp(join(tmpdir(), "openpromo-docs-"));
  const manifest = await writeNimbusReference({ outputDir, ir });
  await writeNimbusReference({ outputDir: secondOutputDir, ir });

  expect(manifest).toMatchObject({
    platform: "youtube",
    endpointCount: 1,
    modelCount: 1,
    capabilityCount: 1,
    endpointPages: ["endpoints/posts"],
    modelPages: ["models/video"],
  });
  for (const artifact of [
    "index.mdx",
    "endpoints/posts/index.mdx",
    "models/video/index.mdx",
    "reference-manifest.json",
  ]) {
    expect(await readFile(join(outputDir, "youtube", artifact), "utf8")).toBe(
      await readFile(join(secondOutputDir, "youtube", artifact), "utf8"),
    );
  }
  expect(
    await readFile(join(outputDir, "youtube", "endpoints", "posts", "index.mdx"), "utf8"),
  ).toContain('label: "Posts"');
  expect(
    await readFile(join(outputDir, "youtube", "endpoints", "posts", "index.mdx"), "utf8"),
  ).toContain("youtube.posts.metrics.get");
  expect(
    await readFile(join(outputDir, "youtube", "models", "video", "index.mdx"), "utf8"),
  ).toContain("published_at");
});
