import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdAccountFields } from "./ad-account.ts";
import type { UserFields } from "./user.ts";

export interface AdProposalFields {
  ad_proposal_type_name: string;
  adaccount: AdAccountFields;
  creation_time: string;
  creator: UserFields;
  delivery_interface: string;
  expiration_time: string;
  has_conflict: boolean;
  id: string;
  kpi_metric: string;
  message: string;
  name: string;
  proposal_dts_template: string;
  proposal_template_name: string;
  recommendation: string;
  review_time: string;
  reviewed_by: UserFields;
  send_time: string;
  status: string;
  use_testing: boolean;
}

export function adProposalNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdProposalFields,
    get: <F extends (keyof AdProposalFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdProposalFields, F[number]>>(`${id}`, opts),
  };
}

