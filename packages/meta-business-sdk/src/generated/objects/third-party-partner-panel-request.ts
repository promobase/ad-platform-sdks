import type { ApiClient } from "@promobase/sdk-runtime";

export interface ThirdPartyPartnerPanelRequestFields {
  adentities_ids: string[];
  country: string;
  created_time: string;
  description: string;
  id: string;
  modified_time: string;
  owner_instance_id: string;
  owner_panel_id: string;
  owner_panel_name: string;
  status: string;
  study_end_time: string;
  study_start_time: string;
  study_type: string;
}

export function thirdPartyPartnerPanelRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ThirdPartyPartnerPanelRequestFields,
    get: <F extends (keyof ThirdPartyPartnerPanelRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ThirdPartyPartnerPanelRequestFields, F[number]>>(`${id}`, opts),
  };
}

