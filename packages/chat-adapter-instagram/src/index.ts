import { ValidationError } from "@chat-adapter/shared";
import type { Logger } from "chat";

import { InstagramAdapter } from "./instagram-adapter.ts";
import type { InstagramAdapterOptions } from "./instagram-adapter.ts";
import { InstagramCommentsAdapter } from "./instagram-comments-adapter.ts";

export { InstagramAdapter } from "./instagram-adapter.ts";
export type {
  InstagramAdapterOptions,
  InstagramPostOptions,
  InstagramThreadId,
} from "./instagram-adapter.ts";
export { InstagramCommentsAdapter } from "./instagram-comments-adapter.ts";
export type { CommentThreadId as InstagramCommentThreadId } from "./instagram-comments-adapter.ts";
export {
  cardToInstagram,
  cardToInstagramText,
  decodeInstagramCallbackData,
  encodeInstagramCallbackData,
} from "./cards.ts";
export type {
  InstagramButton,
  InstagramCardResult,
  InstagramQuickReply,
  InstagramTemplatePayload,
} from "./cards.ts";

function requiredEnv(name: string, adapter: string): string {
  const value = process.env[name];
  if (!value) {
    throw new ValidationError(`${name} is required. Pass it in config or set ${name}.`, adapter);
  }
  return value;
}

/**
 * Create an Instagram adapter. Mirrors the official adapter's env contract:
 * INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_APP_SECRET, INSTAGRAM_VERIFY_TOKEN,
 * INSTAGRAM_ACCOUNT_ID, optional INSTAGRAM_API_VERSION.
 */
/**
 * Create an Instagram comments adapter. Same env contract as the Instagram
 * DM adapter; register it alongside `createInstagramAdapter()` and route the
 * same webhook callback to both handlers.
 */
export function createInstagramCommentsAdapter(
  config?: Partial<InstagramAdapterOptions> & { logger?: Logger },
): InstagramCommentsAdapter {
  return new InstagramCommentsAdapter({
    appSecret: config?.appSecret ?? requiredEnv("INSTAGRAM_APP_SECRET", "instagram_comments"),
    verifyToken: config?.verifyToken ?? requiredEnv("INSTAGRAM_VERIFY_TOKEN", "instagram_comments"),
    accessToken: config?.accessToken ?? requiredEnv("INSTAGRAM_ACCESS_TOKEN", "instagram_comments"),
    accountId: config?.accountId ?? requiredEnv("INSTAGRAM_ACCOUNT_ID", "instagram_comments"),
    apiVersion: config?.apiVersion ?? process.env.INSTAGRAM_API_VERSION,
    userName: config?.userName,
    logger: config?.logger,
    fetch: config?.fetch,
    signal: config?.signal,
  });
}

export function createInstagramAdapter(
  config?: Partial<InstagramAdapterOptions> & { logger?: Logger },
): InstagramAdapter {
  return new InstagramAdapter({
    appSecret: config?.appSecret ?? requiredEnv("INSTAGRAM_APP_SECRET", "instagram"),
    verifyToken: config?.verifyToken ?? requiredEnv("INSTAGRAM_VERIFY_TOKEN", "instagram"),
    accessToken: config?.accessToken ?? requiredEnv("INSTAGRAM_ACCESS_TOKEN", "instagram"),
    accountId: config?.accountId ?? requiredEnv("INSTAGRAM_ACCOUNT_ID", "instagram"),
    apiVersion: config?.apiVersion ?? process.env.INSTAGRAM_API_VERSION,
    userName: config?.userName,
    logger: config?.logger,
    fetch: config?.fetch,
    signal: config?.signal,
  });
}
