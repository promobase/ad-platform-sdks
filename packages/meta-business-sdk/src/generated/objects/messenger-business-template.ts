import type { ApiClient } from "@promobase/sdk-runtime";

export interface MessengerBusinessTemplateFields {
  category: string;
  components: Record<string, unknown>[];
  creation_time: number;
  id: string;
  language: string;
  language_count: number;
  last_updated_time: string;
  library_template_name: string;
  name: string;
  parameter_format: string;
  rejected_reason: string;
  rejection_reasons: Record<string, unknown>;
  specific_rejection_reasons: Record<string, unknown>;
  status: string;
}

export interface MessengerBusinessTemplateUpdateParams {
  components?: Record<string, unknown>[];
  parameter_format?: string;
  [key: string]: unknown;
}

export function messengerBusinessTemplateNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof MessengerBusinessTemplateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MessengerBusinessTemplateFields, F[number]>>(`${id}`, opts),
    update: (params: MessengerBusinessTemplateUpdateParams) =>
      client.post<MessengerBusinessTemplateFields>(`${id}`, params as Record<string, unknown>),
  };
}

