// @generated
// fingerprint: sha256:910cee05b3e305a85b9fdee23981b647c59c222cef9561c3347ed3c95ef92d7a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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

