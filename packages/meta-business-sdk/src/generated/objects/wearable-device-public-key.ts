// @generated
// fingerprint: sha256:2e06ceea2a5f79461b6f0b0d0b6aa498ccaa8899d362223b7a91663588d05923
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface WearableDevicePublicKeyFields {
  base64_encoded_public_key: string;
  creation_time_on_device: string;
  device_uuid: string;
  id: string;
  key_type: string;
  owner_id: string;
  product_use_case: string;
  version: string;
}

export function wearableDevicePublicKeyNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WearableDevicePublicKeyFields,
    get: <F extends (keyof WearableDevicePublicKeyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WearableDevicePublicKeyFields, F[number]>>(`${id}`, opts),
  };
}

