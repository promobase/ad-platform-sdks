import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdAsyncRequestSetFields } from "./ad-async-request-set.ts";

export interface AdDraftFields {
  account_id: string;
  api_version: string;
  async_request_set: AdAsyncRequestSetFields;
  author_id: string;
  created_by: string;
  draft_version: string;
  id: string;
  is_active: boolean;
  name: string;
  ownership_type: string;
  publish_status: Record<string, unknown>;
  state: string;
  summary: string;
  time_created: string;
  time_updated: string;
}

export function adDraftNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdDraftFields,
    get: <F extends (keyof AdDraftFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdDraftFields, F[number]>>(`${id}`, opts),
  };
}

