// @generated
// fingerprint: sha256:00f6bfc3765b6f22fd027c19002e7bcff57c73fe646c353b6db453667ac15bf2
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdAccountFields } from "./ad-account.ts";
import type { AudiencePermissionForActionsFields } from "./audience-permission-for-actions.ts";
import type { BusinessFields } from "./business.ts";
import type { CustomAudienceStatusFields } from "./custom-audience-status.ts";
import type { StatusFields } from "./status.ts";
import type { TargetingFields } from "./targeting.ts";

export interface SavedAudienceFields {
  account: AdAccountFields;
  approximate_count_lower_bound: number;
  approximate_count_upper_bound: number;
  delete_time: number;
  description: string;
  id: string;
  name: string;
  operation_status: CustomAudienceStatusFields;
  owner_business: BusinessFields;
  page_deletion_marked_delete_time: number;
  permission_for_actions: AudiencePermissionForActionsFields;
  run_status: string;
  sentence_lines: unknown[];
  targeting: TargetingFields;
  time_created: string;
  time_updated: string;
}

export function savedAudienceNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as SavedAudienceFields,
    get: <F extends (keyof SavedAudienceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SavedAudienceFields, F[number]>>(`${id}`, opts),
  };
}

