import type { ApiClient } from "@promobase/sdk-runtime";
import type { ThirdPartyPartnerLiftRequestStatus } from "../enums.ts";

export interface ThirdPartyPartnerLiftRequestFields {
  ad_entities: string[];
  country: string;
  created_time: string;
  description: string;
  holdout_size: number;
  id: string;
  legacy_ads_data_partner_id: string;
  legacy_ads_data_partner_name: string;
  modified_time: string;
  owner_instance_id: string;
  partner_household_graph_dataset_id: string;
  region: string;
  status: ThirdPartyPartnerLiftRequestStatus;
  study_cells: string[];
  study_end_time: string;
  study_start_time: string;
}

export function thirdPartyPartnerLiftRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ThirdPartyPartnerLiftRequestFields,
    get: <F extends (keyof ThirdPartyPartnerLiftRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ThirdPartyPartnerLiftRequestFields, F[number]>>(`${id}`, opts),
  };
}

