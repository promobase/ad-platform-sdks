// @generated
// fingerprint: sha256:50cbe2884bcfa9929fabd829d80dc0fc278d3dfe15b05e2487f11508b70ed1f7
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface EventRegistrationSettingFields {
  id: string;
  questions: string;
  target_type: string;
  ticket_tier_ids: string[];
}

export function eventRegistrationSettingNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as EventRegistrationSettingFields,
    get: <F extends (keyof EventRegistrationSettingFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<EventRegistrationSettingFields, F[number]>>(`${id}`, opts),
  };
}

