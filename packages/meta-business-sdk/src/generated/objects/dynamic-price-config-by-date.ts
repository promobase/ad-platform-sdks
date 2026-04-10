import type { ApiClient } from "@promobase/sdk-runtime";

export interface DynamicPriceConfigByDateFields {
  checkin_date: string;
  prices: string;
  prices_pretty: Record<string, unknown>[];
}

export function dynamicPriceConfigByDateNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof DynamicPriceConfigByDateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<DynamicPriceConfigByDateFields, F[number]>>(`${id}`, opts),
  };
}

