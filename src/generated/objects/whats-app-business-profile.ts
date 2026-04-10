import type { ApiClient } from "../../runtime/client.ts";

export interface WhatsAppBusinessProfileFields {
  id: string;
  name_verification: Record<string, unknown>;
  whatsapp_business_api_data: Record<string, unknown>;
}

export function whatsAppBusinessProfileNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof WhatsAppBusinessProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WhatsAppBusinessProfileFields, F[number]>>(`${id}`, opts),
    update: (params?: Record<string, unknown>) =>
      client.post<WhatsAppBusinessProfileFields>(`${id}`, params ?? {}),
  };
}

