// @generated
// fingerprint: sha256:1eeaee73d4b6d834e6a55b3bb449e6a8f1e26f1ae507dfa1e6d72725dcea9d10
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { ImageCopyrightFields } from "./image-copyright.ts";

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
  matched_reference_owner_rh_owner: Record<string, unknown>;
  modification_history: Record<string, unknown>[];
  reference_copyright: ImageCopyrightFields;
  reference_owner_rh_owner: Record<string, unknown>;
  rejection_form_data_entries_with_translations: Record<string, unknown>[];
  resolution_reason: string;
  update_time: string;
}

export function imageReferenceMatchNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ImageReferenceMatchFields,
    get: <F extends (keyof ImageReferenceMatchFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ImageReferenceMatchFields, F[number]>>(`${id}`, opts),
  };
}

