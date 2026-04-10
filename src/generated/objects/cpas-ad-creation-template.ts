import type { ApiClient } from "../../runtime/client.ts";

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
    get: <F extends (keyof CPASAdCreationTemplateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASAdCreationTemplateFields, F[number]>>(`${id}`, opts),
  };
}

