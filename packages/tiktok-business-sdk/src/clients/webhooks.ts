import type { TikTokResponse, WebhookConfig, WebhookEventType } from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

/**
 * Webhook management for TikTok Business API.
 * Webhooks deliver events for VIDEO (publish lifecycle) and COMMENT activity.
 */
export function createWebhooks(config: WebhookConfig) {
  const { appId, appSecret } = config;

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(
        `TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`,
      );
    }
    return responseBody.data;
  }

  return {
    /** Get current webhook configuration for an event type. */
    async get(
      eventType: WebhookEventType,
    ): Promise<{ appId: string; eventType: string; callbackUrl?: string; itemList?: string[] }> {
      const params = new URLSearchParams({
        app_id: appId,
        secret: appSecret,
        event_type: eventType,
      });
      const response = await fetch(`${TT_API_BASE}/business/webhook/list/?${params.toString()}`);
      const responseBody = (await response.json()) as TikTokResponse<{
        app_id: string;
        event_type: string;
        callback_url?: string;
        item_list?: string[];
      }>;
      if (!response.ok || responseBody.code !== 0) {
        throw new Error(
          `TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`,
        );
      }
      const d = responseBody.data;
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

    /** Convenience: set up both VIDEO and COMMENT webhooks. */
    async setupAll(callbackUrl: string): Promise<void> {
      await this.update("VIDEO", callbackUrl);
      await this.update("COMMENT", callbackUrl);
    },

    /** Convenience: tear down both VIDEO and COMMENT webhooks. */
    async teardownAll(): Promise<void> {
      await this.delete("VIDEO");
      await this.delete("COMMENT");
    },
  };
}
