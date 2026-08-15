// @generated
// fingerprint: sha256:daf1d72859b1cc9b42bb55dfa7a19ce90f6da49d6c793ba668cbe2cb2fd51e8f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface HoursFields {
  id: string;
  permanent_status: string;
}

export function hoursNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as HoursFields,
    get: <F extends (keyof HoursFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<HoursFields, F[number]>>(`${id}`, opts),
  };
}

