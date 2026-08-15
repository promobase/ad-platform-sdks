// @generated
// fingerprint: sha256:2e3d208421044e2c81ca4c78a1729a88c9f2ef18f7bb36bdd5e68922828f6054
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

