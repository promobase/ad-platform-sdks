import { ValidationError } from "@chat-adapter/shared";
import type { Logger } from "chat";

import { FacebookCommentsAdapter } from "./facebook-comments-adapter.ts";
import { MessengerAdapter } from "./messenger-adapter.ts";
import type { MessengerAdapterOptions } from "./messenger-adapter.ts";

export { FacebookCommentsAdapter } from "./facebook-comments-adapter.ts";
export type { CommentThreadId as FacebookCommentThreadId } from "./facebook-comments-adapter.ts";
export { MessengerAdapter } from "./messenger-adapter.ts";
export type { MessengerAdapterOptions, MessengerThreadId } from "./messenger-adapter.ts";
export {
  cardToMessenger,
  cardToMessengerText,
  decodeMessengerCallbackData,
  encodeMessengerCallbackData,
} from "./cards.ts";
export type { MessengerButton, MessengerCardResult, MessengerTemplatePayload } from "./cards.ts";

function requiredEnv(name: string, adapter: string): string {
  const value = process.env[name];
  if (!value) {
    throw new ValidationError(`${name} is required. Pass it in config or set ${name}.`, adapter);
  }
  return value;
}

/**
 * Create a Messenger adapter. Mirrors the official adapter's env contract:
 * FACEBOOK_APP_SECRET, FACEBOOK_VERIFY_TOKEN, FACEBOOK_PAGE_ACCESS_TOKEN,
 * FACEBOOK_PAGE_ID, optional FACEBOOK_API_VERSION.
 */
/**
 * Create a Facebook Page comments adapter. Same env contract as the
 * Messenger adapter; register it alongside `createMessengerAdapter()` and
 * route the same webhook callback to both handlers.
 */
export function createFacebookCommentsAdapter(
  config?: Partial<MessengerAdapterOptions> & { logger?: Logger },
): FacebookCommentsAdapter {
  return new FacebookCommentsAdapter({
    appSecret: config?.appSecret ?? requiredEnv("FACEBOOK_APP_SECRET", "facebook_comments"),
    verifyToken: config?.verifyToken ?? requiredEnv("FACEBOOK_VERIFY_TOKEN", "facebook_comments"),
    accessToken:
      config?.accessToken ?? requiredEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "facebook_comments"),
    pageId: config?.pageId ?? requiredEnv("FACEBOOK_PAGE_ID", "facebook_comments"),
    apiVersion: config?.apiVersion ?? process.env.FACEBOOK_API_VERSION,
    adapterName: config?.adapterName,
    persistThreadHistory: config?.persistThreadHistory,
    userName: config?.userName,
    logger: config?.logger,
    fetch: config?.fetch,
    signal: config?.signal,
  });
}

export function createMessengerAdapter(
  config?: Partial<MessengerAdapterOptions> & { logger?: Logger },
): MessengerAdapter {
  return new MessengerAdapter({
    appSecret: config?.appSecret ?? requiredEnv("FACEBOOK_APP_SECRET", "messenger"),
    verifyToken: config?.verifyToken ?? requiredEnv("FACEBOOK_VERIFY_TOKEN", "messenger"),
    accessToken: config?.accessToken ?? requiredEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "messenger"),
    pageId: config?.pageId ?? requiredEnv("FACEBOOK_PAGE_ID", "messenger"),
    apiVersion: config?.apiVersion ?? process.env.FACEBOOK_API_VERSION,
    adapterName: config?.adapterName,
    persistThreadHistory: config?.persistThreadHistory,
    userName: config?.userName,
    logger: config?.logger,
    fetch: config?.fetch,
    signal: config?.signal,
  });
}
