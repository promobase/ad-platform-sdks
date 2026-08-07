// Auto-generated client for order_lines — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { OrderLinesListResponse, OrderLinesGetResponse } from "../types.ts";
import type { ListOrderLinesParams, GetOrderLinesParams } from "../params.ts";

/** order_lines — 2 endpoints */
export function createOrderLinesClient(api: PinterestApiClient) {
  return {
    /** Get order lines.
   * Requires pinterest_oauth2: ads:read. */
    async listOrderLines(params: ListOrderLinesParams): Promise<OrderLinesListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<OrderLinesListResponse>(`/ad_accounts/${adAccountId}/order_lines`, query);
      return envelope;
    },

    /** Get order line
   * Requires pinterest_oauth2: ads:read. */
    async getOrderLines(params: GetOrderLinesParams): Promise<OrderLinesGetResponse> {
      const { orderLineId, adAccountId, ...query } = params;
      const envelope = await api.get<OrderLinesGetResponse>(`/ad_accounts/${adAccountId}/order_lines/${orderLineId}`, query);
      return envelope;
    },
  };
}
