import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProductFeedScheduleInterval } from "../enums.ts";

export interface ProductFeedScheduleFields {
  day_of_month: number;
  day_of_week: string;
  hour: number;
  id: string;
  interval: ProductFeedScheduleInterval;
  interval_count: number;
  minute: number;
  timezone: string;
  url: string;
  username: string;
}

export function productFeedScheduleNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductFeedScheduleFields,
    get: <F extends (keyof ProductFeedScheduleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductFeedScheduleFields, F[number]>>(`${id}`, opts),
  };
}

