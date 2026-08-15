// @generated
// fingerprint: sha256:334e38e9ed8dd48ac2e5bcf81c4470ead16e0ca881df43027b0f533a9d4c482b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdAccountFields } from "./ad-account.ts";

export interface AdsCreationSavedStateFields {
  ad_account: AdAccountFields;
  id: string;
  serialized_store_data: string;
  time_updated: string;
  user: Record<string, unknown>;
}

export function adsCreationSavedStateNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsCreationSavedStateFields,
    get: <F extends (keyof AdsCreationSavedStateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsCreationSavedStateFields, F[number]>>(`${id}`, opts),
  };
}

