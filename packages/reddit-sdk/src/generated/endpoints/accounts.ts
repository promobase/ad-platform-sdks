// @generated
// fingerprint: sha256:f2e9b661fc662b4ef27ac50635bfc4e5fa9a9d4cbc6199b2bead7b9b85a296fb
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Accounts — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { Account, AccountUpdate, User } from "../types.ts";
import type { ListAccountsParams, GetAccountParams, UpdateAccountParams, GetMeParams } from "../params.ts";

/** Accounts — 4 endpoints */
export function createAccountsClient(api: RedditApiClient) {
  return {
    /** List ad accounts */
    async listAccounts(params: ListAccountsParams): Promise<Account[]> {
      const query = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts`, query);
      return envelope.data as Account[];
    },

    /** Get ad account */
    async getAccount(params: GetAccountParams): Promise<Account> {
      const { accountId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}`, query);
      return envelope.data as Account;
    },

    /** Update ad account */
    async updateAccount(params: UpdateAccountParams): Promise<Account> {
      const { accountId, ...rest } = params;
      const envelope = await api.post<RedditEnvelope>(`/accounts/${accountId}`, rest);
      return envelope.data as Account;
    },

    /** Get authenticated user */
    async getMe(params: GetMeParams): Promise<User> {
      const query = params;
      const envelope = await api.get<RedditEnvelope>(`/me`, query);
      return envelope.data as User;
    },
  };
}
