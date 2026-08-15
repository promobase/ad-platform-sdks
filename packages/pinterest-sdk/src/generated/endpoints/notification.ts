// @generated
// fingerprint: sha256:c31dd27ac5f9a16ca16721e0d837b72d3ee81105f6458567986cf12348e866ff
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for notification — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { NotificationPostResponse } from "../types.ts";
import type { PostNotificationPostParams } from "../params.ts";

/** notification — 1 endpoints */
export function createNotificationClient(api: PinterestApiClient) {
  return {
    /** Receive notifications from external partners.
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async postNotificationPost(params: PostNotificationPostParams): Promise<NotificationPostResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<NotificationPostResponse>(`/notifications`, body);
      return envelope;
    },
  };
}
