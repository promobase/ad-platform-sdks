// Auto-generated client for customer_list_uploads — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { CustomerListUploadsCreateResponse, CustomerListUploadsGetResponse, CustomerListUploadsRunResponse } from "../types.ts";
import type { CreateCustomerListUploadParams, GetCustomerListUploadsParams, PostCustomerListUploadsRunParams } from "../params.ts";

/** customer_list_uploads — 3 endpoints */
export function createCustomerListUploadsClient(api: PinterestApiClient) {
  return {
    /** Create customer list upload
   * Requires pinterest_oauth2: ads:write. */
    async createCustomerListUpload(params: CreateCustomerListUploadParams): Promise<CustomerListUploadsCreateResponse> {
      const { adAccountId, customerListId, ...rest } = params;
      const envelope = await api.post<CustomerListUploadsCreateResponse>(`/ad_accounts/${adAccountId}/customer_lists/${customerListId}/uploads`, rest);
      return envelope;
    },

    /** Get customer list upload
   * Requires pinterest_oauth2: ads:read. */
    async getCustomerListUploads(params: GetCustomerListUploadsParams): Promise<CustomerListUploadsGetResponse> {
      const { adAccountId, customerListId, customerListUploadId, ...query } = params;
      const envelope = await api.get<CustomerListUploadsGetResponse>(`/ad_accounts/${adAccountId}/customer_lists/${customerListId}/uploads/${customerListUploadId}`, query);
      return envelope;
    },

    /** Run customer list upload
   * Requires pinterest_oauth2: ads:write. */
    async postCustomerListUploadsRun(params: PostCustomerListUploadsRunParams): Promise<CustomerListUploadsRunResponse> {
      const { adAccountId, customerListId, customerListUploadId, ...rest } = params;
      const envelope = await api.post<CustomerListUploadsRunResponse>(`/ad_accounts/${adAccountId}/customer_lists/${customerListId}/uploads/${customerListUploadId}/run`, undefined);
      return envelope;
    },
  };
}
