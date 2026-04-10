import type { ApiClient } from "@promobase/sdk-runtime";

export interface CPASAdCreationTemplateFields {
  description: string;
  id: string;
  is_unused_template: boolean;
  name: string;
  optimization_goal: string;
  targeting_type: string;
  template_type: string;
}

export function cPASAdCreationTemplateNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CPASAdCreationTemplateFields,
    get: <F extends (keyof CPASAdCreationTemplateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASAdCreationTemplateFields, F[number]>>(`${id}`, opts),
  };
}

