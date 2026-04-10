import type { PageUpcomingChangeFields } from "./page-upcoming-change.ts";

export interface PageChangeProposalFields {
  acceptance_status: string;
  category: string;
  id: string;
  upcoming_change_info: PageUpcomingChangeFields;
}

