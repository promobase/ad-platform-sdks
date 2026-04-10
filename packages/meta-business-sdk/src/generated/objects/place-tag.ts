import type { ApiClient } from "@promobase/sdk-runtime";
import type { PageFields } from "./page.ts";

export interface PlaceTagFields {
  created_time: string;
  id: string;
  place: PageFields;
}

export function placeTagNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PlaceTagFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PlaceTagFields, F[number]>>(`${id}`, opts),
  };
}

