import type { ApiClient } from "@promobase/sdk-runtime";

export interface BidScheduleFields {
  ad_object_id: string;
  bid_recurrence_type: string;
  bid_timezone: string;
  bid_value: number;
  id: string;
  status: string;
  time_end: string;
  time_start: string;
}

export function bidScheduleNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BidScheduleFields,
    get: <F extends (keyof BidScheduleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BidScheduleFields, F[number]>>(`${id}`, opts),
  };
}

