import type { ApiClient } from "@promobase/sdk-runtime";

export interface CTXPartnerAppWelcomeMessageFlowFields {
  compatible_platforms: string[];
  eligible_platforms: string[];
  id: string;
  is_ig_only_flow: boolean;
  is_used_in_ad: boolean;
  last_update_time: string;
  name: string;
  welcome_message_flow: string;
  welcome_message_sequence: string;
}

export function cTXPartnerAppWelcomeMessageFlowNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CTXPartnerAppWelcomeMessageFlowFields,
    get: <F extends (keyof CTXPartnerAppWelcomeMessageFlowFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CTXPartnerAppWelcomeMessageFlowFields, F[number]>>(`${id}`, opts),
  };
}

