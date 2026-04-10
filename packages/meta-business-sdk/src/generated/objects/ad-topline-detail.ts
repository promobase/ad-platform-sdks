import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdToplineDetailFields {
  active_status: number;
  ad_account_id: string;
  flight_end_date: string;
  flight_start_date: string;
  id: string;
  io_number: number;
  line_number: number;
  price: number;
  quantity: number;
  sf_detail_line_id: string;
  subline_id: string;
  targets: string;
  time_created: string;
  time_updated: string;
}

export function adToplineDetailNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdToplineDetailFields,
    get: <F extends (keyof AdToplineDetailFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdToplineDetailFields, F[number]>>(`${id}`, opts),
  };
}

