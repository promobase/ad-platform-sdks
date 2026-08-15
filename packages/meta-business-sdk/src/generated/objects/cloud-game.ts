// @generated
// fingerprint: sha256:39ea831f9d9a1d217cb14eb77c0c42312ea604eceaaa23e438d8902a82fd8011
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { ProfileFields } from "./profile.ts";

export interface CloudGameFields {
  id: string;
  name: string;
  owner: ProfileFields;
  playable_ad_file_size: number;
  playable_ad_orientation: string;
  playable_ad_package_name: string;
  playable_ad_reject_reason: string;
  playable_ad_status: string;
  playable_ad_upload_time: string;
}

export function cloudGameNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CloudGameFields,
    get: <F extends (keyof CloudGameFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CloudGameFields, F[number]>>(`${id}`, opts),
  };
}

