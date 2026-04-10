import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { LeadFields } from "./lead.ts";
import type { LeadGenContextCardFields } from "./lead-gen-context-card.ts";
import type { LeadGenLegalContentFields } from "./lead-gen-legal-content.ts";
import type { LeadGenQuestionFields } from "./lead-gen-question.ts";
import type { LeadGenThankYouPageFields } from "./lead-gen-thank-you-page.ts";
import type { PageFields } from "./page.ts";
import type { UserFields } from "./user.ts";

export interface LeadgenFormFields {
  allow_organic_lead: boolean;
  block_display_for_non_targeted_viewer: boolean;
  context_card: LeadGenContextCardFields;
  created_time: string;
  creator: UserFields;
  expired_leads_count: number;
  follow_up_action_text: string;
  follow_up_action_url: string;
  id: string;
  is_optimized_for_quality: boolean;
  leads_count: number;
  legal_content: LeadGenLegalContentFields;
  locale: string;
  name: string;
  organic_leads_count: number;
  page: PageFields;
  page_id: string;
  privacy_policy_url: string;
  question_page_custom_headline: string;
  questions: LeadGenQuestionFields[];
  status: string;
  thank_you_page: LeadGenThankYouPageFields;
  tracking_parameters: Record<string, string>[];
}

export interface LeadgenFormCreateTestLeadsParams {
  custom_disclaimer_responses?: Record<string, unknown>[];
  field_data?: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface LeadgenFormUpdateParams {
  status?: string;
  [key: string]: unknown;
}

export function leadgenFormNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof LeadgenFormFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LeadgenFormFields, F[number]>>(`${id}`, opts),
    update: (params: LeadgenFormUpdateParams) =>
      client.post<LeadgenFormFields>(`${id}`, params as Record<string, unknown>),
    leads: <F extends (keyof LeadFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<LeadFields, F[number]>>(client, `${id}/leads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    testLeads: {
      list: <F extends (keyof LeadFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<LeadFields, F[number]>>(client, `${id}/test_leads`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: LeadgenFormCreateTestLeadsParams) =>
        client.post<LeadFields>(`${id}/test_leads`, params as Record<string, unknown>),
    },
  };
}

