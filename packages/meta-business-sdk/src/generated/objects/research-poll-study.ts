import type { ApiClient } from "@promobase/sdk-runtime";
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

