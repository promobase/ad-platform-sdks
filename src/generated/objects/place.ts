import type { ApiClient } from "../../runtime/client.ts";
import type { LocationFields } from "./location.ts";

export interface PlaceFields {
  id: string;
  location: LocationFields;
  name: string;
  overall_rating: number;
}

export function placeNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PlaceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PlaceFields, F[number]>>(`${id}`, opts),
  };
}

