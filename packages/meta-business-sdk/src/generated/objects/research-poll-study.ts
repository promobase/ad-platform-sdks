// @generated
// fingerprint: sha256:0a04fe8c3400b448164d7b8b160400f25c5cf1dcd1420284232953559b98fdfd
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdAccountFields } from "./ad-account.ts";

export interface ResearchPollStudyFields {
  account: AdAccountFields;
  id: string;
  name: string;
}

export function researchPollStudyNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ResearchPollStudyFields,
    get: <F extends (keyof ResearchPollStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ResearchPollStudyFields, F[number]>>(`${id}`, opts),
  };
}

