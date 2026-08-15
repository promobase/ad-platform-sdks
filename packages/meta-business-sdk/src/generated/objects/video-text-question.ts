// @generated
// fingerprint: sha256:2b7af96bce2a3a8a461f58b874fd771330810c176d15737c187e0197e6d50531
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface VideoTextQuestionFields {
  id: string;
  question_target_id: string;
  question_text: string;
  status: string;
}

export function videoTextQuestionNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as VideoTextQuestionFields,
    get: <F extends (keyof VideoTextQuestionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VideoTextQuestionFields, F[number]>>(`${id}`, opts),
  };
}

