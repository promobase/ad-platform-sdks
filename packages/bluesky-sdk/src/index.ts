// --- Namespace (recommended entry point) ---
export { Bluesky } from "./namespace.ts";
export type { BlueskyApiClientOptions } from "./namespace.ts";

// --- Core infrastructure ---
export { BlueskyApiClient } from "./api-client.ts";
export { BlueskyApiError } from "./errors.ts";

// --- Publishing convenience ---
export { createPostRecord } from "./posts.ts";
export type { CreatePostOptions, CreatePostResult } from "./posts.ts";

// --- Generated AT Protocol surface ---
export * from "./generated/index.ts";
export * from "./generated/types.ts";
export type * from "./generated/params.ts";
