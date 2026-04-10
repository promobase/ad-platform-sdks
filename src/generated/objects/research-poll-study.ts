import type { ApiClient } from "../../runtime/client.ts";
import type { AdAccountFields } from "./ad-account.ts";

export interface ResearchPollStudyFields {
  account: AdAccountFields;
  id: string;
  name: string;
}

export function researchPollStudyNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ResearchPollStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ResearchPollStudyFields, F[number]>>(`${id}`, opts),
  };
}

