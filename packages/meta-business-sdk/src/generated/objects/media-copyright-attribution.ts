import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProfileFields } from "./profile.ts";

export interface MediaCopyrightAttributionFields {
  attribution_ig_target_id: string;
  attribution_target_email_address: string;
  attribution_target_id: string;
  attribution_target_name: string;
  attribution_type: string;
  attribution_uri: string;
  copyright_count: number;
  creation_time: string;
  creator: ProfileFields;
  id: string;
  is_enabled: boolean;
  link_title: string;
  match_count: number;
  status: string;
  title: string;
}

export function mediaCopyrightAttributionNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as MediaCopyrightAttributionFields,
    get: <F extends (keyof MediaCopyrightAttributionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MediaCopyrightAttributionFields, F[number]>>(`${id}`, opts),
  };
}

