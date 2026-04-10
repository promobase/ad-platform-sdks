import type { ApiClient } from "@promobase/sdk-runtime";
import type { LeadGenDraftQuestionFields } from "./lead-gen-draft-question.ts";
import type { PageFields } from "./page.ts";

export interface LeadGenDataDraftFields {
  block_display_for_non_targeted_viewer: boolean;
  created_time: string;
  disqualified_end_component: Record<string, unknown>;
  follow_up_action_url: string;
  id: string;
  is_optimized_for_quality: boolean;
  legal_content: Record<string, unknown>;
  locale: string;
  name: string;
  page: PageFields;
  question_page_custom_headline: string;
  questions: LeadGenDraftQuestionFields[];
  should_enforce_work_email: boolean;
  status: string;
  thank_you_page: Record<string, unknown>;
  tracking_parameters: Record<string, string>[];
}

export function leadGenDataDraftNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as LeadGenDataDraftFields,
    get: <F extends (keyof LeadGenDataDraftFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LeadGenDataDraftFields, F[number]>>(`${id}`, opts),
  };
}

