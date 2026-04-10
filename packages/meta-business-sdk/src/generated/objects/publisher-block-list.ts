import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AppPublisherFields } from "./app-publisher.ts";
import type { WebPublisherFields } from "./web-publisher.ts";

export interface PublisherBlockListFields {
  app_publishers: AppPublisherFields[];
  business_owner_id: string;
  id: string;
  is_auto_blocking_on: boolean;
  is_eligible_at_campaign_level: boolean;
  last_update_time: string;
  last_update_user: string;
  name: string;
  owner_ad_account_id: string;
  web_publishers: WebPublisherFields[];
}

export interface PublisherBlockListCreateAppendPublisherUrlsParams {
  publisher_urls: string[];
  [key: string]: unknown;
}

export interface PublisherBlockListListPagedWebPublishersParams {
  draft_id?: string;
  [key: string]: unknown;
}

export interface PublisherBlockListUpdateParams {
  spec?: Record<string, unknown>;
  [key: string]: unknown;
}

export function publisherBlockListNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PublisherBlockListFields,
    get: <F extends (keyof PublisherBlockListFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PublisherBlockListFields, F[number]>>(`${id}`, opts),
    update: (params: PublisherBlockListUpdateParams) =>
      client.post<PublisherBlockListFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
    createAppendPublisherUrl: (params: PublisherBlockListCreateAppendPublisherUrlsParams) =>
      client.post<Record<string, unknown>>(`${id}/append_publisher_urls`, params as Record<string, unknown>),
    pagedWebPublishers: <F extends (keyof WebPublisherFields)[]>(opts: { fields: F; params?: PublisherBlockListListPagedWebPublishersParams }) =>
      new Cursor<Pick<WebPublisherFields, F[number]>>(client, `${id}/paged_web_publishers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

