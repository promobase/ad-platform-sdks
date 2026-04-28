import { createYouTubeClient } from "@openpromo/youtube";
import type { Command } from "commander";
import { z } from "zod";
import { createGroup, defineCommand, option } from "./command.ts";
import { inferContentType, readFileArrayBuffer, requireValue } from "./common.ts";
import { jsonObjectFromCli, optionalJsonObjectFromCli } from "./schemas.ts";

const youtubeAuth = z.object({
  accessToken: z.string().optional(),
  apiKey: z.string().optional(),
});

const authOptions = [
  option("--access-token <token>", "YouTube OAuth token, defaults to YOUTUBE_ACCESS_TOKEN"),
  option("--api-key <key>", "YouTube API key, defaults to YOUTUBE_API_KEY"),
];

export function registerYouTubeCommands(program: Command): void {
  const youtube = program.command("youtube").description("YouTube Data API resources and uploads");

  registerResources(youtube);
  registerVideos(youtube);
  registerUploads(youtube);
}

function registerResources(parent: Command): void {
  const resources = createGroup(parent, "resources", "Generated YouTube resource operations");

  defineCommand(resources, {
    name: "call",
    description: "Call any generated resource operation, e.g. videos.list or playlists.insert",
    schema: youtubeAuth.extend({
      resource: z.string(),
      operation: z.string(),
      params: optionalJsonObjectFromCli,
      body: optionalJsonObjectFromCli,
    }),
    options: [
      ...authOptions,
      option("--resource <name>", "Resource name, e.g. videos"),
      option("--operation <name>", "Operation name, e.g. list"),
      option("--params <json>", "Params JSON object"),
      option("--body <json>", "Body JSON object"),
    ],
    action: (input) =>
      callResource(createYouTube(input).resources, input.resource, input.operation, [
        input.params ?? {},
        input.body,
      ]),
  });
}

function registerVideos(parent: Command): void {
  const videos = createGroup(parent, "videos", "Common YouTube video operations");

  defineCommand(videos, {
    name: "list",
    description: "List videos",
    schema: youtubeAuth.extend({
      part: z.string(),
      id: z.string().optional(),
      mine: z.coerce.boolean().optional(),
      chart: z.string().optional(),
      maxResults: z.coerce.number().optional(),
      pageToken: z.string().optional(),
    }),
    options: [
      ...authOptions,
      option("--part <part>", "Comma-separated part list, e.g. snippet,status"),
      option("--id <ids>", "Comma-separated video IDs"),
      option("--mine <boolean>", "List authenticated user's videos"),
      option("--chart <chart>", "Chart name"),
      option("--max-results <n>", "Maximum results"),
      option("--page-token <token>", "Page token"),
    ],
    action: (input) =>
      createYouTube(input).resources.videos.list({
        part: input.part,
        id: input.id,
        mine: input.mine,
        chart: input.chart,
        maxResults: input.maxResults,
        pageToken: input.pageToken,
      }),
  });

  defineCommand(videos, {
    name: "delete",
    description: "Delete a video",
    schema: youtubeAuth.extend({ id: z.string() }),
    options: [...authOptions, option("--id <id>", "Video ID")],
    action: async (input) => {
      await createYouTube(input).resources.videos.delete({ id: input.id });
    },
  });

  defineCommand(videos, {
    name: "insert",
    description: "Insert video metadata without media upload",
    schema: youtubeAuth.extend({ params: jsonObjectFromCli, body: jsonObjectFromCli }),
    options: [
      ...authOptions,
      option("--params <json>", "videos.insert params JSON"),
      option("--body <json>", "Video resource JSON"),
    ],
    action: (input) => createYouTube(input).resources.videos.insert(input.params, input.body),
  });

  defineCommand(videos, {
    name: "update",
    description: "Update video metadata",
    schema: youtubeAuth.extend({ params: jsonObjectFromCli, body: jsonObjectFromCli }),
    options: [
      ...authOptions,
      option("--params <json>", "videos.update params JSON"),
      option("--body <json>", "Video resource JSON"),
    ],
    action: (input) => createYouTube(input).resources.videos.update(input.params, input.body),
  });
}

function registerUploads(parent: Command): void {
  const uploads = createGroup(parent, "uploads", "YouTube resumable upload operations");

  defineCommand(uploads, {
    name: "start-video",
    description: "Start a resumable video upload session",
    schema: youtubeAuth.extend({
      params: jsonObjectFromCli,
      metadata: jsonObjectFromCli,
      mediaType: z.string().optional(),
      contentLength: z.coerce.number().optional(),
    }),
    options: [
      ...authOptions,
      option("--params <json>", "videos.insert params JSON"),
      option("--metadata <json>", "Video metadata JSON"),
      option("--media-type <type>", "Media content type"),
      option("--content-length <bytes>", "Content length"),
    ],
    action: (input) =>
      createYouTube(input).uploads.startVideoResumableUpload({
        params: input.params,
        metadata: input.metadata,
        mediaType: input.mediaType ?? "video/mp4",
        contentLength: input.contentLength,
      }),
  });

  defineCommand(uploads, {
    name: "upload-video-file",
    description: "Upload a local file with a new resumable upload session",
    schema: youtubeAuth.extend({
      params: jsonObjectFromCli,
      metadata: jsonObjectFromCli,
      file: z.string(),
      mediaType: z.string().optional(),
    }),
    options: [
      ...authOptions,
      option("--params <json>", "videos.insert params JSON"),
      option("--metadata <json>", "Video metadata JSON"),
      option("--file <path>", "Local video file"),
      option("--media-type <type>", "Media content type"),
    ],
    async action(input) {
      const media = await readFileArrayBuffer(input.file);
      return createYouTube(input).uploads.uploadVideoResumable({
        params: input.params,
        metadata: input.metadata,
        media,
        mediaType: input.mediaType ?? inferContentType(input.file, "video/mp4"),
        contentLength: media.byteLength,
      });
    },
  });

  defineCommand(uploads, {
    name: "upload-to-session",
    description: "Upload a local file to an existing resumable upload URL",
    schema: youtubeAuth.extend({
      uploadUrl: z.string().url(),
      file: z.string(),
      mediaType: z.string().optional(),
    }),
    options: [
      ...authOptions,
      option("--upload-url <url>", "Resumable upload URL"),
      option("--file <path>", "Local video file"),
      option("--media-type <type>", "Media content type"),
    ],
    async action(input) {
      const media = await readFileArrayBuffer(input.file);
      return createYouTube(input).uploads.uploadToSession(input.uploadUrl, media, {
        mediaType: input.mediaType ?? inferContentType(input.file, "video/mp4"),
        contentLength: media.byteLength,
      });
    },
  });
}

function createYouTube(input: z.output<typeof youtubeAuth>): any {
  const accessToken = input.accessToken ?? process.env.YOUTUBE_ACCESS_TOKEN;
  const apiKey = input.apiKey ?? process.env.YOUTUBE_API_KEY;
  if (!accessToken && !apiKey) {
    requireValue(undefined, { name: "accessToken or apiKey", env: "YOUTUBE_ACCESS_TOKEN" });
  }
  return createYouTubeClient({ accessToken, apiKey });
}

function callResource(
  resources: Record<string, unknown>,
  resourceName: string,
  operationName: string,
  args: unknown[],
): unknown {
  const resource = resources[resourceName];
  if (!resource || typeof resource !== "object") {
    throw new Error(`Unknown YouTube resource: ${resourceName}`);
  }
  const operation = (resource as Record<string, unknown>)[operationName];
  if (typeof operation !== "function") {
    throw new Error(`Unknown YouTube operation: ${resourceName}.${operationName}`);
  }
  return operation(...args.filter((arg) => arg !== undefined));
}
