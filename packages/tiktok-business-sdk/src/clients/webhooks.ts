import { tiktokAppRequest } from "./request.ts";
import type { WebhookConfig, WebhookEventType } from "./types.ts";

/**
 * Webhook management for TikTok API for Business.
 * Account webhooks deliver VIDEO (post publishing) and COMMENT update events;
 * Business Messaging uses the separate DIRECT_MESSAGE category.
 */
export function createWebhooks(config: WebhookConfig) {
  const { appId, appSecret } = config;

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokAppRequest<T>(config, {
      method: "POST",
      path,
      body,
    });
  }

  return {
    /** Get current webhook configuration for an event type. */
    async get(
      eventType: WebhookEventType,
    ): Promise<{ appId: string; eventType: string; callbackUrl?: string; itemList?: string[] }> {
      const d = await tiktokAppRequest<{
        app_id: string;
        event_type: string;
        callback_url?: string;
        item_list?: string[];
      }>(config, {
        method: "GET",
        path: "/business/webhook/list/",
        query: { app_id: appId, secret: appSecret, event_type: eventType },
      });
      return {
        appId: d.app_id,
        eventType: d.event_type,
        callbackUrl: d.callback_url,
        itemList: d.item_list,
      };
    },

    /** Register or update a webhook callback URL for an event type. */
    async update(
      eventType: WebhookEventType,
      callbackUrl: string,
      itemList?: string[],
    ): Promise<void> {
      await post("/business/webhook/update/", {
        app_id: appId,
        secret: appSecret,
        event_type: eventType,
        callback_url: callbackUrl,
        ...(itemList && itemList.length > 0 ? { item_list: itemList } : {}),
      });
    },

    /** Delete a webhook for an event type. */
    async delete(eventType: WebhookEventType): Promise<void> {
      await post("/business/webhook/delete/", {
        app_id: appId,
        secret: appSecret,
        event_type: eventType,
      });
    },

    /** Convenience: set up both official Accounts API webhook categories. */
    async setupAll(callbackUrl: string): Promise<void> {
      await this.update("VIDEO", callbackUrl);
      await this.update("COMMENT", callbackUrl);
    },

    /** Convenience: subscribe to the Business Messaging webhook category. */
    async setupBusinessMessaging(callbackUrl: string): Promise<void> {
      await this.update("DIRECT_MESSAGE", callbackUrl);
    },

    /** Convenience: tear down both official Accounts API webhook categories. */
    async teardownAll(): Promise<void> {
      await this.delete("VIDEO");
      await this.delete("COMMENT");
    },
  };
}
