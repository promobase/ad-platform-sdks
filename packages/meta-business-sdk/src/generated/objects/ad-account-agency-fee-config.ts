import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdAccountAgencyFeeConfigStatus } from "../enums.ts";

export interface AdAccountAgencyFeeConfigFields {
  can_add_agency_fee_to_invoice: boolean;
  default_agency_fee_pct: number;
  id: string;
  is_agency_fee_disabled: boolean;
  status: AdAccountAgencyFeeConfigStatus;
}

export function adAccountAgencyFeeConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdAccountAgencyFeeConfigFields,
    get: <F extends (keyof AdAccountAgencyFeeConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdAccountAgencyFeeConfigFields, F[number]>>(`${id}`, opts),
  };
}

