// Auto-generated client for com.atproto.server — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ComAtprotoServerCreateAppPasswordAppPassword, ComAtprotoServerCreateInviteCodesAccountCodes, ComAtprotoServerDescribeServerLinks, ComAtprotoServerDescribeServerContact, ComAtprotoServerDefsInviteCode, ComAtprotoServerListAppPasswordsAppPassword, CheckAccountStatusResponse, CreateAccountResponse, CreateAppPasswordResponse, CreateInviteCodeResponse, CreateInviteCodesResponse, CreateSessionResponse, DescribeServerResponse, GetAccountInviteCodesResponse, GetServiceAuthResponse, GetSessionResponse, ListAppPasswordsResponse, RefreshSessionResponse, RequestEmailUpdateResponse, ReserveSigningKeyResponse } from "../types.ts";
import type { ActivateAccountParams, CheckAccountStatusParams, ConfirmEmailParams, CreateAccountParams, CreateAppPasswordParams, CreateInviteCodeParams, CreateInviteCodesParams, CreateSessionParams, DeactivateAccountParams, DeleteAccount2Params, DeleteSessionParams, DescribeServerParams, GetAccountInviteCodesParams, GetServiceAuthParams, GetSessionParams, ListAppPasswordsParams, RefreshSessionParams, RequestAccountDeleteParams, RequestEmailConfirmationParams, RequestEmailUpdateParams, RequestPasswordResetParams, ReserveSigningKeyParams, ResetPasswordParams, RevokeAppPasswordParams, UpdateEmailParams } from "../params.ts";

/** com.atproto.server — 25 endpoints */
export function createServerClient(api: BlueskyApiClient) {
  return {
    /** Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup. */
    async activateAccount(params: ActivateAccountParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.activateAccount", params, undefined);
      return envelope;
    },

    /** Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself. */
    async checkAccountStatus(params: CheckAccountStatusParams): Promise<CheckAccountStatusResponse> {
      const envelope = await api.get<CheckAccountStatusResponse>("/xrpc/com.atproto.server.checkAccountStatus", params);
      return envelope;
    },

    /** Confirm an email using a token from com.atproto.server.requestEmailConfirmation. */
    async confirmEmail(params: ConfirmEmailParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.confirmEmail", params, undefined);
      return envelope;
    },

    /** Create an account. Implemented by PDS. */
    async createAccount(params: CreateAccountParams): Promise<CreateAccountResponse> {
      const envelope = await api.post<CreateAccountResponse>("/xrpc/com.atproto.server.createAccount", params, undefined);
      return envelope;
    },

    /** Create an App Password. */
    async createAppPassword(params: CreateAppPasswordParams): Promise<CreateAppPasswordResponse> {
      const envelope = await api.post<CreateAppPasswordResponse>("/xrpc/com.atproto.server.createAppPassword", params, undefined);
      return envelope;
    },

    /** Create an invite code. */
    async createInviteCode(params: CreateInviteCodeParams): Promise<CreateInviteCodeResponse> {
      const envelope = await api.post<CreateInviteCodeResponse>("/xrpc/com.atproto.server.createInviteCode", params, undefined);
      return envelope;
    },

    /** Create invite codes. */
    async createInviteCodes(params: CreateInviteCodesParams): Promise<CreateInviteCodesResponse> {
      const envelope = await api.post<CreateInviteCodesResponse>("/xrpc/com.atproto.server.createInviteCodes", params, undefined);
      return envelope;
    },

    /** Create an authentication session. */
    async createSession(params: CreateSessionParams): Promise<CreateSessionResponse> {
      const envelope = await api.post<CreateSessionResponse>("/xrpc/com.atproto.server.createSession", params, undefined);
      return envelope;
    },

    /** Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host. */
    async deactivateAccount(params: DeactivateAccountParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.deactivateAccount", params, undefined);
      return envelope;
    },

    /** Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth. */
    async deleteAccount2(params: DeleteAccount2Params): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.deleteAccount", params, undefined);
      return envelope;
    },

    /** Delete the current session. Requires auth using the 'refreshJwt' (not the 'accessJwt'). */
    async deleteSession(params: DeleteSessionParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.deleteSession", params, undefined);
      return envelope;
    },

    /** Describes the server's account creation requirements and capabilities. Implemented by PDS. */
    async describeServer(params: DescribeServerParams): Promise<DescribeServerResponse> {
      const envelope = await api.get<DescribeServerResponse>("/xrpc/com.atproto.server.describeServer", params);
      return envelope;
    },

    /** Get all invite codes for the current account. Requires auth. */
    async getAccountInviteCodes(params: GetAccountInviteCodesParams): Promise<GetAccountInviteCodesResponse> {
      const envelope = await api.get<GetAccountInviteCodesResponse>("/xrpc/com.atproto.server.getAccountInviteCodes", params);
      return envelope;
    },

    /** Get a signed token on behalf of the requesting DID for the requested service. */
    async getServiceAuth(params: GetServiceAuthParams): Promise<GetServiceAuthResponse> {
      const envelope = await api.get<GetServiceAuthResponse>("/xrpc/com.atproto.server.getServiceAuth", params);
      return envelope;
    },

    /** Get information about the current auth session. Requires auth. */
    async getSession(params: GetSessionParams): Promise<GetSessionResponse> {
      const envelope = await api.get<GetSessionResponse>("/xrpc/com.atproto.server.getSession", params);
      return envelope;
    },

    /** List all App Passwords. */
    async listAppPasswords(params: ListAppPasswordsParams): Promise<ListAppPasswordsResponse> {
      const envelope = await api.get<ListAppPasswordsResponse>("/xrpc/com.atproto.server.listAppPasswords", params);
      return envelope;
    },

    /** Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt'). */
    async refreshSession(params: RefreshSessionParams): Promise<RefreshSessionResponse> {
      const envelope = await api.post<RefreshSessionResponse>("/xrpc/com.atproto.server.refreshSession", params, undefined);
      return envelope;
    },

    /** Initiate a user account deletion via email. */
    async requestAccountDelete(params: RequestAccountDeleteParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.requestAccountDelete", params, undefined);
      return envelope;
    },

    /** Request an email with a code to confirm ownership of email. */
    async requestEmailConfirmation(params: RequestEmailConfirmationParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.requestEmailConfirmation", params, undefined);
      return envelope;
    },

    /** Request a token in order to update email. */
    async requestEmailUpdate(params: RequestEmailUpdateParams): Promise<RequestEmailUpdateResponse> {
      const envelope = await api.post<RequestEmailUpdateResponse>("/xrpc/com.atproto.server.requestEmailUpdate", params, undefined);
      return envelope;
    },

    /** Initiate a user account password reset via email. */
    async requestPasswordReset(params: RequestPasswordResetParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.requestPasswordReset", params, undefined);
      return envelope;
    },

    /** Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented. */
    async reserveSigningKey(params: ReserveSigningKeyParams): Promise<ReserveSigningKeyResponse> {
      const envelope = await api.post<ReserveSigningKeyResponse>("/xrpc/com.atproto.server.reserveSigningKey", params, undefined);
      return envelope;
    },

    /** Reset a user account password using a token. */
    async resetPassword(params: ResetPasswordParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.resetPassword", params, undefined);
      return envelope;
    },

    /** Revoke an App Password by name. */
    async revokeAppPassword(params: RevokeAppPasswordParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.revokeAppPassword", params, undefined);
      return envelope;
    },

    /** Update an account's email. */
    async updateEmail(params: UpdateEmailParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.server.updateEmail", params, undefined);
      return envelope;
    },
  };
}
