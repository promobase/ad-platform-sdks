// Auto-generated client for app.bsky.contact — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyActorDefsProfileView, AppBskyContactDefsSyncStatus, AppBskyContactDefsMatchAndContactIndex, DismissMatchResponse, GetMatchesResponse, GetSyncStatusResponse, ImportContactsResponse, RemoveDataResponse, SendNotificationResponse, StartPhoneVerificationResponse, VerifyPhoneResponse } from "../types.ts";
import type { DismissMatchParams, GetMatchesParams, GetSyncStatusParams, ImportContactsParams, RemoveDataParams, SendNotificationParams, StartPhoneVerificationParams, VerifyPhoneParams } from "../params.ts";

/** app.bsky.contact — 8 endpoints */
export function createContactClient(api: BlueskyApiClient) {
  return {
    /** Removes a match that was found via contact import. It shouldn't appear again if the same contact is re-imported. Requires authentication. */
    async dismissMatch(params: DismissMatchParams): Promise<DismissMatchResponse> {
      const envelope = await api.post<DismissMatchResponse>("/xrpc/app.bsky.contact.dismissMatch", params, undefined);
      return envelope;
    },

    /** Returns the matched contacts (contacts that were mutually imported). Excludes dismissed matches. Requires authentication. */
    async getMatches(params: GetMatchesParams): Promise<GetMatchesResponse> {
      const envelope = await api.get<GetMatchesResponse>("/xrpc/app.bsky.contact.getMatches", params);
      return envelope;
    },

    /** Gets the user's current contact import status. Requires authentication. */
    async getSyncStatus(params: GetSyncStatusParams): Promise<GetSyncStatusResponse> {
      const envelope = await api.get<GetSyncStatusResponse>("/xrpc/app.bsky.contact.getSyncStatus", params);
      return envelope;
    },

    /** Import contacts for securely matching with other users. This follows the protocol explained in https://docs.bsky.app/blog/contact-import-rfc. Requires authentication. */
    async importContacts(params: ImportContactsParams): Promise<ImportContactsResponse> {
      const envelope = await api.post<ImportContactsResponse>("/xrpc/app.bsky.contact.importContacts", params, undefined);
      return envelope;
    },

    /** Removes all stored hashes used for contact matching, existing matches, and sync status. Requires authentication. */
    async removeData(params: RemoveDataParams): Promise<RemoveDataResponse> {
      const envelope = await api.post<RemoveDataResponse>("/xrpc/app.bsky.contact.removeData", params, undefined);
      return envelope;
    },

    /** System endpoint to send notifications related to contact imports. Requires role authentication. */
    async sendNotification(params: SendNotificationParams): Promise<SendNotificationResponse> {
      const envelope = await api.post<SendNotificationResponse>("/xrpc/app.bsky.contact.sendNotification", params, undefined);
      return envelope;
    },

    /** Starts a phone verification flow. The phone passed will receive a code via SMS that should be passed to 'app.bsky.contact.verifyPhone'. Requires authentication. */
    async startPhoneVerification(params: StartPhoneVerificationParams): Promise<StartPhoneVerificationResponse> {
      const envelope = await api.post<StartPhoneVerificationResponse>("/xrpc/app.bsky.contact.startPhoneVerification", params, undefined);
      return envelope;
    },

    /** Verifies control over a phone number with a code received via SMS and starts a contact import session. Requires authentication. */
    async verifyPhone(params: VerifyPhoneParams): Promise<VerifyPhoneResponse> {
      const envelope = await api.post<VerifyPhoneResponse>("/xrpc/app.bsky.contact.verifyPhone", params, undefined);
      return envelope;
    },
  };
}
