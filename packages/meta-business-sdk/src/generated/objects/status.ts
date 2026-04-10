import type { ApiClient } from "@promobase/sdk-runtime";
import type { EventFields } from "./event.ts";
import type { PlaceFields } from "./place.ts";

export interface StatusFields {
  event: EventFields;
  from: Record<string, unknown>;
  id: string;
  message: string;
  place: PlaceFields;
  updated_time: string;
}

export interface StatusCreateLikesParams {
  feedback_source?: string;
  nectar_module?: string;
  notify?: boolean;
  tracking?: string;
  [key: string]: unknown;
}

export function statusNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof StatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<StatusFields, F[number]>>(`${id}`, opts),
    createLike: (params: StatusCreateLikesParams) =>
      client.post<StatusFields>(`${id}/likes`, params as Record<string, unknown>),
  };
}

