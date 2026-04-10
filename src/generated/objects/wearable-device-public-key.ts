import type { ApiClient } from "../../runtime/client.ts";

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
    get: <F extends (keyof WearableDevicePublicKeyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WearableDevicePublicKeyFields, F[number]>>(`${id}`, opts),
  };
}

