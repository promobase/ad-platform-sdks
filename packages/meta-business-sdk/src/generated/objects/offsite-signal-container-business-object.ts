// @generated
// fingerprint: sha256:ad6b6bd76037cb67044bf6d1f2968baf4f01a66c0c3a8283c956c743a583364f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as OffsiteSignalContainerBusinessObjectFields,
    get: <F extends (keyof OffsiteSignalContainerBusinessObjectFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OffsiteSignalContainerBusinessObjectFields, F[number]>>(`${id}`, opts),
    linkedApplication: <F extends (keyof AdsDatasetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsDatasetFields, F[number]>>(client, `${id}/linked_application`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    linkedPage: <F extends (keyof PageFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PageFields, F[number]>>(client, `${id}/linked_page`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

