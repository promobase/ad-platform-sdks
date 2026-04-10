import type { ApiClient } from "@promobase/sdk-runtime";
import type { ImageCopyrightFields } from "./image-copyright.ts";
import type { ProfileFields } from "./profile.ts";

export interface ImageReferenceMatchFields {
  conflict_status: string;
  conflicting_countries: string[];
  country_resolution_history: Record<string, Record<string, unknown>[]>[];
  creation_time: string;
  current_conflict_resolved_countries: Record<string, Record<string, unknown>>[];
  displayed_match_state: string;
  dispute_form_data_entries_with_translations: Record<string, unknown>[];
  expiration_time: string;
  id: string;
  match_state: string;
  matched_reference_copyright: ImageCopyrightFields;
  matched_reference_owner: ProfileFields;
  modification_history: Record<string, unknown>[];
  reference_copyright: ImageCopyrightFields;
  reference_owner: ProfileFields;
  rejection_form_data_entries_with_translations: Record<string, unknown>[];
  resolution_reason: string;
  update_time: string;
}

export function imageReferenceMatchNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ImageReferenceMatchFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ImageReferenceMatchFields, F[number]>>(`${id}`, opts),
  };
}

