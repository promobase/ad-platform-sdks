// @generated
// fingerprint: sha256:adb976c3a09d8b33ce3750e7e16168b0bb1cfc5956ebc12f60be99c6348ee812
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { UserFields } from "./user.ts";

export interface VideoCopyrightMatchFields {
  created_date: string;
  id: string;
  last_modified_user: UserFields;
  match_data: Record<string, unknown>[];
  match_status: string;
  notes: string;
  permalink: string;
  policy_eval_modify_reasons: Record<string, unknown>[];
  ugc_content_format: string;
}

export function videoCopyrightMatchNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as VideoCopyrightMatchFields,
    get: <F extends (keyof VideoCopyrightMatchFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<VideoCopyrightMatchFields, F[number]>>(`${id}`, opts),
  };
}

