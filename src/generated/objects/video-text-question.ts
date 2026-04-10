import type { ApiClient } from "../../runtime/client.ts";

export interface VideoTextQuestionFields {
  id: string;
  question_target_id: string;
  question_text: string;
  status: string;
}

export function videoTextQuestionNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof VideoTextQuestionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VideoTextQuestionFields, F[number]>>(`${id}`, opts),
  };
}

