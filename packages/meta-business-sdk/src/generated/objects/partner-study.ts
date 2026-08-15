// @generated
// fingerprint: sha256:2e82cd29d6d13d96cc7f9de882053c369c74309018cc62132f9e55de18960b65
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdStudyFields } from "./ad-study.ts";

export interface PartnerStudyFields {
  additional_info: string;
  brand: string;
  client_name: string;
  emails: string;
  id: string;
  input_ids: string[];
  is_export: boolean;
  lift_study: AdStudyFields;
  location: string;
  match_file_ds: string;
  name: string;
  partner_defined_id: string;
  partner_household_graph_dataset_id: string;
  status: string;
  study_end_date: string;
  study_start_date: string;
  study_type: string;
  submit_date: string;
}

export function partnerStudyNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PartnerStudyFields,
    get: <F extends (keyof PartnerStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PartnerStudyFields, F[number]>>(`${id}`, opts),
  };
}

