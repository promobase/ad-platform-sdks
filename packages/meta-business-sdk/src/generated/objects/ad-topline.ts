import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdToplineFields {
  account_id: string;
  client_approval_date: string;
  created_by: string;
  created_date: string;
  description: string;
  flight_end_date: string;
  flight_start_date: string;
  func_cap_amount: string;
  func_cap_amount_with_offset: string;
  func_line_amount: string;
  func_line_amount_with_offset: string;
  func_price: string;
  func_price_with_offset: string;
  gender: string;
  id: string;
  impressions: number;
  io_number: number;
  is_bonus_line: number;
  keywords: string;
  last_updated_by: string;
  last_updated_date: string;
  line_number: number;
  line_position: number;
  line_type: string;
  location: string;
  max_age: string;
  max_budget: string;
  min_age: string;
  price_per_trp: string;
  product_type: string;
  rev_assurance_approval_date: string;
  targets: string;
  trp_updated_time: number;
  trp_value: string;
  uom: string;
}

export function adToplineNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdToplineFields,
    get: <F extends (keyof AdToplineFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdToplineFields, F[number]>>(`${id}`, opts),
  };
}

