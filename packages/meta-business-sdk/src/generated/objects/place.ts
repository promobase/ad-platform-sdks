import type { ApiClient } from "@promobase/sdk-runtime";
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

