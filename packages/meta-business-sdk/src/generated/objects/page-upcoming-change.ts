import type { ApiClient } from "@promobase/sdk-runtime";
import type { PageFields } from "./page.ts";
import type { PageChangeProposalFields } from "./page-change-proposal.ts";

export interface PageUpcomingChangeFields {
  change_type: string;
  effective_time: string;
  id: string;
  page: PageFields;
  proposal: PageChangeProposalFields;
  timer_status: string;
}

export function pageUpcomingChangeNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PageUpcomingChangeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PageUpcomingChangeFields, F[number]>>(`${id}`, opts),
  };
}

