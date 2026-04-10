import type { ApiClient } from "@promobase/sdk-runtime";

export interface EventTicketTierFields {
  currency: string;
  description: string;
  end_sales_time: string;
  end_show_time: string;
  fee_settings: string;
  id: string;
  maximum_quantity: number;
  metadata: string;
  minimum_quantity: number;
  name: string;
  price: number;
  priority: number;
  retailer_id: string;
  seating_map_image_url: string;
  start_sales_time: string;
  start_show_time: string;
  status: string;
  total_quantity: number;
}

export function eventTicketTierNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as EventTicketTierFields,
    get: <F extends (keyof EventTicketTierFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<EventTicketTierFields, F[number]>>(`${id}`, opts),
  };
}

