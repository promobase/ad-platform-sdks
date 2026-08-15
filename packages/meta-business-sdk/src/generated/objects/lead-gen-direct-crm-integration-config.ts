// @generated
// fingerprint: sha256:64dcfbc206017442953684acee924f44ced37eea73a36409eb6501cf669381eb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { LeadgenFormFields } from "./leadgen-form.ts";

export interface LeadGenDirectCRMIntegrationConfigFields {
  auth_id: string;
  creation_time: string;
  id: string;
  lead_filter_settings: Record<string, string>[];
  lead_gen_data: LeadgenFormFields;
  matched_fields: Record<string, string>[];
  matched_fields_labels: Record<string, string>[];
  resources: Record<string, string>[];
  third_party_app_id: string;
}

export function leadGenDirectCRMIntegrationConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as LeadGenDirectCRMIntegrationConfigFields,
    get: <F extends (keyof LeadGenDirectCRMIntegrationConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LeadGenDirectCRMIntegrationConfigFields, F[number]>>(`${id}`, opts),
  };
}

