import type { CustomAudienceFields } from "./custom-audience.ts";

export interface AudiencePermissionFields {
  audience: CustomAudienceFields;
  share_account_id: string;
  share_account_name: string;
}

