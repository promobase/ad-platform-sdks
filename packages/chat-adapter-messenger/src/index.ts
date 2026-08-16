import { ValidationError } from "@chat-adapter/shared";
import type { Logger } from "chat";

import { MessengerAdapter } from "./messenger-adapter.ts";
import type { MessengerAdapterOptions } from "./messenger-adapter.ts";

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
export function createMessengerAdapter(
  config?: Partial<MessengerAdapterOptions> & { logger?: Logger },
): MessengerAdapter {
  return new MessengerAdapter({
    appSecret: config?.appSecret ?? requiredEnv("FACEBOOK_APP_SECRET", "messenger"),
    verifyToken: config?.verifyToken ?? requiredEnv("FACEBOOK_VERIFY_TOKEN", "messenger"),
    accessToken: config?.accessToken ?? requiredEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "messenger"),
    pageId: config?.pageId ?? requiredEnv("FACEBOOK_PAGE_ID", "messenger"),
    apiVersion: config?.apiVersion ?? process.env.FACEBOOK_API_VERSION,
    userName: config?.userName,
    logger: config?.logger,
    fetch: config?.fetch,
    signal: config?.signal,
  });
}
