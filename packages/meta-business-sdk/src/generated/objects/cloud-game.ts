import type { ApiClient } from "@promobase/sdk-runtime";
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
    get: <F extends (keyof CloudGameFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CloudGameFields, F[number]>>(`${id}`, opts),
  };
}

