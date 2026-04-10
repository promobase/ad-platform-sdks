import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdAsyncRequestSetFields } from "./ad-async-request-set.ts";

export interface AdAsyncRequestFields {
  async_request_set: AdAsyncRequestSetFields;
  created_time: string;
  id: string;
  input: Record<string, unknown>;
  result: Record<string, unknown>;
  scope_object_id: string;
  status: string;
  type: string;
  updated_time: string;
}

export function adAsyncRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdAsyncRequestFields,
    get: <F extends (keyof AdAsyncRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdAsyncRequestFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

