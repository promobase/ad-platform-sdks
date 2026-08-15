// @generated
// fingerprint: sha256:aae8b9a0149d9a325f22503222279b23e90e4028724343abb0410789a3074e48
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { PageFields } from "./page.ts";

export interface PlaceTagFields {
  created_time: string;
  id: string;
  place: PageFields;
}

export function placeTagNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PlaceTagFields,
    get: <F extends (keyof PlaceTagFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PlaceTagFields, F[number]>>(`${id}`, opts),
  };
}

