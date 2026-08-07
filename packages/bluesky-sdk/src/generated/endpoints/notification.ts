// Auto-generated client for app.bsky.notification — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyNotificationDefsPreferences, AppBskyActorDefsProfileView, AppBskyNotificationListNotificationsNotification, AppBskyNotificationDefsActivitySubscription, AppBskyNotificationDefsChatPreference, AppBskyNotificationDefsFilterablePreference, AppBskyNotificationDefsPreference, GetPreferences2Response, GetUnreadCountResponse, ListActivitySubscriptionsResponse, ListNotificationsResponse, PutActivitySubscriptionResponse, PutPreferencesV2Response } from "../types.ts";
import type { GetPreferences2Params, GetUnreadCountParams, ListActivitySubscriptionsParams, ListNotificationsParams, PutActivitySubscriptionParams, PutPreferences2Params, PutPreferencesV2Params, RegisterPushParams, UnregisterPushParams, UpdateSeenParams } from "../params.ts";

/** app.bsky.notification — 10 endpoints */
export function createNotificationClient(api: BlueskyApiClient) {
  return {
    /** Get notification-related preferences for an account. Requires auth. */
    async getPreferences2(params: GetPreferences2Params): Promise<GetPreferences2Response> {
      const envelope = await api.get<GetPreferences2Response>("/xrpc/app.bsky.notification.getPreferences", params);
      return envelope;
    },

    /** Count the number of unread notifications for the requesting account. Requires auth. */
    async getUnreadCount(params: GetUnreadCountParams): Promise<GetUnreadCountResponse> {
      const envelope = await api.get<GetUnreadCountResponse>("/xrpc/app.bsky.notification.getUnreadCount", params);
      return envelope;
    },

    /** Enumerate all accounts to which the requesting account is subscribed to receive notifications for. Requires auth. */
    async listActivitySubscriptions(params: ListActivitySubscriptionsParams): Promise<ListActivitySubscriptionsResponse> {
      const envelope = await api.get<ListActivitySubscriptionsResponse>("/xrpc/app.bsky.notification.listActivitySubscriptions", params);
      return envelope;
    },

    /** Enumerate notifications for the requesting account. Requires auth. */
    async listNotifications(params: ListNotificationsParams): Promise<ListNotificationsResponse> {
      const envelope = await api.get<ListNotificationsResponse>("/xrpc/app.bsky.notification.listNotifications", params);
      return envelope;
    },

    /** Puts an activity subscription entry. The key should be omitted for creation and provided for updates. Requires auth. */
    async putActivitySubscription(params: PutActivitySubscriptionParams): Promise<PutActivitySubscriptionResponse> {
      const envelope = await api.post<PutActivitySubscriptionResponse>("/xrpc/app.bsky.notification.putActivitySubscription", params, undefined);
      return envelope;
    },

    /** Set notification-related preferences for an account. Requires auth. */
    async putPreferences2(params: PutPreferences2Params): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.notification.putPreferences", params, undefined);
      return envelope;
    },

    /** Set notification-related preferences for an account. Requires auth. */
    async putPreferencesV2(params: PutPreferencesV2Params): Promise<PutPreferencesV2Response> {
      const envelope = await api.post<PutPreferencesV2Response>("/xrpc/app.bsky.notification.putPreferencesV2", params, undefined);
      return envelope;
    },

    /** Register to receive push notifications, via a specified service, for the requesting account. Requires auth. */
    async registerPush(params: RegisterPushParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.notification.registerPush", params, undefined);
      return envelope;
    },

    /** The inverse of registerPush - inform a specified service that push notifications should no longer be sent to the given token for the requesting account. Requires auth. */
    async unregisterPush(params: UnregisterPushParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.notification.unregisterPush", params, undefined);
      return envelope;
    },

    /** Notify server that the requesting account has seen notifications. Requires auth. */
    async updateSeen(params: UpdateSeenParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.notification.updateSeen", params, undefined);
      return envelope;
    },
  };
}
