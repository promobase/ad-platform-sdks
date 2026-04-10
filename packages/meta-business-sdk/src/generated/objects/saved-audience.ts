import type { ApiClient } from "@promobase/sdk-runtime";
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
    get: <F extends (keyof SavedAudienceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SavedAudienceFields, F[number]>>(`${id}`, opts),
  };
}

