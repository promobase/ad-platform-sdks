import { X } from "@openpromo/x";
import type { Command } from "commander";
import { z } from "zod";
import { createGroup, defineCommand, option } from "./command.ts";
import { jsonObjectFromCli, optionalJsonObjectFromCli, optionalStringArray } from "./schemas.ts";

const xAuth = z.object({
  token: z.string().optional(),
});

const authOptions = [option("--token <token>", "X bearer token, defaults to X_BEARER_TOKEN")];

export function registerXCommands(program: Command): void {
  const x = program.command("x").description("X API v2 generated client operations");

  registerTweets(x);
  registerUsers(x);
  registerMedia(x);
  registerRaw(x);
}

function registerTweets(parent: Command): void {
  const tweets = createGroup(parent, "tweets", "X post operations");

  defineCommand(tweets, {
    name: "create",
    description: "Create a post",
    schema: xAuth.extend({ body: jsonObjectFromCli }),
    options: [...authOptions, option("--body <json>", "TweetCreateRequest JSON")],
    action: (input) => createX(input).tweets.createPosts(input.body),
  });

  defineCommand(tweets, {
    name: "get",
    description: "Get a post by id",
    schema: xAuth.extend({ id: z.string(), params: optionalJsonObjectFromCli }),
    options: [
      ...authOptions,
      option("--id <id>", "Post id"),
      option("--params <json>", "Additional request fields JSON"),
    ],
    action: (input) => createX(input).tweets.getPostsById({ id: input.id, ...input.params }),
  });

  defineCommand(tweets, {
    name: "list",
    description: "Get posts by ids",
    schema: xAuth.extend({ ids: optionalStringArray, params: optionalJsonObjectFromCli }),
    options: [
      ...authOptions,
      option("--ids <ids>", "Comma-separated post ids"),
      option("--params <json>", "Additional request fields JSON"),
    ],
    action: (input) => createX(input).tweets.getPostsByIds({ ids: input.ids, ...input.params }),
  });

  defineCommand(tweets, {
    name: "delete",
    description: "Delete a post",
    schema: xAuth.extend({ id: z.string() }),
    options: [...authOptions, option("--id <id>", "Post id")],
    action: (input) => createX(input).tweets.deletePosts({ id: input.id }),
  });
}

function registerUsers(parent: Command): void {
  const users = createGroup(parent, "users", "X user lookup operations");

  defineCommand(users, {
    name: "me",
    description: "Get the authenticated user",
    schema: xAuth.extend({ params: optionalJsonObjectFromCli }),
    options: [...authOptions, option("--params <json>", "Additional request fields JSON")],
    action: (input) => createX(input).users.getUsersMe(input.params ?? {}),
  });

  defineCommand(users, {
    name: "get",
    description: "Get a user by id",
    schema: xAuth.extend({ id: z.string(), params: optionalJsonObjectFromCli }),
    options: [
      ...authOptions,
      option("--id <id>", "User id"),
      option("--params <json>", "Additional request fields JSON"),
    ],
    action: (input) => createX(input).users.getUsersById({ id: input.id, ...input.params }),
  });

  defineCommand(users, {
    name: "get-by-username",
    description: "Get a user by username",
    schema: xAuth.extend({ username: z.string(), params: optionalJsonObjectFromCli }),
    options: [
      ...authOptions,
      option("--username <username>", "Username"),
      option("--params <json>", "Additional request fields JSON"),
    ],
    action: (input) =>
      createX(input).users.getUsersByUsername({ username: input.username, ...input.params }),
  });
}

function registerMedia(parent: Command): void {
  const media = createGroup(parent, "media", "X media upload and lookup operations");

  defineCommand(media, {
    name: "upload",
    description: "Call generated one-shot media upload",
    schema: xAuth.extend({ body: jsonObjectFromCli }),
    options: [...authOptions, option("--body <json>", "MediaUploadRequestOneShot JSON")],
    action: (input) => createX(input).media.upload(input.body),
  });

  defineCommand(media, {
    name: "initialize",
    description: "Initialize media upload",
    schema: xAuth.extend({ body: optionalJsonObjectFromCli }),
    options: [...authOptions, option("--body <json>", "Media upload config JSON")],
    action: (input) => createX(input).media.initializeMediaUpload(input.body ?? {}),
  });

  defineCommand(media, {
    name: "append",
    description: "Append media upload segment",
    schema: xAuth.extend({ body: jsonObjectFromCli }),
    options: [...authOptions, option("--body <json>", "AppendMediaUploadRequest JSON")],
    action: (input) => createX(input).media.appendMediaUpload(input.body),
  });

  defineCommand(media, {
    name: "finalize",
    description: "Finalize media upload",
    schema: xAuth.extend({ body: jsonObjectFromCli }),
    options: [...authOptions, option("--body <json>", "FinalizeMediaUploadRequest JSON")],
    action: (input) => createX(input).media.finalizeMediaUpload(input.body),
  });

  defineCommand(media, {
    name: "status",
    description: "Get media upload status",
    schema: xAuth.extend({ mediaId: z.string() }),
    options: [...authOptions, option("--media-id <id>", "Media id")],
    action: (input) => createX(input).media.getMediaUploadStatus({ media_id: input.mediaId }),
  });

  defineCommand(media, {
    name: "get",
    description: "Get media by media key",
    schema: xAuth.extend({ mediaKey: z.string(), params: optionalJsonObjectFromCli }),
    options: [
      ...authOptions,
      option("--media-key <key>", "Media key"),
      option("--params <json>", "Additional request fields JSON"),
    ],
    action: (input) =>
      createX(input).media.getMediaByMediaKey({ media_key: input.mediaKey, ...input.params }),
  });
}

function registerRaw(parent: Command): void {
  const raw = createGroup(parent, "raw", "X generated client passthrough operations");

  defineCommand(raw, {
    name: "call",
    description: "Call any generated X resource operation",
    schema: xAuth.extend({
      resource: z.string(),
      operation: z.string(),
      body: optionalJsonObjectFromCli,
    }),
    options: [
      ...authOptions,
      option("--resource <name>", "Resource name: tweets, users, media"),
      option("--operation <name>", "Generated operation name"),
      option("--body <json>", "Operation request JSON"),
    ],
    action: (input) => {
      const client = createX(input);
      const resource = client[input.resource];
      if (!resource || typeof resource !== "object") {
        throw new Error(`Unknown X resource: ${input.resource}`);
      }
      const operation = resource[input.operation];
      if (typeof operation !== "function") {
        throw new Error(`Unknown X operation: ${input.resource}.${input.operation}`);
      }
      return operation.call(resource, input.body ?? {});
    },
  });
}

function createX(input: z.output<typeof xAuth>): any {
  const token = input.token ?? process.env.X_BEARER_TOKEN;
  if (!token) {
    throw new Error("Missing token; pass --token or set X_BEARER_TOKEN");
  }
  return X.createClient({ token });
}
