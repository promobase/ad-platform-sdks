// @generated
// fingerprint: sha256:65fae357ad65aeb59adce7a503d3181c94b0847422a61c368657b54b4cf927eb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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
  attribution_id_v2?: string;
  feedback_source?: string;
  nectar_module?: string;
  notify?: boolean;
  tracking?: string;
  [key: string]: unknown;
}

export function statusNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as StatusFields,
    get: <F extends (keyof StatusFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<StatusFields, F[number]>>(`${id}`, opts),
    createLike: (params: StatusCreateLikesParams) =>
      client.post<StatusFields>(`${id}/likes`, params as Record<string, unknown>),
  };
}

