// @generated
// fingerprint: sha256:ce01e42c09b5721f511e96a6725c679cb1a06e8634e5fa4c6907cd6827b52fc3
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface WifiInformationFields {
  id: string;
  name: string;
  network_access_type: string;
}

export function wifiInformationNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WifiInformationFields,
    get: <F extends (keyof WifiInformationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WifiInformationFields, F[number]>>(`${id}`, opts),
  };
}

