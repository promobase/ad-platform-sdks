import type { ApiClient } from "@promobase/sdk-runtime";

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

