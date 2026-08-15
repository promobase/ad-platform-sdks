// @generated
// fingerprint: sha256:4c35a8761b69131a1829fdec2a2b06dda440198c346aed0095e6b06d353297ab
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface LiveVideoErrorFields {
  creation_time: string;
  error_code: number;
  error_message: string;
  error_type: string;
}

export function liveVideoErrorNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as LiveVideoErrorFields,
    get: <F extends (keyof LiveVideoErrorFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LiveVideoErrorFields, F[number]>>(`${id}`, opts),
  };
}

