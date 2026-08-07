// Auto-generated client for customer_segment — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { CustomerSegmentListResponse, CustomerSegmentCreateResponse } from "../types.ts";
import type { ListCustomerSegmentParams, CreateCustomerSegmentParams, UpdateCustomerSegmentParams } from "../params.ts";

/** customer_segment — 3 endpoints */
export function createCustomerSegmentClient(api: PinterestApiClient) {
  return {
    /** List customer segments
   * Requires pinterest_oauth2: ads:read. */
    async listCustomerSegment(params: ListCustomerSegmentParams): Promise<CustomerSegmentListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<CustomerSegmentListResponse>(`/ad_accounts/${adAccountId}/customer_segments`, query);
      return envelope;
    },

    /** Create customer segments
   * Requires pinterest_oauth2: ads:write. */
    async createCustomerSegment(params: CreateCustomerSegmentParams): Promise<CustomerSegmentCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<CustomerSegmentCreateResponse>(`/ad_accounts/${adAccountId}/customer_segments`, rest);
      return envelope;
    },

    /** Update customer segments
   * Requires pinterest_oauth2: ads:write. */
    async updateCustomerSegment(params: UpdateCustomerSegmentParams): Promise<unknown> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.patch<unknown>(`/ad_accounts/${adAccountId}/customer_segments`, rest);
      return envelope;
    },
  };
}
