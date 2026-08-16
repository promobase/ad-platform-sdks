import { ValidationError } from "@chat-adapter/shared";
import type { Logger } from "chat";

import { TikTokCommentsAdapter } from "./tiktok-comments-adapter.ts";
import type { TikTokCommentsAdapterOptions } from "./tiktok-comments-adapter.ts";

export { TikTokCommentsAdapter } from "./tiktok-comments-adapter.ts";
export type {
  CommentThreadId as TikTokCommentThreadId,
  TikTokCommentsAdapterOptions,
} from "./tiktok-comments-adapter.ts";

function requiredEnv(name: string, adapter: string): string {
  const value = process.env[name];
  if (!value) {
    throw new ValidationError(`${name} is required. Pass it in config or set ${name}.`, adapter);
  }
  return value;
}

/**
 * Create a TikTok Business comments adapter.
 * Env contract: TIKTOK_APP_SECRET, TIKTOK_ACCESS_TOKEN, TIKTOK_BUSINESS_ID.
 */
export function createTikTokCommentsAdapter(
  config?: Partial<TikTokCommentsAdapterOptions> & { logger?: Logger },
): TikTokCommentsAdapter {
  return new TikTokCommentsAdapter({
    appSecret: config?.appSecret ?? requiredEnv("TIKTOK_APP_SECRET", "tiktok_comments"),
    accessToken: config?.accessToken ?? requiredEnv("TIKTOK_ACCESS_TOKEN", "tiktok_comments"),
    businessId: config?.businessId ?? requiredEnv("TIKTOK_BUSINESS_ID", "tiktok_comments"),
    maxSignatureAgeSeconds: config?.maxSignatureAgeSeconds,
    userName: config?.userName,
    logger: config?.logger,
    fetch: config?.fetch,
    signal: config?.signal,
  });
}
