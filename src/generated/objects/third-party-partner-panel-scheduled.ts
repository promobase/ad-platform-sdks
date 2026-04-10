import type { ApiClient } from "../../runtime/client.ts";

export interface ThirdPartyPartnerPanelScheduledFields {
  adentities_ids: string[];
  cadence: string;
  country: string;
  created_time: string;
  description: string;
  end_time: string;
  id: string;
  modified_time: string;
  owner_instance_id: string;
  owner_panel_id: string;
  owner_panel_name: string;
  start_time: string;
  status: string;
  study_type: string;
}

export function thirdPartyPartnerPanelScheduledNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ThirdPartyPartnerPanelScheduledFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ThirdPartyPartnerPanelScheduledFields, F[number]>>(`${id}`, opts),
  };
}

