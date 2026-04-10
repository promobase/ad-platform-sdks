import type { ApiClient } from "../../runtime/client.ts";
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
    get: <F extends (keyof LeadGenDirectCRMIntegrationConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LeadGenDirectCRMIntegrationConfigFields, F[number]>>(`${id}`, opts),
  };
}

