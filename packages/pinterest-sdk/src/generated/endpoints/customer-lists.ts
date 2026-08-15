// @generated
// fingerprint: sha256:d4240bb4ceb79b65cc195631cba1ce6e2e0ad98431eac7e03471d6cbdecd5bcd
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for customer_lists — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { CustomerListsListResponse, CustomerListsCreateResponse, CustomerListsGetResponse, CustomerListsUpdateResponse } from "../types.ts";
import type { ListCustomerListsParams, CreateCustomerListParams, GetCustomerListsParams, UpdateCustomerListParams } from "../params.ts";

/** customer_lists — 4 endpoints */
export function createCustomerListsClient(api: PinterestApiClient) {
  return {
    /** Get customer lists
   * Requires pinterest_oauth2: ads:read. */
    async listCustomerLists(params: ListCustomerListsParams): Promise<CustomerListsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<CustomerListsListResponse>(`/ad_accounts/${adAccountId}/customer_lists`, query);
      return envelope;
    },

    /** Create customer lists
   * Requires pinterest_oauth2: ads:write. */
    async createCustomerList(params: CreateCustomerListParams): Promise<CustomerListsCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<CustomerListsCreateResponse>(`/ad_accounts/${adAccountId}/customer_lists`, rest);
      return envelope;
    },

    /** Get customer list
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getCustomerLists(params: GetCustomerListsParams): Promise<CustomerListsGetResponse> {
      const { adAccountId, customerListId, ...query } = params;
      const envelope = await api.get<CustomerListsGetResponse>(`/ad_accounts/${adAccountId}/customer_lists/${customerListId}`, query);
      return envelope;
    },

    /** Update customer list
   * Requires pinterest_oauth2: ads:write. */
    async updateCustomerList(params: UpdateCustomerListParams): Promise<CustomerListsUpdateResponse> {
      const { adAccountId, customerListId, ...rest } = params;
      const envelope = await api.patch<CustomerListsUpdateResponse>(`/ad_accounts/${adAccountId}/customer_lists/${customerListId}`, rest);
      return envelope;
    },
  };
}
