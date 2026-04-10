import type { ApiClient } from "@promobase/sdk-runtime";
import type { ThirdPartyPartnerPanelScheduledStatus, ThirdPartyPartnerPanelScheduledStudyType } from "../enums.ts";

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
  status: ThirdPartyPartnerPanelScheduledStatus;
  study_type: ThirdPartyPartnerPanelScheduledStudyType;
}

export function thirdPartyPartnerPanelScheduledNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ThirdPartyPartnerPanelScheduledFields,
    get: <F extends (keyof ThirdPartyPartnerPanelScheduledFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ThirdPartyPartnerPanelScheduledFields, F[number]>>(`${id}`, opts),
  };
}

