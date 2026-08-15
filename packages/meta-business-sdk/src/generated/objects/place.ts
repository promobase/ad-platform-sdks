// @generated
// fingerprint: sha256:7b9ea433ee4d3f2575e8e56ea991ba1077c8470eba35d97010e0077ef8bb1993
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { LocationFields } from "./location.ts";

export interface PlaceFields {
  id: string;
  location: LocationFields;
  name: string;
  overall_rating: number;
}

export function placeNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PlaceFields,
    get: <F extends (keyof PlaceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PlaceFields, F[number]>>(`${id}`, opts),
  };
}

