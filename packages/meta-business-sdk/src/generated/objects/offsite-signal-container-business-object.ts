import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdsDatasetFields } from "./ads-dataset.ts";
import type { BusinessFields } from "./business.ts";
import type { PageFields } from "./page.ts";

export interface OffsiteSignalContainerBusinessObjectFields {
  business: BusinessFields;
  id: string;
  is_eligible_for_sharing_to_ad_account: boolean;
  is_eligible_for_sharing_to_business: boolean;
  is_unavailable: boolean;
  name: string;
  primary_container_id: string;
}

export function offsiteSignalContainerBusinessObjectNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof OffsiteSignalContainerBusinessObjectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OffsiteSignalContainerBusinessObjectFields, F[number]>>(`${id}`, opts),
    linkedApplication: <F extends (keyof AdsDatasetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsDatasetFields, F[number]>>(client, `${id}/linked_application`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    linkedPage: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/linked_page`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

