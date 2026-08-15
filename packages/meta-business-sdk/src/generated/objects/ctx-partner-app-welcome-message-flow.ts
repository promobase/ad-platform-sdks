// @generated
// fingerprint: sha256:fe25bf7c93fc881d7bfc8fdd6c6c25ba9355d8f45887686a2257602f72c4fa1e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

