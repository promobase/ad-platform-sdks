// Auto-generated client for com.atproto.admin — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ComAtprotoAdminDefsAccountView, ComAtprotoServerDefsInviteCode, ComAtprotoAdminDefsRepoRef, ComAtprotoRepoStrongRef, ComAtprotoAdminDefsRepoBlobRef, ComAtprotoAdminDefsStatusAttr, GetAccountInfoResponse, GetAccountInfosResponse, GetInviteCodesResponse, GetSubjectStatusResponse, SearchAccountsResponse, SendEmailResponse, UpdateSubjectStatusResponse } from "../types.ts";
import type { DeleteAccountParams, DisableAccountInvitesParams, DisableInviteCodesParams, EnableAccountInvitesParams, GetAccountInfoParams, GetAccountInfosParams, GetInviteCodesParams, GetSubjectStatusParams, SearchAccountsParams, SendEmailParams, UpdateAccountEmailParams, UpdateAccountHandleParams, UpdateAccountPasswordParams, UpdateAccountSigningKeyParams, UpdateSubjectStatusParams } from "../params.ts";

/** com.atproto.admin — 15 endpoints */
export function createAdminClient(api: BlueskyApiClient) {
  return {
    /** Delete a user account as an administrator. */
    async deleteAccount(params: DeleteAccountParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.admin.deleteAccount", params, undefined);
      return envelope;
    },

    /** Disable an account from receiving new invite codes, but does not invalidate existing codes. */
    async disableAccountInvites(params: DisableAccountInvitesParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.admin.disableAccountInvites", params, undefined);
      return envelope;
    },

    /** Disable some set of codes and/or all codes associated with a set of users. */
    async disableInviteCodes(params: DisableInviteCodesParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.admin.disableInviteCodes", params, undefined);
      return envelope;
    },

    /** Re-enable an account's ability to receive invite codes. */
    async enableAccountInvites(params: EnableAccountInvitesParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.admin.enableAccountInvites", params, undefined);
      return envelope;
    },

    /** Get details about an account. */
    async getAccountInfo(params: GetAccountInfoParams): Promise<GetAccountInfoResponse> {
      const envelope = await api.get<GetAccountInfoResponse>("/xrpc/com.atproto.admin.getAccountInfo", params);
      return envelope;
    },

    /** Get details about some accounts. */
    async getAccountInfos(params: GetAccountInfosParams): Promise<GetAccountInfosResponse> {
      const envelope = await api.get<GetAccountInfosResponse>("/xrpc/com.atproto.admin.getAccountInfos", params);
      return envelope;
    },

    /** Get an admin view of invite codes. */
    async getInviteCodes(params: GetInviteCodesParams): Promise<GetInviteCodesResponse> {
      const envelope = await api.get<GetInviteCodesResponse>("/xrpc/com.atproto.admin.getInviteCodes", params);
      return envelope;
    },

    /** Get the service-specific admin status of a subject (account, record, or blob). */
    async getSubjectStatus(params: GetSubjectStatusParams): Promise<GetSubjectStatusResponse> {
      const envelope = await api.get<GetSubjectStatusResponse>("/xrpc/com.atproto.admin.getSubjectStatus", params);
      return envelope;
    },

    /** Get list of accounts that matches your search query. */
    async searchAccounts(params: SearchAccountsParams): Promise<SearchAccountsResponse> {
      const envelope = await api.get<SearchAccountsResponse>("/xrpc/com.atproto.admin.searchAccounts", params);
      return envelope;
    },

    /** Send email to a user's account email address. */
    async sendEmail(params: SendEmailParams): Promise<SendEmailResponse> {
      const envelope = await api.post<SendEmailResponse>("/xrpc/com.atproto.admin.sendEmail", params, undefined);
      return envelope;
    },

    /** Administrative action to update an account's email. */
    async updateAccountEmail(params: UpdateAccountEmailParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.admin.updateAccountEmail", params, undefined);
      return envelope;
    },

    /** Administrative action to update an account's handle. */
    async updateAccountHandle(params: UpdateAccountHandleParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.admin.updateAccountHandle", params, undefined);
      return envelope;
    },

    /** Update the password for a user account as an administrator. */
    async updateAccountPassword(params: UpdateAccountPasswordParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.admin.updateAccountPassword", params, undefined);
      return envelope;
    },

    /** Administrative action to update an account's signing key in their Did document. */
    async updateAccountSigningKey(params: UpdateAccountSigningKeyParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.admin.updateAccountSigningKey", params, undefined);
      return envelope;
    },

    /** Update the service-specific admin status of a subject (account, record, or blob). */
    async updateSubjectStatus(params: UpdateSubjectStatusParams): Promise<UpdateSubjectStatusResponse> {
      const envelope = await api.post<UpdateSubjectStatusResponse>("/xrpc/com.atproto.admin.updateSubjectStatus", params, undefined);
      return envelope;
    },
  };
}
