// @generated
// fingerprint: sha256:f7d7c09101c47b1daa95c68209ea5537665972b668a3fe0a667fdacbcd623c17
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
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
    __path: id,
    __brand: undefined as unknown as MessengerAdsPartialAutomatedStepListFields,
    get: <F extends (keyof MessengerAdsPartialAutomatedStepListFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<MessengerAdsPartialAutomatedStepListFields, F[number]>>(`${id}`, opts),
    steps: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/steps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

