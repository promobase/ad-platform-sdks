import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdAccountAccountControlsPostFields } from "./ad-account-account-controls-post.ts";

export interface AdAccountAccountControlsFields {
}

export function adAccountAccountControlsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdAccountAccountControlsFields,
    createAccountControl: (params: Record<string, unknown>) =>
      client.post<AdAccountAccountControlsPostFields>(`${id}/account_controls`, params as Record<string, unknown>),
  };
}

