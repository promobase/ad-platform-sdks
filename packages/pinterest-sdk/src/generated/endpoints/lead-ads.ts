// @generated
// fingerprint: sha256:d9c82aca837c760faa92e72aaa867358b9925444c9bf7e0c4ce63ae60d632ab1
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for lead_ads — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AdAccountsSubscriptionsGetListResponse, AdAccountsSubscriptionsPostResponse, AdAccountsSubscriptionsGetByIdResponse, AdAccountsSubscriptionsDelByIdResponse } from "../types.ts";
import type { ListAdAccountsSubscriptionsGetListParams, PostAdAccountsSubscriptionsPostParams, GetAdAccountsSubscriptionsGetByIdParams, DeleteAdAccountsSubscriptionsDelByIdParams } from "../params.ts";

/** lead_ads — 4 endpoints */
export function createLeadAdsClient(api: PinterestApiClient) {
  return {
    /** Get lead ads subscriptions
   * Requires pinterest_oauth2: ads:read. */
    async listAdAccountsSubscriptionsGetList(params: ListAdAccountsSubscriptionsGetListParams): Promise<AdAccountsSubscriptionsGetListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdAccountsSubscriptionsGetListResponse>(`/ad_accounts/${adAccountId}/leads/subscriptions`, query);
      return envelope;
    },

    /** Create lead ads subscription
   * Requires pinterest_oauth2: ads:write. */
    async postAdAccountsSubscriptionsPost(params: PostAdAccountsSubscriptionsPostParams): Promise<AdAccountsSubscriptionsPostResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<AdAccountsSubscriptionsPostResponse>(`/ad_accounts/${adAccountId}/leads/subscriptions`, rest);
      return envelope;
    },

    /** Get lead ads subscription by ID
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAdAccountsSubscriptionsGetById(params: GetAdAccountsSubscriptionsGetByIdParams): Promise<AdAccountsSubscriptionsGetByIdResponse> {
      const { adAccountId, subscriptionId, ...query } = params;
      const envelope = await api.get<AdAccountsSubscriptionsGetByIdResponse>(`/ad_accounts/${adAccountId}/leads/subscriptions/${subscriptionId}`, query);
      return envelope;
    },

    /** Delete lead ads subscription
   * Requires pinterest_oauth2: ads:write. */
    async deleteAdAccountsSubscriptionsDelById(params: DeleteAdAccountsSubscriptionsDelByIdParams): Promise<AdAccountsSubscriptionsDelByIdResponse> {
      const { adAccountId, subscriptionId } = params;
      const envelope = await api.delete<AdAccountsSubscriptionsDelByIdResponse>(`/ad_accounts/${adAccountId}/leads/subscriptions/${subscriptionId}`);
      return envelope;
    },
  };
}
