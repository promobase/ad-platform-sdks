import type { ApiClient } from "@promobase/sdk-runtime";

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

