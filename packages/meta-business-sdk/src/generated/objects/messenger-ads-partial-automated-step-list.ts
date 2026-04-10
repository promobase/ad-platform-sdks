import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { LeadgenFormFields } from "./leadgen-form.ts";
import type { PageFields } from "./page.ts";

export interface MessengerAdsPartialAutomatedStepListFields {
  fblead_form: LeadgenFormFields;
  first_step_id: string;
  id: string;
  page: PageFields;
  privacy_url: string;
  reminder_text: string;
  stop_question_message: string;
}

export function messengerAdsPartialAutomatedStepListNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof MessengerAdsPartialAutomatedStepListFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MessengerAdsPartialAutomatedStepListFields, F[number]>>(`${id}`, opts),
    steps: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/steps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

