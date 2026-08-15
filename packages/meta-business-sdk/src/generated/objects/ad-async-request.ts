// @generated
// fingerprint: sha256:a78a34c7779e83aa663c1d8dee822f107619f4cf540adbb85b46a716b5cd5c6f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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

